'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface FolderIconProps {
  id: string;
  name: string;
  onRename: (id: string, newName: string) => void;
  onDelete: (id: string) => void;
  onOpen?: () => void;
}

export default function FolderIcon({ id, name, onRename, onDelete, onOpen }: FolderIconProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [showMenu, setShowMenu] = useState(false);

  const getFolderIcon = () => {
    if (name === 'About') {
      return (
        <svg className="w-9 h-9 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
        </svg>
      );
    }
    if (name === 'Skills') {
      return (
        <svg className="w-9 h-9 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" />
        </svg>
      );
    }
    if (name === 'Startup Goals') {
      return (
        <svg className="w-9 h-9 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
      );
    }
    if (name === 'Education Journey') {
      return (
        <svg className="w-9 h-9 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      );
    }
    if (name === 'Career Vision') {
      return (
        <svg className="w-9 h-9 text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      );
    }
    if (name === 'Achievements') {
      return (
        <svg className="w-9 h-9 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    if (name === 'Resume') {
      return (
        <svg className="w-9 h-9 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
        </svg>
      );
    }
    if (name === 'Contact') {
      return (
        <svg className="w-9 h-9 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      );
    }
    return (
      <svg className="w-9 h-9 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
      </svg>
    );
  };

  const handleDoubleClick = () => {
    if (onOpen) {
      onOpen();
    }
  };

  const handleBlur = () => {
    if (editName.trim()) {
      onRename(id, editName.trim());
    } else {
      setEditName(name);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleBlur();
    } else if (e.key === 'Escape') {
      setEditName(name);
      setIsEditing(false);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onDoubleClick={handleDoubleClick}
      className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/10 transition-all duration-200 relative cursor-pointer"
      onContextMenu={(e) => {
        e.preventDefault();
        setShowMenu(true);
      }}
    >
      <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center shadow-lg" onDoubleClick={handleDoubleClick}>
        {getFolderIcon()}
      </div>
      {isEditing ? (
        <input
          type="text"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="text-xs bg-white/90 text-gray-900 px-2 py-1 rounded border-2 border-blue-500 outline-none w-20 text-center"
          autoFocus
        />
      ) : (
        <span
          className="text-xs text-white drop-shadow-lg font-medium"
          onDoubleClick={handleDoubleClick}
        >
          {name}
        </span>
      )}

      {showMenu && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-full left-0 z-50 glass-card rounded-lg shadow-2xl py-2 min-w-[150px] mt-2"
          >
            <button
              onClick={() => {
                setIsEditing(true);
                setShowMenu(false);
              }}
              className="w-full px-4 py-2 text-left text-sm hover:bg-blue-500 hover:text-white transition-colors"
            >
              Rename
            </button>
            <button
              onClick={() => {
                onDelete(id);
                setShowMenu(false);
              }}
              className="w-full px-4 py-2 text-left text-sm hover:bg-red-500 hover:text-white transition-colors"
            >
              Delete
            </button>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
