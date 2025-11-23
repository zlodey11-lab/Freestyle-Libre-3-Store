import React from 'react';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NutritionAnalysis {
  carbsGrams: number;
  breadUnits: number;
  summary: string;
  advice: string;
}