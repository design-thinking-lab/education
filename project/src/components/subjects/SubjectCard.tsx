import React from 'react';
import { Icon } from 'lucide-react';

interface SubjectCardProps {
  title: string;
  description: string;
  icon: Icon;
  bgColor: string;
  onClick: () => void;
}

export function SubjectCard({ title, description, icon: IconComponent, bgColor, onClick }: SubjectCardProps) {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 w-full text-left`}
    >
      <IconComponent className="w-12 h-12 text-white mb-4" />
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/90">{description}</p>
    </button>
  );
}