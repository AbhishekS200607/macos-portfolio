'use client';

import { useState, useEffect } from 'react';
import { useWindowStore } from '@/store/windowStore';

const appTitles = {
  about: 'About Me',
  skills: 'Terminal',
  projects: 'Safari',
  resume: 'Notes',
  contact: 'Mail',
  assistant: 'AI Assistant',
};

export default function MenuBar() {
  const [currentTime, setCurrentTime] = useState('');
  const [isDark, setIsDark] = useState(true);
  const { windows } = useWindowStore();
  
  const activeWindow = Object.values(windows).find(w => w.isOpen && !w.isMinimized);
  const activeTitle = activeWindow ? appTitles[activeWindow.id as keyof typeof appTitles] : 'Finder';

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString('en-US', { 
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit'
      });
      setCurrentTime(time);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-6 bg-black/30 backdrop-blur-2xl border-b border-white/10 flex items-center justify-between px-4 z-50 text-white text-xs font-medium">
      <div className="flex items-center gap-5">
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <span className="font-semibold">{activeTitle}</span>
        <span className="text-white/80">File</span>
        <span className="text-white/80">Edit</span>
        <span className="text-white/80">View</span>
        <span className="text-white/80 max-md:hidden">Go</span>
        <span className="text-white/80 max-md:hidden">Window</span>
        <span className="text-white/80 max-md:hidden">Help</span>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsDark(!isDark)}
          className="hover:bg-white/10 p-1 rounded transition-colors"
          title="Toggle theme"
        >
          {isDark ? (
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          )}
        </button>
        <svg className="w-3.5 h-3.5 max-md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          <path fillRule="evenodd" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12M20.25 6.75v10.5a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 17.25V6.75m16.5 0a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6.75" clipRule="evenodd" />
        </svg>
        <span className="text-white/90 max-md:hidden">{currentTime}</span>
      </div>
    </div>
  );
}
