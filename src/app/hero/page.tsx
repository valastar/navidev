/* estlint-disable */
'use client'

import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-white font-bold text-xl">IEMA DEV</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-white/80 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Hi, I&lsquo;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Ivan</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8">
                Full Stack Developer crafting digital experiences
              </p>
              <p className="text-lg text-white/60 mb-8 max-w-2xl">
                17 years old passionate developer from Mexico. I love building web applications that solve real problems and create amazing user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  View My Work
                </button>
                <button className="border border-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                  Lets Work!
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              {/* Profile Image Placeholder */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-green-400 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Profile Photo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white/80 text-xl md:text-2xl mb-6 leading-relaxed">
                I&lsquo;m a passionate <strong className="text-white"> 17-year-old full-stack developer</strong> with a love for creating innovative <strong className="text-white"> web applications. </strong>
                I&lsquo;ve been constantly learning and building projects that challenge me to grow.
              </p>

              <p className="text-white/80 text-xl md:text-2xl mb-6 leading-relaxed">
                I believe in writing clean, efficient code and creating user experiences that are both beautiful and
                functional.
              </p>

              <div className="flex space-x-4">
                <div className="flex space-x-4">
                  {/* GitHub */}
                  <a
                    href="https://github.com/valastar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6 text-white/60 hover:text-white cursor-pointer transition-colors" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/iv%C3%A1n-martinez-aguilar-4a4218373/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-6 h-6 text-white/60 hover:text-white cursor-pointer transition-colors" />
                  </a>

                  {/* Mail (copia al portapapeles) */}
                  <Mail
                    onClick={() => navigator.clipboard.writeText("IEMADEV08@gmail.com")}
                    className="w-6 h-6 text-white/60 hover:text-white cursor-pointer transition-colors"
                  />
                </div>

              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {/* Statistics */}
                {/* Stat Card */}
                <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center transition hover:bg-white/10">
                  <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-purple-400 transition">
                    1+
                  </h3>
                  <p className="text-sm uppercase tracking-wide text-white/60">
                    Years Coding
                  </p>
                </div>

                <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center transition hover:bg-white/10">
                  <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-purple-400 transition">
                    3+
                  </h3>
                  <p className="text-sm uppercase tracking-wide text-white/60">
                    Projects Built
                  </p>
                </div>

                <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center transition hover:bg-white/10">
                  <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-purple-400 transition">
                    100%
                  </h3>
                  <p className="text-sm uppercase tracking-wide text-white/60">
                    Passion
                  </p>
              
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <Globe className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Frontend</h3>
              <ul className="text-white/70 space-y-1">
                <li>React.js / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>HTML5</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <Code className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Backend</h3>
              <ul className="text-white/70 space-y-1">
                <li>Node.js</li>
                <li>SQL</li>
                <li>RESTful APIs</li>
                <li>Express</li>
              </ul>
            </div>

            {/* Database */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <Database className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Database</h3>
              <ul className="text-white/70 space-y-1">
                <li>Supabase</li>
                <li>SQL</li>
                <li>PostgreSQL</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <Smartphone className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Tools</h3>
              <ul className="text-white/70 space-y-1">
                <li>Git / GitHub</li>
                <li>VS Code</li>
                <li>Vercel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <span className="text-white font-semibold">Project Screenshot 1</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Project Name 1</h3>
                <p className="text-white/70 mb-4">
                  Lorem
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">MongoDB</span>
                </div>
                <div className="flex space-x-4">
                  <button className="flex items-center text-white/80 hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </button>
                  <button className="flex items-center text-white/80 hover:text-white transition-colors">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                <span className="text-white font-semibold">Project Screenshot 2</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Project Name 2</h3>
                <p className="text-white/70 mb-4">
                  lorem
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
                </div>
                <div className="flex space-x-4">
                  <button className="flex items-center text-white/80 hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </button>
                  <button className="flex items-center text-white/80 hover:text-white transition-colors">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let&lsquo;s Work Together</h2>
          <p className="text-xl text-white/80 mb-12">
            In&lsquo;m always open to discussing new opportunities and interesting projects.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div
              onClick={() => navigator.clipboard.writeText("IEMADEV08@gmail.com")}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 cursor-pointer hover:bg-white/10 transition"
            >
              <Mail className="w-8 h-8 text-white-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-white/70">IEMADEV08@gmail.com</p>
            </div>


            <a
              href="https://github.com/valastar"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 cursor-pointer hover:bg-white/10 transition">
                <Github className="w-8 h-8 text-white-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">GitHub</h3>
                <p className="text-white/70">@valastar</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/iv%C3%A1n-martinez-aguilar-4a4218373/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <Linkedin className="w-8 h-8 text-white-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
                <p className="text-white/70">Ivan Martinez Aguilar</p>
              </div>
            </a>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            Ivan Martinez. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}