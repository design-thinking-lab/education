import React from 'react';
import { UserPreferences } from '../../types';

interface SubjectContentProps {
  title: string;
  content: {
    visual: {
      images: string[];
      description: string;
    };
    audio: {
      url: string;
      transcript: string;
    };
    video: {
      url: string;
      description: string;
    };
  };
  preferences: UserPreferences;
}

export function SubjectContent({ title, content, preferences }: SubjectContentProps) {
  const renderContent = () => {
    switch (preferences.accessibilityMode) {
      case 'visual':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {content.visual.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${title} illustration ${index + 1}`}
                  className="rounded-lg shadow-md"
                />
              ))}
            </div>
            <p className="text-gray-600">{content.visual.description}</p>
          </div>
        );
      case 'audio':
        return (
          <div className="space-y-6">
            <audio controls className="w-full" src={content.audio.url}>
              Your browser does not support the audio element.
            </audio>
            {preferences.enableClosedCaptions && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">{content.audio.transcript}</p>
              </div>
            )}
          </div>
        );
      case 'both':
        return (
          <div className="space-y-6">
            <video
              controls
              className="w-full rounded-lg"
              src={content.video.url}
            >
              Your browser does not support the video element.
            </video>
            <p className="text-gray-600">{content.video.description}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">{title}</h2>
      {renderContent()}
    </div>
  );
}