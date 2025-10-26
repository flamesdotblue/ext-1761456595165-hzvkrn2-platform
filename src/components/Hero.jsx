import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <span className="inline-block text-emerald-300/90 text-xs tracking-widest uppercase mb-4">Licensed • Insured • On-Time</span>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Trusted Building Contractors for Modern Projects
            </h1>
            <p className="mt-5 text-neutral-300 text-base md:text-lg">
              We deliver high-quality construction, renovations, and commercial fit‑outs with precision, transparency, and safety at the core.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-neutral-950 px-6 py-3 text-sm font-medium transition-colors">Request a Free Quote</a>
              <a href="#projects" className="inline-flex items-center justify-center rounded-md border border-white/20 hover:border-white/40 text-white px-6 py-3 text-sm font-medium transition-colors">View Recent Projects</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
