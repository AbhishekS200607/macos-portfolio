'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useWindowStore } from '@/store/windowStore';
import { useDesktopStore } from '@/store/desktopStore';
import DesktopIcon from './DesktopIcon';
import FolderIcon from './FolderIcon';
import ContextMenu from './ContextMenu';
import MenuBar from './MenuBar';
import Dock from './Dock';
import Window from '../windows/Window';
import AboutApp from '../apps/AboutApp';
import SkillsApp from '../apps/SkillsApp';
import ProjectsApp from '../apps/ProjectsApp';
import ResumeApp from '../apps/ResumeApp';
import ContactApp from '../apps/ContactApp';
import SiriAssistant from '../apps/SiriAssistant';
import RoadmapApp from '../apps/RoadmapApp';
import EducationApp from '../apps/EducationApp';
import CareerApp from '../apps/CareerApp';
import IOSView from './IOSView';

export default function Desktop() {
  const { openWindow } = useWindowStore();
  const { items, addFolder, removeItem, renameItem } = useDesktopStore();
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Remove duplicates and keep only unique folders
    const uniqueNames = new Set<string>();
    const duplicates: string[] = [];
    
    items.forEach(item => {
      if (uniqueNames.has(item.name)) {
        duplicates.push(item.id);
      } else {
        uniqueNames.add(item.name);
      }
    });
    
    // Remove duplicate items
    duplicates.forEach(id => removeItem(id));
    
    // Initialize only if no items exist
    if (!initialized && items.length === 0) {
      addFolder('Startup Goals', { x: 100, y: 100 });
      addFolder('Education Journey', { x: 100, y: 100 });
      addFolder('Career Vision', { x: 100, y: 100 });
      addFolder('Achievements', { x: 100, y: 100 });
      setInitialized(true);
    }
  }, [items]);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  const handleNewFolder = () => {
    const position = contextMenu || { x: 100, y: 100 };
    addFolder('New Folder', position);
  };

  if (isMobile) {
    return <IOSView />;
  }

  return (
    <div className="h-screen w-screen overflow-hidden relative" onContextMenu={handleContextMenu}>
      {/* Wallpaper */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/wallpaper.jpg)' }} />
      <div className="absolute inset-0 bg-black/10" />
      <MenuBar />
      
      <div className="pt-6 h-full p-4 pb-20 max-md:pb-16">
        <div className="grid grid-cols-8 gap-4 p-4 max-md:grid-cols-4 max-md:gap-3 max-md:p-2">
          {items.map((item) => (
            <FolderIcon
              key={item.id}
              id={item.id}
              name={item.name}
              onRename={renameItem}
              onDelete={removeItem}
              onOpen={
                item.name === 'Startup Goals' ? () => openWindow('roadmap') :
                item.name === 'Education Journey' ? () => openWindow('education') :
                item.name === 'Career Vision' ? () => openWindow('career') :
                item.name === 'Achievements' ? () => openWindow('projects') :
                undefined
              }
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {contextMenu && (
          <ContextMenu
            x={contextMenu.x}
            y={contextMenu.y}
            onClose={() => setContextMenu(null)}
            onNewFolder={handleNewFolder}
          />
        )}
      </AnimatePresence>

      <Window appId="about" title="About Me" width="w-[700px]" height="h-[550px]">
        <AboutApp />
      </Window>
      <Window appId="skills" title="Terminal" width="w-[600px]" height="h-[450px]">
        <SkillsApp />
      </Window>
      <Window appId="projects" title="Safari" width="w-[900px]" height="h-[600px]">
        <ProjectsApp />
      </Window>
      <Window appId="resume" title="Notes" width="w-[650px]" height="h-[500px]">
        <ResumeApp />
      </Window>
      <Window appId="contact" title="Mail" width="w-[750px]" height="h-[550px]">
        <ContactApp />
      </Window>
      <Window appId="assistant" title="AI Assistant" width="w-[500px]" height="h-[600px]">
        <SiriAssistant />
      </Window>
      <Window appId="roadmap" title="Startup Roadmap" width="w-[900px]" height="h-[650px]">
        <RoadmapApp />
      </Window>
      <Window appId="education" title="Education Journey" width="w-[900px]" height="h-[650px]">
        <EducationApp />
      </Window>
      <Window appId="career" title="Career Roadmap" width="w-[900px]" height="h-[650px]">
        <CareerApp />
      </Window>

      <Dock />
    </div>
  );
}
