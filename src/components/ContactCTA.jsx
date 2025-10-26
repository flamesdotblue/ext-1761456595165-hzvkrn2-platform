import React from 'react';

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 md:p-12 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(16,185,129,0.10),transparent_50%)]" />
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">Let’s Build Something Solid</h3>
              <p className="mt-3 text-neutral-300">
                Tell us about your project goals and timeline. Our team will reply within one business day with next steps and a clear estimate.
              </p>
            </div>
            <form className="grid grid-cols-1 gap-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input className="w-full rounded-md bg-neutral-950 border border-white/10 px-4 py-3 text-sm outline-none focus:border-emerald-400/60" placeholder="Full name" required />
                <input type="email" className="w-full rounded-md bg-neutral-950 border border-white/10 px-4 py-3 text-sm outline-none focus:border-emerald-400/60" placeholder="Email" required />
              </div>
              <input className="w-full rounded-md bg-neutral-950 border border-white/10 px-4 py-3 text-sm outline-none focus:border-emerald-400/60" placeholder="Phone (optional)" />
              <textarea rows="4" className="w-full rounded-md bg-neutral-950 border border-white/10 px-4 py-3 text-sm outline-none focus:border-emerald-400/60" placeholder="Project details" required />
              <div className="flex items-center justify-between">
                <p className="text-xs text-neutral-400">By submitting, you agree to our terms and privacy policy.</p>
                <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-neutral-950 px-5 py-2.5 text-sm font-medium transition-colors">Send Request</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
