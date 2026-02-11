'use client';

export default function ResumeApp() {
  const handleDownload = () => {
    const printContent = document.getElementById('resume-content');
    if (!printContent) return;
    
    const printWindow = window.open('', '', 'width=800,height=600');
    if (!printWindow) return;
    
    printWindow.document.write(`
      <html>
        <head>
          <title>Abhishek_S_Resume</title>
          <style>
            body { font-family: Georgia, serif; margin: 40px; }
            .header { text-align: center; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 2px solid #000; }
            .header h1 { font-size: 32px; margin-bottom: 10px; }
            .header .contact { font-size: 12px; }
            .section { margin-bottom: 20px; }
            .section h2 { font-size: 18px; font-weight: bold; margin-bottom: 10px; padding-bottom: 5px; border-bottom: 1px solid #666; }
            .skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
            .skill-item p:first-child { font-weight: 600; margin-bottom: 5px; }
            .skill-item p:last-child { font-size: 13px; }
            .project { margin-bottom: 15px; }
            .project-title { font-weight: bold; }
            .project-desc { font-size: 13px; margin: 5px 0; }
            .project-tech { font-size: 11px; color: #666; }
            .education-header { display: flex; justify-content: space-between; margin-bottom: 5px; }
            .education-header p { font-weight: bold; }
            .education-details { font-size: 13px; }
            @media print { body { margin: 20px; } }
          </style>
        </head>
        <body>
          ${printContent.innerHTML}
        </body>
      </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };

  return (
    <div className="h-full bg-white p-8 overflow-auto" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <button 
            onClick={handleDownload} 
            className="px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white transition-colors text-sm print:hidden"
          >
            Download PDF
          </button>
        </div>

        <div id="resume-content">
          {/* Header */}
          <div className="header text-center mb-6 pb-4 border-b-2 border-gray-900">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">ABHISHEK S</h1>
            <div className="contact flex justify-center flex-wrap gap-3 text-xs text-gray-700">
              <span>+91 9605210198</span>
              <span>|</span>
              <span>asn18123@gmail.com</span>
              <span>|</span>
              <span>github.com/AbhishekS200607</span>
              <span>|</span>
              <span>linkedin.com/in/abhishek-s-b35388339</span>
              <span>|</span>
              <span>Punnapra, Kerala</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="section mb-5">
            <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b border-gray-400">PROFESSIONAL SUMMARY</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Second-year BTech Computer Science student with hands-on experience in full-stack web development. 
              Built production-ready applications including MediHub (hospital token booking system) and multiple SaaS platforms 
              using modern tech stacks. Passionate about healthtech and startup ecosystems, seeking internship opportunities 
              to contribute to innovative web solutions while expanding technical expertise.
            </p>
          </div>

          {/* Skills */}
          <div className="section mb-5">
            <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b border-gray-400">SKILLS</h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="font-semibold text-gray-900 mb-1 text-sm">Frontend</p>
                <p className="text-xs text-gray-700">HTML, CSS, JavaScript, React, Next.js, Tailwind CSS</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1 text-sm">Backend</p>
                <p className="text-xs text-gray-700">Node.js, Spring Boot, Express.js, REST APIs</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1 text-sm">Tools & Database</p>
                <p className="text-xs text-gray-700">Firebase, Supabase, MySQL, MongoDB, Git, GitHub, VS Code</p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="section mb-5">
            <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b border-gray-400">PROJECTS</h2>
            <div className="space-y-3">
              <div>
                <p className="font-bold text-gray-900 text-sm">MediHub - Hospital Token Booking System</p>
                <p className="text-xs text-gray-700 mb-1">Real-time queue management system with patient records, appointment scheduling, and doctor availability tracking</p>
                <p className="text-xs text-gray-600">Tech Stack: Next.js, Node.js, MongoDB, Firebase | GitHub: github.com/AbhishekS200607/medihub</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Zentra Billing Software</p>
                <p className="text-xs text-gray-700 mb-1">Comprehensive billing solution with invoice generation, inventory management, and analytics dashboard</p>
                <p className="text-xs text-gray-600">Tech Stack: Spring Boot, React, MySQL, REST APIs | GitHub: github.com/AbhishekS200607/zentra</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">RestoConnect - Restaurant Management Platform</p>
                <p className="text-xs text-gray-700 mb-1">Full-featured restaurant platform with table booking, order management, and real-time kitchen updates</p>
                <p className="text-xs text-gray-600">Tech Stack: React, Spring Boot, PostgreSQL, WebSocket | GitHub: github.com/AbhishekS200607/restoconnect</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Relost - Community Lost & Found Platform</p>
                <p className="text-xs text-gray-700 mb-1">Geolocation-based platform for reporting and finding lost items with image recognition and notification system</p>
                <p className="text-xs text-gray-600">Tech Stack: Next.js, TypeScript, MongoDB, Supabase | GitHub: github.com/AbhishekS200607/relost</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="section mb-5">
            <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b border-gray-400">EDUCATION</h2>
            <div>
              <div className="flex justify-between items-start mb-1">
                <p className="font-bold text-gray-900 text-sm">Bachelor of Technology - Computer Science and Business Systems</p>
                <p className="text-gray-700 text-sm">2024 - 2028</p>
              </div>
              <p className="text-xs text-gray-700">College of Engineering and Management, Punnapra | APJ Abdul Kalam Technological University (KTU)</p>
              <p className="text-xs text-gray-600 mt-1">Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Object-Oriented Programming, Web Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
