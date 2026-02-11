'use client';

import { AppType, useWindowStore } from '@/store/windowStore';

interface WindowControlsProps {
  appId: AppType;
}

export default function WindowControls({ appId }: WindowControlsProps) {
  const { closeWindow, minimizeWindow, maximizeWindow } = useWindowStore();

  return (
    <div className="window-controls flex gap-2">
      <button
        onClick={() => closeWindow(appId)}
        className="w-3 h-3 rounded-full bg-[#FF5F57] hover:bg-[#FF4136] flex items-center justify-center group transition-colors"
      >
        <svg className="w-2 h-2 text-[#8B0000] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <button
        onClick={() => minimizeWindow(appId)}
        className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFB000] flex items-center justify-center group transition-colors"
      >
        <svg className="w-2 h-2 text-[#8B5A00] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
        </svg>
      </button>
      <button
        onClick={() => maximizeWindow(appId)}
        className="w-3 h-3 rounded-full bg-[#28CA42] hover:bg-[#1FA832] flex items-center justify-center group transition-colors"
      >
        <svg className="w-1.5 h-1.5 text-[#006400] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      </button>
    </div>
  );
}
