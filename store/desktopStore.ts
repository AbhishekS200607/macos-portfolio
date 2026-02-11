import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface DesktopItem {
  id: string;
  type: 'folder' | 'file';
  name: string;
  position: { x: number; y: number };
}

interface DesktopStore {
  items: DesktopItem[];
  addFolder: (name: string, position: { x: number; y: number }) => void;
  removeItem: (id: string) => void;
  renameItem: (id: string, newName: string) => void;
}

export const useDesktopStore = create<DesktopStore>()(
  persist(
    (set) => ({
      items: [],
      addFolder: (name, position) =>
        set((state) => ({
          items: [
            ...state.items,
            {
              id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
              type: 'folder',
              name,
              position,
            },
          ],
        })),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      renameItem: (id, newName) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, name: newName } : item
          ),
        })),
    }),
    {
      name: 'desktop-storage',
    }
  )
);
