'use client'
import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Portfolio() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black-900 to-slate-900">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {t('hero.greeting')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Ivan</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8">
                {t('hero.title')}
              </p>
              <p className="text-lg text-white/60 mb-8 max-w-2xl">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  {t('hero.viewWork')}
                </button>
                <button className="border border-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                  {t('hero.letsWork')}
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
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t('about.title')}</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white/80 text-lg mb-6">
                {t('about.description1')}
              </p>
              <p className="text-white/80 text-lg mb-6">
                {t('about.description2')}
              </p>
              <div className="flex space-x-4">
                <Github className="w-6 h-6 text-white/60 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-white/60 hover:text-white cursor-pointer transition-colors" />
                <Mail className="w-6 h-6 text-white/60 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Statistics */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">1</h3>
                <p className="text-white/60">{t('about.yearsCoding')}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">0</h3>
                <p className="text-white/60">Lorem</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">0</h3>
                <p className="text-white/60">Lorem</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
                <p className="text-white/60">{t('about.passion')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t('skills.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <Globe className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{t('skills.frontend')}</h3>
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
              <h3 className="text-xl font-semibold text-white mb-3">{t('skills.backend')}</h3>
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
              <h3 className="text-xl font-semibold text-white mb-3">{t('skills.database')}</h3>
              <ul className="text-white/70 space-y-1">
                <li>Supabase</li>
                <li>SQL</li>
                <li>PostgreSQL</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <Smartphone className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{t('skills.tools')}</h3>
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
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t('projects.title')}</h2>
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
                    {t('projects.liveDemo')}
                  </button>
                  <button className="flex items-center text-white/80 hover:text-white transition-colors">
                    <Github className="w-4 h-4 mr-2" />
                    {t('projects.sourceCode')}
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
                    {t('projects.liveDemo')}
                  </button>
                  <button className="flex items-center text-white/80 hover:text-white transition-colors">
                    <Github className="w-4 h-4 mr-2" />
                    {t('projects.sourceCode')}
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
          <h2 className="text-4xl font-bold text-white mb-8">{t('contact.title')}</h2>
          <p className="text-xl text-white/80 mb-12">
            {t('contact.description')}
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <Mail className="w-8 h-8 text-white-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">{t('contact.email')}</h3>
              <p className="text-white/70">IEMADEV08@gmail.com</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <Github className="w-8 h-8 text-white-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">GitHub</h3>
              <p className="text-white/70">@valastar</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <Linkedin className="w-8 h-8 text-white-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <p className="text-white/70">Ivan Martinez Aguilar</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
            {t('contact.getInTouch')}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
             Ivan Martinez. {t('footer.built')}
          </p>
        </div>
      </footer>
    </div>
  );
}
