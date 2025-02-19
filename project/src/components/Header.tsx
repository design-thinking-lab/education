import React from 'react';
import { GraduationCap } from 'lucide-react';
import { AccessibilityMenu } from './AccessibilityMenu';
import { UserPreferences } from '../types';

interface Props {
  preferences: UserPreferences;
  onPreferencesChange: (preferences: UserPreferences) => void;
}

export function Header({ preferences, onPreferencesChange }: Props) {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">LearnAbility</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#courses" className="text-gray-600 hover:text-blue-600">Courses</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
          </nav>
          <AccessibilityMenu preferences={preferences} onPreferencesChange={onPreferencesChange} />
        </div>
      </div>
    </header>
  );
}