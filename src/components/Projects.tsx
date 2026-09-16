import {
  ArrowUpRight,
  Globe,
  GraduationCap,
  Laptop,
  Network,
  Server,
} from "lucide-react";

const projects = [
  {
    icon: Globe,
    category: "Web Development",
    title: "Business Website Development",
    description:
      "Modern, responsive websites designed to help businesses establish a professional online presence.",
  },
  {
    icon: Network,
    category: "Networking",
    title: "Network Infrastructure",
    description:
      "LAN, Wi-Fi, router, switch and connectivity solutions for offices and organizations.",
  },
  {
    icon: Server,
    category: "Server Solutions",
    title: "Server Deployment & Management",
    description:
      "Server installation, configuration, maintenance and infrastructure management.",
  },
  {
    icon: GraduationCap,
    category: "Digital Education",
    title: "Moodle & LMS Solutions",
    description:
      "Learning management system setup, configuration, training and digital learning support.",
  },
  {
    icon: Laptop,
    category: "IT Support",
    title: "Computer Maintenance",
    description:
      "Computer diagnosis, repair, upgrades, software installation and preventive maintenance.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Our Work
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Projects & Technology
            <span className="block text-blue-600">
              Solutions
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            A selection of technology services and solutions that
            demonstrate what WazaTechFix Hub can deliver.
          </p>
        </div>

        {/* Project cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Project visual */}
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-slate-950">
                  <div className="absolute h-40 w-40 rounded-full bg-blue-600/20 blur-3xl" />

                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-600/10 text-blue-400">
                    <Icon size={38} />
                  </div>

                  <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-xl font-bold text-slate-950">
                    {project.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700"
                  >
                    Discuss a similar project
                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-3xl bg-slate-950 px-8 py-12 text-center">
          <h3 className="text-3xl font-black text-white">
            Have a project in mind?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Whether you need a website, network, server, software
            system or IT support, WazaTechFix Hub can help turn your
            technology needs into a practical solution.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-bold text-white transition hover:bg-blue-500"
          >
            Start Your Project
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}