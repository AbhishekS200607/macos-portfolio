'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface ContextMenuProps {
  x: number;
  y: number;
  onClose: () => void;
  onNewFolder: () => void;
}

export default function ContextMenu({ x, y, onClose, onNewFolder }: ContextMenuProps) {
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.1 }}
        className="fixed z-50 glass-card rounded-lg shadow-2xl py-2 min-w-[200px]"
        style={{ left: x, top: y }}
      >
        <button
          onClick={() => {
            onNewFolder();
            onClose();
          }}
          className="w-full px-4 py-2 text-left text-sm hover:bg-blue-500 hover:text-white transition-colors flex items-center gap-3"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
          </svg>
          New Folder
        </button>
      </motion.div>
    </>
  );
}
