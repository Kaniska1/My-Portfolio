'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Linkedin, Github, Moon, Sun, Computer, Code, Palette, Mic, Quote, Download } from 'lucide-react';
import Image from 'next/image';

const Loader = () => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white dark:bg-black z-50">
    <div className="relative w-24 h-24">
      <div className="absolute top-0 left-0 w-full h-full border-8 border-red-300 rounded-full animate-spin"></div>
      <div className="absolute top-0 left-0 w-full h-full border-8 border-red-500 rounded-full animate-ping"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-red-500">K</div>
    </div>
  </div>
);

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('system');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const applyTheme = () => {
      const root = window.document.documentElement;
      const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      root.classList.remove('light', 'dark');
      root.classList.add(isDark ? 'dark' : 'light');
    };

    applyTheme();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme();
      }
    };

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
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
    setTheme(prevTheme => {
      if (prevTheme === 'dark') return 'light';
      if (prevTheme === 'light') return 'system';
      return 'dark';
    });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Kaniska_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-100 to-white dark:from-black dark:via-gray-900 dark:to-black text-black dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navbar */}
      <nav className="bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-90 p-4 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h5 className="text-2xl font-medium font-object-sans">Kaniska.</h5>
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-red-300 transition-colors font-montserrat">Home</a>
            <a href="#about" className="hover:text-red-300 transition-colors font-montserrat">About</a>
            <a href="#education" className="hover:text-red-300 transition-colors font-montserrat">Education</a>
            <a href="#experience" className="hover:text-red-300 transition-colors font-montserrat">Experience</a>
            <a href="#skills" className="hover:text-red-300 transition-colors font-montserrat">Skills</a>
            <a href="#tech-stack" className="hover:text-red-300 transition-colors font-montserrat">Tech Stack</a>
            <a href="#projects" className="hover:text-red-300 transition-colors font-montserrat">Projects</a>
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
            <a href="#home" className="block hover:text-red-300 transition-colors font-montserrat">Home</a>
            <a href="#about" className="block hover:text-red-300 transition-colors font-montserrat">About</a>
            <a href="#education" className="block hover:text-red-300 transition-colors font-montserrat">Education</a>
            <a href="#experience" className="block hover:text-red-300 transition-colors font-montserrat">Experience</a>
            <a href="#skills" className="block hover:text-red-300 transition-colors font-montserrat">Skills</a>
            <a href="#tech-stack" className="block hover:text-red-300 transition-colors font-montserrat">Tech Stack</a>
            <a href="#projects" className="block hover:text-red-300 transition-colors font-montserrat">Projects</a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 relative z-10 mt-16">
        {/* Home Section */}
        <section id="home" className="text-center py-20">
          <h2 className="text-6xl font-bold mb-12 animate-pulse font-object-sans">Hi, I am Kaniska!</h2>
          <Image
            src="/Untitled-3.png"
            width={300}
            height={300}
            alt="Kaniska's profile"
            className="mx-auto rounded-full border-4 border-red-500"
          />
        </section>

        {/* Quote Section */}
        <div className="bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 rounded-lg p-8 max-w-2xl mx-auto mb-8 relative ">
          <Quote className="absolute top-4 left-4 text-red-500" size={24} />
          <p className="text-lg font-montserrat italic text-center px-8">
            {"You either die a hero or live long enough to see your code run into \"Time Limit Exceeded Error (1016/1017 cases passed)\" "}
          </p>
        </div>

        {/* About Section */}
        <section id="about" className="my-20">
          <div className="bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 rounded-lg p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center backdrop-filter backdrop-blur-lg ">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <Image
                src="/dp.jpg"
                alt="Kaniska"
                width={200}
                height={200}
                className="rounded-full border-4 border-red-500"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-3xl font-bold mb-4 font-object-sans text-red-400">About Me</h3>
              <p className="text-lg font-montserrat mb-4">
                👋 Hi! I'm Kaniska, a passionate computer science engineering student with a focus on AI, ML, Data Science, and Blockchain. I have embraced both theoretical knowledge and hands-on projects, driven by curiosity. Eager to tackle real-world problems, I aim to contribute to innovative solutions and continuously grow through learning and collaboration.
              </p>
              <button
                onClick={downloadResume}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition-colors duration-300"
              >
                <Download size={20} className="mr-2" />
                Download My Resume
              </button>
            </div>
          </div>
        </section>

        {/* New Statistics Section */}
        <section className="my-20">
          <div className="bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 rounded-lg p-8 max-w-4xl mx-auto flex justify-around items-center backdrop-filter backdrop-blur-lg">
            <div className="text-center">
              <h3 className="text-5xl font-bold mb-4 font-object-sans text-red-500">1+</h3>
              <p className="text-lg font-montserrat">YEARS OF EXPERIENCE</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold mb-4 font-object-sans text-red-500">100+</h3>
              <p className="text-lg font-montserrat">LEETCODE PROBLEMS SOLVED</p>
            </div>
          </div>
        </section>

        {/* Education and Experience Section */}
        <div className="flex flex-col lg:flex-row gap-8 my-20">
          {/* My Education Section */}
          <section id="education" className="lg:w-1/2">
            <div className="bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 rounded-lg p-8 backdrop-filter backdrop-blur-lg h-full">
              <h3 className="text-3xl font-bold mb-6 font-object-sans text-red-400">My Education</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="text-xl font-semibold mb-2 font-object-sans">Bachelor of Science (BS) in Data Science and Programming</h4>
                  <p className="font-montserrat mb-1">Indian Institute of Technology - Madras</p>
                  <p className="font-montserrat text-sm text-gray-600 dark:text-gray-400">2023 - Present</p>
                  <p className="font-montserrat mb-1">CGPA: 8.00 (Till date)</p>
                  <p className="font-montserrat mt-2">Pursuing my bachelor&apos;s degree with a focus on AI, ML, and Data Science.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="text-xl font-semibold mb-2 font-object-sans">B.Tech in Computer Science and Engineering - Internet of Things</h4>
                  <p className="font-montserrat mb-1">Techno Main - Salt Lake</p>
                  <p className="font-montserrat text-sm text-gray-600 dark:text-gray-400">2023 - Present</p>
                  <p className="font-montserrat mb-1">CGPA: 8.29 (Till date)</p>
                  <p className="font-montserrat mt-2">Pursuing my bachelor&apos;s degree with a focus on Internet of Things (IOT).</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="text-xl font-semibold mb-2 font-object-sans">Primary, Secondary & Higher Secondary Education</h4>
                  <p className="font-montserrat mb-1">W.W.A. Cossipore English School</p>
                  <p className="font-montserrat text-sm text-gray-600 dark:text-gray-400">2009 - 2023</p>
                  <p className="font-montserrat mb-1">ICSE:97.0%</p>
                  <p className="font-montserrat mb-1">ISC: 94.5%</p>
                  <p className="font-montserrat mt-2">Completed my schooling with a strong foundation in Science (PCM).</p>
                </div>
              </div>
            </div>
          </section>

          {/* My Experiences Section */}
          <section id="experience" className="lg:w-1/2">
            <div className="bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 rounded-lg p-8 backdrop-filter backdrop-blur-lg h-full">
              <h3 className="text-3xl font-bold mb-6 font-object-sans text-red-400">My Experiences</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="text-xl font-semibold mb-2 font-object-sans">Member of PR and Outreach Wing</h4>
                  <p className="font-montserrat mb-1">IIC TMSL</p>
                  <p className="font-montserrat text-sm text-gray-600 dark:text-gray-400">March 2024 - August 2024</p>                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="text-xl font-semibold mb-2 font-object-sans">Member of Qzone, The official Quiz Club of TMSL</h4>
                  <p className="font-montserrat mb-1">Eclectica TMSL</p>
                  <p  className="font-montserrat text-sm text-gray-600 dark:text-gray-400">March 2024 - Present</p>                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="text-xl font-semibold mb-2 font-object-sans">Hult Prize On-Campus Runner-Up</h4>
                  <p className="font-montserrat mb-1">Hult Prize Foundation</p>
                  <p className="font-montserrat text-sm text-gray-600 dark:text-gray-400">February 2024</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Skills Section */}
        <section id="skills" className="my-20">
          <h3 className="text-3xl font-bold mb-8 text-center font-object-sans text-red-400">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Competitive Coding', 
                icon: <Code size={24} />, 
                description: 'Proficient in solving problems in Java, C and Python', 
                link: (<a href="https://leetcode.com/Kaniska1" target="_blank" rel="noopener noreferrer" className="text-red-700">My LeetCode Profile</a>), 
              },
              { 
                name: 'Graphic Designing', 
                icon: <Palette size={24} />, 
                description: 'Creating visually appealing designs and illustrations for various mediums.' 
              },
              { 
                name: 'Public Speaking', 
                icon: <Mic size={24} />, 
                description: 'Delivering impactful presentations and engaging audiences effectively.' 
              }
            ].map((skill) => (
              <div key={skill.name} className="bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 rounded-lg p-6 transform hover:scale-105 transition-transform backdrop-filter backdrop-blur-lg border border-red-500">
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h4 className="text-xl font-semibold ml-2 font-object-sans">{skill.name}</h4>
                </div>
                <p className="font-montserrat">{skill.description}</p>
                {skill.link && (
                  <div className="mt-2">
                    {skill.link}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="my-20">
          <h3 className="text-3xl font-bold mb-8 text-center font-object-sans text-red-400">My Tech Stack</h3>
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Python', percentage: 80 },
              { name: 'Java', percentage: 80 },
              { name: 'C', percentage: 70 },
              { name: 'MySQL', percentage: 75 },
              { name: 'Pandas', percentage: 80 },
              { name: 'HTML', percentage: 60 },
              { name: 'CSS', percentage: 60 }              
            ].map((tech) => (
              <div key={tech.name} className="bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 rounded-lg p-4 backdrop-filter backdrop-blur-lg">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold font-object-sans">{tech.name}</span>
                  <span className="font-montserrat">{tech.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-red-500 to-red-700 h-2.5 rounded-full" 
                    style={{width: `${tech.percentage}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="my-20">
          <h3 className="text-3xl font-bold mb-8 text-center font-object-sans text-red-400">My Projects</h3>
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 rounded-lg p-6 backdrop-filter backdrop-blur-lg border border-red-500 md:w-1/2">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
                  <Image
                    src="/pHighters.png?height=300&width=300"
                    alt="AquaSolve - pHighters"
                    width={300}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-semibold mb-2 font-object-sans">AquaSolve - pHighters</h4>
                  <p className="font-montserrat mb-4">A product designed to mitigate ocean acidification and to create valuable products from the extracted acids, fostering a harmonious relationship between environmental conservation and collaborative innovation for the betterment of both businesses and charitable causes.</p>
                  <p className="font-montserrat mb-4">Our team was awarded the Runners-Up position for this project in the On-Campus Hult Prize competition.</p>
                  <a href="https://phighters.netlify.app" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600 transition-colors font-montserrat">View Project</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 rounded-lg p-6 backdrop-filter backdrop-blur-lg border border-red-500 md:w-1/2">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
                  <Image
                    src="/Coordina.png?height=150&width=150"
                    alt="Coordina"
                    width={300}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-semibold mb-2 font-object-sans">Coordina</h4>
                  <p className="font-montserrat mb-4">Coordina is a comprehensive urban management platform designed to transform India's cities for a smarter tomorrow. It offers tools for project management, resource allocation, conflict resolution, and interdepartmental collaboration.</p>
                  <p className="font-montserrat mb-4">Our team was placed among select few teams who qualified for the finals of the Smart India Hackathon 2024.</p>
                  <a href="https://coordina-murex.vercel.app" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600 transition-colors font-montserrat">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 py-8 relative z-10">
        <div className="container mx-auto px-4 flex justify-center space-x-6">
          <a href="https://www.instagram.com/just_me_tbf/" target="_blank" rel="noopener noreferrer" className="hover:text-red-300 transition-colors">
            <Instagram />
          </a>
          <a href="https://www.linkedin.com/in/kaniska-mitra-a015a42b8/" target="_blank" rel="noopener noreferrer" className="hover:text-red-300 transition-colors">
            <Linkedin />
          </a>
          <a href="https://github.com/Kaniska1" target="_blank" rel="noopener noreferrer" className="hover:text-red-300 transition-colors">
            <Github />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;