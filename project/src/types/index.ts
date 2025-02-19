export type AccessibilityPreference = 'visual' | 'audio' | 'both';

export interface Course {
  id: string;
  title: string;
  description: string;
  visualContent?: string;
  audioContent?: string;
  signLanguageVideo?: string;
  transcription?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface UserPreferences {
  accessibilityMode: AccessibilityPreference;
  fontSize: number;
  highContrast: boolean;
  enableKeyboardNavigation: boolean;
  enableScreenReader: boolean;
  enableClosedCaptions: boolean;
}