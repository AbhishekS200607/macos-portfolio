'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowStore } from '@/store/windowStore';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const knowledgeBase: Record<string, string> = {
  'who are you': "I'm Abhishek's AI assistant. I can tell you all about Abhishek S, his projects, skills, and how to contact him!",
  'who is abhishek': "Abhishek S is a passionate Full Stack Developer currently pursuing B.Tech in Computer Science and Business Systems at College of Engineering and Management, Punnapra. He's in his 2nd year (2024-2028) and has completed 9+ personal projects.",
  'tell me about abhishek': "Abhishek S is a talented developer specializing in Java, Spring Boot, React, and Next.js. He's built impressive projects like Zentra Billing Software, MediHub, Relost, and RestoConnect. He's actively seeking internship opportunities!",
  'what are his skills': "Abhishek is proficient in React (90%), TypeScript (85%), Node.js (80%), and Java (75%). He also knows Spring Boot, Next.js, Python, MySQL, MongoDB, PostgreSQL, Git, and Docker.",
  'projects': "Abhishek has completed 9+ projects including: Zentra Billing Software (billing solution), MediHub (hospital booking), Relost (lost & found platform), RestoConnect (restaurant management), Hexa Game, Mindz AI, Megalon, and EasyFin.",
  'contact': "You can reach Abhishek at:\n📧 Email: asn18123@gmail.com\n💼 LinkedIn: abhishek-s-b35388339\n🐙 GitHub: AbhishekS200607\n📸 Instagram: @abhi.shek__s",
  'education': "Abhishek is currently in his 2nd year of B.Tech in Computer Science and Business Systems at College of Engineering and Management, Punnapra (2024-2028).",
  'experience': "Abhishek is currently a student focused on learning and building projects. He has completed 9+ personal projects and is actively seeking internship opportunities to gain professional experience.",
};

export default function SiriAssistant() {
  const { openWindow } = useWindowStore();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Abhishek's AI assistant. Ask me anything about Abhishek - his projects, skills, education, or how to contact him!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase().trim();
    
    // Check for navigation commands
    if (lowerQuery.includes('show project') || lowerQuery.includes('open project')) {
      openWindow('projects');
      return "Opening Projects window for you!";
    }
    if (lowerQuery.includes('show about') || lowerQuery.includes('open about')) {
      openWindow('about');
      return "Opening About Me window!";
    }
    if (lowerQuery.includes('show skill') || lowerQuery.includes('open skill') || lowerQuery.includes('tell') && lowerQuery.includes('skill')) {
      openWindow('skills');
      return "Abhishek is proficient in React (90%), TypeScript (85%), Node.js (80%), and Java (75%). He also knows Spring Boot, Next.js, Python, MySQL, MongoDB, PostgreSQL, Git, and Docker. Opening Skills terminal!";
    }
    if (lowerQuery.includes('show resume') || lowerQuery.includes('open resume')) {
      openWindow('resume');
      return "Opening Resume!";
    }
    if (lowerQuery.includes('show contact') || lowerQuery.includes('open contact')) {
      openWindow('contact');
      return "Opening Contact form!";
    }
    
    // Check knowledge base
    if (lowerQuery.includes('skill')) {
      return "Abhishek is proficient in React (90%), TypeScript (85%), Node.js (80%), and Java (75%). He also knows Spring Boot, Next.js, Python, MySQL, MongoDB, PostgreSQL, Git, and Docker.";
    }
    if (lowerQuery.includes('project')) {
      return "Abhishek has completed 9+ projects including: Zentra Billing Software (billing solution), MediHub (hospital booking), Relost (lost & found platform), RestoConnect (restaurant management), Hexa Game, Mindz AI, Megalon, and EasyFin.";
    }
    if (lowerQuery.includes('who') && (lowerQuery.includes('abhishek') || lowerQuery.includes('he'))) {
      return "Abhishek S is a passionate Full Stack Developer currently pursuing B.Tech in Computer Science and Business Systems at College of Engineering and Management, Punnapra. He's in his 2nd year (2024-2028) and has completed 9+ personal projects.";
    }
    if (lowerQuery.includes('education')) {
      return "Abhishek is currently in his 2nd year of B.Tech in Computer Science and Business Systems at College of Engineering and Management, Punnapra (2024-2028).";
    }
    if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('reach')) {
      return "You can reach Abhishek at:\n📧 Email: asn18123@gmail.com\n💼 LinkedIn: abhishek-s-b35388339\n🐙 GitHub: AbhishekS200607\n📸 Instagram: @abhi.shek__s";
    }
    if (lowerQuery.includes('experience')) {
      return "Abhishek is currently a student focused on learning and building projects. He has completed 9+ personal projects and is actively seeking internship opportunities to gain professional experience.";
    }
    
    for (const [key, value] of Object.entries(knowledgeBase)) {
      if (lowerQuery.includes(key)) {
        return value;
      }
    }

    if (lowerQuery.includes('hello') || lowerQuery.includes('hi')) {
      return "Hello! I'm here to help you learn about Abhishek. What would you like to know?";
    }
    if (lowerQuery.includes('github')) {
      return "Abhishek's GitHub: github.com/AbhishekS200607 - Check out his 9+ amazing projects!";
    }
    if (lowerQuery.includes('email')) {
      return "You can email Abhishek at: asn18123@gmail.com";
    }
    if (lowerQuery.includes('linkedin')) {
      return "Connect with Abhishek on LinkedIn: linkedin.com/in/abhishek-s-b35388339";
    }
    if (lowerQuery.includes('instagram')) {
      return "Follow Abhishek on Instagram: @abhi.shek__s";
    }

    return "I can tell you about Abhishek's projects, skills, education, experience, or how to contact him. What would you like to know?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const response = getResponse(input);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleListening = () => {
    if (!isListening) {
      // Start speech recognition
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = () => {
          setIsListening(true);
        };

        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInput(transcript);
          setIsListening(false);
          
          // Auto-send the voice input
          setTimeout(() => {
            const userMessage: Message = {
              id: Date.now().toString(),
              text: transcript,
              isUser: true,
              timestamp: new Date(),
            };
            setMessages((prev) => [...prev, userMessage]);
            
            setTimeout(() => {
              const response = getResponse(transcript);
              const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: response,
                isUser: false,
                timestamp: new Date(),
              };
              setMessages((prev) => [...prev, assistantMessage]);
              
              // Speak the response
              if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(response);
                utterance.rate = 1.0;
                utterance.pitch = 1.0;
                window.speechSynthesis.speak(utterance);
              }
            }, 500);
          }, 100);
        };

        recognition.onerror = () => {
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognition.start();
      } else {
        alert('Speech recognition is not supported in your browser.');
      }
    } else {
      setIsListening(false);
    }
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <div className="glass-card border-b border-gray-200/50 p-4 flex items-center gap-3">
        <motion.div
          animate={{ scale: isListening ? [1, 1.2, 1] : 1 }}
          transition={{ repeat: isListening ? Infinity : 0, duration: 1.5 }}
          className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center"
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
        </motion.div>
        <div>
          <h2 className="font-semibold text-gray-900">AI Assistant</h2>
          <p className="text-xs text-gray-600">Ask me about Abhishek</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-md ${
                  message.isUser
                    ? 'bg-blue-500 text-white rounded-br-sm'
                    : 'bg-white text-gray-900 rounded-bl-sm border border-gray-200'
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                <p className={`text-xs mt-1 ${message.isUser ? 'text-blue-100' : 'text-gray-600'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="glass-card border-t border-gray-200/50 p-4">
        <div className="flex gap-2">
          <button
            onClick={toggleListening}
            className={`p-3 rounded-full transition-all ${
              isListening
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-gradient-to-br from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600'
            } text-white shadow-lg`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about Abhishek..."
            className="flex-1 px-4 py-3 rounded-full border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white shadow-lg transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {['Who is Abhishek?', 'Projects', 'Skills', 'Contact'].map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setInput(suggestion)}
              className="px-3 py-1 text-xs bg-white hover:bg-gray-100 text-gray-700 rounded-full border border-gray-300 transition-all"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
