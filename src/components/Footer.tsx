import { Database, Facebook, Instagram, Twitter, Phone, Mail } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Data Cleaning & Organization',
  'Business Data Systems',
  'Data Analysis & Reports',
  'Performance Dashboards',
  'Business Insights & Consulting',
];

export default function Footer() {
  return (
    <footer className="bg-[#04080f] border-t border-sky-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-200">
                <Database size={20} className="text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-lg tracking-tight">DataLynk</span>
                <span className="text-teal-400 text-xs font-medium tracking-widest uppercase">Malawi</span>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Connecting Data, Empowering Decisions. Malawi's trusted partner for data solutions and business intelligence.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: 'https://web.facebook.com/DataLynkMalawi/', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Twitter, href: '#', label: 'X / Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10 hover:scale-110 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-sky-300 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-sky-500/50 group-hover:bg-sky-400 transition-colors duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-teal-300 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-teal-500/50 group-hover:bg-teal-400 transition-colors duration-200" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Phone size={15} className="text-sky-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 text-sm">+265 994 610 854</p>
                    <p className="text-slate-300 text-sm">+265 989 71 77 94</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <Mail size={15} className="text-teal-400 flex-shrink-0" />
                  <a
                    href="mailto:datalynkmalawi@proton.me"
                    className="text-slate-300 hover:text-teal-300 text-sm transition-colors duration-200 break-all"
                  >
                    datalynkmalawi@proton.me
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-gradient-to-br from-sky-500/10 to-teal-500/10 border border-sky-500/15 rounded-xl">
              <p className="text-slate-400 text-xs leading-relaxed">
                Based in Malawi, serving businesses nationwide with world-class data solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} DataLynk Malawi. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs text-center">
            Connecting Data, Empowering Decisions
          </p>
        </div>
      </div>
    </footer>
  );
}
