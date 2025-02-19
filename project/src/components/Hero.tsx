import React from 'react';
import { BookOpen, Headphones, HandMetal } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Learning Made Accessible for Everyone
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Empowering students with adaptive learning experiences tailored to individual needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <BookOpen className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Visual Learning</h3>
              <p className="text-gray-600">Enhanced visual content with customizable display options</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <Headphones className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Audio Learning</h3>
              <p className="text-gray-600">High-quality audio content with screen reader support</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <HandMetal className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Sign Language</h3>
              <p className="text-gray-600">Professional sign language videos with captions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}