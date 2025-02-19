import React from 'react';

interface VideoContentProps {
  title: string;
  videoUrl: string;
  description: string;
}

export function VideoContent({ title, videoUrl, description }: VideoContentProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="aspect-video bg-black rounded-lg overflow-hidden">
        <video
          className="w-full h-full"
          controls
          autoPlay
          src={videoUrl}
        >
          Your browser does not support the video element.
        </video>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}