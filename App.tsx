import React, { useState } from 'react';
import { Activity, Smartphone, Shield, Zap, CheckCircle, Plus, Minus, ShoppingCart, ChevronLeft, ChevronRight, Calendar, Link as LinkIcon, Maximize, Star, Quote, Sliders, Battery, ShieldCheck, ChevronDown, Menu, X, Bell, Moon, Share2, Salad } from 'lucide-react';
import { Button } from './components/Button';
import { FeatureCard } from './components/FeatureCard';
import { NutritionAnalyst } from './components/NutritionAnalyst';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { DeliveryPayment } from './components/DeliveryPayment';
import { Contacts } from './components/Contacts';
import { FaqPage } from './components/FaqPage';
import { AppPage } from './components/AppPage';

// --- Assets ---
// Using placeholder images that represent the vibe (medical/tech/clean)
const HERO_IMAGE = "https://i1.imageban.ru/out/2025/11/25/d9593c0bfe3ef9632c429d921d759fa5.png"; // Abstract tech look
const LOGO_URL = "https://i3.imageban.ru/out/2025/11/25/55283f48c17584063d152c89db82755d.png";
const PLUS_IMAGE = "https://i4.imageban.ru/out/2025/11/25/a929c8f1add75dee278e34640d3d72fe.png";
const SELECT_IMAGE = "https://i8.imageban.ru/out/2025/11/25/ddb985c8637a032e421c8d2c210106ae.jpg";
const APP_IMAGE = "https://i6.imageban.ru/out/2025/11/25/ea5f168e9a3ca5e6fa624bd95cef19a9.png";

const GALLERY_IMAGES = [
  "https://i4.imageban.ru/out/2025/11/25/6e05bb546c49503534687561605bbdb6.png", // Box
  "https://i1.imageban.ru/out/2025/11/25/b84c9f38defbbbb3b1960bb0e55806be.png", // Sensor
  "https://i2.imageban.ru/out/2025/11/25/935320cbf443c14d51bf3a8584f863b0.png", // Applicator
  "https://i6.imageban.ru/out/2025/11/25/50129c747411dbed45ba4d721bc1f02e.png", // Side view
  "https://i4.imageban.ru/out/2025/11/25/ae585b8342a4a4044f72a42dd3548db8.jpg", // Lifestyle 1
  "https://i8.imageban.ru/out/2025/11/25/26e2c90f611c214ff41cd94cca5448bc.jpg", // Lifestyle 2
  "https://i3.imageban.ru/out/2025/11/25/b9ca8fc67ea8fc84b541ca16120ecf30.jpg", // Lifestyle 3
  "https://i4.imageban.ru/out/2025/11/25/d3b89e8cff0272e3268c2aacb0edebe8.jpg", // Lifestyle 4
  "https://i4.imageban.ru/out/2025/11/25/f59caece5291bd37e27c3f8a2b85641f.jpg", // Lifestyle 5
  "https://i3.imageban.ru/out/2025/11/25/e06d2b4fa1179605225cf940d8dbfc93.jpg" // Lifestyle 6
];

type ViewState = 'home' | 'privacy' | 'delivery' | 'contacts' | 'faq' | 'app';

export default function App() {
  const [view, setView] = useState<ViewState>('home');
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // View Routing
  if (view === 'privacy') {
    return <PrivacyPolicy onBack={() => setView('home')} logoUrl={LOGO_URL} />;
  }

  if (view === 'delivery') {
    return <DeliveryPayment onBack={() => setView('home')} logoUrl={LOGO_URL} />;
  }

  if (view === 'contacts') {
    return <Contacts onBack={() => setView('home')} logoUrl={LOGO_URL} />;
  }

  if (view === 'faq') {
    return <FaqPage onBack={() => setView('home')} logoUrl={LOGO_URL} />;
  }

  if (view === 'app') {
    return <AppPage onBack={() => setView('home')} logoUrl={LOGO_URL} />;
  }

  // --- Home View Logic ---

  const handlePrevImage = () => {
    setActiveGalleryIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveGalleryIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed header (80px) plus some breathing room
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const features = [
    {
      title: "Самый маленький сенсор",
      description: "Система НМГ размером с две монеты. Тонкий и незаметный на теле датчик, о котором вы забудете сразу после установки.",
      icon: Activity
    },
    {
      title: "Мониторинг 24/7",
      description: "Больше не нужно сканировать! Уровень сахара передается автоматически на смартфон по Bluetooth каждую минуту.",
      icon: Smartphone
    },
    {
      title: "Сигналы тревоги",
      description: "Опциональные оповещения о гипогликемии и гипергликемии для полного контроля диабета днем и ночью.",
      icon: Shield
    },
    {
      title: "Установка за секунды",
      description: "Однокомпонентный аппликатор позволяет установить датчик Freestyle Libre 3 быстро, стерильно и безболезненно.",
      icon: Zap
    }
  ];

  const reviews = [
    {
      name: "Елена С.",
      role: "Москва, Диабет 1 типа",
      text: "Заказываю Libre 3 здесь уже полгода. Доставка по Москве на следующий день. Сенсоры всегда с хорошим сроком годности. Это спасение для пальцев!",
      rating: 5
    },
    {
      name: "Алексей М.",
      role: "Санкт-Петербург, Спортсмен",
      text: "Перешел с Либре 2 на тройку. Разница огромная — не надо прикладывать телефон. Магазину спасибо за оперативную отправку в СПБ.",
      rating: 5
    },
    {
      name: "Марина В.",
      role: "Екатеринбург, Мама ребенка с диабетом",
      text: "Цена на Libre 3 здесь самая адекватная. Ночные тревоги на телефон — лучшая функция для родителей. Рекомендую всем!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-libre-yellow selection:text-black">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 transition-all duration-300 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
               <img src={LOGO_URL} alt="Freestyle Libre - Главная" className="h-14 w-auto transition-transform duration-300 group-hover:scale-105" />
            </div>

            {/* Desktop Menu - Hidden on Tablet (lg) and smaller */}
            <div className="hidden lg:flex space-x-8 items-center">
              {/* Products Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-300 group-hover:text-libre-yellow font-medium transition-colors py-2 focus:outline-none">
                  Продукты <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 mt-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top z-50">
                   <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 py-1">
                     <a 
                       href="#libre-3" 
                       onClick={(e) => handleScrollTo(e, 'libre-3')} 
                       className="block px-5 py-3 text-gray-800 hover:bg-yellow-50 hover:text-yellow-700 transition-colors font-medium border-b border-gray-100 last:border-0"
                     >
                       FreeStyle Libre 3
                     </a>
                     <a 
                       href="#libre-plus" 
                       onClick={(e) => handleScrollTo(e, 'libre-plus')} 
                       className="block px-5 py-3 text-gray-800 hover:bg-yellow-50 hover:text-yellow-700 transition-colors font-medium border-b border-gray-100 last:border-0"
                     >
                       FreeStyle Libre 3 Plus
                     </a>
                     <a 
                       href="#libre-select" 
                       onClick={(e) => handleScrollTo(e, 'libre-select')} 
                       className="block px-5 py-3 text-gray-800 hover:bg-yellow-50 hover:text-yellow-700 transition-colors font-medium border-b border-gray-100"
                     >
                       FreeStyle Libre Select
                     </a>
                     <button
                       onClick={() => setView('app')}
                       className="block w-full text-left px-5 py-3 text-gray-800 hover:bg-yellow-50 hover:text-yellow-700 transition-colors font-medium"
                     >
                       FreeStyle Libre App
                     </button>
                   </div>
                </div>
              </div>

              <a 
                href="#features" 
                onClick={(e) => handleScrollTo(e, 'features')}
                className="text-gray-300 hover:text-libre-yellow font-medium transition-colors"
              >
                Преимущества
              </a>
              <a 
                href="#gallery" 
                onClick={(e) => handleScrollTo(e, 'gallery')}
                className="text-gray-300 hover:text-libre-yellow font-medium transition-colors"
              >
                Галерея
              </a>

              <button 
                onClick={() => setView('delivery')}
                className="text-gray-300 hover:text-libre-yellow font-medium transition-colors focus:outline-none"
              >
                Доставка и оплата
              </button>

              <button 
                onClick={() => setView('contacts')}
                className="text-gray-300 hover:text-libre-yellow font-medium transition-colors focus:outline-none"
              >
                Контакты
              </button>

              <button 
                onClick={() => setView('faq')}
                className="text-gray-300 hover:text-libre-yellow font-medium transition-colors focus:outline-none"
              >
                FAQ
              </button>
            </div>

            <a href="https://t.me/diabetik_biz" target="_blank" rel="noopener noreferrer" className="hidden lg:block">
              <Button variant="primary" className="shadow-lg hover:shadow-yellow-400/20">Заказать сейчас</Button>
            </a>

            {/* Mobile/Tablet Menu Button - Visible on lg and smaller */}
            <button
              className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-gray-900 border-t border-gray-800 animate-fade-in absolute top-20 left-0 w-full shadow-2xl h-screen overflow-y-auto pb-32">
            <div className="px-4 pt-4 pb-6 space-y-2">
               {/* Products Section */}
               <div className="py-2">
                 <p className="text-gray-500 uppercase text-xs font-bold tracking-wider mb-2 px-3">Продукты</p>
                 <a href="#libre-3" onClick={(e) => handleScrollTo(e, 'libre-3')} className="block px-3 py-3 text-gray-200 hover:text-white hover:bg-gray-800 rounded-xl transition-colors">FreeStyle Libre 3</a>
                 <a href="#libre-plus" onClick={(e) => handleScrollTo(e, 'libre-plus')} className="block px-3 py-3 text-gray-200 hover:text-white hover:bg-gray-800 rounded-xl transition-colors">FreeStyle Libre 3 Plus</a>
                 <a href="#libre-select" onClick={(e) => handleScrollTo(e, 'libre-select')} className="block px-3 py-3 text-gray-200 hover:text-white hover:bg-gray-800 rounded-xl transition-colors">FreeStyle Libre Select</a>
                 <button onClick={() => { setView('app'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-3 text-gray-200 hover:text-white hover:bg-gray-800 rounded-xl transition-colors">FreeStyle Libre App</button>
               </div>
               
               <div className="border-t border-gray-800 my-2"></div>
               
               <a href="#features" onClick={(e) => handleScrollTo(e, 'features')} className="block px-3 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-gray-800 rounded-xl transition-colors">Преимущества</a>
               <a href="#gallery" onClick={(e) => handleScrollTo(e, 'gallery')} className="block px-3 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-gray-800 rounded-xl transition-colors">Галерея</a>
               <button onClick={() => { setView('delivery'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-gray-800 rounded-xl transition-colors">Доставка и оплата</button>
               <button onClick={() => { setView('contacts'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-gray-800 rounded-xl transition-colors">Контакты</button>
               <button onClick={() => { setView('faq'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-gray-800 rounded-xl transition-colors">FAQ</button>
               
               <div className="pt-6 px-3">
                 <a href="https://t.me/diabetik_biz" target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Button variant="primary" className="w-full justify-center text-lg">Заказать сейчас</Button>
                 </a>
               </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="libre-3" className="pt-32 pb-20 lg:pt-32 lg:pb-32 overflow-hidden relative scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in lg:pr-8">
              <div className="inline-block bg-libre-yellow/20 text-yellow-800 px-4 py-1.5 rounded-full font-bold text-sm tracking-wide uppercase border border-libre-yellow/30">
                Новое поколение CGM
              </div>
              <h1 className="text-4xl lg:text-6xl font-black leading-tight text-gray-900">
                Купить Freestyle Libre 3<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-libre-yellow to-yellow-600">
                  Мониторинг без проколов
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Оригинальные сенсоры Abbott Freestyle Libre 3. Самый маленький и точный датчик глюкозы с автоматической передачей данных на телефон. Быстрая доставка по Москве, СПБ и всей России.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://t.me/diabetik_biz" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button className="w-full flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" /> Купить сенсор
                  </Button>
                </a>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500 pt-4">
                <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold shadow-sm">
                       {i}
                     </div>
                   ))}
                </div>
                <p>Выбор 1000+ диабетиков России в этом месяце</p>
              </div>
            </div>
            
            {/* Image Container adapted for 706x908 Aspect Ratio */}
            <div className="relative flex items-center justify-center group lg:h-[750px]">
               <div className="absolute inset-0 bg-gradient-to-tr from-libre-yellow/30 to-transparent rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
               
               {/* Using object-contain to respect the 706x908 portrait ratio without cropping */}
               <img 
                 src={HERO_IMAGE} 
                 alt="Сенсор Freestyle Libre 3 упаковка и датчик" 
                 className="relative z-10 rounded-3xl drop-shadow-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-700 w-full max-w-[360px] lg:max-w-[480px] h-auto object-contain"
                 style={{ maxHeight: '100%' }}
                 fetchPriority="high"
               />
               
               {/* Floating Badge removed */}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="py-24 bg-white relative overflow-hidden scroll-mt-28">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Почему стоит купить Libre 3?</h2>
            <p className="text-xl text-gray-600">
              Передовые технологии для контроля сахарного диабета. Забудьте о глюкометрах и полосках.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} delay={idx * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Showcase / Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Фотогалерея продукции</h2>
           
           <div className="bg-white p-4 md:p-8 rounded-3xl shadow-xl">
             {/* Main Image Display */}
             <div className="relative aspect-[4/3] md:aspect-[16/9] w-full bg-gray-50 rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-gray-100 group">
                
                {/* Previous Button */}
                <button 
                  onClick={handlePrevImage}
                  className="absolute left-4 z-20 p-3 rounded-full bg-white/70 shadow-lg hover:bg-white text-gray-800 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 focus:outline-none"
                  aria-label="Предыдущее изображение"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Next Button */}
                <button 
                  onClick={handleNextImage}
                  className="absolute right-4 z-20 p-3 rounded-full bg-white/70 shadow-lg hover:bg-white text-gray-800 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 focus:outline-none"
                  aria-label="Следующее изображение"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                <img 
                  src={GALLERY_IMAGES[activeGalleryIndex]} 
                  alt={`Фото продукта Freestyle Libre ${activeGalleryIndex + 1} - вид упаковки и сенсора`} 
                  className="w-full h-full object-contain p-4 md:p-8 transition-opacity duration-500"
                  key={activeGalleryIndex} // Force re-render for animation
                  loading="lazy"
                />
             </div>

             {/* Thumbnails Carousel */}
             <div className="flex flex-wrap justify-center gap-3 md:gap-4">
               {GALLERY_IMAGES.map((img, idx) => (
                 <button 
                   key={idx}
                   onClick={() => setActiveGalleryIndex(idx)}
                   className={`
                     relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 
                     ${activeGalleryIndex === idx 
                       ? 'border-blue-900 shadow-lg scale-105' 
                       : 'border-transparent hover:border-gray-300 opacity-70 hover:opacity-100'}
                   `}
                 >
                   <img src={img} alt={`Миниатюра сенсора ${idx + 1}`} className="w-full h-full object-cover bg-white" loading="lazy" />
                 </button>
               ))}
             </div>
           </div>
        </div>
      </section>

      {/* Libre 3 Plus Section */}
      <section id="libre-plus" className="py-24 bg-white relative overflow-hidden scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative order-2 md:order-1 flex justify-center">
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-3xl transform scale-75 opacity-50"></div>
              <img 
                src={PLUS_IMAGE} 
                alt="Купить FreeStyle Libre 3 Plus с доставкой по РФ" 
                className="relative z-10 w-full max-w-md object-contain hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                loading="lazy"
              />
            </div>
            
            {/* Text Side */}
            <div className="order-1 md:order-2 space-y-8">
              <div className="inline-block bg-libre-yellow text-gray-900 px-4 py-1.5 rounded-full font-bold text-sm tracking-wide uppercase shadow-sm">
                Новинка 2025
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                FreeStyle Libre 3 <span className="text-yellow-500">Plus</span>
              </h2>
              <p className="text-lg text-gray-600">
                Закажите улучшенную версию самого популярного сенсора. 
                Libre 3 Plus — это расширенный срок службы и интеграция с инсулиновыми помпами.
              </p>
              
              <div className="space-y-6">
                 <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-yellow-50 transition-colors border border-transparent hover:border-yellow-200 group">
                    <div className="p-3 bg-white rounded-full shadow-sm">
                      <Calendar className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 group-hover:text-gray-900">15 дней работы</h4>
                      <p className="text-sm text-gray-500">Срок службы сенсора увеличен до 15 дней для вашего удобства.</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-yellow-50 transition-colors border border-transparent hover:border-yellow-200 group">
                    <div className="p-3 bg-white rounded-full shadow-sm">
                      <LinkIcon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 group-hover:text-gray-900">Совместимость с AID</h4>
                      <p className="text-sm text-gray-500">Работает с автоматизированными системами доставки инсулина (помпами).</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-yellow-50 transition-colors border border-transparent hover:border-yellow-200 group">
                    <div className="p-3 bg-white rounded-full shadow-sm">
                      <Maximize className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 group-hover:text-gray-900">Минимальный размер</h4>
                      <p className="text-sm text-gray-500">Несмотря на новые функции, он остается самым компактным CGM.</p>
                    </div>
                 </div>
              </div>
              
              <div className="pt-4">
                 <a href="https://t.me/diabetik_biz" target="_blank" rel="noopener noreferrer" className="block w-full">
                   <Button variant="primary" className="w-full text-xl py-4 shadow-xl hover:shadow-yellow-400/50">
                     Заказать Libre 3 Plus
                   </Button>
                 </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FreeStyle Libre Select Section */}
      <section id="libre-select" className="py-24 bg-gray-50 relative overflow-hidden scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Side */}
            <div className="space-y-8">
              <div className="inline-block bg-libre-yellow text-gray-900 px-4 py-1.5 rounded-full font-bold text-sm tracking-wide uppercase shadow-sm">
                Специальная серия
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                FreeStyle Libre <span className="text-yellow-500">Select</span>
              </h2>
              <p className="text-lg text-gray-600">
                Настраиваемый диапазон и максимальная гибкость. Купить Libre Select — выбор тех, кто хочет персонализированный контроль диабета.
              </p>

              <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white hover:bg-yellow-50 transition-colors border border-gray-100 hover:border-yellow-200 group">
                    <div className="p-3 bg-libre-yellow/20 rounded-full shadow-sm">
                      <Sliders className="w-6 h-6 text-yellow-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">Настраиваемый диапазон</h4>
                      <p className="text-sm text-gray-500">Задавайте свои целевые значения глюкозы для точных отчетов.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white hover:bg-yellow-50 transition-colors border border-gray-100 hover:border-yellow-200 group">
                    <div className="p-3 bg-libre-yellow/20 rounded-full shadow-sm">
                      <Battery className="w-6 h-6 text-yellow-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">Оптимизированное энергопотребление</h4>
                      <p className="text-sm text-gray-500">Стабильная связь с телефоном без лишнего расхода батареи.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white hover:bg-yellow-50 transition-colors border border-gray-100 hover:border-yellow-200 group">
                    <div className="p-3 bg-libre-yellow/20 rounded-full shadow-sm">
                      <ShieldCheck className="w-6 h-6 text-yellow-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">Повышенная надежность</h4>
                      <p className="text-sm text-gray-500">Улучшенный алгоритм обработки данных для исключения ложных тревог.</p>
                    </div>
                  </div>
              </div>

              <div className="pt-4">
                  <a href="https://t.me/diabetik_biz" target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Button variant="primary" className="w-full text-xl py-4 shadow-xl hover:shadow-yellow-400/50">
                      Заказать Select
                    </Button>
                  </a>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative flex justify-center">
              <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full -translate-y-1/2 translate-x-1/2 transition-transform duration-500 group-hover:scale-150"></div>
                 <img
                   src={SELECT_IMAGE}
                   alt="Сенсор FreeStyle Libre Select упаковка"
                   className="relative z-10 w-full max-w-sm object-contain hover:scale-105 transition-transform duration-500"
                   loading="lazy"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="py-24 bg-white text-gray-900 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-full bg-white"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl transform translate-y-1/2 translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative flex justify-center order-2 md:order-1">
               <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-3xl transform scale-75 opacity-50"></div>
               <img 
                 src={APP_IMAGE} 
                 alt="Мобильное приложение FreeStyle Libre 3 интерфейс" 
                 className="relative z-10 w-full max-w-sm h-auto object-contain transform hover:scale-105 transition-transform duration-700 drop-shadow-2xl" 
                 loading="lazy"
               />
            </div>

            {/* Text Side */}
            <div className="order-1 md:order-2 space-y-8">
               <div className="inline-block bg-gray-100 text-gray-800 border border-gray-200 px-4 py-1.5 rounded-full font-bold text-sm tracking-wide uppercase">
                 Экосистема
               </div>
               <h2 className="text-4xl lg:text-5xl font-black leading-tight text-gray-900">
                 Приложение <br/> <span className="text-yellow-500">FreeStyle Libre 3</span>
               </h2>
               <p className="text-xl text-gray-600">
                 Вся информация о вашем диабете на одном экране. Без ресиверов, проводов и лишних устройств. Скачайте приложение и подключите сенсор.
               </p>

               <div className="grid gap-6 mt-4">
                 <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                   <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shrink-0 shadow-sm">
                     <Bell className="w-6 h-6 text-yellow-600" />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg mb-1 text-gray-900">Сигналы тревоги</h4>
                     <p className="text-gray-500 text-sm">Мгновенные уведомления о гипогликемии и гипергликемии.</p>
                   </div>
                 </div>

                 <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                   <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shrink-0 shadow-sm">
                     <Share2 className="w-6 h-6 text-yellow-600" />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg mb-1 text-gray-900">LibreLinkUp</h4>
                     <p className="text-gray-500 text-sm">Делитесь данными с врачом или близкими в реальном времени.</p>
                   </div>
                 </div>

                 <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                   <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shrink-0 shadow-sm">
                     <Moon className="w-6 h-6 text-yellow-600" />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg mb-1 text-gray-900">Темная тема</h4>
                     <p className="text-gray-500 text-sm">Комфортное использование приложения ночью.</p>
                   </div>
                 </div>
               </div>
               
               <div className="pt-4">
                 <Button variant="outline" onClick={() => setView('app')} className="px-8 py-3 rounded-full border-2 border-gray-200 hover:border-libre-yellow text-gray-800 hover:bg-libre-yellow hover:text-gray-900 font-bold transition-all">
                    Подробнее о приложении
                 </Button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Nutrition Assistant Section */}
      <section className="py-24 bg-gradient-to-b from-yellow-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="order-2 lg:order-1">
                <NutritionAnalyst />
             </div>
             <div className="order-1 lg:order-2">
               <h2 className="text-4xl font-bold mb-6 text-gray-900">AI-Помощник <br/> <span className="text-yellow-600">Умный анализ питания</span></h2>
               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                 Сомневаетесь, сколько инсулина нужно на еду? Просто опишите содержимое вашей тарелки, и наш ИИ на базе Google Gemini мгновенно:
               </p>
               <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-libre-yellow/20 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-yellow-700" />
                     </div>
                     <span className="text-gray-700">Рассчитает количество углеводов</span>
                  </li>
                  <li className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-libre-yellow/20 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-yellow-700" />
                     </div>
                     <span className="text-gray-700">Переведет в Хлебные Единицы (ХЕ)</span>
                  </li>
                  <li className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-libre-yellow/20 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-yellow-700" />
                     </div>
                     <span className="text-gray-700">Даст совет по паузе и профилю работы инсулина</span>
                  </li>
               </ul>
             </div>
           </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Отзывы покупателей</h2>
           <div className="grid md:grid-cols-3 gap-8">
             {reviews.map((review, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg relative transform hover:-translate-y-2 transition-transform duration-300">
                   <Quote className="absolute top-8 right-8 text-gray-100 w-12 h-12 fill-current" />
                   <div className="flex gap-1 mb-4">
                     {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-libre-yellow fill-current" />
                     ))}
                   </div>
                   <p className="text-gray-600 mb-6 relative z-10 leading-relaxed italic">"{review.text}"</p>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gray-900 text-libre-yellow flex items-center justify-center font-bold text-lg border-2 border-libre-yellow">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{review.name}</p>
                        <p className="text-sm text-gray-500">{review.role}</p>
                      </div>
                   </div>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* Final CTA Section (Replaces merged FAQ) */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Floating Logo Badge - Outside overflow-hidden container */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
                <div className="bg-gray-900 p-4 rounded-2xl shadow-xl border border-gray-800">
                  <img 
                    src={LOGO_URL} 
                    alt="Freestyle Libre - Официальный сайт" 
                    className="h-16 w-auto object-contain" 
                  />
                </div>
            </div>

            <div className="bg-libre-yellow rounded-3xl shadow-2xl relative text-center group overflow-hidden">
              
              {/* Background pattern */}
              <div className="absolute inset-0 bg-white/20 pattern-grid-lg opacity-30 pointer-events-none"></div>

              <div className="relative z-10 p-8 lg:p-12 pb-32">
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight mt-6">
                  Купить сенсоры с доставкой
                </h3>
                <p className="text-gray-900/80 mb-10 text-lg font-medium max-w-xl mx-auto">
                  Оформите заказ сегодня и получите полный контроль над диабетом. Быстрая отправка в любой регион России и СНГ.
                </p>
                
                <div className="max-w-md mx-auto">
                  <a href="https://t.me/diabetik_biz" target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Button variant="dark" className="w-full text-xl py-4 shadow-xl hover:scale-[1.02] animate-pulse-scale hover:animate-none">
                      Заказать сенсоры
                    </Button>
                  </a>
                </div>
                
                <p className="mt-8 text-xs text-gray-900/60 font-medium">
                  *Не является медицинским советом. Перед применением проконсультируйтесь с врачом.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Footer Logo - Clean, no wrapper */}
            <div className="flex items-center gap-3 mb-6 md:mb-0 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
               <img src={LOGO_URL} alt="Freestyle Libre - Футер" className="h-14 w-auto" />
            </div>
            <div className="flex flex-wrap gap-8 text-gray-400 text-sm justify-center">
              <button onClick={() => setView('privacy')} className="hover:text-libre-yellow transition-colors bg-transparent border-none p-0 cursor-pointer text-gray-400">Политика конфиденциальности</button>
              <button onClick={() => setView('delivery')} className="hover:text-libre-yellow transition-colors bg-transparent border-none p-0 cursor-pointer text-gray-400">Доставка и оплата</button>
              <button onClick={() => setView('contacts')} className="hover:text-libre-yellow transition-colors bg-transparent border-none p-0 cursor-pointer text-gray-400">Контакты</button>
              <button onClick={() => setView('faq')} className="hover:text-libre-yellow transition-colors bg-transparent border-none p-0 cursor-pointer text-gray-400">FAQ</button>
            </div>
            <div className="mt-6 md:mt-0 text-gray-500 text-sm">
              © 2016-2025 Diabetik.Shop Оригинальные сенсоры.
              Информация на сайте предосталена в ознакомительных целях.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}