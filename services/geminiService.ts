import { NutritionAnalysis } from "../types";

// --- Системные инструкции (оставляем их здесь, чтобы отправлять на сервер) ---

const CHAT_SYSTEM_INSTRUCTION = `
Ты - виртуальный консультант по системе мониторинга глюкозы Freestyle Libre 3.
Твоя задача - вежливо и профессионально отвечать на вопросы потенциальных покупателей.
Ключевые преимущества, которые ты должен подчеркивать:
1. Это самый маленький и тонкий сенсор в мире (размером с 2 рублевые монеты).
2. Передает показания каждую минуту автоматически на смартфон (нет необходимости сканировать).
3. Высокая точность (MARD 7.9%).
4. Сигналы тревоги при низком и высоком сахаре.
5. Работает 14 дней.

Отвечай кратко, ёмко и дружелюбно. Используй эмодзи, где это уместно.
Если спрашивают цену, говори, что актуальная цена указана в блоке заказа (примерно 7000 руб за сенсор).
`;

const NUTRITION_SYSTEM_INSTRUCTION = `
Ты - эксперт-диетолог для людей с диабетом. Твоя задача - проанализировать описание еды пользователя.
1. Оцени примерное количество углеводов в граммах.
2. Рассчитай Хлебные Единицы (ХЕ), считая 1 ХЕ = 10г углеводов.
3. Дай краткий анализ состава.
4. Дай совет по компенсации (учитывая ГИ, жиры/белки).

Верни ответ ТОЛЬКО в формате JSON:
{
  "carbsGrams": number,
  "breadUnits": number (округли до 0.5),
  "summary": "строка с кратким описанием блюда",
  "advice": "строка с советом (например: 'Высокий ГИ, нужна пауза перед едой' или 'Много жиров, возможен хвост через 2-3 часа')"
}
`;

// --- Функция для отправки запроса на ваш PHP прокси ---
async function callProxy(message: string, systemInstruction: string, isJsonMode: boolean = false) {
  try {
    // Обращаемся к файлу gemini-proxy.php на вашем хостинге
    const response = await fetch('/gemini-proxy.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        prompt: message,
        system_instruction: systemInstruction,
        is_json: isJsonMode 
      }),
    });

    if (!response.ok) {
      throw new Error(`Server Error: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    // Google API возвращает ответ глубоко внутри JSON
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!text) {
        throw new Error("Empty response from AI");
    }

    return text;

  } catch (error) {
    console.error("Proxy API Error:", error);
    throw error;
  }
}

// --- Экспортируемые функции (интерфейс остался тем же) ---

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    // Вызываем прокси с инструкцией для ЧАТА
    const responseText = await callProxy(message, CHAT_SYSTEM_INSTRUCTION, false);
    return responseText;
  } catch (error) {
    return "Извините, я сейчас не могу ответить. Попробуйте позже.";
  }
};

export const analyzeMeal = async (mealDescription: string): Promise<NutritionAnalysis> => {
  try {
    // Вызываем прокси с инструкцией для ДИЕТОЛОГА и флагом JSON
    const responseText = await callProxy(mealDescription, NUTRITION_SYSTEM_INSTRUCTION, true);
    
    // Превращаем текст в объект
    const data = JSON.parse(responseText) as NutritionAnalysis;
    return data;
  } catch (error) {
    console.error("Meal Analysis Error:", error);
    throw error;
  }
};
