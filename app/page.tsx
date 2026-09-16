"use client";

import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Globe,
  Headphones,
  Laptop,
  Menu,
  Network,
  Phone,
  Search,
  Server,
  Settings,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const services = [
    {
      icon: Laptop,
      title: "Computer Repair",
      description:
        "Professional diagnosis, maintenance, upgrades, Windows installation, troubleshooting and hardware repair.",
    },
    {
      icon: Network,
      title: "Networking",
      description:
        "LAN, Wi-Fi, router, switch, server and network configuration for offices, institutions and businesses.",
    },
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Modern, responsive and professional websites and web applications built for your organization.",
    },
    {
      icon: Settings,
      title: "IT Support",
      description:
        "Reliable technical support, system maintenance, troubleshooting and technology consulting.",
    },
    {
      icon: BookOpen,
      title: "Digital Training",
      description:
        "Practical computer, software, networking, web development and digital technology training.",
    },
    {
      icon: Server,
      title: "Server Solutions",
      description:
        "Server installation, configuration, backup, security, virtualization and infrastructure support.",
    },
  ];

  const features = [
    "Professional technical support",
    "Experienced IT solutions",
    "Affordable technology services",
    "Practical hands-on training",
    "Modern web and software solutions",
    "Reliable after-service support",
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Training Sessions" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "24/7", label: "Technical Support" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
              <Cpu size={25} />
            </div>

            <div>
              <div className="text-xl font-extrabold tracking-tight">
                Waza<span className="text-blue-600">TechFix</span>
              </div>
              <div className="text-xs font-medium tracking-wider text-slate-500">
                HUB • TECHNOLOGY SOLUTIONS
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            <a href="#home" className="text-sm font-semibold text-blue-600">
              Home
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              About
            </a>
            <a
              href="#solutions"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Solutions
            </a>
            <a
              href="#training"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Training
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="rounded-lg p-2 text-slate-700 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenu && (
          <div className="border-t border-slate-200 bg-white px-6 py-5 lg:hidden">
            <nav className="flex flex-col gap-4">
              {[
                ["Home", "#home"],
                ["Services", "#services"],
                ["About", "#about"],
                ["Solutions", "#solutions"],
                ["Training", "#training"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenu(false)}
                  className="font-semibold text-slate-700 hover:text-blue-600"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section
          id="home"
          className="relative overflow-hidden bg-slate-950 text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.25),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.18),transparent_30%)]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                <Sparkles size={16} />
                Technology • Training • Innovation
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Your Technology.
                <span className="block text-blue-500">
                  Our Expertise.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                WazaTechFix Hub provides professional IT support, computer
                repair, networking, web development, digital training and
                technology solutions for individuals, businesses and
                institutions.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-blue-600/20 transition hover:bg-blue-500"
                >
                  Explore Our Services
                  <ArrowRight size={19} />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-slate-950"
                >
                  Get a Free Consultation
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-400" size={18} />
                  Professional Service
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-400" size={18} />
                  Practical Solutions
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-400" size={18} />
                  Customer Focused
                </div>
              </div>
            </div>

            {/* Hero Technology Card */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-blue-600/20 blur-3xl" />

              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                <div className="rounded-2xl bg-slate-900 p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">
                        WazaTechFix Hub
                      </p>
                      <h3 className="mt-1 text-xl font-bold">
                        Digital Technology Center
                      </h3>
                    </div>

                    <div className="rounded-xl bg-blue-600 p-3">
                      <Zap size={24} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      [Laptop, "Computer"],
                      [Network, "Networking"],
                      [Code2, "Software"],
                      [Server, "Servers"],
                    ].map(([Icon, title]) => (
                      <div
                        key={title as string}
                        className="rounded-xl border border-white/10 bg-white/5 p-5"
                      >
                        <Icon className="mb-4 text-blue-400" size={27} />
                        <p className="font-semibold">{title as string}</p>
                        <p className="mt-1 text-xs text-slate-400">
                          Professional solutions
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl bg-blue-600 p-5">
                    <div className="flex items-center gap-3">
                      <ShieldCheck size={25} />
                      <div>
                        <p className="font-bold">Technology You Can Trust</p>
                        <p className="text-sm text-blue-100">
                          Secure • Reliable • Professional
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 px-6 py-10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="px-5 text-center">
                <div className="text-3xl font-black text-blue-600">
                  {stat.number}
                </div>
                <div className="mt-1 text-sm font-medium text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
                What We Do
              </div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Professional Technology Services
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                From fixing a single computer to building a complete digital
                infrastructure, WazaTechFix Hub provides practical technology
                solutions.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <h3 className="text-xl font-bold">{service.title}</h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {service.description}
                    </p>

                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-1 font-semibold text-blue-600"
                    >
                      Learn more
                      <ChevronRight size={17} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
            <div>
              <div className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
                About WazaTechFix Hub
              </div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Technology solutions built around your needs.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                WazaTechFix Hub is a technology service and training center
                focused on helping people and organizations use technology
                effectively.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                We combine practical technical experience with modern digital
                tools to deliver computer services, networking, software,
                websites, training and IT consulting.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-lg bg-slate-50 p-3"
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-blue-600"
                      size={19}
                    />
                    <span className="text-sm font-semibold text-slate-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
                    <Award size={32} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">
                      Our commitment
                    </p>
                    <h3 className="text-2xl font-bold">
                      Quality Technology
                    </h3>
                  </div>
                </div>

                <div className="mt-8 space-y-5">
                  {[
                    ["01", "Understand the problem"],
                    ["02", "Design the right solution"],
                    ["03", "Implement professionally"],
                    ["04", "Support and improve"],
                  ].map(([number, title]) => (
                    <div
                      key={number}
                      className="flex items-center gap-4 border-b border-white/10 pb-5 last:border-0"
                    >
                      <span className="text-sm font-black text-blue-400">
                        {number}
                      </span>
                      <span className="font-semibold">{title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SOLUTIONS ================= */}
        <section id="solutions" className="bg-slate-950 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-400">
                  Digital Solutions
                </div>

                <h2 className="text-4xl font-black sm:text-5xl">
                  Build. Connect. Repair. Transform.
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                  We help organizations move from technology problems to
                  practical digital solutions.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Business websites and web applications",
                    "Office networking and Wi-Fi infrastructure",
                    "Computer maintenance and hardware upgrades",
                    "Database and information systems",
                    "Server and system administration",
                    "Digital transformation consulting",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2
                        className="shrink-0 text-blue-400"
                        size={20}
                      />
                      <span className="text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <Globe className="text-blue-400" size={32} />
                  <h3 className="mt-5 text-xl font-bold">
                    Digital Presence
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Professional websites and digital platforms that help your
                    organization grow.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <Network className="text-blue-400" size={32} />
                  <h3 className="mt-5 text-xl font-bold">
                    Connected Systems
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Reliable networking infrastructure for connected offices.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <ShieldCheck className="text-blue-400" size={32} />
                  <h3 className="mt-5 text-xl font-bold">
                    Secure Technology
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Better security, backups and system protection.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <Smartphone className="text-blue-400" size={32} />
                  <h3 className="mt-5 text-xl font-bold">
                    Modern Experience
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Responsive and user-friendly digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TRAINING ================= */}
        <section id="training" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl bg-blue-600 p-8 text-white shadow-2xl sm:p-12 lg:p-16">
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold">
                    <BookOpen size={17} />
                    WazaTechFix Training
                  </div>

                  <h2 className="text-4xl font-black sm:text-5xl">
                    Learn technology by doing it.
                  </h2>

                  <p className="mt-5 max-w-xl text-lg leading-8 text-blue-100">
                    Practical training designed to develop real-world digital
                    and technical skills.
                  </p>

                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-blue-600 transition hover:bg-slate-100"
                  >
                    Ask About Training
                    <ArrowRight size={18} />
                  </a>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Computer Applications",
                    "Computer Maintenance",
                    "Networking",
                    "Web Development",
                    "Digital Technology",
                    "IT Support",
                  ].map((course) => (
                    <div
                      key={course}
                      className="flex items-center gap-3 rounded-xl bg-white/10 p-4"
                    >
                      <CheckCircle2 size={19} />
                      <span className="font-semibold">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHY US ================= */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
                Why WazaTechFix?
              </div>

              <h2 className="text-4xl font-black sm:text-5xl">
                More than a repair shop.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We are a technology partner focused on solving problems and
                building skills.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Users,
                  title: "Customer Focus",
                  text: "We listen first, understand your needs and provide practical solutions.",
                },
                {
                  icon: Award,
                  title: "Professional Quality",
                  text: "We use modern tools and professional approaches to deliver reliable results.",
                },
                {
                  icon: Headphones,
                  title: "Ongoing Support",
                  text: "Our relationship does not end when the project is completed.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon size={30} />
                    </div>

                    <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-3xl bg-slate-900 px-7 py-14 text-center text-white sm:px-14">
              <Wrench className="mx-auto text-blue-400" size={38} />

              <h2 className="mt-5 text-4xl font-black sm:text-5xl">
                Have a technology problem?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Tell us what you need. WazaTechFix Hub can help you find a
                practical technology solution.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-bold transition hover:bg-blue-500"
              >
                Contact WazaTechFix Hub
                <ArrowRight size={19} />
              </a>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
                  Get In Touch
                </div>

                <h2 className="text-4xl font-black sm:text-5xl">
                  Let's solve your technology challenge.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Contact WazaTechFix Hub for IT services, repairs, training,
                  networking, software and digital solutions.
                </p>

                <div className="mt-9 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <Phone size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Phone</p>
                      <p className="font-bold">+251 XXX XXX XXX</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <Globe size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Website</p>
                      <p className="font-bold">WazaTechFix Hub</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <Search size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Service</p>
                      <p className="font-bold">
                        IT • Repair • Training • Development
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9"
              >
                <h3 className="text-2xl font-bold">
                  Request a consultation
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Tell us briefly what you need help with.
                </p>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="mt-5 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <select className="mt-5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-600 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
                  <option>Select a Service</option>
                  <option>Computer Repair</option>
                  <option>Networking</option>
                  <option>IT Support</option>
                  <option>Web Development</option>
                  <option>Digital Training</option>
                  <option>Server Solutions</option>
                </select>

                <textarea
                  rows={5}
                  placeholder="Describe your request..."
                  className="mt-5 w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <button
                  type="submit"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700"
                >
                  Send Request
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">
                  <Cpu size={24} />
                </div>

                <div>
                  <div className="text-xl font-extrabold">
                    Waza<span className="text-blue-500">TechFix</span>
                  </div>
                  <div className="text-xs text-slate-500">
                    TECHNOLOGY SOLUTIONS
                  </div>
                </div>
              </div>

              <p className="mt-5 max-w-md leading-7 text-slate-400">
                Professional technology services, IT support, training and
                digital solutions for individuals, businesses and
                institutions.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Services</h3>

              <div className="mt-5 space-y-3 text-sm text-slate-400">
                <a href="#services" className="block hover:text-white">
                  Computer Repair
                </a>
                <a href="#services" className="block hover:text-white">
                  Networking
                </a>
                <a href="#services" className="block hover:text-white">
                  Web Development
                </a>
                <a href="#training" className="block hover:text-white">
                  Digital Training
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold">Company</h3>

              <div className="mt-5 space-y-3 text-sm text-slate-400">
                <a href="#about" className="block hover:text-white">
                  About Us
                </a>
                <a href="#solutions" className="block hover:text-white">
                  Solutions
                </a>
                <a href="#contact" className="block hover:text-white">
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-7 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} WazaTechFix Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}