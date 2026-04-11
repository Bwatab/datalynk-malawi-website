import { ArrowRight, BarChart2, TrendingUp, Database, Zap } from 'lucide-react';

function DashboardIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-teal-500/20 rounded-3xl blur-3xl animate-pulse-glow" />

      <div className="relative bg-[#0f3460]/80 backdrop-blur-sm border border-sky-500/20 rounded-3xl p-6 shadow-2xl animate-float">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Analytics Dashboard</p>
            <p className="text-white font-bold text-lg mt-0.5">Business Overview</p>
          </div>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <div className="w-3 h-3 rounded-full bg-green-400/70" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: 'Revenue', value: '+34%', color: 'from-sky-500/20 to-sky-600/10', text: 'text-sky-400' },
            { label: 'Growth', value: '+18%', color: 'from-teal-500/20 to-teal-600/10', text: 'text-teal-400' },
            { label: 'Clients', value: '+52%', color: 'from-green-500/20 to-green-600/10', text: 'text-green-400' },
          ].map((stat) => (
            <div key={stat.label} className={`bg-gradient-to-br ${stat.color} rounded-xl p-3 border border-white/5`}>
              <p className="text-slate-400 text-[10px] font-medium">{stat.label}</p>
              <p className={`${stat.text} text-lg font-bold mt-1`}>{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#0c2340]/60 rounded-2xl p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-slate-300 text-xs font-medium">Monthly Performance</span>
            <span className="text-sky-400 text-xs">2024</span>
          </div>
          <div className="flex items-end gap-1.5 h-16">
            {[40, 65, 45, 80, 60, 90, 70, 85, 95, 75, 88, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background: i >= 10
                    ? 'linear-gradient(to top, #0ea5e9, #22c55e)'
                    : `rgba(14, 165, 233, ${0.3 + (i / 20)})`,
                  transition: `height 0.5s ease ${i * 0.05}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="space-y-2">
          {[
            { label: 'Data Processing', pct: 87, color: '#0ea5e9' },
            { label: 'Report Generation', pct: 72, color: '#14b8a6' },
            { label: 'Client Insights', pct: 94, color: '#22c55e' },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between mb-1">
                <span className="text-slate-400 text-[11px]">{item.label}</span>
                <span className="text-slate-300 text-[11px] font-semibold">{item.pct}%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${item.pct}%`, background: item.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-6 -left-6 bg-[#0f3460]/90 border border-sky-500/20 rounded-2xl p-3.5 shadow-xl animate-float-delayed">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-500/30 to-teal-500/30 flex items-center justify-center">
            <TrendingUp size={16} className="text-green-400" />
          </div>
          <div>
            <p className="text-white text-sm font-bold">+127%</p>
            <p className="text-slate-400 text-[10px]">Data Accuracy</p>
          </div>
        </div>
      </div>

      <div className="absolute -top-4 -right-4 bg-[#0f3460]/90 border border-teal-500/20 rounded-2xl p-3.5 shadow-xl animate-float-delayed">
        <div className="flex items-center gap-2">
          <Zap size={16} className="text-teal-400" />
          <span className="text-teal-300 text-xs font-semibold">Live Analytics</span>
        </div>
      </div>
    </div>
  );
}

function BackgroundNodes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-sky-400/30 animate-pulse-glow"
          style={{
            top: `${15 + i * 15}%`,
            left: `${5 + i * 12}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl" />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#060f1e] overflow-hidden">
      <BackgroundNodes />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(14, 165, 233, 0.07) 0%, transparent 60%),
                            radial-gradient(ellipse at 80% 50%, rgba(20, 184, 166, 0.07) 0%, transparent 60%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sky-300 text-sm font-medium">Malawi's Data Solutions Partner</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Connecting{' '}
              <span className="text-gradient">Data,</span>
              <br />
              Empowering{' '}
              <span className="text-gradient">Decisions</span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              We help businesses turn raw data into actionable insights for smarter decision-making — built for Malawi's growing digital economy.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 text-white font-semibold text-sm hover:shadow-xl hover:shadow-sky-500/30 hover:scale-105 transition-all duration-200"
              >
                Get Started
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-sky-500/30 text-sky-300 font-semibold text-sm hover:bg-sky-500/10 hover:border-sky-500/60 transition-all duration-200"
              >
                Contact Us
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              {[
                { icon: Database, label: 'Data Management' },
                { icon: BarChart2, label: 'Analytics & Reports' },
                { icon: TrendingUp, label: 'Growth Insights' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-slate-400 text-sm">
                  <Icon size={16} className="text-teal-400" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:flex justify-center hidden">
            <DashboardIllustration />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-5 h-8 rounded-full border-2 border-sky-500/40 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-sky-400" />
        </div>
      </div>
    </section>
  );
}
