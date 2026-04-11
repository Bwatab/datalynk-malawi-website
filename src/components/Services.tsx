import { Database, Server, Cloud, BarChart2, FileText, LayoutDashboard, Lightbulb, Cpu, DollarSign } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  name: string;
  description: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  gradient: string;
  iconBg: string;
  borderColor: string;
  services: Service[];
}

const categories: ServiceCategory[] = [
  {
    id: 'data-management',
    title: 'Data Management & Processing',
    subtitle: 'Organize and structure your business data for maximum utility',
    gradient: 'from-sky-500/15 to-sky-600/5',
    iconBg: 'from-sky-500/30 to-sky-600/20',
    borderColor: 'border-sky-500/20',
    services: [
      {
        icon: Database,
        name: 'Data Cleaning & Organization',
        description: 'Transform messy, inconsistent data into clean, structured datasets ready for analysis and reporting.',
      },
      {
        icon: Server,
        name: 'Business Data Management',
        description: 'Comprehensive data management systems tailored to your business processes and operational needs.',
      },
      {
        icon: Cloud,
        name: 'Cloud Data Solutions',
        description: 'Scalable cloud-based data infrastructure that grows with your business, ensuring reliability and accessibility.',
      },
    ],
  },
  {
    id: 'business-systems',
    title: 'Business Systems & Automation',
    subtitle: 'Streamline operations with intelligent data-driven systems',
    gradient: 'from-teal-500/15 to-teal-600/5',
    iconBg: 'from-teal-500/30 to-teal-600/20',
    borderColor: 'border-teal-500/20',
    services: [
      {
        icon: Cpu,
        name: 'Business Data Systems',
        description: 'Custom-built data management systems that automate workflows and improve operational efficiency.',
      },
      {
        icon: DollarSign,
        name: 'Financial Tracking Solutions',
        description: 'Robust financial data tracking and reporting tools that give you real-time visibility into your numbers.',
      },
    ],
  },
  {
    id: 'analytics',
    title: 'Data Analytics & Reporting',
    subtitle: 'Turn your data into compelling stories and actionable intelligence',
    gradient: 'from-green-500/15 to-green-600/5',
    iconBg: 'from-green-500/30 to-green-600/20',
    borderColor: 'border-green-500/20',
    services: [
      {
        icon: BarChart2,
        name: 'Data Analysis & Business Reports',
        description: 'In-depth analysis and professionally formatted reports that highlight trends, opportunities, and risks.',
      },
      {
        icon: LayoutDashboard,
        name: 'Performance Dashboards',
        description: 'Interactive, real-time dashboards that visualize your KPIs and business metrics at a glance.',
      },
    ],
  },
  {
    id: 'consulting',
    title: 'Insights & Consulting',
    subtitle: 'Expert guidance to unlock the full potential of your data',
    gradient: 'from-amber-500/10 to-orange-600/5',
    iconBg: 'from-amber-500/30 to-orange-600/20',
    borderColor: 'border-amber-500/20',
    services: [
      {
        icon: Lightbulb,
        name: 'Business Insights & Consulting',
        description: 'Strategic data consulting to help you identify growth opportunities, reduce costs, and make better decisions.',
      },
      {
        icon: FileText,
        name: 'Custom Data Strategy',
        description: 'Bespoke data roadmaps and strategies designed specifically for the Malawian market and your industry.',
      },
    ],
  },
];

function ServiceCard({ service, iconBg }: { service: Service; iconBg: string }) {
  const Icon = service.icon;
  return (
    <div className="flex gap-4 p-4 rounded-2xl hover:bg-white/3 transition-colors duration-200 group">
      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${iconBg} flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-200`}>
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <h4 className="text-white font-semibold text-sm mb-1">{service.name}</h4>
        <p className="text-slate-400 text-xs leading-relaxed">{service.description}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#060f1e] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-sky-600/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-teal-600/4 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 mb-5">
            <span className="text-sky-300 text-sm font-medium">What We Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
            From data processing to business intelligence, we provide end-to-end data solutions designed for the Malawian business environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`service-card bg-gradient-to-br ${category.gradient} bg-[#0f3460]/30 rounded-3xl p-7 ${category.borderColor}`}
            >
              <div className="mb-6">
                <h3 className="text-white font-bold text-lg mb-2">{category.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{category.subtitle}</p>
              </div>

              <div className="space-y-1">
                {category.services.map((service) => (
                  <ServiceCard key={service.name} service={service} iconBg={category.iconBg} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm mb-5">Need a custom solution for your business?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 text-white font-semibold text-sm hover:shadow-xl hover:shadow-sky-500/25 hover:scale-105 transition-all duration-200"
          >
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
