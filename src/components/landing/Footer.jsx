import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, Phone, Instagram, Linkedin, Facebook } from 'lucide-react';

const unitLinks = [
  { name: 'FM Computación', href: '#' },
  { name: 'FM Tech', href: '#' },
  { name: 'FM Consulting', href: '#' },
  { name: 'FM Printing', href: '#' },
  { name: 'FM Development', href: '#' },
  { name: 'FM Intelligence', href: '#' },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold tracking-tighter text-foreground">
              Grupo <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">FM</span>
            </span>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {t.about.text.substring(0, 100)}...
            </p>
          </div>

          {/* Units */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.15em] text-primary uppercase mb-4">
              {t.footer.units}
            </h4>
            <ul className="space-y-2.5">
              {unitLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.15em] text-primary uppercase mb-4">
              {t.footer.contact}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contacto@grupofm.com.ar"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary/70" />
                  contacto@grupofm.com.ar
                </a>
              </li>
              <li>
                <a
                  href="tel:+5491100000000"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary/70" />
                  +54 9 11 0000-0000
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.15em] text-primary uppercase mb-4">
              {t.footer.social}
            </h4>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Grupo FM. {t.footer.rights}
          </p>
          <p className="text-xs text-muted-foreground/50 font-mono">
            grupofm.com.ar
          </p>
        </div>
      </div>
    </footer>
  );
}