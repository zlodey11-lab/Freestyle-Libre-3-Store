import React, { useEffect } from 'react';
import { ArrowLeft, Truck, CreditCard, Clock, Package, MapPin, AlertCircle, Home } from 'lucide-react';
import { Button } from './Button';

interface DeliveryPaymentProps {
  onBack: () => void;
  logoUrl: string;
}

export const DeliveryPayment: React.FC<DeliveryPaymentProps> = ({ onBack, logoUrl }) => {
  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-gray-900 p-8 md:p-12 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Доставка и оплата сенсоров</h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Интернет-магазин Diabetik.biz осуществляет быструю доставку сенсоров Freestyle Libre по всей России и странам СНГ. Узнайте подробности о стоимости и сроках получения заказа.
            </p>
          </div>
          
          <div className="p-8 md:p-12 space-y-12">
            
            {/* Delivery Section */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-libre-yellow/20 rounded-full flex items-center justify-center">
                  <Truck className="w-6 h-6 text-yellow-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Способы доставки по РФ и СНГ</h2>
              </div>

              <p className="text-gray-600 mb-6">
                Мы работаем с проверенными службами доставки: <strong>СДЭК</strong>, <strong>Boxberry</strong> и <strong>Почта России</strong>. Выберите удобный способ получения:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Method 1 */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-libre-yellow transition-colors md:col-span-2">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Package className="w-5 h-5 text-gray-500" />
                    Пункты выдачи заказов (СДЭК/Почта)
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Самовывоз из ближайшего отделения СДЭК или Почты России. Более 5000 пунктов по всей стране.
                  </p>
                  <div className="bg-white p-3 rounded-xl border border-gray-200 inline-block">
                    <p className="font-bold text-libre-yellow text-sm">Цена (Россия): 500 руб.</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">*Стоимость доставки в Казахстан, Беларусь и другие страны СНГ рассчитывается индивидуально.</p>
                </div>

                {/* Method 2 */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-libre-yellow transition-colors">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Truck className="w-5 h-5 text-gray-500" />
                    Курьер до двери
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Курьерская служба доставит посылку лично в руки (домой или в офис).
                  </p>
                  <p className="text-sm font-bold text-gray-700">Индивидуальный расчет</p>
                  <p className="text-xs text-gray-500 mt-1">Стоимость зависит от региона.</p>
                </div>

                {/* Method 3 */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-libre-yellow transition-colors">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    Самовывоз (СПБ)
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Бесплатный самовывоз со склада в Санкт-Петербурге.
                  </p>
                  <p className="text-sm font-bold text-green-600">Бесплатно</p>
                </div>
              </div>

              {/* Delivery Times */}
              <div className="mt-8 bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-900">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Сроки доставки
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between items-center border-b border-blue-100 pb-2">
                    <span>Москва и Московская область</span>
                    <span className="font-bold">1–2 дня</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-blue-100 pb-2">
                    <span>Регионы России (Центр, Юг, Урал)</span>
                    <span className="font-bold">3–5 дней</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-blue-100 pb-2">
                    <span>Сибирь и Дальний Восток</span>
                    <span className="font-bold">5–8 дней</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Беларусь, Казахстан, СНГ</span>
                    <span className="font-bold">Уточняйте у оператора</span>
                  </li>
                </ul>
              </div>
            </section>

            <div className="border-t border-gray-100"></div>

            {/* Payment Section */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-libre-yellow/20 rounded-full flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-yellow-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Способы оплаты</h2>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100 mb-8">
                <p className="font-medium text-yellow-900">
                  Мы работаем по <strong>100% предоплате</strong>. Это гарантирует бронирование товара на складе и максимально быструю отправку.
                </p>
              </div>

              <div className="space-y-4 text-gray-700">
                 <p className="mb-4">Доступные варианты оплаты:</p>
                 <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                       <div className="mt-1 w-2 h-2 rounded-full bg-libre-yellow shrink-0" />
                       <div>
                         <span className="font-bold text-gray-900">СБП (Система Быстрых Платежей)</span>
                         <p className="text-sm text-gray-500">Моментальный перевод по номеру телефона без комиссии (Сбербанк, Тинькофф, ВТБ и др).</p>
                       </div>
                    </li>
                    <li className="flex items-start gap-3">
                       <div className="mt-1 w-2 h-2 rounded-full bg-libre-yellow shrink-0" />
                       <div>
                         <span className="font-bold text-gray-900">Перевод на карту</span>
                         <p className="text-sm text-gray-500">Прямой перевод на карту банка для физических лиц.</p>
                       </div>
                    </li>
                    <li className="flex items-start gap-3">
                       <div className="mt-1 w-2 h-2 rounded-full bg-libre-yellow shrink-0" />
                       <div>
                         <span className="font-bold text-gray-900">Безналичный расчет</span>
                         <p className="text-sm text-gray-500">Оплата по реквизитам на расчетный счет.</p>
                       </div>
                    </li>
                    <li className="flex items-start gap-3">
                       <div className="mt-1 w-2 h-2 rounded-full bg-libre-yellow shrink-0" />
                       <div>
                         <span className="font-bold text-gray-900">Криптовалюта USDT</span>
                         <p className="text-sm text-gray-500">Принимаем оплату в стейблкоинах (сеть TRC20).</p>
                       </div>
                    </li>
                 </ul>
              </div>
            </section>

            <div className="border-t border-gray-100"></div>

            {/* Return Policy Section */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-gray-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Гарантия и возврат</h2>
              </div>

              <div className="text-gray-700 space-y-4 leading-relaxed">
                <p>
                  Мы гарантируем оригинальность всей продукции Abbott Freestyle Libre. Каждый сенсор имеет заводскую пломбу и актуальный срок годности.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-gray-300">
                  <p className="text-sm text-gray-600 italic mb-2">
                    В соответствии с Постановлением Правительства РФ №55 от 19.01.1998:
                  </p>
                  <p className="font-medium text-gray-800">
                    Медицинские изделия надлежащего качества (включая сенсоры глюкозы) <span className="text-red-500 font-bold">обмену и возврату не подлежат</span>.
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  Пожалуйста, проверяйте целостность упаковки при получении заказа в пункте выдачи или у курьера.
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 text-center text-gray-500 text-sm">
        <p>© 2016-2025 Diabetik.Shop. Все права защищены.</p>
      </footer>
    </div>
  );
};