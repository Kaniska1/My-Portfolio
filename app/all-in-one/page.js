'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Linkedin, Github, Moon, Sun, Computer, Code, Palette, Mic } from 'lucide-react';
import Image from 'next/image';

const Loader = () => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-purple-100 dark:bg-gray-900 z-50">
    <div className="relative w-24 h-24">
      <div className="absolute top-0 left-0 w-full h-full border-8 border-purple-300 rounded-full animate-spin"></div>
      <div className="absolute top-0 left-0 w-full h-full border-8 border-purple-500 rounded-full animate-ping"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-purple-500">K</div>
    </div>
  </div>
);

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('system');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme]);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('system');
    } else {
      setTheme('dark');
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-100 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navbar */}
      <nav className="bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 p-4 relative z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold font-object-sans">Kaniska</h1>
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-purple-300 transition-colors font-montserrat">Home</a>
            <a href="#about" className="hover:text-purple-300 transition-colors font-montserrat">About</a>
            <a href="#skills" className="hover:text-purple-300 transition-colors font-montserrat">Skills</a>
            <a href="#tech-stack" className="hover:text-purple-300 transition-colors font-montserrat">Tech Stack</a>
            <a href="#projects" className="hover:text-purple-300 transition-colors font-montserrat">Projects</a>
          </div>
          <div className="flex items-center">
            <button onClick={toggleTheme} className="mr-4">
              {theme === 'dark' ? <Moon size={24} /> : theme === 'light' ? <Sun size={24} /> : <Computer size={24} />}
            </button>
            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <a href="#home" className="block hover:text-purple-300 transition-colors font-montserrat">Home</a>
            <a href="#about" className="block hover:text-purple-300 transition-colors font-montserrat">About</a>
            <a href="#skills" className="block hover:text-purple-300 transition-colors font-montserrat">Skills</a>
            <a href="#tech-stack" className="block hover:text-purple-300 transition-colors font-montserrat">Tech Stack</a>
            <a href="#projects" className="block hover:text-purple-300 transition-colors font-montserrat">Projects</a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Home Section */}
        <section id="home" className="text-center py-20">
          <h2 className="text-6xl font-bold mb-4 animate-pulse font-object-sans">Hi, I am Kaniska</h2>
          <Image
            src="/images/profile-picture.jpg"
            alt="Kaniska"
            width={300}
            height={300}
            className="mx-auto rounded-full border-4 border-purple-500"
          />
        </section>

        {/* About Section */}
        <section id="about" className="my-20">
          <div className="bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 rounded-lg p-8 flex flex-col md:flex-row items-center backdrop-filter backdrop-blur-lg">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/images/profile-picture.jpg"
                alt="Kaniska"
                width={300}
                height={300}
                className="rounded-full border-4 border-purple-500"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-3xl font-bold mb-4 font-object-sans">About Me</h3>
              <p className="text-lg font-montserrat">
                👋 Hi! I&apos;m Kaniska, a passionate computer science engineering student with a focus on AI, ML, Data Science, and Blockchain. I have embraced both theoretical knowledge and hands-on projects, driven by curiosity. Eager to tackle real-world problems, I aim to contribute to innovative solutions and continuously grow through learning and collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="my-20">
          <h3 className="text-3xl font-bold mb-8 text-center font-object-sans">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Competitive Coding', icon: <Code size={24} />, description: 'Proficient in solving problems in Java, C and Python' },
              { name: 'Graphic Designing', icon: <Palette size={24} />, description: 'Creating visually appealing designs and illustrations for various mediums.' },
              { name: 'Public Speaking', icon: <Mic size={24} />, description: 'Delivering impactful presentations and engaging audiences effectively.' }
            ].map((skill) => (
              <div key={skill.name} className="bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 rounded-lg p-6 transform hover:scale-105 transition-transform backdrop-filter backdrop-blur-lg border border-purple-500">
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h4 className="text-xl font-semibold ml-2 font-object-sans">{skill.name}</h4>
                </div>
                <p className="font-montserrat">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="my-20">
          <h3 className="text-3xl font-bold mb-8 text-center font-object-sans">My Tech Stack</h3>
          <div className="space-y-6">
            {[
              { name: 'Python', percentage: 75 },
              { name: 'Java', percentage: 80 },
              { name: 'C', percentage: 70 },
              { name: 'HTML', percentage: 60 },
              { name: 'CSS', percentage: 60 },
              { name: 'SQL', percentage: 70 },
              { name: 'Pandas', percentage: 65 }
            ].map((tech) => (
              <div key={tech.name} className="bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 rounded-lg p-4 backdrop-filter backdrop-blur-lg">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold font-object-sans">{tech.name}</span>
                  <span className="font-montserrat">{tech.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full" 
                    style={{width: `${tech.percentage}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="my-20">
          <h3 className="text-3xl font-bold mb-8 text-center font-object-sans">My Projects</h3>
          <div className="bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 rounded-lg p-6 backdrop-filter backdrop-blur-lg border border-purple-500">
            <h4 className="text-xl font-semibold mb-2 font-object-sans">AquaSolve - pHighters</h4>
            <p className="font-montserrat mb-4">A product designed to mitigate ocean acidification and to create valuable products from the extracted acids, fostering a harmonious relationship between environmental conservation and collaborative innovation for the betterment of both businesses and charitable causes.</p>
            <a href="https://phighters.netlify.app" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-600 transition-colors font-montserrat">View Project</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 py-8 relative z-10">
        <div className="container mx-auto px-4 flex justify-center space-x-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
            <Instagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
            <Linkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
            <Github />
          </a>
        </div>
      </footer>
    </div>
  );
}