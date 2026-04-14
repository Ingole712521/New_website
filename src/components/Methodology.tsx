import { Megaphone, Monitor, PenTool, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'Brand Development',
    icon: ShieldCheck,
    description: 'Build a memorable brand foundation before scaling campaigns.',
    items: ['Brand logo', 'Brand strategy', 'Brand manual', 'Market research'],
    tone: 'text-orange-600',
    chip: 'bg-orange-100 text-orange-700 border-orange-200',
    iconWrap: 'border-orange-200 bg-orange-50',
    cardGlow: 'from-orange-400/30 via-orange-200/10 to-transparent',
    orb: 'bg-orange-200/70',
  },
  {
    title: 'Print Branding',
    icon: PenTool,
    description: 'Bring your identity into real-world touchpoints with consistency.',
    items: [
      'Outdoor branding',
      'Corporate branding',
      'Magazine and newspaper ads',
      'Retail branding',
      'Packaging',
    ],
    tone: 'text-blue-600',
    chip: 'bg-blue-100 text-blue-700 border-blue-200',
    iconWrap: 'border-blue-200 bg-blue-50',
    cardGlow: 'from-blue-400/30 via-blue-200/10 to-transparent',
    orb: 'bg-blue-200/70',
  },
  {
    title: 'Digital Identity',
    icon: Monitor,
    description: 'Create a strong digital-first brand presence that grows trust.',
    items: ['Social media handling'],
    tone: 'text-violet-600',
    chip: 'bg-violet-100 text-violet-700 border-violet-200',
    iconWrap: 'border-violet-200 bg-violet-50',
    cardGlow: 'from-violet-400/30 via-violet-200/10 to-transparent',
    orb: 'bg-violet-200/70',
  },
  {
    title: 'Communication Strategy',
    icon: Megaphone,
    description: 'Deliver clear messaging that aligns every campaign and channel.',
    items: ['Copywriting', 'Content writing'],
    tone: 'text-pink-600',
    chip: 'bg-pink-100 text-pink-700 border-pink-200',
    iconWrap: 'border-pink-200 bg-pink-50',
    cardGlow: 'from-pink-400/30 via-pink-200/10 to-transparent',
    orb: 'bg-pink-200/70',
  },
] as const;

export function Methodology() {
  return (
    <section
      id="services"
      className="relative z-20 mt-0 overflow-hidden bg-brand-dark py-24 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_80%_15%,rgba(236,72,153,0.18),transparent_30%),radial-gradient(circle_at_90%_90%,rgba(139,92,246,0.18),transparent_34%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_1.95fr] lg:gap-10 lg:px-8">
        <div className="rounded-3xl border border-white/15 bg-linear-to-br from-white/12 via-white/5 to-white/0 p-8 backdrop-blur-sm lg:p-10">
          <p className="inline-flex rounded-full border border-cyan-200/25 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
            Our capabilities
          </p>
          <h2 className="mt-6 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
            Our Key{' '}
            <span className="bg-linear-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
            We combine strategy, design, and communication to shape one clear brand experience across print and digital platforms.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 text-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5">
              <p className="text-2xl font-bold text-white">4+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-gray-300">Core services</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5">
              <p className="text-2xl font-bold text-white">360</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-gray-300">Brand support</p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_30px_60px_-34px_rgba(15,23,42,0.9)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_35px_65px_-30px_rgba(15,23,42,0.85)]"
              >
                <div className={`pointer-events-none absolute inset-0 bg-linear-to-br ${service.cardGlow} opacity-90`} />
                <div
                  className={`absolute -right-10 -top-10 h-28 w-28 rounded-full ${service.orb} blur-xl transition-transform duration-500 group-hover:scale-125`}
                />
                <div className="relative">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`rounded-2xl border p-3 shadow-sm ${service.iconWrap}`}>
                        <Icon className={`h-5 w-5 ${service.tone}`} />
                      </div>
                      <h3 className="text-xl font-bold tracking-tight text-slate-900">{service.title}</h3>
                    </div>
                    <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${service.chip}`}>
                      Service
                    </span>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-slate-600">{service.description}</p>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Key points</p>
                  <ol className="space-y-2.5">
                    {service.items.map((item, index) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <span
                          className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${service.chip}`}
                        >
                          {index + 1}
                        </span>
                        <span className="pt-px">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
