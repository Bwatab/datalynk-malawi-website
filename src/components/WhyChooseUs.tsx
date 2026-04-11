import { TrendingUp, LayoutDashboard, MapPin, Shield, Clock, Puzzle } from 'lucide-react';

const reasons = [
  {
    icon: TrendingUp,
    title: 'Data-Driven Decision Making',
    description: 'We transform your raw data into clear, actionable insights that drive confident business decisions and measurable growth.',
    color: 'from-sky-500/20 to-sky-600/10',
    iconColor: 'text-sky-400',
    border: 'border-sky-500/15',
  },
  {
    icon: LayoutDashboard,
    title: 'Custom-Built Dashboards',
    description: 'Every dashboard we build is crafted specifically for your business needs — not generic templates, but tailored analytics experiences.',
    color: 'from-teal-500/20 to-teal-600/10',
    iconColor: 'text-teal-400',
    border: 'border-teal-500/15',
  },
  {
    icon: MapPin,
    title: 'Local Business Understanding',
    description: 'Deeply rooted in Malawi, we understand the unique challenges and opportunities of the local market better than anyone else.',
    color: 'from-green-500/20 to-green-600/10',
    iconColor: 'text-green-400',
    border: 'border-green-500/15',
  },
  {
    icon: Shield,
    title: 'Reliable & Scalable Solutions',
    description: 'Our solutions are built to grow with you — from startup to enterprise — with robust infrastructure and data security at the core.',
    color: 'from-sky-500/20 to-sky-600/10',
    iconColor: 'text-sky-400',
    border: 'border-sky-500/15',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'We deliver results efficiently without cutting corners. Our streamlined processes mean you get insights faster.',
    color: 'from-teal-500/20 to-teal-600/10',
    iconColor: 'text-teal-400',
    border: 'border-teal-500/15',
  },
  {
    icon: Puzzle,
    title: 'End-to-End Data Support',
    description: 'From data collection and cleaning to analysis and reporting, we manage the full data lifecycle so you can focus on your business.',
    color: 'from-green-500/20 to-green-600/10',
    iconColor: 'text-green-400',
    border: 'border-green-500/15',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-[#080d1a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-gradient-to-b from-sky-600/5 to-transparent" />
        <div className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(14,165,233,0.08) 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-5">
            <span className="text-green-300 text-sm font-medium">Why DataLynk Malawi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-gradient">Us?</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
            We combine technical expertise with local knowledge to deliver data solutions that actually work for Malawian businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className={`service-card bg-gradient-to-br ${reason.color} bg-[#0f3460]/20 rounded-2xl p-7 ${reason.border}`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-5 border border-white/10`}>
                  <Icon size={22} className={reason.iconColor} />
                </div>
                <h3 className="text-white font-bold text-base mb-3">{reason.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-sky-500/10 via-teal-500/10 to-green-500/10 border border-sky-500/20 rounded-3xl p-10 text-center">
            <h3 className="text-white font-bold text-2xl sm:text-3xl mb-4">
              Ready to Unlock the Power of Your Data?
            </h3>
            <p className="text-slate-400 text-base mb-8 max-w-xl mx-auto">
              Join businesses across Malawi who trust DataLynk to drive smarter, faster, and more confident decisions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 text-white font-semibold text-sm hover:shadow-xl hover:shadow-sky-500/25 hover:scale-105 transition-all duration-200"
              >
                Start Your Journey
              </a>
              <a
                href="#services"
                className="px-8 py-3.5 rounded-xl border border-sky-500/30 text-sky-300 font-semibold text-sm hover:bg-sky-500/10 hover:border-sky-500/60 transition-all duration-200"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
