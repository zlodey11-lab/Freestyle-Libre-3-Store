import React, { useEffect } from 'react';
import { ArrowLeft, Smartphone, Bell, Moon, Share2, FileText, Activity, Download } from 'lucide-react';
import { Button } from './Button';

interface AppPageProps {
  onBack: () => void;
  logoUrl: string;
}

// Using the reliable Google Drive direct link for the App screenshot
const APP_HERO_IMAGE = "https://i6.imageban.ru/out/2025/11/25/ea5f168e9a3ca5e6fa624bd95cef19a9.png";

export const AppPage: React.FC<AppPageProps> = ({ onBack, logoUrl }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Данные в реальном времени",
      desc: "Уровень глюкозы обновляется на экране вашего смартфона каждую минуту. Больше не нужно сканировать сенсор — данные передаются автоматически по Bluetooth на расстояние до 10 метров.",
      icon: Activity
    },
    {
      title: "Умные уведомления",
      desc: "Получайте оповещения, если уровень глюкозы становится слишком низким или высоким. Вы также будете предупреждены о потере сигнала связи с сенсором.",
      icon: Bell
    },
    {
      title: "Темный режим",
      desc: "Интерфейс приложения автоматически адаптируется или может быть настроен вручную. Темный режим снижает нагрузку на глаза и удобен при проверке сахара ночью.",
      icon: Moon
    },
    {
      title: "История и Заметки",
      desc: "Приложение хранит данные за последние 90 дней. Вы можете добавлять заметки о приеме пищи, дозах инсулина и физической активности, чтобы лучше понимать свой организм.",
      icon: FileText
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
            Назад
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white pt-16 pb-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-libre-yellow text-gray-900 px-4 py-1.5 rounded-full font-bold text-sm tracking-wide uppercase shadow-sm">
                Приложение FreeStyle Libre 3
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Ваш глюкометр теперь <br/> <span className="text-yellow-500">в вашем смартфоне</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Самое современное приложение для непрерывного мониторинга глюкозы (CGM). Простой интерфейс, мгновенная передача данных и полная свобода от проводов и ресиверов.
              </p>
              
              <div className="flex flex-wrap gap-4">
                 <div className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-shadow cursor-default">
                    <Download className="w-6 h-6" />
                    <div className="text-left">
                        <p className="text-[10px] uppercase font-bold tracking-wider opacity-70">Download on the</p>
                        <p className="font-bold text-lg leading-none">App Store</p>
                    </div>
                 </div>
                 <div className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-shadow cursor-default">
                    <Download className="w-6 h-6" />
                    <div className="text-left">
                        <p className="text-[10px] uppercase font-bold tracking-wider opacity-70">Get it on</p>
                        <p className="font-bold text-lg leading-none">Google Play</p>
                    </div>
                 </div>
              </div>
            </div>
            
            <div className="relative flex justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-libre-yellow/20 to-transparent rounded-full filter blur-3xl opacity-60"></div>
                <img 
                    src={APP_HERO_IMAGE} 
                    alt="Интерфейс приложения Freestyle Libre 3" 
                    className="relative z-10 w-full max-w-sm rounded-3xl shadow-2xl border border-gray-100"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl font-bold mb-4">Возможности приложения</h2>
             <p className="text-lg text-gray-600">
               Приложение разработано так, чтобы вы тратили меньше времени на управление диабетом и больше — на жизнь.
             </p>
           </div>
           
           <div className="grid md:grid-cols-2 gap-8">
             {features.map((item, idx) => (
               <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* LibreLinkUp Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative">
             <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
             
             <div className="grid md:grid-cols-2 gap-12 p-8 md:p-16 items-center relative z-10">
               <div className="text-white space-y-6">
                 <div className="flex items-center gap-3">
                    <div className="bg-blue-600/20 p-2 rounded-lg">
                        <Share2 className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-blue-300 font-bold tracking-wide uppercase text-sm">LibreLinkUp</span>
                 </div>
                 <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                   Делитесь данными с близкими
                 </h2>
                 <p className="text-gray-300 text-lg leading-relaxed">
                   С помощью приложения LibreLinkUp ваши близкие могут удаленно следить за вашим уровнем глюкозы на своих телефонах. Они получат уведомление, если у вас будет высокий или низкий сахар.
                 </p>
                 <ul className="space-y-3">
                   <li className="flex items-center gap-3 text-gray-300">
                     <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                     Спокойствие для родителей
                   </li>
                   <li className="flex items-center gap-3 text-gray-300">
                     <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                     Удаленный мониторинг для врачей
                   </li>
                   <li className="flex items-center gap-3 text-gray-300">
                     <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                     До 20 подключенных пользователей
                   </li>
                 </ul>
               </div>
               <div className="flex justify-center">
                  {/* Abstract representation of connection */}
                  <div className="relative">
                     <Smartphone className="w-48 h-48 text-gray-700 opacity-50" />
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl">
                           <p className="text-white font-bold text-center mb-1">Глюкоза</p>
                           <p className="text-5xl font-black text-libre-yellow text-center">5.5</p>
                           <p className="text-gray-300 text-xs text-center mt-2">Принято от: Анна</p>
                        </div>
                     </div>
                  </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-16 bg-gray-50 text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold mb-8">Технические требования</h3>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h4 className="font-bold text-lg mb-2">iOS (iPhone)</h4>
                  <p className="text-gray-600">Требуется iOS 14.0 или новее. <br/> iPhone 8 и более новые модели.</p>
               </div>
               <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h4 className="font-bold text-lg mb-2">Android</h4>
                  <p className="text-gray-600">Требуется Android 10 или новее. <br/> Наличие модуля NFC обязательно.</p>
               </div>
            </div>
            <p className="mt-8 text-sm text-gray-500">
               *Приложение бесплатно. Для работы требуется интернет-соединение для первичной настройки и обмена данными.
            </p>
         </div>
      </section>
      
      {/* Footer CTA */}
       <footer className="bg-white border-t border-gray-200 py-12 text-center">
          <h2 className="text-2xl font-bold mb-6">Готовы начать?</h2>
          <div className="flex justify-center gap-4">
              <Button variant="outline" onClick={onBack}>На главную</Button>
              <a href="https://t.me/diabetik_biz" target="_blank" rel="noopener noreferrer">
                 <Button variant="primary">Заказать сенсор</Button>
              </a>
          </div>
       </footer>
    </div>
  );
};