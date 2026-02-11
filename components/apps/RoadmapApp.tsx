'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const roadmapSteps = [
  {
    year: '2024-2025',
    phase: 'Foundation',
    status: 'in-progress',
    milestones: [
      { title: 'Complete B.Tech 2nd Year', done: true, description: 'Focus on core CS subjects' },
      { title: 'Build 10+ Projects', done: true, description: '9 projects completed, 1 more to go' },
      { title: 'Master Full Stack', done: false, description: 'React, Node.js, Spring Boot' },
      { title: 'Get First Internship', done: false, description: 'Gain industry experience' },
    ],
  },
  {
    year: '2025-2026',
    phase: 'Growth',
    status: 'upcoming',
    milestones: [
      { title: 'Advanced Tech Skills', done: false, description: 'Cloud, DevOps, Microservices' },
      { title: 'Freelance Projects', done: false, description: 'Build client base & portfolio' },
      { title: 'Network Building', done: false, description: 'Connect with entrepreneurs' },
      { title: 'Startup Idea Validation', done: false, description: 'Research market needs' },
    ],
  },
  {
    year: '2026-2027',
    phase: 'Preparation',
    status: 'upcoming',
    milestones: [
      { title: 'Complete B.Tech', done: false, description: 'Graduate with honors' },
      { title: 'Build MVP', done: false, description: 'Create minimum viable product' },
      { title: 'Find Co-founders', done: false, description: 'Assemble core team' },
      { title: 'Secure Seed Funding', done: false, description: 'Angel investors or bootstrapping' },
    ],
  },
  {
    year: '2027-2028',
    phase: 'Launch',
    status: 'future',
    milestones: [
      { title: 'Register Company', done: false, description: 'Legal entity formation' },
      { title: 'Launch Beta', done: false, description: 'Get first 100 users' },
      { title: 'Product-Market Fit', done: false, description: 'Iterate based on feedback' },
      { title: 'Scale Operations', done: false, description: 'Grow team & revenue' },
    ],
  },
  {
    year: '2028+',
    phase: 'Scale',
    status: 'future',
    milestones: [
      { title: 'Series A Funding', done: false, description: 'Raise capital for growth' },
      { title: 'Expand Team', done: false, description: 'Hire 10+ employees' },
      { title: 'Market Expansion', done: false, description: 'Enter new markets' },
      { title: 'Profitability', done: false, description: 'Achieve sustainable growth' },
    ],
  },
];

export default function RoadmapApp() {
  const [selectedPhase, setSelectedPhase] = useState(0);

  return (
    <div className="h-full bg-gradient-to-br from-indigo-50 to-purple-50 overflow-auto">
      <div className="p-6 max-md:p-3">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 max-md:mb-6"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2 max-md:text-2xl">
              <svg className="inline-block w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              Startup Journey
            </h1>
            <p className="text-gray-600 text-sm max-md:text-xs">From Student to Entrepreneur</p>
          </motion.div>

          {/* Zigzag Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 -translate-x-1/2" />
            
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className={`relative mb-8 max-md:mb-6 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                } md:w-[calc(50%+2rem)]`}
              >
                {/* Connector Line to Center */}
                <div
                  className={`hidden md:block absolute top-6 h-0.5 bg-gradient-to-r ${
                    index % 2 === 0
                      ? 'right-0 left-auto w-12 from-blue-500 to-transparent'
                      : 'left-0 right-auto w-12 from-transparent to-purple-500'
                  }`}
                />

                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setSelectedPhase(index)}
                  className={`hidden md:block absolute top-6 w-6 h-6 rounded-full border-4 border-white shadow-lg cursor-pointer z-10 ${
                    index % 2 === 0 ? '-right-3' : '-left-3'
                  } ${
                    step.status === 'in-progress'
                      ? 'bg-blue-500 animate-pulse'
                      : step.status === 'upcoming'
                      ? 'bg-purple-500'
                      : 'bg-gray-400'
                  }`}
                />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`bg-white rounded-xl shadow-lg p-4 max-md:p-3 border-2 transition-all ${
                    selectedPhase === index ? 'border-blue-500' : 'border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3 max-md:flex-col max-md:items-start max-md:gap-1">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 max-md:text-lg">{step.phase}</h2>
                      <p className="text-xs text-gray-500">{step.year}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold max-md:text-[10px] max-md:px-2 max-md:py-0.5 flex items-center gap-1 ${
                        step.status === 'in-progress'
                          ? 'bg-blue-100 text-blue-700'
                          : step.status === 'upcoming'
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {step.status === 'in-progress' ? (
                        <><svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg> Now</>
                      ) : step.status === 'upcoming' ? (
                        <><svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg> Soon</>
                      ) : (
                        <><svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> Future</>
                      )}
                    </span>
                  </div>

                  <div className="space-y-2 max-md:space-y-1.5">
                    {step.milestones.map((milestone, mIndex) => (
                      <motion.div
                        key={mIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 * mIndex }}
                        className={`flex items-start gap-2 p-2 max-md:p-1.5 rounded-lg transition-colors ${
                          milestone.done ? 'bg-green-50' : 'bg-gray-50'
                        }`}
                      >
                        <div
                          className={`mt-0.5 w-4 h-4 max-md:w-3 max-md:h-3 rounded-full flex items-center justify-center flex-shrink-0 ${
                            milestone.done ? 'bg-green-500' : 'bg-gray-300'
                          }`}
                        >
                          {milestone.done && (
                            <svg className="w-2.5 h-2.5 max-md:w-2 max-md:h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className={`font-semibold text-sm max-md:text-xs ${
                            milestone.done ? 'text-green-900' : 'text-gray-900'
                          }`}>
                            {milestone.title}
                          </h4>
                          <p className="text-xs max-md:text-[10px] text-gray-600 truncate">{milestone.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-3 max-md:mt-2">
                    <div className="flex justify-between text-[10px] text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>
                        {step.milestones.filter((m) => m.done).length}/{step.milestones.length}
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: `${(step.milestones.filter((m) => m.done).length / step.milestones.length) * 100}%`,
                        }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 max-md:mt-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 max-md:p-4 text-white text-center"
          >
            <h3 className="text-xl font-bold mb-2 max-md:text-lg flex items-center justify-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Vision
            </h3>
            <p className="text-sm max-md:text-xs opacity-90">
              Build a successful tech startup solving real-world problems. From student developer to entrepreneur.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
