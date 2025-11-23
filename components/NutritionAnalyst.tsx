import React, { useState } from 'react';
import { analyzeMeal } from '../services/geminiService';
import { NutritionAnalysis } from '../types';
import { Button } from './Button';
import { Utensils, Calculator, Loader2, Lightbulb, Salad } from 'lucide-react';

export const NutritionAnalyst: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<NutritionAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await analyzeMeal(input);
      setResult(data);
    } catch (err) {
      setError("Не удалось проанализировать блюдо. Пожалуйста, попробуйте еще раз.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row min-h-[400px]">
      {/* Input Side */}
      <div className="flex-1 p-8 bg-gradient-to-br from-gray-50 to-white flex flex-col justify-center">
        <div className="mb-6 flex items-center gap-3">
            <div className="bg-libre-yellow/20 p-2 rounded-xl">
                <Salad className="w-6 h-6 text-yellow-700" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Что вы планируете съесть?</h3>
        </div>
        
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Например: Борщ со сметаной 250г, 2 кусочка черного хлеба, картофельное пюре с котлетой..."
          className="w-full h-32 p-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-libre-yellow/50 resize-none mb-6 text-gray-700 placeholder:text-gray-400 shadow-inner"
        />

        <Button 
          onClick={handleAnalyze} 
          disabled={isLoading || !input.trim()}
          className="w-full flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> Анализирую...
            </>
          ) : (
            <>
              <Calculator className="w-5 h-5" /> Рассчитать ХЕ
            </>
          )}
        </Button>
      </div>

      {/* Result Side */}
      <div className="flex-1 bg-gray-900 p-8 text-white flex flex-col relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-libre-yellow rounded-full blur-[100px] opacity-10 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

        {!result && !isLoading && !error && (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 text-center space-y-4">
                <Utensils className="w-16 h-16 opacity-20" />
                <p>Введите описание еды слева,<br/>чтобы получить расчет.</p>
            </div>
        )}

        {isLoading && (
            <div className="h-full flex flex-col items-center justify-center space-y-4">
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-gray-700 border-t-libre-yellow rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2 className="w-6 h-6 text-libre-yellow animate-pulse" />
                    </div>
                </div>
                <p className="text-gray-400 animate-pulse">Gemini считает углеводы...</p>
            </div>
        )}

        {error && (
            <div className="h-full flex flex-col items-center justify-center text-red-400 text-center">
                <p>{error}</p>
            </div>
        )}

        {result && (
            <div className="relative z-10 h-full flex flex-col animate-fade-in">
                <div className="mb-8">
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Итого Хлебных Единиц</p>
                    <div className="flex items-baseline gap-4">
                        <span className="text-6xl font-black text-libre-yellow">{result.breadUnits}</span>
                        <span className="text-2xl font-bold text-white">ХЕ</span>
                    </div>
                    <p className="text-gray-400 mt-2">~ {result.carbsGrams} г углеводов</p>
                </div>

                <div className="space-y-6 flex-1">
                    <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
                        <p className="text-gray-300 leading-relaxed text-sm">
                            {result.summary}
                        </p>
                    </div>

                    <div className="flex gap-4 items-start">
                        <div className="bg-libre-yellow/20 p-2 rounded-full shrink-0 mt-1">
                            <Lightbulb className="w-5 h-5 text-libre-yellow" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-1">Совет по компенсации</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {result.advice}
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 pt-4 border-t border-gray-800 text-xs text-gray-600 text-center">
                    Расчет является приблизительным. Всегда проверяйте уровень глюкозы сенсором Libre 3.
                </div>
            </div>
        )}
      </div>
    </div>
  );
};