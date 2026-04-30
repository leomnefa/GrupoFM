import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-28 md:py-36 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-primary mb-6 uppercase">
            <Layers className="w-3.5 h-3.5" />
            {t.about.label}
          </span>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-8">
            {t.about.title}
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {t.about.text}
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        />
      </div>
    </section>
  );
}