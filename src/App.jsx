import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import ContactCTA from './components/ContactCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="text-lg font-semibold tracking-tight">GreenGrid Contractors</a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-neutral-950 px-4 py-2 text-sm font-medium transition-colors">Get a Quote</a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Projects />
        <ContactCTA />
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} GreenGrid Contractors. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
