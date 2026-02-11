'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Calendar, Award, Code2, Sparkles, Briefcase } from 'lucide-react';
import { useState } from 'react';

const skills = [
  { name: 'React', level: 90, color: 'from-cyan-500 to-blue-500' },
  { name: 'TypeScript', level: 85, color: 'from-blue-600 to-indigo-600' },
  { name: 'Node.js', level: 80, color: 'from-green-500 to-emerald-600' },
  { name: 'Java', level: 75, color: 'from-orange-500 to-red-500' },
];

const stats = [
  { label: 'Projects', value: '9+', icon: Code2 },
  { label: 'Year', value: '2nd', icon: Calendar },
  { label: 'Skills', value: '12+', icon: Award },
];

export default function AboutApp() {
  const [activeTab, setActiveTab] = useState<'profile' | 'experience' | 'education'>('profile');

  return (
    <div className="flex h-full max-md:flex-col">
      <div className="w-56 glass border-r border-white/20 p-4 max-md:w-full max-md:border-r-0 max-md:border-b max-md:p-3">
        <div className="space-y-2">
          <motion.div whileHover={{ x: 4 }} onClick={() => setActiveTab('profile')} className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${activeTab === 'profile' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" /></svg>
            <span className="text-sm font-medium">Profile</span>
          </motion.div>
          <motion.div whileHover={{ x: 4 }} onClick={() => setActiveTab('experience')} className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${activeTab === 'experience' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 text-gray-700'}`}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg>
            <span className="text-sm">Experience</span>
          </motion.div>
          <motion.div whileHover={{ x: 4 }} onClick={() => setActiveTab('education')} className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${activeTab === 'education' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 text-gray-700'}`}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>
            <span className="text-sm">Education</span>
          </motion.div>
        </div>
      </div>

      <div className="flex-1 p-8 overflow-auto bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-3xl mx-auto space-y-8">
          {activeTab === 'profile' && (
            <>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-6 max-md:flex-col max-md:items-center">
                <motion.div whileHover={{ scale: 1.05, rotate: 5 }} className="relative">
                  <img src="/profile.jpg" alt="Abhishek S" className="w-32 h-32 rounded-3xl object-cover shadow-2xl" />
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg" />
                </motion.div>
                <div className="flex-1 max-md:text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">Abhishek S</h1>
                  <p className="text-lg text-gray-600 mb-4 flex items-center gap-2 max-md:justify-center"><Sparkles className="w-5 h-5 text-yellow-500" />Full Stack Developer</p>
                  <div className="flex gap-3 max-md:justify-center">
                    <a href="https://github.com/AbhishekS200607" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors"><Github className="w-5 h-5" /></a>
                    <a href="https://www.linkedin.com/in/abhishek-s-b35388339" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"><Linkedin className="w-5 h-5" /></a>
                    <a href="https://www.instagram.com/abhi.shek__s?igsh=MTY2c3hnMzVqdjB5cg==" target="_blank" rel="noopener noreferrer" className="p-2 bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white rounded-lg transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                    <a href="mailto:asn18123@gmail.com" className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"><Mail className="w-5 h-5" /></a>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (<motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + index * 0.1 }} whileHover={{ y: -5 }} className="glass-card p-5 rounded-2xl text-center"><Icon className="w-8 h-8 mx-auto mb-2 text-blue-600" /><div className="text-3xl font-bold text-gray-900">{stat.value}</div><div className="text-sm text-gray-600">{stat.label}</div></motion.div>);
                })}
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2"><Code2 className="w-5 h-5 text-blue-600" />Top Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (<motion.div key={skill.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 + index * 0.1 }}><div className="flex justify-between mb-2"><span className="text-sm font-medium text-gray-700">{skill.name}</span><span className="text-sm text-gray-500">{skill.level}%</span></div><div className="h-2 bg-gray-200 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ delay: 1 + index * 0.1, duration: 1, ease: 'easeOut' }} className={`h-full bg-gradient-to-r ${skill.color} rounded-full`} /></div></motion.div>))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} className="glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">About Me</h3>
                <p className="text-gray-600 leading-relaxed">Passionate full-stack developer currently pursuing B.Tech in Computer Science and Business Systems. I specialize in building scalable applications using Java, Spring Boot, and modern JavaScript frameworks. Completed 9+ personal projects and actively seeking internship opportunities.</p>
              </motion.div>
            </>
          )}

          {activeTab === 'experience' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience</h2>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-8 rounded-2xl text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center"><Briefcase className="w-10 h-10 text-white" /></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Currently a Student</h3>
                <p className="text-gray-600 leading-relaxed max-w-md mx-auto">Focused on learning and building projects. Completed 9+ personal projects including Zentra Billing Software, MediHub, Relost, RestoConnect, and more. Actively seeking internship opportunities to gain professional experience.</p>
                <div className="mt-6 flex gap-3 justify-center"><a href="https://github.com/AbhishekS200607" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-medium transition-colors">View Projects</a></div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'education' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Education</h2>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl"><svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">B.Tech - Computer Science and Business Systems</h3>
                    <p className="text-gray-600 mb-1">College of Engineering and Management, Punnapra</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3"><Calendar className="w-4 h-4" /><span>2nd Year • 2024-2028</span></div>
                    <div className="mt-4 space-y-2"><p className="text-sm text-gray-600"><strong>Relevant Coursework:</strong> Data Structures, Algorithms, Web Development, Database Management, Software Engineering</p></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
