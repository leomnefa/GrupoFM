import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  es: {
    nav: {
      about: 'Nosotros',
      units: 'Unidades',
      benefits: 'Beneficios',
      contact: 'Contacto',
    },
    hero: {
      title: 'Si tu empresa no integra IA, se desconecta del mundo.',
      subtitle: 'Si tu empresa no integra IA, se desconecta del mundo. Te ayudamos a liderar el futuro con tecnología.',
      cta1: 'Conocer unidades de negocio',
      cta2: 'Contactar',
    },
    about: {
      label: 'SOBRE NOSOTROS',
      title: 'Un ecosistema de soluciones',
      text: 'Grupo FM reúne distintas unidades especializadas que trabajan en conjunto para ofrecer soluciones tecnológicas y de servicios adaptadas a cada empresa.',
    },
    units: {
      label: 'UNIDADES DE NEGOCIO',
      title: 'Nuestro ecosistema',
      subtitle: 'Cada unidad es una pieza especializada que, integrada al grupo, multiplica su valor.',
      viewMore: 'Ver más',
    },
    diff: {
      label: 'ENFOQUE DIFERENCIAL',
      title: '¿Por qué Grupo FM?',
      items: [
        { title: 'Integración entre unidades', desc: 'Nuestras unidades colaboran entre sí para ofrecerte soluciones completas y sin fricciones.' },
        { title: 'Soluciones end-to-end', desc: 'Desde la consultoría hasta la implementación de IA, cubrimos todo el ciclo de vida de tu proyecto.' },
        { title: 'Un solo proveedor', desc: 'Simplificá la gestión. Múltiples soluciones, un solo punto de contacto.' },
      ],
    },
    benefits: {
      label: 'BENEFICIOS',
      title: 'Ventajas para tu empresa',
      items: [
        { title: 'Centralización', desc: 'Todos los servicios tecnológicos y de consultoría en un solo lugar.' },
        { title: 'Reducción de costos', desc: 'Soluciones integradas que eliminan redundancias y optimizan recursos.' },
        { title: 'Escalabilidad', desc: 'Crecé a tu ritmo con servicios que se adaptan a tus necesidades.' },
        { title: 'Innovación constante', desc: 'Acceso permanente a las últimas tecnologías y metodologías.' },
      ],
    },
    cta: {
      title: 'Contanos qué necesita tu empresa',
      subtitle: 'Nuestro equipo está listo para diseñar la solución perfecta para tu negocio.',
      button: 'Contactar ahora',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      contact: 'Contacto',
      units: 'Unidades',
      social: 'Redes sociales',
    },
  },
  en: {
    nav: {
      about: 'About',
      units: 'Units',
      benefits: 'Benefits',
      contact: 'Contact',
    },
    hero: {
      title: "If your company doesn't integrate AI, it disconnects from the world.",
      subtitle: "If your company doesn't integrate AI, it disconnects from the world. We help you lead the future with technology.",
      cta1: 'Explore business units',
      cta2: 'Contact us',
    },
    about: {
      label: 'ABOUT US',
      title: 'An ecosystem of solutions',
      text: 'Grupo FM brings together specialized units that work in synergy to deliver technology and service solutions tailored to each company.',
    },
    units: {
      label: 'BUSINESS UNITS',
      title: 'Our ecosystem',
      subtitle: 'Each unit is a specialized piece that, integrated into the group, multiplies its value.',
      viewMore: 'Learn more',
    },
    diff: {
      label: 'OUR APPROACH',
      title: 'Why Grupo FM?',
      items: [
        { title: 'Unit integration', desc: 'Our units collaborate to offer you complete, frictionless solutions.' },
        { title: 'End-to-end solutions', desc: 'From consulting to AI implementation, we cover the full lifecycle of your project.' },
        { title: 'One provider', desc: 'Simplify management. Multiple solutions, one point of contact.' },
      ],
    },
    benefits: {
      label: 'BENEFITS',
      title: 'Advantages for your business',
      items: [
        { title: 'Centralization', desc: 'All technology and consulting services in one place.' },
        { title: 'Cost reduction', desc: 'Integrated solutions that eliminate redundancies and optimize resources.' },
        { title: 'Scalability', desc: 'Grow at your pace with services that adapt to your needs.' },
        { title: 'Constant innovation', desc: 'Permanent access to the latest technologies and methodologies.' },
      ],
    },
    cta: {
      title: 'Tell us what your company needs',
      subtitle: 'Our team is ready to design the perfect solution for your business.',
      button: 'Contact now',
    },
    footer: {
      rights: 'All rights reserved.',
      contact: 'Contact',
      units: 'Units',
      social: 'Social media',
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');
  const t = translations[lang];
  const toggleLang = () => setLang(prev => prev === 'es' ? 'en' : 'es');

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}