import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SubjectsSection } from './components/subjects/SubjectsSection';
import { LearningResources } from './components/learning/LearningResources';
import { CourseSection } from './components/CourseSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';


// ... rest of the imports and course data ...

function App() {
  const [preferences, setPreferences] = useState<UserPreferences>({
    accessibilityMode: 'visual',
    fontSize: 16,
    highContrast: false,
    enableKeyboardNavigation: true,
    enableScreenReader: false,
    enableClosedCaptions: true
  });

  return (
    <div className={preferences.highContrast ? 'bg-black text-white' : 'bg-white'}>
      <Header 
        preferences={preferences}
        onPreferencesChange={setPreferences}
      />
      <Hero />
      <SubjectsSection preferences={preferences} />
      <LearningResources />
      
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;