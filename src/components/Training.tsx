import {
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Monitor,
  Users,
} from "lucide-react";

const trainingPrograms = [
  {
    icon: Monitor,
    title: "Computer Skills",
    description:
      "Practical training in computer operation, Microsoft Office, internet use and digital productivity.",
  },
  {
    icon: BookOpen,
    title: "IT & Networking",
    description:
      "Hands-on training in computer hardware, networking, troubleshooting and IT support.",
  },
  {
    icon: GraduationCap,
    title: "Web & Software",
    description:
      "Learn modern web development, software concepts and practical application development.",
  },
  {
    icon: Users,
    title: "Organizational Training",
    description:
      "Customized technology training programs designed for businesses, institutions and organizations.",
  },
];

const benefits = [
  "Practical hands-on learning",
  "Professional training materials",
  "Beginner to advanced programs",
  "Customized organizational training",
];

export default function Training() {
  return (
    <section id="training" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Training & Learning
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Build Your
            <span className="text-blue-600"> Digital Skills</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Practical technology training designed to help individuals,
            professionals and organizations build the skills they need
            in today's digital world.
          </p>
        </div>

        {/* Programs */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trainingPrograms.map((program) => {
            const Icon = program.icon;

            return (
              <div
                key={program.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={27} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  {program.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {program.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main training CTA */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-slate-950">
          <div className="grid items-center gap-10 p-8 lg:grid-cols-2 lg:p-12">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
                <GraduationCap size={17} />
                Professional Training
              </div>

              <h3 className="mt-5 text-3xl font-black text-white sm:text-4xl">
                Learn technology by
                <span className="block text-blue-500">
                  doing it practically.
                </span>
              </h3>

              <p className="mt-5 leading-7 text-slate-400">
                Our training approach combines theory with practical
                exercises so learners can apply their knowledge in
                real-world situations.
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white transition hover:bg-blue-500"
              >
                Ask About Training
              </a>
            </div>

            {/* Right */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">
              <h4 className="text-lg font-bold text-white">
                Why Train With Us?
              </h4>

              <div className="mt-6 space-y-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-blue-400"
                    />

                    <span className="text-sm text-slate-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}