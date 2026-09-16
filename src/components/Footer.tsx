import Link from "next/link";
import {
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const services = [
  "Computer Repair",
  "Networking Solutions",
  "Server Solutions",
  "Web Development",
  "Security Systems",
  "IT Training",
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Solutions", href: "#solutions" },
  { name: "Projects", href: "#projects" },
  { name: "Training", href: "#training" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-black text-white">
                W
              </div>

              <div>
                <div className="text-xl font-black">
                  Waza<span className="text-blue-500">TechFix</span>
                </div>

                <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Technology Hub
                </div>
              </div>
            </Link>

            <p className="mt-6 leading-7 text-slate-400">
              Professional technology solutions for a smarter future.
              We help individuals, businesses and organizations solve
              technology challenges.
            </p>

            {/* Social media */}
            <div className="mt-7 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>

            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex gap-3">
                <Phone
                  size={18}
                  className="mt-1 shrink-0 text-blue-500"
                />

                <div>
                  <p className="text-sm text-slate-400">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-white">
                    +251 XXX XXX XXX
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail
                  size={18}
                  className="mt-1 shrink-0 text-blue-500"
                />

                <div>
                  <p className="text-sm text-slate-400">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-white">
                    info@wazatechfix.com
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-blue-500"
                />

                <div>
                  <p className="text-sm text-slate-400">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-white">
                    Ethiopia
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} WazaTechFix Hub. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span className="text-sm text-slate-600">
              Technology Solutions for a Smarter Future
            </span>

            <Link
              href="#home"
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-blue-500 hover:text-blue-400"
            >
              <ArrowUp size={17} />
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}