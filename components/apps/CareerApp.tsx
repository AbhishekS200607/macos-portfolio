'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const careerSteps = [
  {
    phase: 'Student Developer',
    years: '2024-2025',
    status: 'current',
    goals: [
      { title: 'Complete B.Tech 2nd Year', description: 'Focus on CS fundamentals & DSA' },
      { title: 'Build 10+ Projects', description: 'Create diverse portfolio projects' },
      { title: 'Master Full Stack', description: 'React, Node.js, Spring Boot, Databases' },
      { title: 'Contribute to Open Source', description: 'GitHub contributions & collaboration' },
    ],
    skills: ['React', 'Spring Boot', 'MySQL', 'Git', 'Problem Solving'],
  },
  {
    phase: 'Intern Developer',
    years: '2025-2026',
    status: 'next',
    goals: [
      { title: 'Secure Internship', description: 'Join a tech company or startup' },
      { title: 'Learn Industry Practices', description: 'Agile, CI/CD, Code reviews' },
      { title: 'Build Real Products', description: 'Work on production applications' },
      { title: 'Network & Mentor', description: 'Connect with senior developers' },
    ],
    skills: ['Cloud (AWS/Azure)', 'DevOps', 'Microservices', 'Testing', 'Team Collaboration'],
  },
  {
    phase: 'Junior Developer',
    years: '2026-2028',
    status: 'future',
    goals: [
      { title: 'First Full-Time Job', description: 'Software Engineer role' },
      { title: 'Master Tech Stack', description: 'Become expert in chosen technologies' },
      { title: 'Lead Small Features', description: 'Take ownership of modules' },
      { title: 'Freelance Projects', description: 'Build side income & portfolio' },
    ],
    skills: ['System Design', 'Architecture', 'Performance', 'Security', 'Leadership'],
  },
  {
    phase: 'Mid-Level Developer',
    years: '2028-2030',
    status: 'future',
    goals: [
      { title: 'Senior Engineer Track', description: 'Technical leadership role' },
      { title: 'Mentor Juniors', description: 'Guide & train new developers' },
      { title: 'Architect Solutions', description: 'Design scalable systems' },
      { title: 'Launch Startup MVP', description: 'Start building own product' },
    ],
    skills: ['Team Leadership', 'Mentoring', 'Product Thinking', 'Business Strategy'],
  },
  {
    phase: 'Senior Developer / Entrepreneur',
    years: '2030+',
    status: 'future',
    goals: [
      { title: 'Tech Lead / CTO', description: 'Lead engineering teams' },
      { title: 'Successful Startup', description: 'Scale own tech company' },
      { title: 'Industry Expert', description: 'Speaker, blogger, influencer' },
      { title: 'Give Back', description: 'Mentor next generation' },
    ],
    skills: ['Strategic Vision', 'Team Building', 'Fundraising', 'Scaling', 'Innovation'],
  },
];

export default function CareerApp() {
  const [selectedPhase, setSelectedPhase] = useState(0);

  return (
    <div className="h-full bg-gradient-to-br from-green-50 to-teal-50 overflow-auto">
      <div className="p-6 max-md:p-3">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 max-md:mb-6"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2 max-md:text-2xl">
              <svg className="inline-block w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              Career Roadmap
            </h1>
            <p className="text-gray-600 text-sm max-md:text-xs">From Student to Tech Leader</p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-teal-500 to-blue-500 -translate-x-1/2" />
            
            {careerSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className={`relative mb-8 max-md:mb-6 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                } md:w-[calc(50%+2rem)]`}
              >
                {/* Connector Line */}
                <div
                  className={`hidden md:block absolute top-6 h-0.5 bg-gradient-to-r ${
                    index % 2 === 0
                      ? 'right-0 left-auto w-12 from-green-500 to-transparent'
                      : 'left-0 right-auto w-12 from-transparent to-teal-500'
                  }`}
                />

                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setSelectedPhase(index)}
                  className={`hidden md:block absolute top-6 w-6 h-6 rounded-full border-4 border-white shadow-lg cursor-pointer z-10 ${
                    index % 2 === 0 ? '-right-3' : '-left-3'
                  } ${
                    step.status === 'current'
                      ? 'bg-green-500 animate-pulse'
                      : step.status === 'next'
                      ? 'bg-teal-500'
                      : 'bg-gray-400'
                  }`}
                />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`bg-white rounded-xl shadow-lg p-4 max-md:p-3 border-2 transition-all ${
                    selectedPhase === index ? 'border-green-500' : 'border-transparent'
                  }`}
                >
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-bold text-gray-900 max-md:text-lg">{step.phase}</h2>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
                          step.status === 'current'
                            ? 'bg-green-100 text-green-700'
                            : step.status === 'next'
                            ? 'bg-teal-100 text-teal-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {step.status === 'current' ? (
                          <><svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg> Now</>
                        ) : step.status === 'next' ? (
                          <><svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M13 3l-1.41 1.41L16.17 9H3v2h13.17l-4.58 4.59L13 17l7-7-7-7z"/></svg> Next</>
                        ) : (
                          <><svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> Future</>
                        )}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">{step.years}</p>

                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Goals:</h3>
                    <div className="space-y-2 max-md:space-y-1.5 mb-3">
                      {step.goals.map((goal, gIndex) => (
                        <div key={gIndex} className="flex items-start gap-2 p-2 max-md:p-1.5 rounded-lg bg-green-50">
                          <svg className="w-4 h-4 max-md:w-3 max-md:h-3 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm max-md:text-xs font-semibold text-gray-900">{goal.title}</p>
                            <p className="text-xs max-md:text-[10px] text-gray-600">{goal.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Key Skills:</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {step.skills.map((skill, sIndex) => (
                        <span key={sIndex} className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs max-md:text-[10px] font-medium">
                          {skill}
                        </span>
                      ))}
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
            className="mt-8 max-md:mt-6 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-6 max-md:p-4 text-white text-center"
          >
            <h3 className="text-xl font-bold mb-2 max-md:text-lg flex items-center justify-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Career Vision
            </h3>
            <p className="text-sm max-md:text-xs opacity-90">
              A 6+ year journey from student developer to tech leader. Focus on continuous learning, building real products, and eventually launching your own startup while giving back to the community.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
