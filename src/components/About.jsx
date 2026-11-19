
import { GraduationCap, BriefcaseBusiness, Code2, MapPin } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: BriefcaseBusiness,
      title: 'Enterprise Experience',
      description: 'Exposure to exchange technology, in-memory databases and trading systems.',
    },
    {
      icon: Code2,
      title: 'Backend Development',
      description: 'Hands-on work with C#, ASP.NET Core, SQL Server and REST APIs.',
    },
    {
      icon: GraduationCap,
      title: 'Academic Background',
      description: 'MCA graduate with a foundation in computer science and software development.',
    },
  ]

  return (
    <section id="about" className="bg-[#0b101a] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Get to know me
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            About <span className="text-blue-500">Me.</span>
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">

          <div>
            <h3 className="mb-5 text-2xl font-semibold text-slate-200">
              Software Developer passionate about building practical solutions.
            </h3>

            <p className="mb-5 leading-8 text-slate-400">
              I'm Aakash Nerkar, a Software Developer based in Mumbai,
              Maharashtra, with a Master of Computer Applications from
              Vellore Institute of Technology.
            </p>

            <p className="mb-5 leading-8 text-slate-400">
              My professional experience includes working with C# and C++
              on enterprise exchange technology systems, particularly
              in-memory database components using ExtremeDB.
            </p>

            <p className="leading-8 text-slate-400">
              I also enjoy backend and full-stack development. I've built
              an e-commerce application using ASP.NET Core Web API,
              React and SQL Server. I'm continuously improving my
              problem-solving and software engineering skills.
            </p>

            <div className="mt-8 flex items-center gap-2 text-slate-400">
              <MapPin size={18} className="text-blue-400" />
              Mumbai, Maharashtra, India
            </div>
          </div>

          <div className="space-y-5">
            {highlights.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="flex gap-5 rounded-xl border border-white/10 bg-[#111827] p-6 transition hover:border-blue-500/40"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
