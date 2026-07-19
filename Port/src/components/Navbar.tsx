const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-bg/80 backdrop-blur-md border-b border-white/10 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <a href="#home" className="text-xl font-bold text-white">
          Milan<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex gap-8 text-sm font-medium text-text-muted">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        
        <a  href="#contact"
          className="text-sm font-medium bg-accent text-white px-5 py-2 rounded-full hover:bg-accent/80 transition-colors"
        >
          Let's Talk
        </a>
      </nav>
    </header>
  );
}

export default Navbar;