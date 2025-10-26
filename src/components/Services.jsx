import React from 'react';
import { Home, Wrench, Ruler, Hammer } from 'lucide-react';

const services = [
  {
    title: 'Residential Construction',
    desc: 'New builds, extensions, and bespoke homes delivered with craftsmanship and care.',
    Icon: Home,
  },
  {
    title: 'Commercial Fit-outs',
    desc: 'Efficient, code-compliant spaces for offices, retail, and hospitality.',
    Icon: Ruler,
  },
  {
    title: 'Renovations & Repairs',
    desc: 'From structural upgrades to fine finish work—on time and on budget.',
    Icon: Wrench,
  },
  {
    title: 'Project Management',
    desc: 'Transparent schedules, clear communication, and safety-first delivery.',
    Icon: Hammer,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold">What We Do</h2>
          <p className="mt-3 text-neutral-300">
            Full‑service contracting for residential and commercial clients. We coordinate trades, permits, and inspections so you can focus on the result.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ title, desc, Icon }) => (
            <div key={title} className="group rounded-lg border border-white/10 bg-neutral-900/50 p-6 hover:border-emerald-400/50 transition-colors">
              <div className="flex items-center justify-center size-10 rounded-md bg-emerald-500/10 text-emerald-300 mb-4">
                <Icon className="size-5" />
              </div>
              <h3 className="font-medium">{title}</h3>
              <p className="text-sm text-neutral-300 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
