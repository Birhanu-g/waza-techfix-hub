import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MonitorCog,
  Network,
  Server,
  Code2,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 pt-24">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute left-0 top-1/2 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            Professional Technology Solutions
          </div>

          <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            Technology Solutions
            <span className="block text-blue-500">
              for a Smarter Future
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            WAZATechFix Hub provides reliable IT support, networking,
            server solutions, software development, website development,
            security systems and professional technology training.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
            >
              Get a Service
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3.5 font-semibold text-white transition hover:border-blue-500 hover:bg-slate-900"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust points */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              "Professional Support",
              "Reliable Solutions",
              "Customer Focused",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-slate-300"
              >
                <CheckCircle2 size={17} className="shrink-0 text-blue-400" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute -inset-5 rounded-3xl bg-blue-600/10 blur-2xl" />

          <div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">
                  WAZATechFix
                </p>

                <h2 className="text-2xl font-bold text-white">
                  Technology Hub
                </h2>
              </div>

              <div className="rounded-xl bg-blue-600/20 p-3 text-blue-400">
                <MonitorCog size={28} />
              </div>
            </div>

            {/* Services */}
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Networking */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition hover:border-blue-600/50">
                <Network className="mb-4 text-blue-400" size={28} />

                <h3 className="font-semibold text-white">
                  Networking
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Reliable network infrastructure and connectivity.
                </p>
              </div>

              {/* Server */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition hover:border-blue-600/50">
                <Server className="mb-4 text-blue-400" size={28} />

                <h3 className="font-semibold text-white">
                  Server Solutions
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Server setup, configuration and maintenance.
                </p>
              </div>

              {/* Software */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition hover:border-blue-600/50">
                <Code2 className="mb-4 text-blue-400" size={28} />

                <h3 className="font-semibold text-white">
                  Software & Web
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Modern websites and software applications.
                </p>
              </div>

              {/* Security */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition hover:border-blue-600/50">
                <ShieldCheck className="mb-4 text-blue-400" size={28} />

                <h3 className="font-semibold text-white">
                  Security
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Technology security and protection solutions.
                </p>
              </div>

              {/* Digital Transformation */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 sm:col-span-2">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <h3 className="font-semibold text-white">
                      Digital Transformation
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                      Helping businesses and organizations use
                      technology to work smarter.
                    </p>
                  </div>

                  <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-xl font-black text-white sm:flex">
                    W
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom status */}
            <div className="mt-5 flex items-center justify-between rounded-xl border border-blue-500/20 bg-blue-500/5 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                <span className="text-sm font-medium text-slate-300">
                  Technology Support
                </span>
              </div>

              <span className="text-xs font-semibold text-blue-400">
                READY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}