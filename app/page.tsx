'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import BootScreen from '@/components/desktop/BootScreen';
import Desktop from '@/components/desktop/Desktop';

export default function Home() {
  const [showBoot, setShowBoot] = useState(true);

  return (
    <main>
      <AnimatePresence mode="wait">
        {showBoot ? (
          <BootScreen key="boot" onComplete={() => setShowBoot(false)} />
        ) : (
          <Desktop key="desktop" />
        )}
      </AnimatePresence>
    </main>
  );
}
