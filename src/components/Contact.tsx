import { useState } from 'react';
import { Phone, Mail, Send, MessageSquare, Facebook, Instagram, Twitter } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone Numbers',
    lines: ['+265 994 610 854', '+265 989 71 77 94'],
    color: 'from-sky-500/20 to-sky-600/10',
    iconColor: 'text-sky-400',
    border: 'border-sky-500/15',
  },
  {
    icon: Mail,
    label: 'Email Address',
    lines: ['datalynkmalawi@proton.me'],
    color: 'from-teal-500/20 to-teal-600/10',
    iconColor: 'text-teal-400',
    border: 'border-teal-500/15',
  },
  {
    icon: MessageSquare,
    label: 'Social Media',
    lines: ['Facebook • Instagram • X (Twitter)'],
    color: 'from-green-500/20 to-green-600/10',
    iconColor: 'text-green-400',
    border: 'border-green-500/15',
  },
];

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://web.facebook.com/DataLynkMalawi/', color: 'hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/30 hover:scale-110' },
  { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:bg-pink-500/20 hover:text-pink-400 hover:border-pink-500/30 hover:scale-110' },
  { icon: Twitter, label: 'X / Twitter', href: '#', color: 'hover:bg-sky-500/20 hover:text-sky-400 hover:border-sky-500/30 hover:scale-110' },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-[#060f1e] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-sky-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 mb-5">
            <span className="text-sky-300 text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Ready to transform your data? Reach out and let's discuss how DataLynk Malawi can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`service-card bg-gradient-to-br ${item.color} bg-[#0f3460]/20 rounded-2xl p-6 ${item.border}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 border border-white/10`}>
                      <Icon size={20} className={item.iconColor} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">{item.label}</p>
                      {item.lines.map((line) => (
                        <p key={line} className="text-white font-semibold text-sm leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="bg-[#0f3460]/30 border border-sky-500/10 rounded-2xl p-6">
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-4">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-200 ${color}`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-[#0f3460]/30 border border-green-500/20 rounded-3xl px-8">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-5 border border-green-500/20">
                  <Send size={24} className="text-green-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Message Sent!</h3>
                <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-xl border border-sky-500/30 text-sky-300 text-sm font-medium hover:bg-sky-500/10 transition-colors duration-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#0f3460]/30 border border-sky-500/10 rounded-3xl p-8 space-y-5"
              >
                <h3 className="text-white font-bold text-lg mb-1">Send Us a Message</h3>
                <p className="text-slate-400 text-sm mb-4">Fill out the form and we'll respond within 24 hours.</p>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Banda"
                      className="contact-input w-full px-4 py-3 rounded-xl text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="contact-input w-full px-4 py-3 rounded-xl text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    className="contact-input w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your data needs..."
                    className="contact-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 text-white font-semibold text-sm hover:shadow-xl hover:shadow-sky-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
