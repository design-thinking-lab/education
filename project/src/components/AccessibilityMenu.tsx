import React from 'react';
import { Settings } from 'lucide-react';
import { UserPreferences } from '../types';

interface Props {
  preferences: UserPreferences;
  onPreferencesChange: (preferences: UserPreferences) => void;
}

export function AccessibilityMenu({ preferences, onPreferencesChange }: Props) {
  return (
    <div className="fixed top-4 right-4 p-4 bg-white rounded-lg shadow-lg" role="menu">
      <div className="flex items-center gap-2 mb-4">
        <Settings className="w-5 h-5" />
        <h2 className="text-lg font-semibold">Accessibility Settings</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Content Preference</label>
          <select 
            value={preferences.accessibilityMode}
            onChange={(e) => onPreferencesChange({
              ...preferences,
              accessibilityMode: e.target.value as AccessibilityPreference
            })}
            className="w-full p-2 border rounded"
          >
            <option value="visual">Visual Content</option>
            <option value="audio">Audio Content</option>
            <option value="both">Both</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="screenReader"
            checked={preferences.enableScreenReader}
            onChange={(e) => onPreferencesChange({
              ...preferences,
              enableScreenReader: e.target.checked
            })}
          />
          <label htmlFor="screenReader">Enable Screen Reader</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="closedCaptions"
            checked={preferences.enableClosedCaptions}
            onChange={(e) => onPreferencesChange({
              ...preferences,
              enableClosedCaptions: e.target.checked
            })}
          />
          <label htmlFor="closedCaptions">Enable Closed Captions</label>
        </div>

        <div>
          <label className="block mb-2">Font Size</label>
          <input
            type="range"
            min="12"
            max="24"
            value={preferences.fontSize}
            onChange={(e) => onPreferencesChange({
              ...preferences,
              fontSize: Number(e.target.value)
            })}
            className="w-full"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="highContrast"
            checked={preferences.highContrast}
            onChange={(e) => onPreferencesChange({
              ...preferences,
              highContrast: e.target.checked
            })}
          />
          <label htmlFor="highContrast">High Contrast Mode</label>
        </div>
      </div>
    </div>
  );
}