import React from 'react';
import { Code2, Monitor, Smartphone, Layers, Zap, Expand, Settings } from 'lucide-react';
import { UnitNavbar, UnitHero, Section, ServiceCard, BenefitItem, HighlightQuote, CtaFinal, OtherUnits, UnitFooter } from '@/components/units/UnitLayout';

const IMAGE = '/images/9b8ba3a83_generated_0e7fd5c6.png';

const WHAT = [
  { icon: Layers, title: 'ERP y sistemas internos', desc: 'Sistemas de gestión a medida que centralizan toda la operación de tu empresa.' },
  { icon: Monitor, title: 'Aplicaciones web', desc: 'Plataformas web robustas, escalables y optimizadas para tu negocio.' },
  { icon: Smartphone, title: 'Aplicaciones mobile', desc: 'Apps iOS y Android nativas o multiplataforma adaptadas a tus usuarios.' },
  { icon: Code2, title: 'Integraciones y APIs', desc: 'Conectamos tus sistemas entre sí para una operación fluida y centralizada.' },
];

const METHOD = [
  { title: '1. Relevamiento', desc: 'Entendemos tu proceso y tus objetivos antes de escribir una sola línea de código.' },
  { title: '2. Diseño y prototipo', desc: 'Diseñamos la solución y te mostramos cómo funcionará antes de desarrollarla.' },
  { title: '3. Desarrollo ágil', desc: 'Iteraciones cortas con entregas frecuentes para que puedas ver el avance en tiempo real.' },
  { title: '4. Deploy y soporte', desc: 'Lanzamos y nos quedamos acompañándote con mantenimiento y mejoras continuas.' },
];

const BENEFITS = [
  { title: 'Automatización total', desc: 'Procesos manuales transformados en flujos automáticos que ahorran tiempo y reducen errores.' },
  { title: 'Escalabilidad garantizada', desc: 'Tu software crece con tu empresa sin necesidad de cambiar de plataforma.' },
  { title: 'Control total del negocio', desc: 'Visibilidad completa de cada área de tu empresa desde un solo lugar.' },
];

export default function FMDevelopment() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <UnitNavbar currentPath="/development" />

      <UnitHero
        tag="FM Development · Grupo FM"
        title="Software a medida para hacer crecer tu empresa"
        subtitle="Desarrollamos sistemas adaptados a tus procesos, no al revés."
        cta="Solicitar presupuesto"
        ctaHref="mailto:contacto@grupofm.com.ar?subject=Presupuesto FM Development"
        image={IMAGE}
      />

      <Section label="QUÉ DESARROLLAMOS" title="Soluciones digitales a tu medida">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHAT.map((s, i) => <ServiceCard key={i} {...s} />)}
        </div>
      </Section>

      <div className="border-t border-border/30" />

      <Section label="METODOLOGÍA" title="Cómo trabajamos">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHOD.map((m, i) => (
            <div key={i} className="p-6 rounded-2xl border border-border/40 bg-card/40">
              <span className="font-mono text-xs text-primary tracking-wider block mb-3">{m.title}</span>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="border-t border-border/30" />

      <Section label="INTEGRACIÓN CON IA" title="Software + Inteligencia Artificial">
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
          En colaboración con <strong className="text-foreground">FM Intelligence</strong>, podemos incorporar módulos de IA directamente en tu software: análisis predictivo, chatbots internos, automatización cognitiva y más. Tu sistema no solo gestiona, también aprende.
        </p>
      </Section>

      <div className="border-t border-border/30" />

      <Section label="BENEFICIOS" title="Por qué elegirnos">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((b, i) => <BenefitItem key={i} {...b} />)}
        </div>
      </Section>

      <HighlightQuote text="Tu negocio es único. Tu software también debería serlo." />

      <CtaFinal
        title="Contanos tu proyecto"
        cta="Solicitar presupuesto gratuito"
        ctaHref="mailto:contacto@grupofm.com.ar?subject=Quiero un software a medida"
      />

      <OtherUnits currentPath="/development" />
      <UnitFooter />
    </div>
  );
}