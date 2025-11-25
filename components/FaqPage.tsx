import React, { useEffect, useState } from 'react';
import { ArrowLeft, Plus, Minus, HelpCircle, Smartphone, ShoppingCart } from 'lucide-react';
import { Button } from './Button';

interface FaqPageProps {
  onBack: () => void;
  logoUrl: string;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onBack, logoUrl }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqCategories = [
    {
      title: "О сенсорах Freestyle Libre 3",
      icon: HelpCircle,
      questions: [
        {
          q: "Чем Freestyle Libre 3 отличается от Libre 2?",
          a: "Основное преимущество Libre 3 — это полный автоматический мониторинг (Continuous Glucose Monitoring). Данные передаются на смартфон каждую минуту по Bluetooth без необходимости сканирования. Также сенсор Libre 3 значительно меньше и тоньше предшественника."
        },
        {
          q: "Какая цена на сенсоры Libre 3?",
          a: "Актуальная стоимость сенсоров указана в нашем каталоге. Мы стараемся держать цены ниже рыночных. При покупке нескольких штук возможны скидки. Подробности уточняйте у менеджеров в Telegram."
        },
        {
          q: "Сколько дней работает сенсор?",
          a: "Стандартная версия Freestyle Libre 3 работает 14 дней. Улучшенная версия Libre 3 Plus работает 15 дней. После истечения срока сенсор автоматически отключается."
        },
        {
          q: "Нужно ли прокалывать палец для калибровки?",
          a: "Нет, система откалибрована на заводе Abbott. Дополнительная калибровка глюкометром не требуется, что является огромным преимуществом перед конкурентами."
        },
        {
          q: "Где можно купить Freestyle Libre 3 в России?",
          a: "Официально Libre 3 еще не представлен в аптеках РФ, но вы можете купить оригинальные европейские сенсоры в нашем интернет-магазине с быстрой доставкой по всей стране."
        }
      ]
    },
    {
      title: "Приложение и Установка",
      icon: Smartphone,
      questions: [
        {
          q: "Как скачать приложение Libre 3 в России?",
          a: "Так как приложение может быть недоступно в российском App Store/Google Play, мы предоставляем нашим клиентам подробную инструкцию по установке и настройке аккаунта для работы с сенсором."
        },
        {
          q: "С какими телефонами работает сенсор?",
          a: "Вам нужен смартфон с NFC и Bluetooth. Поддерживаются iPhone (iOS 14+) и Android (версия 10+). Проверьте наличие NFC в настройках вашего телефона."
        },
        {
          q: "Можно ли использовать с Apple Watch?",
          a: "Да, уведомления с телефона могут дублироваться на часы Apple Watch или другие смарт-часы, если они сопряжены со смартфоном."
        }
      ]
    },
    {
      title: "Оплата и Доставка",
      icon: ShoppingCart,
      questions: [
        {
          q: "Есть ли доставка в Москву и СПБ?",
          a: "Да, мы осуществляем курьерскую доставку и отправку в пункты выдачи СДЭК по Москве, Санкт-Петербургу и всем регионам России."
        },
        {
          q: "Как быстро вы отправляете заказ?",
          a: "Отправка происходит в течение 24 часов после оплаты. Мы понимаем важность непрерывного мониторинга, поэтому работаем без выходных."
        },
        {
          q: "Какие гарантии, что товар оригинальный?",
          a: "Мы закупаем продукцию напрямую у европейских дистрибьюторов. Все упаковки запечатаны заводскими пломбами. Вы можете проверить сроки годности при получении."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
            <img src={logoUrl} alt="Freestyle Libre" className="h-14 w-auto" />
          </div>
          <Button variant="outline" onClick={onBack} className="flex items-center gap-2 px-6">
            <ArrowLeft className="w-4 h-4" />
            Назад на главную
          </Button>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Частые вопросы (FAQ)</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ответы на популярные вопросы о покупке, установке и использовании сенсоров Freestyle Libre 3.
          </p>
        </div>

        <div className="space-y-12">
          {faqCategories.map((category, catIndex) => (
            <section key={catIndex} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 p-6 border-b border-gray-100 flex items-center gap-3">
                <div className="bg-libre-yellow/20 p-2 rounded-xl">
                  <category.icon className="w-6 h-6 text-yellow-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
              </div>
              
              <div className="divide-y divide-gray-100">
                {category.questions.map((item, qIndex) => {
                  const uniqueIndex = catIndex * 100 + qIndex; // Simple unique ID generation
                  const isOpen = openIndex === uniqueIndex;

                  return (
                    <div key={qIndex} className="group">
                      <button
                        onClick={() => toggleFaq(uniqueIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-yellow-50/30 transition-colors text-left"
                      >
                        <span className="font-bold text-lg text-gray-800 pr-4">{item.q}</span>
                        <div className={`rounded-full p-2 transition-all duration-300 shrink-0 ${isOpen ? 'bg-libre-yellow rotate-180 text-gray-900' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'}`}>
                          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                        </div>
                      </button>
                      <div 
                        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed max-w-3xl">
                            {item.a}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 text-center bg-blue-50 rounded-3xl p-8 border border-blue-100">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Не нашли ответ?</h3>
          <p className="text-gray-600 mb-8">
            Напишите нам в Telegram. Менеджеры Diabetik.Shop проконсультируют вас по любым вопросам.
          </p>
          <a href="https://t.me/diabetik_biz" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className="bg-blue-500 hover:bg-blue-600 text-white shadow-blue-500/20 border-none px-8">
              Задать вопрос менеджеру
            </Button>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 text-center text-gray-500 text-sm">
        <p>© 2016-2025 Diabetik.Shop. Все права защищены.</p>
      </footer>
    </div>
  );
};