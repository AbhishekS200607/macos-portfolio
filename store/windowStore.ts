import { create } from 'zustand';

export type AppType = 'about' | 'skills' | 'projects' | 'resume' | 'contact' | 'assistant' | 'roadmap' | 'education' | 'career';

interface WindowState {
  id: AppType;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
}

interface WindowStore {
  windows: Record<AppType, WindowState>;
  highestZIndex: number;
  openWindow: (id: AppType) => void;
  closeWindow: (id: AppType) => void;
  minimizeWindow: (id: AppType) => void;
  maximizeWindow: (id: AppType) => void;
  focusWindow: (id: AppType) => void;
  updatePosition: (id: AppType, position: { x: number; y: number }) => void;
}

const initialWindows: Record<AppType, WindowState> = {
  about: { id: 'about', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 1, position: { x: 100, y: 80 } },
  skills: { id: 'skills', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 1, position: { x: 150, y: 100 } },
  projects: { id: 'projects', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 1, position: { x: 200, y: 120 } },
  resume: { id: 'resume', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 1, position: { x: 250, y: 140 } },
  contact: { id: 'contact', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 1, position: { x: 300, y: 160 } },
  assistant: { id: 'assistant', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 1, position: { x: 350, y: 180 } },
  roadmap: { id: 'roadmap', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 1, position: { x: 120, y: 90 } },
  education: { id: 'education', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 1, position: { x: 140, y: 100 } },
  career: { id: 'career', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 1, position: { x: 160, y: 110 } },
};

export const useWindowStore = create<WindowStore>((set) => ({
  windows: initialWindows,
  highestZIndex: 1,
  openWindow: (id) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isOpen: true, isMinimized: false, zIndex: state.highestZIndex + 1 },
      },
      highestZIndex: state.highestZIndex + 1,
    })),
  closeWindow: (id) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isOpen: false },
      },
    })),
  minimizeWindow: (id) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isMinimized: !state.windows[id].isMinimized },
      },
    })),
  maximizeWindow: (id) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isMaximized: !state.windows[id].isMaximized },
      },
    })),
  focusWindow: (id) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], zIndex: state.highestZIndex + 1 },
      },
      highestZIndex: state.highestZIndex + 1,
    })),
  updatePosition: (id, position) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], position },
      },
    })),
}));
