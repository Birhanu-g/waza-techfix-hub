```tsx
import {
  ArrowRight,
  Code2,
  Laptop,
  Network,
  Server,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Laptop,
    title: "Computer Repair & Maintenance",
    description:
      "Professional diagnosis, repair, maintenance, upgrades and software installation for desktop and laptop computers.",
  },
  {
    icon: Network,
    title: "Networking Solutions",
    description:
      "LAN, Wi-Fi, router, switch and network infrastructure installation, configuration and troubleshooting.",
  },
  {
    icon: Server,
    title: "Server Solutions",
    description:
      "Server installation, configuration, maintenance, backup and system administration for organizations.",
  },
  {
    icon: Code2,
    title: "Web & Software Development",
    description:
      "Modern websites, web applications, information systems and customized software solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Security Systems",
    description:
      "Technology security solutions including access systems, monitoring, protection and secure infrastructure.",
  },
  {
    icon: Wrench,
    title: "IT Support & Consulting",
    description:
      "Reliable technical support, troubleshooting, system maintenance and professional IT consulting.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            What We Do
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Professional Technology Services
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            From computer repair to complete digital infrastructure,
            WazaTechFix Hub provides practical and reliable technology
            solutions.
          </p>
        </div>

        {/* Services */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={27} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700"
                >
                  Request this service
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 font-bold text-white transition hover:bg-blue-600"
          >
            Need a Technology Solution?
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
```
