import React from 'react';
import { Wrench, Wifi, Camera, Shield, Headphones, Server } from 'lucide-react';
import { UnitNavbar, UnitHero, Section, ServiceCard, BenefitItem, HighlightQuote, CtaFinal, OtherUnits, UnitFooter } from '@/components/units/UnitLayout';

const IMAGE = '/images/152293e69_generated_834bb199.png';

const SERVICES = [
  { icon: Wrench, title: 'Reparación de PC y notebooks', desc: 'Diagnóstico, reparación de hardware y software para equipos de todo tipo.' },
  { icon: Wifi, title: 'Redes e infraestructura', desc: 'Diseño, instalación y administración de redes LAN/WAN para empresas.' },
  { icon: Camera, title: 'CCTV y seguridad', desc: 'Instalación y configuración de sistemas de cámaras y monitoreo.' },
  { icon: Shield, title: 'Mantenimiento preventivo', desc: 'Planes de mantenimiento periódico para evitar fallas y pérdidas de datos.' },
  { icon: Headphones, title: 'Soporte técnico empresarial', desc: 'Atención presencial y remota para empresas con soporte prioritario.' },
  { icon: Server, title: 'Servidores y backups', desc: 'Configuración de servidores locales y soluciones de respaldo en la nube.' },
];

const BENEFITS = [
  { title: 'Menos tiempo sin producir', desc: 'Respuesta rápida para minimizar el impacto de cualquier falla en tu operación.' },
  { title: 'Infraestructura confiable', desc: 'Redes y equipos correctamente configurados para trabajar sin interrupciones.' },
  { title: 'Monitoreo inteligente', desc: 'Integramos herramientas de monitoreo con IA para detectar problemas antes de que ocurran.' },
];

export default function FMComputacion() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <UnitNavbar currentPath="/computacion" />

      <UnitHero
        tag="FM Computación · Grupo FM"
        title="Servicio técnico de PC y soluciones IT"
        subtitle="Soporte, redes e infraestructura tecnológica para tu empresa."
        cta="Solicitar soporte"
        ctaHref="mailto:contacto@grupofm.com.ar?subject=Soporte FM Computacion"
        image={IMAGE}
      />

      <Section label="SERVICIOS" title="Todo lo que tu infraestructura IT necesita">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => <ServiceCard key={i} {...s} />)}
        </div>
      </Section>

      <div className="border-t border-border/30" />

      <Section label="SOPORTE EMPRESARIAL" title="Pensado para empresas">
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
          Ofrecemos planes de soporte técnico mensual para empresas de todos los tamaños. Tu equipo trabaja, nosotros nos ocupamos de que la tecnología funcione. Atención presencial en San Juan y remota en todo el país.
        </p>
      </Section>

      <div className="border-t border-border/30" />

      <Section label="INTEGRACIÓN INTELIGENTE" title="IT + Inteligencia Artificial">
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
          A través de <strong className="text-foreground">FM Intelligence</strong>, podemos incorporar monitoreo predictivo a tu infraestructura: alertas automáticas, análisis de rendimiento y diagnóstico asistido por IA para anticipar fallas antes de que ocurran.
        </p>
      </Section>

      <div className="border-t border-border/30" />

      <Section label="BENEFICIOS" title="Tecnología que funciona">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((b, i) => <BenefitItem key={i} {...b} />)}
        </div>
      </Section>

      <HighlightQuote text="Tu tecnología tiene que trabajar para vos, no al revés." />

      <CtaFinal
        title="Contactar soporte técnico"
        cta="Solicitar asistencia ahora"
        ctaHref="mailto:contacto@grupofm.com.ar?subject=Soporte tecnico FM Computacion"
      />

      <OtherUnits currentPath="/computacion" />
      <UnitFooter />
    </div>
  );
}