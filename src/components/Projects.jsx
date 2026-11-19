
import {
  Code2,
  ExternalLink,
  ArrowUpRight,
  ShoppingCart,
  BrainCircuit,
} from "lucide-react";

const projects = [
  
{
  id: 1,
  title: "eMart",
  subtitle: "Full-Stack E-commerce Application",
  description:
    "A full-stack e-commerce application built using ASP.NET Core Web API and React. The application provides secure authentication, product management, shopping cart functionality and order management.",
  features: [
    "JWT-based user authentication",
    "Product listing and management",
    "Shopping cart functionality",
    "Order creation and management",
  ],
  technologies: [
    "C#",
    ".NET 8",
    "ASP.NET Core Web API",
    "React",
    "SQL Server",
    "Entity Framework Core",
  ],
  icon: ShoppingCart,
  featured: true,
  github: "",
  demo: "",
},
  {
    id: 2,
    title: "Bug Report & User Review Matching",
    subtitle: "MCA Academic Research Project",
    description:
      "An academic research project focused on identifying relationships between software bug reports and relevant user reviews using Natural Language Processing and similarity-based matching.",
    features: [
      "Text preprocessing and analysis",
      "Similarity-based matching",
      "Candidate matching and ranking",
      "Research-oriented implementation",
    ],
    technologies: [
      "Python",
      "NLP",
      "DeepMatcher",
      "Jupyter Notebook",
    ],
    icon: BrainCircuit,
    featured: false,
    github: "",
    demo: "",
  },
];

function ProjectCard({ project }) {
  const Icon = project.icon;

  return (
    <article
  className={`group relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-500/10 ${
    project.featured
      ? "border-blue-500/40 bg-gradient-to-br from-blue-500/10 to-slate-900"
      : "border-slate-800 bg-slate-900/70"
  }`}
    >
      <div className="mb-5 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
          <Icon size={25} />
        </div>

        {project.featured && (
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
            Featured Project
          </span>
        )}
      </div>

      <h3 className="mb-1 text-2xl font-bold text-white">
        {project.title}
      </h3>

      <p className="mb-4 text-sm font-medium text-blue-400">
        {project.subtitle}
      </p>

      <p className="mb-5 leading-7 text-slate-400">
        {project.description}
      </p>

      <div className="mb-5">
        <h4 className="mb-3 text-sm font-semibold text-white">
          Key Features
        </h4>

        <ul className="space-y-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-slate-400"
            >
              <span className="mt-1 text-blue-400">▹</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="mb-3 text-sm font-semibold text-white">
          Technologies
        </h4>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      
        {(project.github || project.demo) && (
        <div className="mt-auto flex flex-wrap gap-3 border-t border-slate-700 pt-5">
            {project.github && (
            <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm text-white transition hover:border-blue-500 hover:text-blue-400"
            >
                <Code2 size={17} />
                GitHub
                <ArrowUpRight size={15} />
            </a>
            )}

            {project.demo && (
            <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-500"
            >
                Live Demo
                <ExternalLink size={15} />
            </a>
            )}
        </div>
        )}

    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#080b12] px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            My Work
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Featured <span className="text-blue-500">Projects.</span>
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            A selection of projects showcasing my experience
            in backend development, full-stack applications
            and academic research.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
