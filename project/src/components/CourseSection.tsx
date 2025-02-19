import React from 'react';
import { CourseCard } from './CourseCard';
import { Course, UserPreferences } from '../types';

interface Props {
  courses: Course[];
  preferences: UserPreferences;
}

export function CourseSection({ courses, preferences }: Props) {
  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} preferences={preferences} />
          ))}
        </div>
      </div>
    </section>
  );
}