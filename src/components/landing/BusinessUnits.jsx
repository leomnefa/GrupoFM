import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Grid3x3 } from 'lucide-react';
import UnitCard from './UnitCard';

const getUnits = (lang) => [
  {
    name: 'FM Computación',
    tag: 'INFRASTRUCTURE',
    description: lang === 'es'
      ? 'Servicio técnico de PC, redes, CCTV e infraestructura IT.'
      : 'PC tech support, networks, CCTV, and IT infrastructure.',
    image: '/images/152293e69_generated_834bb199.png',
    link: '/computacion',
  },
  {
    name: 'FM Tech',
    tag: 'MOBILE',
    description: lang === 'es'
      ? 'Reparación y servicio técnico de celulares.'
      : 'Mobile phone repair and tech support.',
    image: '/images/7c035ac39_generated_49b3cb6c.png',
    link: '/tech',
  },
  {
    name: 'FM Consulting',
    tag: 'STRATEGY',
    description: lang === 'es'
      ? 'Consultoría en recursos humanos y gestión empresarial.'
      : 'Human resources consulting and business management.',
    image: '/images/d585dffb7_generated_bd671718.png',
    link: '/consulting',
  },
  {
    name: 'FM Printing',
    tag: '3D MANUFACTURING',
    description: lang === 'es'
      ? 'Servicios de impresión 3D.'
      : '3D printing services.',
    image: '/images/9e857a409_generated_1ca6c234.png',
    link: '/printing',
  },
  {
    name: 'FM Development',
    tag: 'SOFTWARE',
    description: lang === 'es'
      ? 'Desarrollo de software a medida.'
      : 'Custom software development.',
    image: '/images/9b8ba3a83_generated_0e7fd5c6.png',
    link: '/development',
  },
  {
    name: 'FM Intelligence',
    tag: 'ARTIFICIAL INTELLIGENCE',
    description: lang === 'es'
      ? 'Implementación de soluciones de Inteligencia Artificial.'
      : 'Implementation of Artificial Intelligence solutions.',
    image: '/images/30b99088b_generated_e6ce8597.png',
    link: '/intelligence',
  },
];

export default function BusinessUnits() {
  const { lang, t } = useLanguage();
  const units = getUnits(lang);

  return (
    <section id="units" className="py-28 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-primary mb-6 uppercase">
            <Grid3x3 className="w-3.5 h-3.5" />
            {t.units.label}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-4">
            {t.units.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.units.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {units.map((unit, i) => (
            <UnitCard
              key={unit.name}
              unit={unit}
              index={i}
              featured={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}