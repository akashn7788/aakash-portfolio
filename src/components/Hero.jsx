
import { ArrowDown, ArrowUpRight } from 'lucide-react'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      <div className="absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-2">

        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-sm text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Open to Software Developer Opportunities
          </div>

          <p className="mb-4 text-lg font-medium text-blue-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Aakash
            <br />
            <span className="text-slate-500">Nerkar.</span>
          </h1>

          <h2 className="mt-6 text-xl font-medium text-slate-300 sm:text-2xl">
            Software Developer | .NET & C#
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
            I build software solutions using C#, .NET, SQL Server and
            modern web technologies. Interested in enterprise systems,
            backend development and creating practical applications.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              Explore My Work <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/15 px-6 py-3 font-medium text-slate-300 transition hover:border-white/40 hover:text-white"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <a href="https://github.com/" target="_blank" rel="noreferrer"
              aria-label="GitHub">
              <span className="text-sm text-slate-400 hover:text-white">
                GitHub
                </span>
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer"
              aria-label="LinkedIn">
               <span className="text-sm text-slate-400 hover:text-white">
                LinkedIn
                </span>
            </a>
          </div>
        </div>

        {/* <div className="hidden md:flex md:justify-center">
          <div className="relative flex h-80 w-80 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/5">
            <div className="absolute inset-5 rounded-full border border-white/10" />
            <div className="text-center">
              <div className="text-7xl font-bold text-blue-500">
                AN<span className="text-white">.</span>
              </div>
              <p className="mt-3 text-sm tracking-[0.3em] text-slate-400">
                DEVELOPER
              </p>
            </div>
          </div>
        </div> */}

        <div className="hidden justify-center md:flex">
        <div className="relative h-80 w-80 overflow-hidden rounded-full border-2 border-blue-500/50 shadow-[0_0_60px_rgba(37,99,235,0.2)]">
            <img
            src="/profile.png"
            alt="Aakash Nerkar - Software Developer"
            className="h-full w-full object-cover object-top"
            />
        </div>
        </div>


      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-white"
        aria-label="Scroll to About"
      >
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  )
}

export default Hero
