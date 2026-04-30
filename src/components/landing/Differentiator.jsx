import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Link2, Workflow, HandshakeIcon } from 'lucide-react';

const icons = [Link2, Workflow, HandshakeIcon];

export default function Differentiator() {
  const { t } = useLanguage();

  return (
    <section className="py-28 md:py-36 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-secondary/5 blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-primary mb-6 uppercase block">
            {t.diff.label}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground">
            {t.diff.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.diff.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-8 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-500 relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
                {/* Kinetic border */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}