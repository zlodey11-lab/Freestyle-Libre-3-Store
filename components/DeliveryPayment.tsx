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
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
            <img src={logoUrl} alt="Freestyle Libre" className="h-10 w-auto" />
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Доставка и оплата</h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Мы отправляем заказы по всей территории России и странам СНГ. Ниже вы найдете подробную информацию о сроках, стоимости и способах получения заказа.
            </p>
          </div>
          
          <div className="p-8 md:p-12 space-y-12">
            
            {/* Delivery Section */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-libre-yellow/20 rounded-full flex items-center justify-center">
                  <Truck className="w-6 h-6 text-yellow-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Способы и стоимость доставки</h2>
              </div>

              <p className="text-gray-600 mb-6">
                Мы сотрудничаем с надежными транспортными компаниями: СДЭК, Boxberry и Почта России. Вы можете выбрать наиболее удобный для вас вариант получения:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Method 1 */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-libre-yellow transition-colors md:col-span-2">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Package className="w-5 h-5 text-gray-500" />
                    Доставка до пункта выдачи (ПВЗ) или Почты
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Вы забираете заказ самостоятельно в удобное время из ближайшего к вам пункта выдачи или почтового отделения.
                  </p>
                  <div className="bg-white p-3 rounded-xl border border-gray-200 inline-block">
                    <p className="font-bold text-libre-yellow text-sm">Стоимость (РФ): 500 руб.</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">*Для стран СНГ стоимость рассчитывается индивидуально.</p>
                </div>

                {/* Method 2 */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-libre-yellow transition-colors">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Truck className="w-5 h-5 text-gray-500" />
                    Курьерская доставка «до двери»
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Курьер привезет заказ по указанному вами адресу (домой или в офис).
                  </p>
                  <p className="text-sm font-bold text-gray-700">Рассчитывается индивидуально</p>
                  <p className="text-xs text-gray-500 mt-1">Точную сумму сообщит менеджер.</p>
                </div>

                {/* Method 3 */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-libre-yellow transition-colors">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    Самовывоз (Санкт-Петербург)
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Жители и гости Санкт-Петербурга могут забрать заказ самостоятельно.
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
                    <span>Москва</span>
                    <span className="font-bold">1–2 дня</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-blue-100 pb-2">
                    <span>Регионы России</span>
                    <span className="font-bold">от 3 до 7 дней</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Страны СНГ</span>
                    <span className="font-bold">Уточняйте у менеджера</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-500 italic">
                  Мы стараемся отправлять заказы максимально оперативно, чтобы вы получили необходимые товары как можно скорее.
                </p>
              </div>
            </section>

            <div className="border-t border-gray-100"></div>

            {/* Payment Section */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-libre-yellow/20 rounded-full flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-yellow-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Оплата</h2>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100 mb-8">
                <p className="font-medium text-yellow-900">
                  Обращаем ваше внимание, что отправка заказов осуществляется на условиях <span className="font-black underline decoration-yellow-500/50">100% предоплаты</span>.
                </p>
              </div>

              <div className="space-y-4 text-gray-700">
                 <p className="mb-4">Вы можете оплатить заказ удобным для вас способом:</p>
                 <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                       <div className="mt-1 w-2 h-2 rounded-full bg-libre-yellow shrink-0" />
                       <div>
                         <span className="font-bold text-gray-900">СБП (Система Быстрых Платежей)</span>
                         <p className="text-sm text-gray-500">Мгновенный перевод по номеру телефона.</p>
                       </div>
                    </li>
                    <li className="flex items-start gap-3">
                       <div className="mt-1 w-2 h-2 rounded-full bg-libre-yellow shrink-0" />
                       <div>
                         <span className="font-bold text-gray-900">Перевод по номеру карты</span>
                         <p className="text-sm text-gray-500">Для держателей карт любых банков.</p>
                       </div>
                    </li>
                    <li className="flex items-start gap-3">
                       <div className="mt-1 w-2 h-2 rounded-full bg-libre-yellow shrink-0" />
                       <div>
                         <span className="font-bold text-gray-900">Оплата по реквизитам</span>
                         <p className="text-sm text-gray-500">Банковский перевод на расчетный счет.</p>
                       </div>
                    </li>
                    <li className="flex items-start gap-3">
                       <div className="mt-1 w-2 h-2 rounded-full bg-libre-yellow shrink-0" />
                       <div>
                         <span className="font-bold text-gray-900">Криптовалюта USDT</span>
                         <p className="text-sm text-gray-500">Оплата стейблкоинами (TRC20).</p>
                       </div>
                    </li>
                 </ul>
                 <p className="mt-6 text-sm text-gray-500 bg-gray-50 p-4 rounded-xl inline-block">
                   Реквизиты для оплаты будут предоставлены вам менеджером после подтверждения заказа.
                 </p>
              </div>
            </section>

            <div className="border-t border-gray-100"></div>

            {/* Return Policy Section */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-gray-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Условия возврата и обмена</h2>
              </div>

              <div className="text-gray-700 space-y-4 leading-relaxed">
                <p>
                  Мы заботимся о качестве нашей продукции. Все товары поставляются в заводской упаковке с контрольными пломбами, гарантирующими целостность содержимого.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-gray-300">
                  <p className="text-sm text-gray-600 italic mb-2">
                    Согласно Постановлению Правительства РФ №55 от 19.01.1998 (в ред. от 2020 г.):
                  </p>
                  <p className="font-medium text-gray-800">
                    Медицинские изделия, предметы санитарии и гигиены, а также товары для профилактики и лечения заболеваний в домашних условиях надлежащего качества <span className="text-red-500 font-bold">не подлежат возврату и обмену</span>.
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  Пожалуйста, внимательно проверяйте состав заказа при получении.
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 text-center text-gray-500 text-sm">
        <p>© 2024 Freestyle Libre Store. Все права защищены.</p>
      </footer>
    </div>
  );
};