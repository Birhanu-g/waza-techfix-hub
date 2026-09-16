import {
  CheckCircle2,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";

const strengths = [
  "Professional IT support",
  "Practical technology solutions",
  "Reliable customer service",
  "Modern digital solutions",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left side */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              About WazaTechFix Hub
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Technology that works
              <span className="block text-blue-600">
                for your success.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              WazaTechFix Hub is a technology solutions and IT services
              company focused on helping individuals, businesses and
              organizations solve technology challenges and make better
              use of digital tools.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              From computer maintenance and networking to software
              development, server solutions, security systems and
              professional technology training, we provide practical
              solutions designed around our customers' needs.
            </p>

            {/* Strengths */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {strengths.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-blue-600"
                  />

                  <span className="text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="grid gap-5 sm:grid-cols-2">

            {/* Mission */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Target size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Our Mission
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                To provide reliable, affordable and practical
                technology solutions that help our customers
                work more efficiently.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Lightbulb size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Our Vision
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                To become a trusted technology partner for
                businesses and organizations seeking digital
                transformation.
              </p>
            </div>

            {/* Customers */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:col-span-2">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Users size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-950">
                    Customer Focused
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    We listen to our customers, understand their
                    technology challenges and develop solutions
                    that are practical, maintainable and suitable
                    for their needs.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}