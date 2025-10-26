import React from 'react';

const projects = [
  {
    name: 'Hillside Residence',
    type: 'New Build',
  },
  {
    name: 'Atrium Offices',
    type: 'Commercial Fit-out',
  },
  {
    name: 'Riverside Café',
    type: 'Hospitality Renovation',
  },
  {
    name: 'Maple Street Extension',
    type: 'Addition & Remodel',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold">Recent Projects</h2>
          <p className="mt-3 text-neutral-300">
            A selection of builds and fit‑outs delivered with precision and attention to detail.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <article key={p.name} className="rounded-lg overflow-hidden border border-white/10 bg-neutral-900/50">
              <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 relative">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_30%,#34d39933,transparent_60%)]" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950/70 text-emerald-300 text-xs border border-emerald-400/30">
                      {p.type}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium">{p.name}</h3>
                <p className="text-sm text-neutral-400 mt-1">Built for durability, safety, and performance.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
