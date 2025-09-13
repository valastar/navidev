'use client'
import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Header
    'nav.about': 'Acerca de mí',
    'nav.services': 'Servicios', 
    'nav.contact': 'Contáctame',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    
    // Hero Section
    'hero.greeting': 'Hola, soy',
    'hero.title': 'Desarrollador Full Stack creando experiencias digitales',
    'hero.description': 'Desarrollador apasionado de 17 años de México. Me encanta construir aplicaciones web que resuelven problemas reales y crean experiencias de usuario increíbles.',
    'hero.viewWork': 'Ver Mi Trabajo',
    'hero.letsWork': '¡Trabajemos Juntos!',
    
    // About Section
    'about.title': 'Acerca de Mí',
    'about.description1': 'Soy un desarrollador full-stack apasionado de 17 años con amor por crear aplicaciones web innovadoras. He estado aprendiendo constantemente y construyendo proyectos que me desafían a crecer.',
    'about.description2': 'Creo en escribir código limpio y eficiente y crear experiencias de usuario que sean tanto hermosas como funcionales.',
    'about.yearsCoding': 'Años Programando',
    'about.passion': 'Pasión',
    
    // Skills Section
    'skills.title': 'Habilidades',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend', 
    'skills.database': 'Base de Datos',
    'skills.tools': 'Herramientas',
    
    // Projects Section
    'projects.title': 'Proyectos Destacados',
    'projects.liveDemo': 'Demo en Vivo',
    'projects.sourceCode': 'Código Fuente',
    
    // Contact Section
    'contact.title': 'Trabajemos Juntos',
    'contact.description': 'Siempre estoy abierto a discutir nuevas oportunidades y proyectos interesantes.',
    'contact.email': 'Correo',
    'contact.getInTouch': 'Ponte en Contacto',
    
    // Footer
    'footer.built': 'Construido con Next.js y Tailwind CSS.'
  },
  en: {
    // Header
    'nav.about': 'About me',
    'nav.services': 'Services',
    'nav.contact': 'Contact me', 
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    
    // Hero Section
    'hero.greeting': "Hi, I'm",
    'hero.title': 'Full Stack Developer crafting digital experiences',
    'hero.description': '17 years old passionate developer from Mexico. I love building web applications that solve real problems and create amazing user experiences.',
    'hero.viewWork': 'View My Work',
    'hero.letsWork': 'Lets Work!',
    
    // About Section
    'about.title': 'About Me',
    'about.description1': "I'm a passionate 17-year-old full-stack developer with a love for creating innovative web applications. I've been constantly learning and building projects that challenge me to grow.",
    'about.description2': 'I believe in writing clean, efficient code and creating user experiences that are both beautiful and functional.',
    'about.yearsCoding': 'Years Coding',
    'about.passion': 'Passion',
    
    // Skills Section
    'skills.title': 'Skills',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Database', 
    'skills.tools': 'Tools',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.liveDemo': 'Live Demo',
    'projects.sourceCode': 'Source Code',
    
    // Contact Section
    'contact.title': "Let's Work Together",
    'contact.description': "I'm always open to discussing new opportunities and interesting projects.",
    'contact.email': 'Email',
    'contact.getInTouch': 'Get In Touch',
    
    // Footer
    'footer.built': 'Built with Next.js and Tailwind CSS.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    return (translations as any)[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
