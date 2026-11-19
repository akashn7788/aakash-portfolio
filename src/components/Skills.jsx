
import {
  Code2,
  Database,
  Server,
  Wrench,
  Network
} from 'lucide-react'

const skillGroups = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['C#', 'C++', 'JavaScript', 'SQL']
  },
  {
    title: 'Frameworks & Technologies',
    icon: Server,
    skills: [
      '.NET 8',
      'ASP.NET Core Web API',
      '.NET Framework 4.8',
      'Entity Framework Core',
      'React'
    ]
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      'SQL Server',
      'MySQL',
      'ExtremeDB'
    ]
  },
  {
    title: 'Messaging & Protocols',
    icon: Network,
    skills: [
      'MSMQ',
      'LBM',
      'TCP'
    ]
  },
  {
    title: 'Tools & Concepts',
    icon: Wrench,
    skills: [
      'Git',
      'Visual Studio 2022',
      'REST APIs',
      'JWT Authentication'
    ]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="bg-[#080b12] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            My Technical Expertise
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Skills & <span className="text-blue-500">Technologies.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            Technologies and tools I've worked with through
            professional experience, academic projects and
            continuous learning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group) => {
            const Icon = group.icon

            return (
              <div
                key={group.title}
                className="rounded-2xl border border-white/10 bg-[#111827] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                    <Icon size={23} />
                  </div>

                  <h3 className="font-semibold text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 transition hover:border-blue-500/40 hover:text-blue-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default Skills
