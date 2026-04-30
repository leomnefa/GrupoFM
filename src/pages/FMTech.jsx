import React from 'react';
import { Smartphone, Battery, MonitorSmartphone, Zap, ShieldCheck, Clock } from 'lucide-react';
import { UnitNavbar, UnitHero, Section, ServiceCard, BenefitItem, HighlightQuote, CtaFinal, OtherUnits, UnitFooter } from '@/components/units/UnitLayout';

const IMAGE = '/images/7c035ac39_generated_49b3cb6c.png';

const SERVICES = [
  { icon: MonitorSmartphone, title: 'Cambio de pantalla', desc: 'Reemplazo de pantallas rotas o con fallas en todas las marcas y modelos.' },
  { icon: Battery, title: 'Cambio de batería', desc: 'Restaurá la autonomía de tu equipo con baterías originales o de alta calidad.' },
  { icon: Smartphone, title: 'Software y sistema', desc: 'Formateo, restauración, eliminación de virus y actualización de sistema.' },
  { icon: Zap, title: 'Atención rápida', desc: 'Diagnóstico en el momento y reparaciones express según complejidad.' },
  { icon: ShieldCheck, title: 'Garantía en reparaciones', desc: 'Todos nuestros trabajos incluyen garantía por escrito.' },
  { icon: Clock, title: 'Todas las marcas', desc: 'Samsung, iPhone, Motorola, Xiaomi, LG y más.' },
];

const BENEFITS = [
  { title: 'Rápido y confiable', desc: 'La mayoría de las reparaciones se realizan el mismo día para que no pierdas tiempo.' },
  { title: 'Repuestos de calidad', desc: 'Trabajamos con repuestos seleccionados para garantizar durabilidad.' },
  { title: 'Diagnóstico sin costo', desc: 'Revisamos tu equipo sin compromiso antes de cotizarte cualquier reparación.' },
];

export default function FMTech() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <UnitNavbar currentPath="/tech" />

      <UnitHero
        tag="FM Tech · Grupo FM"
        title="Reparación de celulares rápida y confiable"
        subtitle="Soluciones técnicas para todas las marcas y modelos."
        cta="Consultar reparación"
        ctaHref="mailto:contacto@grupofm.com.ar?subject=Consulta FM Tech"
        image={IMAGE}
      />

      <Section label="SERVICIOS" title="¿Qué le pasa a tu celular?">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => <ServiceCard key={i} {...s} />)}
        </div>
      </Section>

      <div className="border-t border-border/30" />

      <Section label="POR QUÉ ELEGIRNOS" title="Reparación sin vueltas">
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
          En FM Tech sabemos que tu celular es tu herramienta de trabajo. Por eso, cada reparación es tratada con la misma seriedad que daríamos a cualquier equipo empresarial. Diagnóstico claro, presupuesto honesto y trabajo garantizado.
        </p>
      </Section>

      <div className="border-t border-border/30" />

      <Section label="BENEFICIOS" title="Tu equipo en las mejores manos">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((b, i) => <BenefitItem key={i} {...b} />)}
        </div>
      </Section>

      <HighlightQuote text="Tu celular roto no puede esperar. Nosotros tampoco." />

      <CtaFinal
        title="Traé tu equipo hoy"
        cta="Consultar disponibilidad"
        ctaHref="mailto:contacto@grupofm.com.ar?subject=Reparacion FM Tech"
      />

      <OtherUnits currentPath="/tech" />
      <UnitFooter />
    </div>
  );
}