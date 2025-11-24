import React, { useState } from 'react';
import { Activity, Smartphone, Shield, Zap, CheckCircle, Plus, Minus, ShoppingCart, ChevronLeft, ChevronRight, Calendar, Link as LinkIcon, Maximize, Star, Quote, Sliders, Battery, ShieldCheck } from 'lucide-react';
import { Button } from './components/Button';
import { FeatureCard } from './components/FeatureCard';
import { NutritionAnalyst } from './components/NutritionAnalyst';

// --- Assets ---
// Using placeholder images that represent the vibe (medical/tech/clean)
const HERO_IMAGE = "https://www.freestylelibre.de/content/dam/adc/freestylelibrede/marketing/fsl3-messsystem-number1@706w.png"; // Abstract tech look
const LOGO_URL = "https://www.freestylelibre.de/content/dam/adc/freestylelibrede/brand/Logo_FSL_V_YW.svg";
const PLUS_IMAGE = "https://www.freestylelibre.de/content/dam/adc/freestylelibrede/products/fsl3plus/FSL3P-2v3.png";
const SELECT_IMAGE = "https://www.medicament.com/22478-large_default/freestyle-libre-select-capteur.jpg";

const GALLERY_IMAGES = [
  "https://www.freestylelibre.de/content/dam/adc/freestylelibrede/products/fsl3/FSL3-2.png", // Box
  "https://www.freestylelibre.de/content/dam/adc/freestylelibrede/products/fsl3/FSL3-1.png", // Sensor
  "https://www.freestylelibre.de/content/dam/adc/freestylelibrede/products/fsl3/FSL3-3.png", // Applicator
  "https://www.freestylelibre.de/content/dam/adc/freestylelibrede/products/fsl3/FSL3-4.png", // Side view
  "https://www.freestylelibre.de/content/dam/adc/freestylelibrede/products/fsl3/FSL3-5.jpg", // Lifestyle 1
  "https://www.freestylelibre.de/content/dam/adc/freestylelibrede/products/fsl3/FSL3-6.jpg", // Lifestyle 2
  "https://www.freestylelibre.de/content/dam/adc/freestylelibrede/products/fsl3/FSL3-7.jpg", // Lifestyle 3
  "https://www.freestylelibre.de/content/dam/adc/freestylelibrede/products/fsl3/FSL3-8.jpg", // Lifestyle 4
  "https://www.freestylelibre.de/content/dam/adc/freestylelibrede/products/fsl3/FSL3-9.jpg", // Lifestyle 5
  "https://www.freestylelibre.de/content/dam/adc/freestylelibrede/products/fsl3/FSL3-10.jpg" // Lifestyle 6
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handlePrevImage = () => {
    setActiveGalleryIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveGalleryIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const features = [
    {
      title: "Невероятно маленький",
      description: "Размером с две маленькие монетки. Настолько тонкий и незаметный, что вы забудете о нем сразу после установки.",
      icon: Activity
    },
    {
      title: "Данные каждую минуту",
      description: "Больше не нужно сканировать! Данные передаются автоматически на ваш смартфон по Bluetooth каждые 60 секунд.",
      icon: Smartphone
    },
    {
      title: "Полная защита",
      description: "Опциональные сигналы тревоги предупредят вас о низком или высоком уровне глюкозы в любое время суток.",
      icon: Shield
    },
    {
      title: "Простая установка",
      description: "Однокомпонентный аппликатор позволяет установить сенсор быстро и безболезненно всего за пару секунд.",
      icon: Zap
    }
  ];

  const faqs = [
    { q: "Сколько работает один сенсор?", a: "Каждый сенсор Freestyle Libre 3 работает непрерывно в течение 14 дней." },
    { q: "Нужно ли калибровать сенсор?", a: "Нет, система откалибрована на заводе и не требует калибровки кровью из пальца." },
    { q: "Водонепроницаем ли он?", a: "Да, сенсор водонепроницаем (IP27). Вы можете принимать душ, плавать и заниматься спортом." },
    { q: "С какими телефонами совместим?", a: "Требуется смартфон с NFC и поддержкой Bluetooth LE (iPhone 8 и новее, Android 10+)." }
  ];

  const reviews = [
    {
      name: "Елена С.",
      role: "Диабет 1 типа, 5 лет",
      text: "Это просто спасение! Больше никаких исколотых пальцев. Приложение очень удобное, всегда вижу свой сахар и тренды.",
      rating: 5
    },
    {
      name: "Алексей М.",
      role: "Спортсмен",
      text: "Сенсор держится отлично даже в бассейне. Точность поразительная, сравнивал с глюкометром — расхождения минимальны.",
      rating: 5
    },
    {
      name: "Марина В.",
      role: "Мама ребенка с диабетом",
      text: "Теперь я сплю спокойно. Ночные тревоги на телефон — лучшая функция. Сенсор маленький, ребенку не мешает.",
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
            <div className="flex items-center gap-3 group cursor-pointer">
               <img src={LOGO_URL} alt="Freestyle Libre Logo" className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-libre-yellow font-medium transition-colors">Преимущества</a>
              <a href="#gallery" className="text-gray-300 hover:text-libre-yellow font-medium transition-colors">Галерея</a>
              <a href="#faq" className="text-gray-300 hover:text-libre-yellow font-medium transition-colors">FAQ</a>
            </div>
            <a href="https://t.me/diabetik_biz" target="_blank" rel="noopener noreferrer" className="hidden md:block">
              <Button variant="primary" className="shadow-lg hover:shadow-yellow-400/20">Заказать сейчас</Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-32 lg:pb-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in lg:pr-8">
              <div className="inline-block bg-libre-yellow/20 text-yellow-800 px-4 py-1.5 rounded-full font-bold text-sm tracking-wide uppercase border border-libre-yellow/30">
                Новое поколение CGM
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight text-gray-900">
                Свобода <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-libre-yellow to-yellow-600">
                  под контролем.
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Самый маленький, тонкий и точный сенсор глюкозы в мире. 
                Freestyle Libre 3 меняет правила игры, автоматически передавая данные на ваш телефон.
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
                <p>Выбор 1000+ диабетиков в этом месяце</p>
              </div>
            </div>
            
            {/* Image Container adapted for 706x908 Aspect Ratio */}
            <div className="relative flex items-center justify-center group lg:h-[750px]">
               <div className="absolute inset-0 bg-gradient-to-tr from-libre-yellow/30 to-transparent rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
               
               {/* Using object-contain to respect the 706x908 portrait ratio without cropping */}
               <img 
                 src={HERO_IMAGE} 
                 alt="Freestyle Libre 3 Lifestyle" 
                 className="relative z-10 rounded-3xl drop-shadow-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-700 w-full max-w-[360px] lg:max-w-[480px] h-auto object-contain"
                 style={{ maxHeight: '100%' }}
               />
               
               {/* Floating Badge */}
               <div className="absolute bottom-20 left-0 lg:left-10 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce-slow border border-gray-100">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                     <CheckCircle className="text-green-600 w-6 h-6" />
                   </div>
                   <div>
                     <p className="text-xs text-gray-500">Точность</p>
                     <p className="font-bold text-lg">MARD 7.9%</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Почему Libre 3?</h2>
            <p className="text-xl text-gray-600">
              Технологии будущего, доступные уже сегодня. Забудьте о прокалывании пальцев.
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
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           
           
           <div className="bg-white p-4 md:p-8 rounded-3xl shadow-xl">
             {/* Main Image Display */}
             <div className="relative aspect-[4/3] md:aspect-[16/9] w-full bg-gray-50 rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-gray-100 group">
                
                {/* Previous Button */}
                <button 
                  onClick={handlePrevImage}
                  className="absolute left-4 z-20 p-3 rounded-full bg-white/70 shadow-lg hover:bg-white text-gray-800 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 focus:outline-none"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Next Button */}
                <button 
                  onClick={handleNextImage}
                  className="absolute right-4 z-20 p-3 rounded-full bg-white/70 shadow-lg hover:bg-white text-gray-800 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 focus:outline-none"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                <img 
                  src={GALLERY_IMAGES[activeGalleryIndex]} 
                  alt={`Product view ${activeGalleryIndex + 1}`} 
                  className="w-full h-full object-contain p-4 md:p-8 transition-opacity duration-500"
                  key={activeGalleryIndex} // Force re-render for animation
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
                   <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover bg-white" />
                 </button>
               ))}
             </div>
           </div>
        </div>
      </section>

      {/* Libre 3 Plus Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative order-2 md:order-1 flex justify-center">
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-3xl transform scale-75 opacity-50"></div>
              <img 
                src={PLUS_IMAGE} 
                alt="FreeStyle Libre 3 Plus" 
                className="relative z-10 w-full max-w-md object-contain hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
              />
            </div>
            
            {/* Text Side */}
            <div className="order-1 md:order-2 space-y-8">
              <div className="inline-block bg-libre-yellow text-gray-900 px-4 py-1.5 rounded-full font-bold text-sm tracking-wide uppercase shadow-sm">
                Новинка
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                FreeStyle Libre 3 <span className="text-yellow-500">Plus</span>
              </h2>
              <p className="text-lg text-gray-600">
                Еще больше уверенности с улучшенной версией самого популярного сенсора. 
                Libre 3 Plus создан для тех, кто хочет максимума от системы мониторинга.
              </p>
              
              <div className="space-y-6">
                 <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-yellow-50 transition-colors border border-transparent hover:border-yellow-200 group">
                    <div className="p-3 bg-white rounded-full shadow-sm">
                      <Calendar className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 group-hover:text-gray-900">15 дней работы</h4>
                      <p className="text-sm text-gray-500">Теперь сенсор работает на день дольше стандартной версии.</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-yellow-50 transition-colors border border-transparent hover:border-yellow-200 group">
                    <div className="p-3 bg-white rounded-full shadow-sm">
                      <LinkIcon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 group-hover:text-gray-900">Совместимость с помпами</h4>
                      <p className="text-sm text-gray-500">Интеграция с автоматизированными системами доставки инсулина (AID).</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-yellow-50 transition-colors border border-transparent hover:border-yellow-200 group">
                    <div className="p-3 bg-white rounded-full shadow-sm">
                      <Maximize className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 group-hover:text-gray-900">Тот же размер</h4>
                      <p className="text-sm text-gray-500">Несмотря на новые функции, он остается самым маленьким в мире.</p>
                    </div>
                 </div>
              </div>
              
              <div className="pt-4">
                 <a href="https://t.me/diabetik_biz" target="_blank" rel="noopener noreferrer" className="block w-full">
                   <Button variant="primary" className="w-full text-xl py-4 shadow-xl hover:shadow-yellow-400/50">
                     Заказать
                   </Button>
                 </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FreeStyle Libre Select Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
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
                Настраиваемый диапазон и максимальная гибкость. Libre Select — это выбор тех, кто знает свои цели и не готов к компромиссам.
              </p>

              <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white hover:bg-yellow-50 transition-colors border border-gray-100 hover:border-yellow-200 group">
                    <div className="p-3 bg-libre-yellow/20 rounded-full shadow-sm">
                      <Sliders className="w-6 h-6 text-yellow-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">Настраиваемый диапазон</h4>
                      <p className="text-sm text-gray-500">Задавайте свои целевые значения глюкозы для персонализированных отчетов.</p>
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
                   alt="FreeStyle Libre Select"
                   className="relative z-10 w-full max-w-sm object-contain hover:scale-105 transition-transform duration-500"
                 />
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
           <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Что говорят пользователи</h2>
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

      {/* Merged FAQ and CTA Section */}
      <section id="faq" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: FAQ */}
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-8 text-gray-900">Часто задаваемые вопросы</h2>
              <p className="text-gray-600 mb-10">
                Мы собрали ответы на самые популярные вопросы пользователей, чтобы вы могли быстрее начать пользоваться системой.
              </p>
              <div className="space-y-4">
                {faqs.map((item, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-libre-yellow hover:shadow-md bg-white">
                    <button 
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors group"
                    >
                      <span className="font-bold text-lg text-left text-gray-800">{item.q}</span>
                      <div className={`rounded-full p-2 transition-all duration-500 ${openFaq === idx ? 'bg-libre-yellow rotate-180' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
                         {openFaq === idx ? 
                           <Minus className="text-gray-900 w-4 h-4" /> : 
                           <Plus className="text-gray-500 w-4 h-4" />
                         }
                      </div>
                    </button>
                    {/* CSS Grid Animation for Smooth Height Transition */}
                    <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${openFaq === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 pt-2 text-gray-600 border-t border-gray-100 leading-relaxed">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-sm text-gray-500">
                <p>Не нашли ответ на свой вопрос? <a href="#" className="text-libre-yellow hover:underline font-bold">Напишите нам</a></p>
              </div>
            </div>

            {/* Right Column: CTA Card with Image */}
            <div className="order-1 lg:order-2 lg:sticky lg:top-32 mt-16 lg:mt-0">
              {/* Added relative but REMOVED overflow-hidden to allow logo to pop out top */}
              <div className="bg-libre-yellow rounded-3xl shadow-2xl relative text-center group">
                
                {/* Background pattern container - Needs rounded corners to clip pattern */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                   <div className="absolute inset-0 bg-white/20 pattern-grid-lg opacity-30"></div>
                </div>
                
                {/* Floating Logo Badge - Positioned absolutely at the top center */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20 w-full flex justify-center">
                   <div className="bg-gray-900 rounded-2xl px-6 py-3 shadow-xl border-4 border-white">
                      <img 
                        src={LOGO_URL} 
                        alt="Freestyle Libre Logo" 
                        className="h-10 w-auto object-contain max-w-[200px]" 
                      />
                   </div>
                </div>

                <div className="relative z-10 p-8 lg:p-10 pt-12">
                  <h3 className="text-3xl font-black text-gray-900 mb-4 leading-tight mt-4">
                    Начните жизнь без проколов
                  </h3>
                  <p className="text-gray-900/80 mb-8 font-medium">
                    Закажите сенсоры сегодня и получите контроль над сахаром с доставкой на дом.
                  </p>
                  
                  <div className="space-y-4">
                    <a href="https://t.me/diabetik_biz" target="_blank" rel="noopener noreferrer" className="block w-full">
                      <Button variant="dark" className="w-full text-lg py-4 shadow-xl hover:scale-[1.02] animate-pulse-scale hover:animate-none">
                        Заказать сенсоры
                      </Button>
                    </a>
                  </div>
                  
                  <p className="mt-6 text-xs text-gray-900/60 font-medium">
                    *Не является медицинским советом.
                  </p>
                </div>
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
            <div className="flex items-center gap-3 mb-6 md:mb-0 group cursor-pointer">
               <img src={LOGO_URL} alt="Freestyle Libre" className="h-10 w-auto" />
            </div>
            <div className="flex flex-wrap gap-8 text-gray-400 text-sm justify-center">
              <a href="#" className="hover:text-libre-yellow transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-libre-yellow transition-colors">Условия использования</a>
              <a href="#" className="hover:text-libre-yellow transition-colors">Доставка и оплата</a>
              <a href="#" className="hover:text-libre-yellow transition-colors">Контакты</a>
            </div>
            <div className="mt-6 md:mt-0 text-gray-500 text-sm">
              © 2024 Freestyle Libre Store. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}