import React, { useEffect } from 'react';
import { ArrowLeft, Mail, Send, Clock, MapPin } from 'lucide-react';
import { Button } from './Button';

interface ContactsProps {
  onBack: () => void;
  logoUrl: string;
}

export const Contacts: React.FC<ContactsProps> = ({ onBack, logoUrl }) => {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h1>
            <p className="text-gray-400 text-lg">Свяжитесь с нами любым удобным способом. Мы всегда рады помочь.</p>
          </div>
          
          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-8">
            
            {/* Telegram Card - Highlighted */}
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 flex flex-col items-start hover:shadow-lg transition-shadow">
              <div className="bg-blue-500 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Telegram</h3>
              <p className="text-gray-600 mb-6 flex-1 text-sm leading-relaxed">
                Самый быстрый способ связи. Операторы отвечают в течение 15 минут.
              </p>
              <a 
                href="https://t.me/diabetik_biz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="primary" className="w-full bg-blue-500 hover:bg-blue-600 text-white shadow-blue-500/20 border-none">
                  Написать в Telegram
                </Button>
              </a>
            </div>

            {/* Other Contacts */}
            <div className="space-y-8 flex flex-col justify-center">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-libre-yellow/20 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-yellow-700" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <a href="mailto:shopdiabetik@gmail.com" className="text-gray-600 hover:text-libre-yellow transition-colors block mt-1">
                    shopdiabetik@gmail.com
                  </a>
                  <p className="text-xs text-gray-400 mt-1">По вопросам сотрудничества и заказов</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Режим работы</h4>
                  <p className="text-gray-600 mt-1">Ежедневно: 09:00 - 21:00 (МСК)</p>
                  <p className="text-xs text-gray-400 mt-1">Прием заказов через сайт — круглосуточно</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">География</h4>
                  <p className="text-gray-600 mt-1">Доставка по всей России и СНГ</p>
                  <p className="text-xs text-gray-400 mt-1">Центральный склад: г. Санкт-Петербург</p>
                </div>
              </div>
            </div>

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