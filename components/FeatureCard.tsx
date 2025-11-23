import React from 'react';
import { Feature } from '../types';

interface FeatureCardProps extends Feature {
  delay?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, delay = 0 }) => {
  return (
    <div 
      className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 bg-libre-yellow/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-libre-yellow transition-colors duration-300">
        <Icon className="w-8 h-8 text-yellow-700 group-hover:text-gray-900" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};
