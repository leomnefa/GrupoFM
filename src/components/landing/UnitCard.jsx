import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UnitCard({ unit, index, featured }) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card hover:border-primary/30 transition-all duration-500 ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? 'h-48 md:h-64' : 'h-40'}`}>
        <img
          src={unit.image}
          alt={unit.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <span className="font-mono text-[10px] tracking-[0.2em] text-primary uppercase block mb-2">
          {unit.tag}
        </span>
        <h3 className={`font-bold tracking-tight text-foreground mb-2 ${featured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
          {unit.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {unit.description}
        </p>
        {unit.tagline && (
          <p className="text-xs font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent italic mb-4">
            "{unit.tagline}"
          </p>
        )}
        <Link
          to={unit.link}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
        >
          {t.units.viewMore}
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}