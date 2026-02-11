'use client';

import { useEffect, useState } from 'react';

const commands = [
  { cmd: 'whoami', output: 'Abhishek S' },
  { cmd: '', output: '' },
  { cmd: 'skills --list', output: '' },
  { cmd: '', output: 'HTML' },
  { cmd: '', output: 'CSS' },
  { cmd: '', output: 'JavaScript' },
  { cmd: '', output: 'TypeScript' },
  { cmd: '', output: 'React' },
  { cmd: '', output: 'Next.js' },
  { cmd: '', output: 'Node.js' },
  { cmd: '', output: 'Spring Boot' },
  { cmd: '', output: 'Java' },
  { cmd: '', output: 'MySQL' },
  { cmd: '', output: 'MongoDB' },
  { cmd: '', output: 'Git' },
];

export default function SkillsApp() {
  const [displayedLines, setDisplayedLines] = useState<typeof commands>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < commands.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, commands[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className="h-full bg-black p-6 font-mono text-sm text-green-400">
      <div className="space-y-1">
        {displayedLines.map((line, index) => (
          <div key={index}>
            {line.cmd && <span className="text-blue-400">$ {line.cmd}</span>}
            {line.output && <div className="text-green-400">{line.output}</div>}
          </div>
        ))}
        {currentIndex < commands.length && (
          <div className="flex">
            <span className="text-blue-400">$ </span>
            <span className="animate-pulse ml-1">▊</span>
          </div>
        )}
      </div>
    </div>
  );
}
