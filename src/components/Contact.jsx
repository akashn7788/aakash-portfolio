import {
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
  Download,
} from "lucide-react";
const Contact = () => {
  const email = "akashn7788@gmail.com";

  return (
    <section
      id="contact"
      className="bg-[#080b12] px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Let's Work <span className="text-blue-500">Together.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            I'm open to software development opportunities,
            technical discussions and collaborations.
            Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8">

            <h3 className="mb-6 text-2xl font-bold text-white">
              Let's Connect
            </h3>

            <p className="mb-8 leading-7 text-slate-400">
              Whether you have a job opportunity, a project
              idea or simply want to connect, I'd be happy
              to hear from you.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-white transition hover:text-blue-400"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="text-white">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-10 border-t border-slate-700 pt-6">
            <p className="mb-4 text-sm font-medium text-slate-400">
                Find me on
            </p>

            <div className="flex gap-4">

                <a
                href="YOUR_GITHUB_URL"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-700 px-5 py-3 text-sm text-white transition hover:border-blue-500 hover:text-blue-400"
                >
                GitHub <ArrowUpRight size={15} className="inline" />
                </a>

                <a
                href="YOUR_LINKEDIN_URL"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-700 px-5 py-3 text-sm text-white transition hover:border-blue-500 hover:text-blue-400"
                >
                LinkedIn <ArrowUpRight size={15} className="inline" />
                </a>

            </div>
            </div>

          </div>

          {/* Contact CTA */}
          <div className="flex flex-col justify-center rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-slate-900 p-8 md:p-12">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
              <Send size={28} />
            </div>

            <h3 className="mb-4 text-3xl font-bold text-white">
              Have an opportunity?
            </h3>

            <p className="mb-8 leading-7 text-slate-400">
              I'm particularly interested in .NET development,
              backend engineering and building scalable
              software applications.
            </p>

            <div className="flex flex-wrap items-center gap-4">

                {/* Email Button */}
                <a
                    href={`mailto:${email}?subject=Software%20Developer%20Opportunity`}
                    className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
                >
                    Say Hello
                    <ArrowUpRight size={19} />
                </a>

                {/* Resume Download */}
                <a
                    href="/resume.pdf"
                    download="Aakash_Nerkar_Resume.pdf"
                    className="inline-flex w-fit items-center gap-2 rounded-lg border border-blue-500 px-6 py-3 font-semibold text-blue-400 transition hover:bg-blue-500 hover:text-white"
                >
                    <Download size={19} />
                    Download Resume
                </a>

            </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
