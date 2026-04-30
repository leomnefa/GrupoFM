import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import BusinessUnits from '@/components/landing/BusinessUnits';
import Differentiator from '@/components/landing/Differentiator';
import Benefits from '@/components/landing/Benefits';
import ContactCTA from '@/components/landing/ContactCTA';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground dark">
        <Navbar />
        <Hero />
        <About />
        <BusinessUnits />
        <Differentiator />
        <Benefits />
        <ContactCTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
}