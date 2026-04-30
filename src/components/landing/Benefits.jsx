import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Building2, TrendingDown, Expand, Sparkles } from 'lucide-react';

const icons = [Building2, TrendingDown, Expand, Sparkles];

export default function Benefits() {
  const { t } = useLanguage();

  return (
    <section id="benefits" className="py-28 md:py-36 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-primary mb-6 uppercase block">
            {t.benefits.label}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground">
            {t.benefits.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.benefits.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group text-center p-8 rounded-2xl border border-border/30 bg-card/30 hover:border-primary/20 hover:bg-card/60 transition-all duration-500"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-5 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-bold tracking-tight text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}