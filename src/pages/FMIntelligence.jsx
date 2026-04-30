import React from 'react';
import { Bot, TrendingUp, BarChart3, Plug, DollarSign, Expand, Database, Lightbulb } from 'lucide-react';
import { UnitNavbar, UnitHero, Section, ServiceCard, BenefitItem, HighlightQuote, CtaFinal, OtherUnits, UnitFooter } from '@/components/units/UnitLayout';

const IMAGE = '/images/30b99088b_generated_e6ce8597.png';

const SERVICES = [
  { icon: Bot, title: 'Chatbots inteligentes', desc: 'Automatizá la atención al cliente y consultas internas con IA conversacional.' },
  { icon: TrendingUp, title: 'Automatización de procesos', desc: 'Eliminá tareas repetitivas y liberá a tu equipo para lo que importa.' },
  { icon: BarChart3, title: 'Análisis predictivo', desc: 'Anticipá tendencias y tomá decisiones basadas en datos reales.' },
  { icon: Plug, title: 'Integración con tus sistemas', desc: 'Conectamos la IA a tus herramientas existentes sin fricciones.' },
];

const BENEFITS = [
  { title: 'Reducción de costos operativos', desc: 'Procesos automatizados = menos tiempo y menos recursos invertidos en tareas manuales.' },
  { title: 'Escalabilidad inmediata', desc: 'La IA crece con tu empresa, sin necesidad de contratar más personal para cada nuevo volumen.' },
  { title: 'Decisiones con datos reales', desc: 'Información accionable en tiempo real para que cada decisión esté respaldada por evidencia.' },
];

export default function FMIntelligence() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <UnitNavbar currentPath="/intelligence" />

      <UnitHero
        tag="FM Intelligence · Grupo FM"
        title="Inteligencia Artificial aplicada a tu empresa"
        subtitle="Automatizá procesos, reducí costos y tomá mejores decisiones con IA."
        cta="Solicitar asesoramiento"
        ctaHref="mailto:contacto@grupofm.com.ar?subject=Asesoramiento FM Intelligence"
        image={IMAGE}
      />

      <Section label="QUÉ HACEMOS" title="IA aplicada a negocios reales">
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
          En FM Intelligence implementamos soluciones de Inteligencia Artificial adaptadas a los procesos y objetivos específicos de cada empresa. No vendemos tecnología por sí sola: diseñamos estrategias que generan resultados medibles desde el primer día.
        </p>
      </Section>

      <div className="border-t border-border/30" />

      <Section label="SERVICIOS" title="¿Qué podemos hacer por tu empresa?">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => <ServiceCard key={i} {...s} />)}
        </div>
      </Section>

      <div className="border-t border-border/30" />

      <Section label="BENEFICIOS" title="Resultados concretos">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((b, i) => <BenefitItem key={i} {...b} />)}
        </div>
      </Section>

      <HighlightQuote text="Si tu empresa no integra IA, queda fuera del juego." />

      <Section label="CASOS DE USO" title="Industrias donde aplicamos IA">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Comercio', 'Industria', 'Salud', 'Logística', 'Finanzas', 'Educación', 'Servicios', 'Retail'].map(c => (
            <div key={c} className="px-4 py-3 rounded-xl border border-border/40 bg-card/40 text-sm text-muted-foreground text-center font-mono tracking-wide">
              {c}
            </div>
          ))}
        </div>
      </Section>

      <div className="border-t border-border/30" />

      <Section label="INTEGRACIÓN" title="Parte del ecosistema Grupo FM">
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          FM Intelligence trabaja en conjunto con <strong className="text-foreground">FM Development</strong> para integrar IA directamente en el software de tu empresa, y con <strong className="text-foreground">FM Consulting</strong> para optimizar los procesos de recursos humanos con selección asistida por inteligencia artificial.
        </p>
      </Section>

      <CtaFinal
        title="Empezá hoy con IA"
        cta="Solicitar asesoramiento gratuito"
        ctaHref="mailto:contacto@grupofm.com.ar?subject=Quiero empezar con IA"
      />

      <OtherUnits currentPath="/intelligence" />
      <UnitFooter />
    </div>
  );
}