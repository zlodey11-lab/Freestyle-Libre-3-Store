import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { NutritionAnalysis } from "../types";

// Initialize the client
// API Key is strictly from process.env.API_KEY as per instructions
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

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

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: CHAT_SYSTEM_INSTRUCTION,
      },
    });

    return response.text || "Извините, я сейчас не могу ответить. Попробуйте позже.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};

export const analyzeMeal = async (mealDescription: string): Promise<NutritionAnalysis> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: mealDescription,
      config: {
        systemInstruction: NUTRITION_SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
      },
    });

    if (!response.text) {
      throw new Error("Empty response from AI");
    }

    // Parse the JSON response
    const data = JSON.parse(response.text) as NutritionAnalysis;
    return data;
  } catch (error) {
    console.error("Gemini Nutrition API Error:", error);
    throw error;
  }
};