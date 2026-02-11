'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { AppType, useWindowStore } from '@/store/windowStore';
import { useDraggable } from '@/hooks/useDraggable';
import WindowControls from './WindowControls';

interface WindowProps {
  appId: AppType;
  title: string;
  children: React.ReactNode;
  width?: string;
  height?: string;
}

export default function Window({ appId, title, children, width = 'w-[800px]', height = 'h-[600px]' }: WindowProps) {
  const { windows, focusWindow, updatePosition } = useWindowStore();
  const window = windows[appId];
  const { position, handleMouseDown } = useDraggable(window.position);

  useEffect(() => {
    updatePosition(appId, position);
  }, [position, appId, updatePosition]);

  if (!window.isOpen || window.isMinimized) return null;

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 20 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed ${width} ${height} ${window.isMaximized ? 'inset-4' : ''} md:rounded-xl overflow-hidden max-md:inset-0 max-md:w-full max-md:h-full max-md:rounded-none`}
      style={{
        left: window.isMaximized ? undefined : position.x,
        top: window.isMaximized ? undefined : position.y,
        zIndex: window.zIndex,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 0, 0, 0.1)',
      }}
      onClick={() => focusWindow(appId)}
    >
      <div
        className="h-11 glass border-b border-white/20 flex items-center px-4 cursor-move select-none max-md:cursor-default"
        onMouseDown={handleMouseDown}
        onTouchStart={(e) => {
          e.preventDefault();
        }}
      >
        <WindowControls appId={appId} />
        <div className="flex-1 text-center text-sm font-medium text-gray-700">{title}</div>
        <div className="w-16" />
      </div>
      <div className="h-[calc(100%-2.75rem)] overflow-auto bg-white">{children}</div>
    </motion.div>
  );
}
