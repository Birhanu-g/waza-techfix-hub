import {
  CloudCog,
  Code2,
  GraduationCap,
  Network,
  Server,
  ShieldCheck,
} from "lucide-react";

const solutions = [
  {
    icon: Network,
    title: "Network Infrastructure",
    description:
      "Design, installation and maintenance of reliable wired and wireless network infrastructure.",
  },
  {
    icon: Server,
    title: "Server & Infrastructure",
    description:
      "Server deployment, configuration, maintenance, backup and infrastructure management.",
  },
  {
    icon: Code2,
    title: "Software & Web Solutions",
    description:
      "Modern websites, web applications and customized software systems for organizations.",
  },
  {
    icon: ShieldCheck,
    title: "Technology Security",
    description:
      "Security-focused technology solutions that help protect systems, networks and digital resources.",
  },
  {
    icon: GraduationCap,
    title: "Digital Training",
    description:
      "Practical computer, IT and digital technology training for individuals and organizations.",
  },
  {
    icon: CloudCog,
    title: "Digital Transformation",
    description:
      "Helping organizations modernize their processes and use technology more effectively.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Our Solutions
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Technology Solutions Built
            <span className="block text-blue-500">
              Around Your Needs
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            We combine technical expertise, practical experience and
            modern technology to deliver solutions that solve real
            business and organizational challenges.
          </p>
        </div>

        {/* Solution cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <div
                key={solution.title}
                className="group rounded-2xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-900/80"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={27} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {solution.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {solution.description}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-blue-600 transition-all group-hover:w-20" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 text-center">
          <h3 className="text-2xl font-bold text-white">
            Have a technology challenge?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            Tell us what you need and let's find the right technology
            solution for you.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white transition hover:bg-blue-500"
          >
            Talk to WazaTechFix Hub
          </a>
        </div>

      </div>
    </section>
  );
}