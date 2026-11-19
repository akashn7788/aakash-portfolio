
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Replace with your actual profile URLs
  const githubUrl = "YOUR_GITHUB_URL";
  const linkedinUrl = "YOUR_LINKEDIN_URL";

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#080b12]/95 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight text-white"
        >
          Aakash<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate-400 transition hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Social Links */}
        <div className="hidden items-center gap-4 md:flex">

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="#contact"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-lg p-2 text-white transition hover:bg-slate-800 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-[#080b12] transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="flex flex-col gap-5 px-6 py-6">

          {/* Mobile Nav Links */}
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-base text-slate-300 transition hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Social Links */}
          <div className="flex gap-6 border-t border-white/10 pt-5">

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
            >
              GitHub
              <ArrowUpRight size={14} />
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>

          </div>

          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={closeMenu}
            className="rounded-lg bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-500"
          >
            Let's Talk
          </a>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;
