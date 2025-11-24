import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './Button';

interface PrivacyPolicyProps {
  onBack: () => void;
  logoUrl: string;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack, logoUrl }) => {
  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Simplified Navigation */}
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
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Политика в отношении обработки персональных данных</h1>
          
          <div className="space-y-8 text-gray-700 leading-relaxed">
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Общие положения</h2>
              <p className="mb-4">
                Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. № 152-ФЗ «О персональных данных» (далее — Закон о персональных данных) и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые «Diabetik.биз» (далее – Оператор).
              </p>
              <p className="mb-2">
                1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.
              </p>
              <p>
                1.2. Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта <a href="https://www.diabetik.shop" className="text-libre-yellow font-medium hover:underline">https://www.diabetik.shop</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Основные понятия, используемые в Политике</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>2.1. Веб-сайт</strong> – совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу <a href="https://www.diabetik.shop" className="text-libre-yellow font-medium hover:underline">https://www.diabetik.shop</a>.
                </li>
                <li>
                  <strong>2.2. Пользователь</strong> – любой посетитель веб-сайта https://www.diabetik.shop.
                </li>
                <li>
                  <strong>2.3. Персональные данные</strong> – любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта.
                </li>
                <li>
                  <strong>2.4. Обработка персональных данных</strong> – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Оператор может обрабатывать следующие персональные данные Пользователя</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>3.1. Фамилия, имя, отчество.</li>
                <li>3.2. Номера телефонов.</li>
                <li>3.3. Адрес доставки товара.</li>
                <li>3.4. Также на сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч. файлов «cookie») с помощью сервисов интернет-статистики (Яндекс Метрика, Google Analytics и других).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Цели обработки персональных данных</h2>
              <p className="mb-2">4.1. Цель обработки персональных данных Пользователя:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Оформление заказа на Веб-сайте;</li>
                <li>Уточнение деталей заказа и осуществление доставки товара;</li>
                <li>Связь с Клиентом (Пользователем) для консультаций и информирования о статусе заказа.</li>
              </ul>
              <p>
                4.2. Обезличенные данные Пользователей, собираемые с помощью сервисов интернет-статистики, служат для сбора информации о действиях Пользователей на сайте, улучшения качества сайта и его содержания.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Правовые основания обработки персональных данных</h2>
              <p className="mb-4">
                5.1. Оператор обрабатывает персональные данные Пользователя только в случае их заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные на сайте https://www.diabetik.shop (например, при оформлении заказа в корзине). Заполняя соответствующие формы и/или отправляя свои персональные данные Оператору, Пользователь выражает свое согласие с данной Политикой.
              </p>
              <p>
                5.2. Оператор обрабатывает обезличенные данные о Пользователе в случае, если это разрешено в настройках браузера Пользователя (включено сохранение файлов «cookie» и использование технологии JavaScript).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Порядок сбора, хранения, передачи и других видов обработки персональных данных</h2>
              <p className="mb-4">
                6.1. Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.
              </p>
              <p className="mb-4">
                6.2. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.
              </p>
              <p>
                6.3. Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства (например, по запросу правоохранительных органов) или необходимых для выполнения обязательств перед Пользователем (например, передача данных службе доставки/курьеру для вручения заказа).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Заключительные положения</h2>
              <p className="mb-4">
                7.1. Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты <a href="mailto:shopdiabetik@gmail.com" className="text-libre-yellow font-medium hover:underline">shopdiabetik@gmail.com</a>.
              </p>
              <p className="mb-4">
                7.2. Пользователь в любой момент может отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на электронный адрес Оператора <a href="mailto:shopdiabetik@gmail.com" className="text-libre-yellow font-medium hover:underline">shopdiabetik@gmail.com</a> с пометкой «Отзыв согласия на обработку персональных данных».
              </p>
              <p>
                7.3. В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. Политика действует бессрочно до замены ее новой версией.
              </p>
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