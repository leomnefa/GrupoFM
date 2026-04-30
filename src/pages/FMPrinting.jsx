import React from 'react';
import { Layers, Boxes, Factory, Cpu, Pencil, Truck } from 'lucide-react';
import { UnitNavbar, UnitHero, Section, ServiceCard, BenefitItem, HighlightQuote, CtaFinal, OtherUnits, UnitFooter } from '@/components/units/UnitLayout';

const IMAGE = '/images/9e857a409_generated_1ca6c234.png';

const SERVICES = [
  { icon: Pencil, title: 'Prototipos', desc: 'Convertimos tus planos o ideas en prototipos físicos rápidos para validar antes de producir.' },
  { icon: Boxes, title: 'Piezas personalizadas', desc: 'Fabricación de piezas únicas, repuestos y componentes a medida exacta.' },
  { icon: Factory, title: 'Producción en serie', desc: 'Producción de pequeñas y medianas series con calidad constante.' },
  { icon: Cpu, title: 'Optimización de diseños', desc: 'Revisamos y optimizamos tus archivos 3D para mejorar resistencia y reducir material.' },
  { icon: Layers, title: 'Aplicaciones industriales', desc: 'Piezas técnicas para industria, manufactura, robótica y más.' },
  { icon: Truck, title: 'Aplicaciones comerciales', desc: 'Exhibidores, packaging, accesorios y piezas decorativas para comercios y marcas.' },
];

const BENEFITS = [
  { title: 'Velocidad de producción', desc: 'Del archivo al objeto físico en horas, no semanas.' },
  { title: 'Costo menor a manufactura tradicional', desc: 'Ideal para piezas únicas o series pequeñas donde el molde tradicional no es viable.' },
  { title: 'Sin límites de forma', desc: 'La impresión 3D permite geometrías imposibles para la manufactura convencional.' },
];

export default function FMPrinting() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <UnitNavbar currentPath="/printing" />

      <UnitHero
        tag="FM Printing · Grupo FM"
        title="Impresión 3D profesional"
        subtitle="Convertimos tus ideas en objetos reales. Rápido, preciso y a medida."
        cta="Solicitar cotización"
        ctaHref="mailto:contacto@grupofm.com.ar?subject=Cotizacion FM Printing"
        image={IMAGE}
      />

      <Section label="SERVICIOS" title="De la idea al objeto físico">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => <ServiceCard key={i} {...s} />)}
        </div>
      </Section>

      <div className="border-t border-border/30" />

      <Section label="APLICACIONES" title="¿Para qué sector trabajamos?">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Industria', 'Arquitectura', 'Educación', 'Medicina', 'Diseño', 'Electrónica', 'Automotriz', 'Arte'].map(c => (
            <div key={c} className="px-4 py-3 rounded-xl border border-border/40 bg-card/40 text-sm text-muted-foreground text-center font-mono tracking-wide">
              {c}
            </div>
          ))}
        </div>
      </Section>

      <div className="border-t border-border/30" />

      <Section label="BENEFICIOS" title="Las ventajas de imprimir en 3D">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((b, i) => <BenefitItem key={i} {...b} />)}
        </div>
      </Section>

      <HighlightQuote text="Si lo podés imaginar, lo podemos imprimir." />

      <CtaFinal
        title="Cotizá tu proyecto"
        cta="Solicitar cotización ahora"
        ctaHref="mailto:contacto@grupofm.com.ar?subject=Cotizacion impresion 3D"
      />

      <OtherUnits currentPath="/printing" />
      <UnitFooter />
    </div>
  );
}