'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const educationSteps = [
  {
    period: 'LKG - 7th',
    years: '2011-2018',
    institution: 'MMCS',
    fullName: 'Maria Montessori Central School',
    status: 'completed',
    achievements: ['Foundation in academics', 'Early education', 'Basic skills development'],
  },
  {
    period: '8th - 10th',
    years: '2018-2021',
    institution: 'GMHSS Ambalapuzha',
    fullName: 'Government Model Higher Secondary School, Ambalapuzha',
    status: 'completed',
    achievements: ['SSLC completed', 'Science stream', 'Academic excellence'],
  },
  {
    period: '11th - 12th',
    years: '2021-2023',
    institution: 'SNMHSS Purakkad',
    fullName: 'Sree Narayana Memorial Higher Secondary School, Purakkad',
    status: 'completed',
    achievements: ['Higher Secondary completed', 'Computer Science focus', 'College preparation'],
  },
  {
    period: 'B.Tech (2nd Year)',
    years: '2024-2028',
    institution: 'CEMP Punnapra',
    fullName: 'College of Engineering and Management, Punnapra',
    status: 'in-progress',
    achievements: ['CS & Business Systems', '9+ projects completed', 'Full-stack development'],
  },
];

export default function EducationApp() {
  const [selectedIndex, setSelectedIndex] = useState(3);

  return (
    <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-50 overflow-auto">
      <div className="p-6 max-md:p-3">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 max-md:mb-6"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2 max-md:text-2xl">
              <svg className="inline-block w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
              </svg>
              Education Journey
            </h1>
            <p className="text-gray-600 text-sm max-md:text-xs">From Foundation to Engineering</p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 -translate-x-1/2" />
            
            {educationSteps.map((step, index) => (
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
                      ? 'right-0 left-auto w-12 from-blue-500 to-transparent'
                      : 'left-0 right-auto w-12 from-transparent to-indigo-500'
                  }`}
                />

                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setSelectedIndex(index)}
                  className={`hidden md:block absolute top-6 w-6 h-6 rounded-full border-4 border-white shadow-lg cursor-pointer z-10 ${
                    index % 2 === 0 ? '-right-3' : '-left-3'
                  } ${
                    step.status === 'in-progress'
                      ? 'bg-green-500 animate-pulse'
                      : 'bg-blue-500'
                  }`}
                />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`bg-white rounded-xl shadow-lg p-4 max-md:p-3 border-2 transition-all ${
                    selectedIndex === index ? 'border-blue-500' : 'border-transparent'
                  }`}
                >
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-bold text-gray-900 max-md:text-lg">{step.period}</h2>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
                          step.status === 'in-progress'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {step.status === 'in-progress' ? (
                          <><svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg> Current</>
                        ) : (
                          <><svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg> Done</>
                        )}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-1">{step.years}</p>
                    <h3 className="text-lg font-semibold text-indigo-600 max-md:text-base">{step.institution}</h3>
                    <p className="text-xs text-gray-600 max-md:text-[10px]">{step.fullName}</p>
                  </div>

                  <div className="space-y-2 max-md:space-y-1.5">
                    {step.achievements.map((achievement, aIndex) => (
                      <motion.div
                        key={aIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 * aIndex }}
                        className="flex items-start gap-2 p-2 max-md:p-1.5 rounded-lg bg-indigo-50"
                      >
                        <svg className="w-4 h-4 max-md:w-3 max-md:h-3 text-indigo-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm max-md:text-xs text-gray-700">{achievement}</p>
                      </motion.div>
                    ))}
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
            className="mt-8 max-md:mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 max-md:p-4 text-white text-center"
          >
            <h3 className="text-xl font-bold mb-2 max-md:text-lg flex items-center justify-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Journey Summary
            </h3>
            <p className="text-sm max-md:text-xs opacity-90">
              14+ years of continuous learning from primary education to engineering. Currently pursuing B.Tech in Computer Science & Business Systems, building real-world projects and preparing for a career in technology.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
