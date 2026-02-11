'use client';

import { motion } from 'framer-motion';

interface DesktopIconProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

export default function DesktopIcon({ icon, label, onClick }: DesktopIconProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/10 transition-all duration-200"
    >
      <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center shadow-lg">
        {icon}
      </div>
      <span className="text-xs text-white drop-shadow-lg font-medium">{label}</span>
    </motion.button>
  );
}
