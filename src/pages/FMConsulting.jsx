import React from 'react';
import { Users, ClipboardList, Building2, BrainCircuit, Target, TrendingUp } from 'lucide-react';
import { UnitNavbar, UnitHero, Section, ServiceCard, BenefitItem, HighlightQuote, CtaFinal, OtherUnits, UnitFooter } from '@/components/units/UnitLayout';

const IMAGE = '/images/d585dffb7_generated_bd671718.png';

const SERVICES = [
  { icon: Users, title: 'Reclutamiento y selección', desc: 'Encontramos el talento correcto para cada posición con procesos rigurosos y eficientes.' },
  { icon: ClipboardList, title: 'Evaluaciones de competencias', desc: 'Herramientas de assessment para conocer el potencial real de cada candidato.' },
  { icon: Building2, title: 'Consultoría organizacional', desc: 'Diagnóstico y rediseño de estructuras, procesos y cultura organizacional.' },
  { icon: BrainCircuit, title: 'Selección con IA', desc: 'Proceso de selección asistido por inteligencia artificial para mejores resultados en menos tiempo.' },
];

const BENEFITS = [
  { title: 'Mejor contratación', desc: 'Reducís el tiempo de búsqueda y encontrás perfiles que realmente encajan con tu cultura.' },
  { title: 'Optimización de equipos', desc: 'Detectamos fortalezas, brechas y oportunidades dentro de tu estructura actual.' },
  { title: 'Menos rotación', desc: 'Una buena selección reduce la rotación y ahorra costos de reemplazo a largo plazo.' },
];

export default function FMConsulting() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <UnitNavbar currentPath="/consulting" />

      <UnitHero
        tag="FM Consulting · Grupo FM"
        title="Gestión de talento para hacer crecer tu empresa"
        subtitle="Soluciones en recursos humanos modernas, eficientes y orientadas a resultados."
        cta="Solicitar asesoramiento"
        ctaHref="mailto:contacto@grupofm.com.ar?subject=Asesoramiento FM Consulting"
        image={IMAGE}
      />

      <Section label="SERVICIOS" title="RRHH que impulsan el negocio">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => <ServiceCard key={i} {...s} />)}
        </div>
      </Section>

      <div className="border-t border-border/30" />

      <Section label="IA EN SELECCIÓN" title="Selección potenciada por FM Intelligence">
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
          En alianza con <strong className="text-foreground">FM Intelligence</strong>, incorporamos herramientas de IA en el proceso de selección: análisis de CVs, matching automático de perfiles, y reportes predictivos de desempeño. Más precisión, menos sesgo, mejores resultados.
        </p>
      </Section>

      <div className="border-t border-border/30" />

      <Section label="BENEFICIOS" title="El impacto del buen talento">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((b, i) => <BenefitItem key={i} {...b} />)}
        </div>
      </Section>

      <HighlightQuote text="Las empresas que crecen tienen algo en común: el equipo correcto." />

      <CtaFinal
        title="Potenciá tu equipo"
        cta="Hablar con un consultor"
        ctaHref="mailto:contacto@grupofm.com.ar?subject=Quiero potenciar mi equipo"
      />

      <OtherUnits currentPath="/consulting" />
      <UnitFooter />
    </div>
  );
}