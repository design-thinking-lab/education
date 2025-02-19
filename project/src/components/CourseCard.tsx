import React from 'react';
import { Book, Volume2, Video } from 'lucide-react';
import { Course, UserPreferences } from '../types';

interface Props {
  course: Course;
  preferences: UserPreferences;
}

export function CourseCard({ course, preferences }: Props) {
  const getContentBasedOnPreference = () => {
    switch (preferences.accessibilityMode) {
      case 'visual':
        return (
          <div className="space-y-4">
            <img 
              src={course.visualContent} 
              alt={course.title}
              className="w-full h-48 object-cover rounded"
            />
            {preferences.enableClosedCaptions && course.transcription && (
              <div className="p-2 bg-gray-100 rounded">
                <p>{course.transcription}</p>
              </div>
            )}
          </div>
        );
      case 'audio':
        return (
          <div className="space-y-4">
            {course.audioContent && (
              <audio controls className="w-full">
                <source src={course.audioContent} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        );
      case 'both':
        return (
          <div className="space-y-4">
            {course.signLanguageVideo && (
              <video controls className="w-full">
                <source src={course.signLanguageVideo} type="video/mp4" />
                {preferences.enableClosedCaptions && (
                  <track 
                    kind="captions" 
                    src={course.transcription} 
                    label="English" 
                    default 
                  />
                )}
                Your browser does not support the video element.
              </video>
            )}
          </div>
        );
    }
  };

  return (
    <div 
      className={`p-6 rounded-lg shadow-lg ${
        preferences.highContrast ? 'bg-black text-white' : 'bg-white'
      }`}
      style={{ fontSize: `${preferences.fontSize}px` }}
      tabIndex={0}
      role="article"
    >
      <div className="flex items-center gap-4 mb-4">
        <h3 className="text-xl font-bold">{course.title}</h3>
        <div className="flex gap-2">
          {course.visualContent && <Book className="w-5 h-5" />}
          {course.audioContent && <Volume2 className="w-5 h-5" />}
          {course.signLanguageVideo && <Video className="w-5 h-5" />}
        </div>
      </div>
      
      <p className="mb-4">{course.description}</p>
      
      {getContentBasedOnPreference()}
      
      <div className="mt-4">
        <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
          {course.difficulty}
        </span>
      </div>
    </div>
  );
}