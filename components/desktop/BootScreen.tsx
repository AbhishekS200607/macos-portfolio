'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[100] select-none"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/5 to-transparent pointer-events-none" />
      
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mb-16 flex flex-col items-center"
      >
        <div className="w-24 h-24 mb-8 flex items-center justify-center">
          <svg className="text-white" fill="none" height="80" viewBox="0 0 100 100" width="80" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10L15 85H28L50 35L72 85H85L50 10Z" fill="currentColor" />
            <rect fill="currentColor" height="4" width="20" x="40" y="55" />
          </svg>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <div className="w-full max-w-xs px-4 flex flex-col items-center">
        <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden mb-6 ring-1 ring-white/5">
          <motion.div
            className="h-full bg-white rounded-full"
            style={{
              width: `${progress}%`,
              boxShadow: '0 0 15px rgba(255,255,255,0.4)',
            }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Welcome Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center"
        >
          <p className="text-zinc-400 font-light tracking-widest text-sm uppercase mb-1">Welcome</p>
          <h1 className="text-white text-xl font-light tracking-wide">Abhishek S</h1>
        </motion.div>
      </div>

      {/* Status Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-8 right-12 flex items-center gap-6 text-white"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        </svg>
        <span className="text-sm font-light">{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
      </motion.div>

      {/* Skip Button */}
      {progress > 50 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-12"
        >
          <button
            onClick={onComplete}
            className="px-6 py-2 rounded-full border border-white/10 text-zinc-500 hover:text-white hover:border-white/30 transition-all text-xs tracking-widest uppercase flex items-center gap-2 group"
          >
            Press any key to start
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
