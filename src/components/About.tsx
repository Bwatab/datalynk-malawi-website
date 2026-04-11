import { CheckCircle, Globe, Users, Award } from 'lucide-react';

const highlights = [
  'Local expertise with global data standards',
  'Practical solutions for Malawi businesses',
  'End-to-end data lifecycle management',
  'Trusted by businesses across Malawi',
];

const stats = [
  { icon: Users, value: '50+', label: 'Clients Served' },
  { icon: Award, value: '3+', label: 'Years Experience' },
  { icon: Globe, value: '100%', label: 'Malawi-Focused' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#080d1a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-5">
              <span className="text-teal-300 text-sm font-medium">About DataLynk Malawi</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Your Trusted{' '}
              <span className="text-gradient">Data Partner</span>
              {' '}in Malawi
            </h2>

            <p className="text-slate-400 text-base leading-relaxed mb-6">
              DataLynk Malawi is a data solutions provider helping businesses organize, analyze, and leverage their data for growth and efficiency. We combine modern data engineering with a deep understanding of the local Malawian business landscape.
            </p>

            <p className="text-slate-400 text-base leading-relaxed mb-8">
              From small enterprises to large organizations, we deliver tailored data systems, reporting tools, and consulting services that drive measurable results — not just numbers on a screen.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-sky-500/25 hover:scale-105 transition-all duration-200"
            >
              Explore Our Services
            </a>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-teal-500/10 rounded-3xl blur-xl" />
              <div className="relative bg-[#0f3460]/50 border border-sky-500/15 rounded-3xl p-8">
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {stats.map(({ icon: Icon, value, label }) => (
                    <div key={label} className="text-center">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500/20 to-teal-500/20 flex items-center justify-center mx-auto mb-3 border border-sky-500/10">
                        <Icon size={20} className="text-sky-400" />
                      </div>
                      <p className="text-white text-2xl font-bold">{value}</p>
                      <p className="text-slate-400 text-xs mt-1">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-[#0c2340]/60 rounded-2xl border border-sky-500/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-sky-400" />
                      </div>
                      <span className="text-slate-300 text-sm">Data Accuracy Rate</span>
                    </div>
                    <span className="text-green-400 font-bold text-sm">98.5%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-[#0c2340]/60 rounded-2xl border border-teal-500/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-teal-400" />
                      </div>
                      <span className="text-slate-300 text-sm">Client Satisfaction</span>
                    </div>
                    <span className="text-green-400 font-bold text-sm">4.9 / 5</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-[#0c2340]/60 rounded-2xl border border-green-500/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <span className="text-slate-300 text-sm">Projects Completed</span>
                    </div>
                    <span className="text-green-400 font-bold text-sm">120+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
