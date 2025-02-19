import React, { useState } from 'react';
import { Video, Headphones, FileText, HandMetal } from 'lucide-react';
import { ContentModal } from './ContentModal';
import { VideoContent } from './VideoContent';
import { AudioContent } from './AudioContent';

interface Resource {
  title: string;
  description: string;
  icon: any;
  preview: string;
  contentType: 'video' | 'audio' | 'text' | 'sign';
  contentUrl?: string;
  fullDescription?: string;
}

const resources: Resource[] = [
  {
    title: 'Video Lectures',
    description: 'High-quality video content with sign language interpretation',
    icon: Video,
    preview: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    contentType: 'video',
    contentUrl: '/sample/lecture.mp4',
    fullDescription: 'Learn through our comprehensive video lectures with professional instructors and clear visual demonstrations.'
  },
  {
    title: 'Audio Learning',
    description: 'Clear audio recordings with adjustable playback speeds',
    icon: Headphones,
    preview: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45',
    contentType: 'audio',
    contentUrl: '/sample/lecture.mp3',
    fullDescription: 'Experience crystal-clear audio recordings with adjustable playback speeds and detailed explanations.'
  },
  {
    title: 'Interactive Transcripts',
    description: 'Synchronized transcripts with highlighting and search',
    icon: FileText,
    preview: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e',
    contentType: 'text',
    fullDescription: 'Follow along with interactive transcripts that highlight in real-time as the content plays.'
  },
  {
    title: 'Sign Language',
    description: 'Professional sign language videos for all content',
    icon: HandMetal,
    preview: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70',
    contentType: 'sign',
    contentUrl: '/sample/sign-language.mp4',
    fullDescription: 'Learn with professional sign language interpreters in high-quality video format.'
  }
];

export function LearningResources() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const renderContent = (resource: Resource) => {
    switch (resource.contentType) {
      case 'video':
      case 'sign':
        return (
          <VideoContent
            title={resource.title}
            videoUrl={resource.contentUrl || ''}
            description={resource.fullDescription || ''}
          />
        );
      case 'audio':
        return (
          <AudioContent
            title={resource.title}
            audioUrl={resource.contentUrl || ''}
            description={resource.fullDescription || ''}
          />
        );
      case 'text':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">{resource.title}</h2>
            <div className="prose max-w-none">
              <p>{resource.fullDescription}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Learning Resources</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Multiple formats to support every learning style and need
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource) => (
            <button
              key={resource.title}
              onClick={() => setSelectedResource(resource)}
              className="text-left group relative overflow-hidden rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <img 
                src={resource.preview} 
                alt={resource.title}
                className="w-full h-64 object-cover transform transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end">
                <resource.icon className="w-8 h-8 text-white mb-2" />
                <h3 className="text-2xl font-bold text-white mb-2">{resource.title}</h3>
                <p className="text-white/90">{resource.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <ContentModal
        isOpen={!!selectedResource}
        onClose={() => setSelectedResource(null)}
      >
        {selectedResource && renderContent(selectedResource)}
      </ContentModal>
    </section>
  );
}