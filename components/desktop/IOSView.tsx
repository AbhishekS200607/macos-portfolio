'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowStore } from '@/store/windowStore';
import AboutApp from '../apps/AboutApp';
import SkillsApp from '../apps/SkillsApp';
import ProjectsApp from '../apps/ProjectsApp';
import ResumeApp from '../apps/ResumeApp';
import ContactApp from '../apps/ContactApp';
import SiriAssistant from '../apps/SiriAssistant';
import RoadmapApp from '../apps/RoadmapApp';
import EducationApp from '../apps/EducationApp';
import CareerApp from '../apps/CareerApp';

type AppId = 'about' | 'skills' | 'projects' | 'resume' | 'contact' | 'assistant' | 'roadmap' | 'education' | 'career';

const AppIcon = ({ id }: { id: AppId }) => {
  switch (id) {
    case 'about':
      return <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>;
    case 'skills':
      return <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white"><path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"/></svg>;
    case 'projects':
      return <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>;
    case 'resume':
      return <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>;
    case 'contact':
      return <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>;
    case 'roadmap':
      return <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white"><path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zm11.49 2.09L16.63 4.4c-.39-.39-1.02-.39-1.41 0L11.17 8.45c-.39.39-.39 1.02 0 1.41l4.05 4.05c.39.39 1.02.39 1.41 0l4.05-4.05c.39-.38.39-1.01 0-1.41zm-5.66 5.66l-4.05-4.05c-.39-.39-1.02-.39-1.41 0L5.52 14.1c-.39.39-.39 1.02 0 1.41l4.05 4.05c.39.39 1.02.39 1.41 0l4.05-4.05c.38-.38.38-1.02-.01-1.41z"/></svg>;
    case 'education':
      return <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>;
    case 'career':
      return <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>;
    case 'assistant':
      return <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/></svg>;
  }
};

const apps = [
  { id: 'about' as AppId, name: 'About', color: 'from-blue-500 to-cyan-400' },
  { id: 'skills' as AppId, name: 'Skills', color: 'from-gray-700 to-gray-900' },
  { id: 'projects' as AppId, name: 'Achievements', color: 'from-blue-400 to-indigo-500' },
  { id: 'resume' as AppId, name: 'Resume', color: 'from-yellow-400 to-orange-500' },
  { id: 'contact' as AppId, name: 'Contact', color: 'from-blue-500 to-blue-700' },
  { id: 'roadmap' as AppId, name: 'Startup Goals', color: 'from-purple-500 to-pink-500' },
  { id: 'education' as AppId, name: 'Education Journey', color: 'from-indigo-500 to-purple-600' },
  { id: 'career' as AppId, name: 'Career Vision', color: 'from-green-500 to-emerald-600' },
  { id: 'assistant' as AppId, name: 'Siri', color: 'from-purple-400 to-pink-400' },
];

export default function IOSView() {
  const [openApp, setOpenApp] = useState<AppId | null>(null);
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));

  useState(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(interval);
  });

  const handleAppOpen = (appId: AppId) => {
    setOpenApp(appId);
  };

  const handleAppClose = () => {
    setOpenApp(null);
  };

  const renderAppContent = () => {
    switch (openApp) {
      case 'about': return <AboutApp />;
      case 'skills': return <SkillsApp />;
      case 'projects': return <ProjectsApp />;
      case 'resume': return <ResumeApp />;
      case 'contact': return <ContactApp />;
      case 'assistant': return <SiriAssistant />;
      case 'roadmap': return <RoadmapApp />;
      case 'education': return <EducationApp />;
      case 'career': return <CareerApp />;
      default: return null;
    }
  };

  const getAppTitle = () => {
    return apps.find(app => app.id === openApp)?.name || '';
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* iOS Background */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/ios-wallpaper.jpg)' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      {/* iOS Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-transparent z-50 flex items-center justify-between px-6 text-sm font-semibold">
        <div className="text-white drop-shadow-lg">{time}</div>
        <div className="w-28 h-7 bg-black rounded-[22px]" />
        <div className="flex items-center gap-1.5 text-white drop-shadow-lg">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Home Screen */}
      <AnimatePresence>
        {!openApp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full pt-16 pb-32 px-6 relative z-10"
          >
            <div className="grid grid-cols-4 gap-6 auto-rows-max">
              {apps.map((app, index) => (
                <motion.button
                  key={app.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.05, type: 'spring', stiffness: 300 }}
                  whileTap={{ scale: 0.85 }}
                  onClick={() => handleAppOpen(app.id)}
                  className="flex flex-col items-center gap-2"
                >
                  <div className={`w-16 h-16 rounded-[28px] bg-gradient-to-br ${app.color} shadow-2xl flex items-center justify-center backdrop-blur-xl border border-white/20 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-black/20" />
                    <div className="relative z-10">
                      <AppIcon id={app.id} />
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{app.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen App */}
      <AnimatePresence>
        {openApp && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="absolute inset-0 bg-white z-40 flex flex-col"
          >
            {/* iOS App Header */}
            <div className="h-20 bg-white/80 backdrop-blur-3xl border-b border-white/20 flex items-end pb-2 px-4 justify-between shadow-lg">
              <button
                onClick={handleAppClose}
                className="text-blue-500 font-semibold text-lg active:opacity-50 transition-opacity"
              >
                ← Home
              </button>
              <h1 className="text-lg font-bold text-black">{getAppTitle()}</h1>
              <div className="w-16" />
            </div>

            {/* App Content */}
            <div className="flex-1 overflow-auto">
              {renderAppContent()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* iOS Dock - Liquid Glass */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/15 backdrop-blur-[60px] rounded-[32px] px-5 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-20 border border-white/20">
        <div className="flex items-center gap-5">
          {apps.slice(0, 4).map((app) => (
            <motion.button
              key={app.id}
              whileTap={{ scale: 0.85 }}
              onClick={() => handleAppOpen(app.id)}
              className={`w-14 h-14 rounded-[22px] bg-gradient-to-br ${app.color} shadow-2xl flex items-center justify-center backdrop-blur-xl border border-white/20 relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-black/20" />
              <div className="relative z-10">
                <AppIcon id={app.id} />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 h-1.5 bg-white/60 rounded-full z-20 shadow-lg" />
    </div>
  );
}
