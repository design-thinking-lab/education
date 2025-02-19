import React from 'react';
import { GraduationCap, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6" />
              <span className="text-xl font-bold">LearnAbility</span>
            </div>
            <p className="text-gray-400">
              Making education accessible for everyone through adaptive learning technologies.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white">Courses</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-gray-400">support@learnability.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-gray-400">1-800-LEARN</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest courses and features.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LearnAbility. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}