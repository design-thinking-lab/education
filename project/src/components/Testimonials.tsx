import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "The adaptive learning features have made it possible for me to learn at my own pace and in my preferred way.",
    author: "Sarah J.",
    role: "Visual Learning Student"
  },
  {
    id: 2,
    text: "The audio content and screen reader support are excellent. I can finally learn independently.",
    author: "Michael R.",
    role: "Audio Learning Student"
  },
  {
    id: 3,
    text: "Sign language videos with captions have transformed how I engage with the content.",
    author: "Emily T.",
    role: "Sign Language Student"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Student Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="p-6 bg-gray-50 rounded-lg">
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}