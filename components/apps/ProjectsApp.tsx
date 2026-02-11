'use client';

const projects = [
  {
    title: 'Zentra Billing Software',
    description: 'Comprehensive billing solution for businesses with invoice management, reporting, and automated payment tracking',
    tech: ['JavaScript', 'Node.js', 'MySQL'],
    github: 'https://github.com/AbhishekS200607/zentrabillingsoftware01',
    demo: '#',
  },
  {
    title: 'Zentra Product System',
    description: 'Product management and inventory tracking system with real-time updates and analytics dashboard',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/AbhishekS200607/Zentraaa',
    demo: '#',
  },
  {
    title: 'RestoConnect',
    description: 'Restaurant management platform connecting customers with dining experiences and reservation systems',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/AbhishekS200607/restoconnect',
    demo: '#',
  },
  {
    title: 'MediHub Enterprise HMS',
    description: 'Real-time Hospital Management System with role-based access for Patients, Doctors, and Admins. Features live appointment queues and instant notifications',
    tech: ['HTML', 'CSS', 'JavaScript', 'Real-time'],
    github: 'https://github.com/AbhishekS200607/MEDIHUB',
    demo: '#',
  },
  {
    title: 'Relost - Lost & Found',
    description: 'Community-driven lost and found platform connecting people with their belongings using modern web technologies',
    tech: ['TypeScript', 'React', 'Node.js'],
    github: 'https://github.com/AbhishekS200607/relost-lost-found',
    demo: '#',
  },
  {
    title: 'Hexa Game',
    description: 'Gamified fitness platform making workouts engaging and fun with interactive game mechanics',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/AbhishekS200607/hexa-game',
    demo: '#',
  },
  {
    title: 'Mindz AI Companion',
    description: 'Personal AI chat assistant for mental wellness, productivity, and daily support',
    tech: ['HTML', 'JavaScript', 'AI'],
    github: 'https://github.com/AbhishekS200607/mindz-ai-companion',
    demo: '#',
  },
  {
    title: 'Megalon',
    description: 'Full-stack web application built with modern JavaScript frameworks and tools',
    tech: ['JavaScript', 'Node.js', 'Express'],
    github: 'https://github.com/AbhishekS200607/megalon',
    demo: '#',
  },
  {
    title: 'EasyFin',
    description: 'Financial management platform for easy tracking and budgeting',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/AbhishekS200607/easyfin',
    demo: '#',
  },
];

export default function ProjectsApp() {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Safari Toolbar */}
      <div className="glass border-b border-white/30">
        <div className="h-11 flex items-center px-3 gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer" />
          </div>
          <div className="flex items-center gap-1 ml-2">
            <button className="p-1 hover:bg-gray-200 rounded">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-1 hover:bg-gray-200 rounded">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex-1 mx-3 bg-white rounded-md px-3 py-1.5 text-sm text-gray-700 border border-gray-300 shadow-sm flex items-center gap-2">
            <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600">abhishek.dev/projects</span>
          </div>
          <button className="p-1 hover:bg-gray-200 rounded">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
          <p className="text-gray-600 mb-8">Explore my latest work and contributions</p>
          
          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 max-md:gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      View Code
                    </a>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
