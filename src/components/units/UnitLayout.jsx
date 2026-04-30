import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ALL_UNITS = [
  { name: 'FM Intelligence', path: '/intelligence', tag: 'IA' },
  { name: 'FM Development', path: '/development', tag: 'SOFTWARE' },
  { name: 'FM Computación', path: '/computacion', tag: 'IT' },
  { name: 'FM Tech', path: '/tech', tag: 'MOBILE' },
  { name: 'FM Consulting', path: '/consulting', tag: 'RRHH' },
  { name: 'FM Printing', path: '/printing', tag: '3D' },
];

function UnitNavbar({ currentPath }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-bold tracking-tighter">
            Grupo <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">FM</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {ALL_UNITS.map(u => (
            <Link
              key={u.path}
              to={u.path}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all duration-200 ${
                currentPath === u.path
                  ? 'bg-primary/15 text-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              {u.tag}
            </Link>
          ))}
        </div>
        <Button asChild size="sm" className="rounded-full text-xs bg-primary hover:bg-primary/90">
          <a href="mailto:contacto@grupofm.com.ar">Contactar</a>
        </Button>
      </div>
    </nav>
  );
}

function UnitHero({ tag, title, subtitle, cta, ctaHref, image }) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px] animate-glow-pulse" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block font-mono text-xs tracking-[0.2em] text-primary mb-5 uppercase"
        >
          {tag}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[1.05] text-foreground mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-full px-10 shadow-lg shadow-primary/20">
            <a href={ctaHref}>{cta} <ArrowRight className="w-4 h-4 ml-2" /></a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function Section({ label, title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className="py-20 max-w-6xl mx-auto px-6 lg:px-8"
    >
      {label && (
        <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase block mb-4">{label}</span>
      )}
      {title && (
        <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-foreground mb-10">{title}</h2>
      )}
      {children}
    </motion.section>
  );
}

function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-400">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function BenefitItem({ title, desc }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function HighlightQuote({ text }) {
  return (
    <div className="my-12 max-w-6xl mx-auto px-6">
      <div className="relative p-8 md:p-12 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 text-center">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/3 to-secondary/3 blur-xl" />
        <p className="relative text-xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          "{text}"
        </p>
      </div>
    </div>
  );
}

function CtaFinal({ title, cta, ctaHref }) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-8">{title}</h2>
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-full px-10 shadow-lg shadow-primary/20">
            <a href={ctaHref}>{cta} <ArrowRight className="w-4 h-4 ml-2" /></a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function OtherUnits({ currentPath }) {
  const others = ALL_UNITS.filter(u => u.path !== currentPath);
  return (
    <section className="py-16 border-t border-border/50 max-w-6xl mx-auto px-6">
      <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">Otras unidades de Grupo FM</p>
      <div className="flex flex-wrap gap-3">
        {others.map(u => (
          <Link
            key={u.path}
            to={u.path}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
          >
            {u.name}
            <ExternalLink className="w-3 h-3" />
          </Link>
        ))}
      </div>
    </section>
  );
}

function UnitFooter() {
  return (
    <footer className="border-t border-border/30 py-10 bg-card/20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link to="/" className="text-sm font-bold tracking-tighter text-foreground">
          Grupo <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">FM</span>
        </Link>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Grupo FM. Todos los derechos reservados.</p>
        <a href="mailto:contacto@grupofm.com.ar" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
          contacto@grupofm.com.ar
        </a>
      </div>
    </footer>
  );
}

export { UnitNavbar, UnitHero, Section, ServiceCard, BenefitItem, HighlightQuote, CtaFinal, OtherUnits, UnitFooter };