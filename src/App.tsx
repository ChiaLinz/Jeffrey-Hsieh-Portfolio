import { useState, useEffect, useRef, useCallback, type ReactNode } from "react";
import { SITE } from "./config";
import NeuralNet3D from "./NeuralNet3D";

/* ─── Reveal on scroll ─── */
function useReveal(delay = 0) {
  const r = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = r.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); o.unobserve(el); } },
      { threshold: 0.12 }
    );
    o.observe(el);
    return () => o.disconnect();
  }, [delay]);
  return r;
}

function Reveal({ children, delay = 0, className = "" }: {
  children: ReactNode; delay?: number; className?: string;
}) {
  const r = useReveal(delay);
  return <div ref={r} className={`reveal ${className}`}>{children}</div>;
}

function smoothScrollTo(targetY: number, duration = 700) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  if (Math.abs(diff) < 1) return Promise.resolve();
  return new Promise<void>((resolve) => {
    let startTime: number | null = null;
    const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const step = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      window.scrollTo(0, startY + diff * ease(progress));
      if (progress < 1) requestAnimationFrame(step);
      else resolve();
    };
    requestAnimationFrame(step);
  });
}

/* ─── 3-D tilt ─── */
function useTilt(intensity = 12) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const frameRef = useRef(0);

  const onMove = useCallback((e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setStyle({
        transform: `perspective(800px) rotateX(${(0.5 - y) * intensity}deg) rotateY(${(x - 0.5) * intensity}deg) scale3d(1.03,1.03,1.03)`,
        "--glare-x": `${x * 100}%`,
        "--glare-y": `${y * 100}%`,
      } as React.CSSProperties);
    });
  }, [intensity]);

  const onLeave = useCallback(() => {
    cancelAnimationFrame(frameRef.current);
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
      "--glare-x": "50%",
      "--glare-y": "50%",
    } as React.CSSProperties);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [onMove, onLeave]);

  return { ref, style };
}

/* ─── Nav ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  useEffect(() => {
    const h = () => { if (window.innerWidth > 767) setMobileOpen(false); };
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  const jump = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY + window.innerHeight * 0.05;
    smoothScrollTo(Math.max(0, top), 900);
    const label = el.querySelector(".section-label");
    if (label) {
      label.classList.remove("label-flash");
      void (label as HTMLElement).offsetWidth;
      label.classList.add("label-flash");
    }
  };

  const goTop = () => { setMobileOpen(false); smoothScrollTo(0, 900); };
  const links = ["about", "experience", "background", "projects", "contact"];

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <button className="nav-logo" onClick={goTop} type="button">Jeffrey<span>.</span></button>
      <ul className="nav-links">
        {links.map(x => <li key={x}><a href={`#${x}`} onClick={(e) => jump(e, x)}>{x}</a></li>)}
      </ul>
      <button className={`hamburger ${mobileOpen ? "open" : ""}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu" type="button">
        <span /><span /><span />
      </button>
      {mobileOpen && (
        <div className="mobile-menu">
          {links.map(x => <a key={x} href={`#${x}`} onClick={(e) => jump(e, x)}>{x}</a>)}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <NeuralNet3D />
      <div className="hero-content">
        <p className="hero-greeting"><span className="hero-slash">→</span> systems that ship</p>
        <h1 className="hero-name">Jeffrey <span className="ac">Hsieh</span></h1>
        <p className="hero-title">{SITE.title}</p>
        <p className="hero-tag">{SITE.tagline}</p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-p">View Projects</a>
          <a href="#contact" className="btn btn-g">Get In Touch</a>
        </div>
      </div>
      <div className="hero-hint"><span className="hdot" />interactive — move your cursor</div>
      <div className="scroll-ind"><div className="scroll-line" /></div>
    </section>
  );
}

function Stats() {
  return (
    <div className="stats-bar">
      <div className="stats-inner">
        {SITE.stats.map((s, i) => (
          <Reveal key={i} delay={i * 120}>
            <div className="stat-item" title={s.note}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="sec-spacing section sec-bg sec-bg-a">
      <Reveal><div className="section-label">About</div></Reveal>
      <div className="about-grid">
        <div className="about-text">
          {SITE.about.map((p, i) => <Reveal key={i} delay={i * 100}><p>{p}</p></Reveal>)}
        </div>
        <div className="skills-grid spotlight-group">
          {SITE.skills.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="skill-item spotlight-card">
                <div className="skill-cat">{s.category}</div>
                <div className="skill-items">{s.items}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="sec-spacing section sec-bg sec-bg-b">
      <Reveal><div className="section-label">Experience</div></Reveal>
      <div className="spotlight-group">
        {SITE.experiences.map((e, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="exp-item spotlight-card">
              <div className="exp-left">
                <div className="exp-year">{e.year}</div>
                <div className="exp-loc">{e.location}</div>
              </div>
              <div className="exp-right">
                <div className="exp-role">{e.role}</div>
                <div className="exp-company">{e.company}</div>
                <ul className="exp-bullets">
                  {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Background() {
  return (
    <section id="background" className="sec-spacing section sec-bg sec-bg-a">
      <Reveal><div className="section-label">Background</div></Reveal>
      <div className="sub-label">Education</div>
      <div className="edu-stack spotlight-group">
        {SITE.education.map((e, i) => (
          <Reveal key={i} delay={i * 120}>
            <div className="edu-card spotlight-card">
              <div className="edu-main">
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-school">{e.school}</div>
                <div className="edu-meta">{e.detail} · {e.year}</div>
              </div>
              {e.highlights && (
                <div className="edu-tags">
                  {e.highlights.map((h, j) => <span key={j} className="chip">{h}</span>)}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
      <div className="sub-label" style={{ marginTop: "3.5rem" }}>Certifications</div>
      <div className="cred-stack spotlight-group">
        {SITE.credentials.map((c, i) => (
          <Reveal key={i} delay={i * 100}>
            <a href={c.link || "#"} target="_blank" rel="noreferrer" className="cred-card spotlight-card">
              <div className="cred-left">
                <div className="cred-name">{c.name}</div>
                <div className="cred-meta">{c.issuer} · {c.year}</div>
              </div>
              <div className="cred-right">
                {c.skills && <div className="cred-skills">{c.skills}</div>}
                <span className="cred-link-hint">View ↗</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────────────────── */
type Metric = { value: string; label: string };

type CardData = {
  name: string;
  metric?: string;
  metricLabel?: string;
  metrics?: Metric[];
  desc: string;
  tags: string[];
  image?: string;
};

function ProjectCard({ p }: { p: CardData }) {
  const { ref, style } = useTilt(13);

  const metrics: Metric[] = p.metrics
    ? p.metrics
    : p.metric
      ? [{ value: p.metric, label: p.metricLabel ?? "" }]
      : [];

  return (
    <div className="pcard-wrap">
      <div ref={ref} className="pcard" style={style}>
        <div className="pcard-glare" />

        {/* FRONT */}
        <div className="pcard-front">
          <div
            className="pcard-img"
            style={p.image ? { backgroundImage: `url(${p.image})` } : undefined}
          >
            <div className="pcard-img-fade" />
          </div>
          <div className="pcard-info">
            {metrics.length > 0 && (
              <div className="pcard-metrics">
                {metrics.map((m, i) => (
                  <div key={i} className="pcard-metric-block">
                    <span className="pcard-metric-val">{m.value}</span>
                    <span className="pcard-metric-lbl">{m.label}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="pcard-name">{p.name}</div>
          </div>
        </div>

        {/* BACK */}
        <div className="pcard-back">
          <div className="pcard-back-name">{p.name}</div>
          {metrics.length > 0 && (
            <div className="pcard-back-metrics">
              {metrics.map((m, i) => (
                <span key={i} className="pcard-back-pill">
                  <strong>{m.value}</strong> {m.label}
                </span>
              ))}
            </div>
          )}
          <div className="pcard-desc">{p.desc}</div>
          <div className="pcard-tags">
            {p.tags.map((t, j) => <span key={j} className="chip">{t}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   PROJECTS SECTION
   • "More Projects" expands side projects in-place — no scroll jump
   • "Show Less" smoothly scrolls back to the divider button, THEN collapses
───────────────────────────────────────────────────────── */
function Projects() {
  const [showMore, setShowMore] = useState(false);
  const dividerRef = useRef<HTMLDivElement>(null);

  const handleToggle = async () => {
    if (showMore) {
      // 1. Scroll the "More/Less" button back into view first
      const el = dividerRef.current;
      if (el) {
        const btnTop = el.getBoundingClientRect().top + window.scrollY;
        // land so button sits ~20vh from top of viewport
        const target = btnTop - window.innerHeight * 0.20;
        await smoothScrollTo(target, 650);
      }
      // 2. THEN collapse — no visual jump because button is already in view
      setShowMore(false);
    } else {
      // Just expand; content flows down, no scroll needed
      setShowMore(true);
    }
  };

  return (
    <section id="projects" className="sec-spacing section sec-bg sec-bg-b">
      <Reveal><div className="section-label">Projects</div></Reveal>

      <div className="projects-grid">
        {SITE.projects.map((p, i) => (
          <Reveal key={i} delay={i * 100}><ProjectCard p={p} /></Reveal>
        ))}
      </div>

      {/* ── Divider / toggle button — always visible below the 4 main cards ── */}
      <div className="more-divider" ref={dividerRef}>
        <button className="more-btn" onClick={handleToggle} type="button">
          {showMore ? "Show Less" : "More Projects"}
          <span className={`more-arrow ${showMore ? "open" : ""}`}>▾</span>
        </button>
      </div>

      {/* ── Side projects expand below the button ── */}
      <div className={`side-wrap ${showMore ? "open" : ""}`}>
        <div className="projects-grid">
          {SITE.sideProjects.map((p, i) => (
            <Reveal key={i} delay={i * 80}><ProjectCard p={p} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="sec-spacing contact section">
      <Reveal><div className="section-label" style={{ justifyContent: "center" }}>Contact</div></Reveal>
      <Reveal delay={100}>
        <h2 className="contact-heading">Let's <span className="contact-accent">connect.</span></h2>
      </Reveal>
      <Reveal delay={200}>
        <p className="contact-text">
          I'm very willing to collaborate or chat about AI projects, data systems, and applied machine learning.
          Welcome to contact me via Connect.
        </p>
      </Reveal>
      <Reveal delay={300}>
        <div className="contact-links">
          <a href={`mailto:${SITE.email}`} className="contact-link">✉ Email</a>
          <a href={SITE.github} className="contact-link" target="_blank" rel="noreferrer">⌘ GitHub</a>
          <a href={SITE.linkedin} className="contact-link" target="_blank" rel="noreferrer">⊞ LinkedIn</a>
        </div>
      </Reveal>
    </section>
  );
}

function ShootingStars() {
  return (
    <div className="stars-container" aria-hidden="true">
      {Array.from({ length: 6 }).map((_, i) => <div key={i} className="shooting-star" />)}
    </div>
  );
}

export default function App() {
  return (
    <>
      <ShootingStars />
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Background />
      <Projects />
      <Contact />
      <footer className="footer">
        <p className="footer-text">© {new Date().getFullYear()} Jeffrey Hsieh </p>
      </footer>
    </>
  );
}