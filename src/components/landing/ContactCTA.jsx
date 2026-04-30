import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-28 md:py-36 relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[100px]" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-6">
            {t.cta.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            {t.cta.subtitle}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-full px-10 text-sm font-medium shadow-lg shadow-primary/20"
          >
            <a href="mailto:contacto@grupofm.com.ar">
              {t.cta.button}
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}