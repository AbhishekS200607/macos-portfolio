'use client';

import { motion } from 'framer-motion';
import { useWindowStore } from '@/store/windowStore';
import { useState } from 'react';

const dockApps = [
  { id: 'about' as const, label: 'About', color: 'from-blue-500 to-blue-600', icon: <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg> },
  { id: 'skills' as const, label: 'Skills', color: 'from-gray-800 to-black', icon: <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg> },
  { id: 'projects' as const, label: 'Projects', color: 'from-blue-400 to-cyan-500', icon: <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" /></svg> },
  { id: 'resume' as const, label: 'Resume', color: 'from-yellow-400 to-orange-500', icon: <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" /></svg> },
  { id: 'contact' as const, label: 'Contact', color: 'from-blue-500 to-indigo-600', icon: <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg> },
];

export default function Dock() {
  const { openWindow, closeWindow, windows } = useWindowStore();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showTrash, setShowTrash] = useState(false);

  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50 max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:translate-x-0">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="glass-dark rounded-[22px] px-3 py-3 flex items-end gap-2 border border-white/20 shadow-2xl max-md:rounded-none max-md:justify-around max-md:w-full max-md:py-2"
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
        }}
      >
        {dockApps.map((app, index) => {
          const distance = hoveredIndex !== null ? Math.abs(index - hoveredIndex) : 3;
          const scale = hoveredIndex !== null ? Math.max(1, 1.8 - distance * 0.3) : 1;
          const translateY = hoveredIndex !== null ? Math.max(0, 20 - distance * 8) : 0;

          return (
            <motion.button
              key={app.id}
              animate={{ 
                scale: window.innerWidth >= 768 ? scale : 1,
                y: window.innerWidth >= 768 ? -translateY : 0,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                const window = windows[app.id];
                if (window.isOpen && !window.isMinimized) {
                  closeWindow(app.id);
                } else {
                  openWindow(app.id);
                }
              }}
              className={`relative w-14 h-14 bg-gradient-to-br ${app.color} rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group max-md:w-12 max-md:h-12`}
            >
              <div className="max-md:scale-75">{app.icon}</div>
              {hoveredIndex === index && window.innerWidth >= 768 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-10 bg-gray-900/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap"
                >
                  {app.label}
                </motion.div>
              )}
            </motion.button>
          );
        })}
        
        <div className="w-px h-12 bg-white/30 mx-1 max-md:hidden" />
        
        <motion.button
          animate={{ 
            scale: hoveredIndex === dockApps.length && window.innerWidth >= 768 ? 1.8 : 1,
            y: hoveredIndex === dockApps.length && window.innerWidth >= 768 ? -20 : 0,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          onMouseEnter={() => setHoveredIndex(dockApps.length)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => {
            const window = windows.assistant;
            if (window.isOpen && !window.isMinimized) {
              closeWindow('assistant');
            } else {
              openWindow('assistant');
            }
          }}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer overflow-hidden max-md:w-12 max-md:h-12"
        >
          <img src="/siri-icon.png" alt="Siri" className="w-full h-full object-cover" />
          {hoveredIndex === dockApps.length && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-10 bg-gray-900/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg"
            >
              AI Assistant
            </motion.div>
          )}
        </motion.button>
      </motion.div>
    </div>
  );
}
