import React from 'react';

interface AudioContentProps {
  title: string;
  audioUrl: string;
  description: string;
}

export function AudioContent({ title, audioUrl, description }: AudioContentProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="bg-gray-50 p-6 rounded-lg">
        <audio
          className="w-full"
          controls
          src={audioUrl}
        >
          Your browser does not support the audio element.
        </audio>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}