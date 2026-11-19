
import {
  BriefcaseBusiness,
  Database,
  Code2,
  Network,
  Server,
  CalendarDays
} from 'lucide-react'

const experiences = [
  {
    company: '63 Moons Technologies Limited',
    role: 'Trainee Software Engineer',
    duration: 'September 2025 – Present',
    location: 'Mumbai, India',
    current: true,
    description:
      'Working in the Exchange Technology department on enterprise systems supporting exchange and commodity market operations.',
    technologies: [
      'C#',
      'C++',
      '.NET Framework 4.8',
      'ExtremeDB',
      'MSMQ',
      'SQL Server',
      'LBM',
      'TCP'
    ],
    highlights: [
      'Working with an in-memory database component built around ExtremeDB.',
      'Understanding and working with C# and C++ integration through wrapper components.',
      'Working with MSMQ-based recovery file processing and message handling.',
      'Exploring static and real-time market data workflows and database procedures.',
      'Performing debugging, component-level testing and issue analysis.'
    ],
    icon: Database
  },
  {
    company: 'Bilateral Solutions Pvt. Ltd.',
    role: 'Python Developer Intern',
    duration: 'December 2023 – July 2024',
    location: 'Mandi, Himachal Pradesh, India',
    current: false,
    description:
      'Worked as a Python Developer Intern, gaining practical exposure to Python web development and deployment.',
    technologies: [
      'Python',
      'Django',
      'Nginx'
    ],
    highlights: [
      'Worked with Python and Django application development.',
      'Gained experience in debugging and application maintenance.',
      'Gained exposure to application deployment using Nginx.'
    ],
    icon: Code2
  }
]

const Experience = () => {
  return (
    <section id="experience" className="bg-[#0b101a] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Career Journey
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Professional <span className="text-blue-500">Experience.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            My professional journey, technical exposure and
            experience in building and understanding software systems.
          </p>
        </div>

        <div className="relative ml-3 space-y-10 border-l border-blue-500/30 pl-8 md:pl-12">

          {experiences.map((experience) => {
            const Icon = experience.icon

            return (
              <article
                key={experience.company}
                className="relative rounded-2xl border border-white/10 bg-[#111827] p-6 transition duration-300 hover:border-blue-500/40 md:p-8"
              >

                <div className="absolute -left-[43px] top-8 flex h-5 w-5 items-center justify-center rounded-full border-4 border-[#0b101a] bg-blue-500 md:-left-[57px]">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </div>

                <div className="flex flex-col justify-between gap-5 md:flex-row">

                  <div className="flex gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <Icon size={27} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white md:text-2xl">
                        {experience.company}
                      </h3>

                      <p className="mt-1 font-medium text-blue-400">
                        {experience.role}
                      </p>

                      <p className="mt-2 text-sm text-slate-500">
                        {experience.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-sm text-slate-400">
                    <CalendarDays size={17} />
                    {experience.duration}
                  </div>

                </div>

                {experience.current && (
                  <div className="mt-5">
                    <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                      Currently Working Here
                    </span>
                  </div>
                )}

                <p className="mt-6 leading-7 text-slate-400">
                  {experience.description}
                </p>

                <h4 className="mb-4 mt-7 font-semibold text-white">
                  Key Responsibilities & Exposure
                </h4>

                <ul className="space-y-3">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-6 text-slate-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 border-t border-white/10 pt-6">
                  <h4 className="mb-4 text-sm font-semibold text-white">
                    Technologies
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-blue-500/20 bg-blue-500/5 px-3 py-2 text-xs text-blue-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

              </article>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default Experience
