"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

/* ─── Data ─── */

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Accreditations", href: "#accreditations" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: "60+", label: "Years of Excellence" },
  { value: "5,000", label: "m² Lab Fit-Out" },
  { value: "10+", label: "Certified Installers" },
  { value: "4", label: "Specialist Divisions" },
];

const SERVICES = [
  {
    id: "ceilings",
    title: "Ceilings & Partitions",
    subtitle: "60 Years of Expertise",
    description:
      "Interior fit-out specialising in suspended ceilings, dry lining and glass partitions. Direct to end user or as sub-contractor to principal contractors on projects of all scales.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="8" width="36" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <line x1="12" y1="12" x2="12" y2="36" stroke="currentColor" strokeWidth="1.5" />
        <line x1="24" y1="12" x2="24" y2="36" stroke="currentColor" strokeWidth="1.5" />
        <line x1="36" y1="12" x2="36" y2="36" stroke="currentColor" strokeWidth="1.5" />
        <rect x="6" y="36" width="36" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    image: "/images/project-01.jpg",
  },
  {
    id: "fire",
    title: "Fire Protection",
    subtitle: "FIRAS & BM TRADA Accredited",
    description:
      "Accredited to supply, install and certify fire rated doors, ceilings, partitions and penetration seals. Full passive fire protection surveys, remediation and certification.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 6C24 6 12 18 12 28C12 34.627 17.373 40 24 40C30.627 40 36 34.627 36 28C36 18 24 6 24 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M24 22C24 22 19 27 19 31C19 33.761 21.239 36 24 36C26.761 36 29 33.761 29 31C29 27 24 22 24 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    image: "/images/project-04.jpg",
  },
  {
    id: "acoustics",
    title: "Acoustic Systems",
    subtitle: "Sound Solutions",
    description:
      "Suppliers and installers of a wide array of interior acoustic solutions for sound absorption and soundproofing — from open-plan offices to specialist laboratory environments.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M8 20V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 16V32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 12V36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M26 18V30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M32 14V34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M38 20V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    image: "/images/project-02.jpg",
  },
  {
    id: "property",
    title: "Property Services",
    subtitle: "Comprehensive Maintenance",
    description:
      "A comprehensive range of building services including construction and maintenance solutions for commercial clients and facility managers across Kent. Reactive and planned.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M8 40V20L24 8L40 20V40H30V28H18V40H8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18 28H30V40" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    image: "/images/project-05.jpg",
  },
];

const PROJECTS = [
  { title: "Discovery Park Incubator Labs", desc: "5,000m² BSL-2 biosafety lab fit-out", image: "/images/project-01.jpg", tag: "Laboratory" },
  { title: "Discovery Park Bld 510", desc: "BSL-4 Development Suite strip-out & rebuild", image: "/images/project-04.jpg", tag: "Specialist" },
  { title: "Glass Partition Corridors", desc: "Full-height glazed partitioning systems", image: "/images/project-03.jpg", tag: "Partitions" },
  { title: "Collaborative Workspace", desc: "Open plan with acoustic ceiling treatment", image: "/images/project-02.jpg", tag: "Ceilings" },
  { title: "Commercial Refurbishment", desc: "Complete interior strip-out and refit", image: "/images/project-06.jpg", tag: "Fit-Out" },
  { title: "Research Laboratory Suites", desc: "Clean-room grade ceiling and wall systems", image: "/images/project-07.jpg", tag: "Laboratory" },
  { title: "Development Suite Fit-Out", desc: "Full laboratory development suite with fume cupboards and specialist services", image: "/images/project-09.jpg", tag: "Laboratory" },
  { title: "One Ashford Hospital", desc: "Premium reception and communal area interior fit-out", image: "/images/project-10.jpg", tag: "Fit-Out" },
];

const CLIENTS = [
  "Discovery Park", "Pfizer", "BAM Construction", "BMW", "NHS",
  "Holiday Extras", "Dover District Council", "Folkestone & Hythe DC",
];

/* ─── Component ─── */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [navSolid, setNavSolid] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const [ready, setReady] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    // Ensure we're at top, then enable the page
    const t = setTimeout(() => {
      window.scrollTo(0, 0);
      setReady(true);
    }, 100);

    // Smooth scroll for anchor links (replaces CSS scroll-behavior)
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (anchor) {
        const id = anchor.getAttribute("href");
        if (id === "#") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (id) {
          const el = document.querySelector(id);
          if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      clearTimeout(t);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      setNavSolid(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ready]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(10px)`;
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
  }, []);

  return (
    <main>
      {/* ═══ NAVIGATION ═══ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navSolid
            ? "nav-blur bg-navy/92 border-b border-divider/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/images/shepway-fire-protection-logo.png"
              alt="Shepway Fire Protection"
              width={180}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate hover:text-off-white transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:01303274902"
              className="ml-4 px-5 py-2.5 border border-brand/40 text-brand text-xs tracking-[2px] uppercase hover:bg-brand/10 transition-all rounded"
            >
              01303 274902
            </a>
          </div>

          <button
            className="md:hidden text-off-white p-2"
            onClick={() => setMobileNav(!mobileNav)}
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileNav ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>

        {mobileNav && (
          <div className="md:hidden bg-navy-light/95 nav-blur border-t border-divider/40 mt-3">
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMobileNav(false)} className="text-off-white text-lg font-heading tracking-wide">
                  {link.label}
                </a>
              ))}
              <a href="tel:01303274902" className="mt-2 px-5 py-3 border border-brand/40 text-brand text-xs tracking-[2px] uppercase text-center rounded">
                01303 274902
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Parallax background */}
        <div className="absolute inset-0 z-0" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-steel opacity-90" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(123,156,196,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(123,156,196,0.3) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Floating geometric elements — brand CI hexagon motif */}
        <div className="absolute top-24 right-[12%] w-48 h-48 border border-brand/8 float-slow geo-hex hidden lg:block" style={{ transform: `translateY(${scrollY * -0.15}px)` }} />
        <div className="absolute bottom-40 left-[8%] w-32 h-32 border border-brand/6 float-slower geo-hex hidden lg:block" style={{ transform: `translateY(${scrollY * -0.08}px)` }} />
        <div className="absolute top-[35%] right-[20%] w-20 h-20 bg-brand/[0.04] float-slow geo-hex hidden lg:block" style={{ transform: `translateY(${scrollY * -0.2}px)` }} />

        {/* Hero image — deep parallax layer */}
        <div className="absolute right-0 top-0 bottom-0 w-[55%] hidden lg:block overflow-hidden" style={{ transform: `translateY(${scrollY * 0.15}px)` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent z-10" />
          <Image src="/images/project-03.jpg" alt="Shepway Commercial interior fit-out" fill className="object-cover opacity-40" priority />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-32 lg:py-0 w-full">
          <div className="max-w-2xl">
            <div className="reveal" style={{ transitionDelay: "200ms" }}>
              <div className="section-label mb-6">Est. 1966 — Folkestone, Kent</div>
            </div>

            <h1 className="reveal font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-off-white leading-[1.1] mb-6" style={{ transitionDelay: "400ms" }}>
              Building
              <br />
              <span className="text-brand italic font-normal">Excellence</span>
              <br />
              Into Every Space
            </h1>

            <div className="reveal" style={{ transitionDelay: "600ms" }}>
              <div className="brand-rule mb-6" />
            </div>

            <p className="reveal text-slate text-lg leading-relaxed mb-10 max-w-lg" style={{ transitionDelay: "700ms" }}>
              Kent&apos;s leading multi-discipline interior fit-out contractor.
              Ceilings, fire protection, acoustics and property services — under
              one roof, to one standard.
            </p>

            <div className="reveal flex flex-wrap gap-4" style={{ transitionDelay: "900ms" }}>
              <a href="#services" className="px-8 py-3.5 bg-brand text-white text-sm tracking-[1px] uppercase rounded hover:bg-brand-light transition-colors font-medium">
                Our Services
              </a>
              <a href="#contact" className="px-8 py-3.5 border border-off-white/20 text-off-white text-sm tracking-[1px] uppercase rounded hover:border-off-white/40 transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent z-20" />
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="relative z-30 -mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-navy-light/80 nav-blur border border-divider/40 rounded-lg p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div key={i} className="reveal text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="font-heading text-3xl lg:text-4xl text-brand font-light">{stat.value}</div>
                <div className="text-xs text-slate tracking-wide mt-1 uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLIENT MARQUEE ═══ */}
      <section className="py-12 overflow-hidden border-b border-divider/30">
        <div className="flex whitespace-nowrap">
          <div className="marquee-track flex items-center gap-16 pr-16">
            {[...CLIENTS, ...CLIENTS].map((client, i) => (
              <span key={i} className="text-sm tracking-[3px] uppercase text-steel-light/60 font-body">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <div
                className="depth-image rounded-lg overflow-hidden cursor-default"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ transition: "transform 0.3s ease" }}
              >
                <Image src="/images/project-01.jpg" alt="Discovery Park completed project" width={1024} height={680} className="w-full h-auto" />
              </div>
            </div>

            <div>
              <div className="reveal">
                <span className="section-label">Our Heritage</span>
                <h2 className="font-heading text-4xl lg:text-5xl font-light text-off-white mt-4 mb-4 leading-[1.15]">
                  Six Decades of<br /><span className="text-brand italic">Family Craft</span>
                </h2>
                <div className="brand-rule mb-8" />
              </div>

              <p className="reveal text-slate leading-relaxed mb-6" style={{ transitionDelay: "100ms" }}>
                Since 1966, the Greenhalgh family has built Shepway from a
                specialist ceiling contractor into Kent&apos;s most comprehensive
                interior fit-out firm. Three generations of hands-on expertise —
                from Folkestone to Discovery Park and beyond.
              </p>

              <p className="reveal text-slate leading-relaxed mb-8" style={{ transitionDelay: "200ms" }}>
                Today we operate four specialist divisions: Ceilings &amp;
                Partitions, Fire Protection, Acoustic Systems, and Property
                Services. Every division is staffed, managed and delivered
                in-house. One contractor. One standard. Zero coordination risk.
              </p>

              <div className="reveal grid grid-cols-2 gap-4" style={{ transitionDelay: "300ms" }}>
                {["FIRAS Accredited", "BM TRADA Certified", "Principal Contractor", "Kent & South East"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                    <span className="text-sm text-off-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="py-28 lg:py-36 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/30 to-navy pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="reveal section-label">What We Do</span>
            <h2 className="reveal font-heading text-4xl lg:text-5xl font-light text-off-white mt-4 leading-tight" style={{ transitionDelay: "100ms" }}>
              Four Disciplines. <span className="text-brand italic">One Contractor.</span>
            </h2>
            <div className="reveal mx-auto mt-4" style={{ transitionDelay: "200ms" }}>
              <div className="brand-rule mx-auto" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 stagger-children">
            {SERVICES.map((service) => (
              <div key={service.id} className="reveal service-card group relative bg-navy-light/60 border border-divider/40 rounded-lg overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-700 scale-110 group-hover:scale-105" />
                </div>

                <div className="relative z-10 p-8 lg:p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-brand/60 group-hover:text-brand transition-colors">{service.icon}</div>
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-divider group-hover:text-brand/40 transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>

                  <div className="text-[10px] tracking-[2px] uppercase text-brand/50 mb-2 font-body">{service.subtitle}</div>
                  <h3 className="font-heading text-2xl text-off-white mb-4 font-normal">{service.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PARALLAX IMAGE BREAK ═══ */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(${(scrollY - 2000) * 0.2}px)` }}>
          <Image src="/images/project-06.jpg" alt="Shepway project" fill className="object-cover" />
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <div className="reveal"><span className="section-label">Our Promise</span></div>
            <h2 className="reveal font-heading text-3xl lg:text-5xl font-light text-off-white mt-4 max-w-2xl px-6" style={{ transitionDelay: "100ms" }}>
              &ldquo;One call. One team. <span className="text-brand italic">One standard.</span>&rdquo;
            </h2>
          </div>
        </div>
      </section>

      {/* ═══ PORTFOLIO ═══ */}
      <section id="portfolio" className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="reveal section-label">Selected Work</span>
            <h2 className="reveal font-heading text-4xl lg:text-5xl font-light text-off-white mt-4 leading-tight" style={{ transitionDelay: "100ms" }}>
              Project <span className="text-brand italic">Portfolio</span>
            </h2>
            <div className="reveal mt-4" style={{ transitionDelay: "200ms" }}><div className="brand-rule" /></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children" style={{ perspective: "1000px" }}>
            {PROJECTS.map((project, i) => (
              <div
                key={i}
                className="reveal portfolio-item group rounded-lg overflow-hidden bg-navy-light/40 border border-divider/30"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ transition: "transform 0.4s ease" }}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-light to-transparent opacity-60" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] tracking-[2px] uppercase bg-brand/15 text-brand-light border border-brand/25 px-3 py-1 rounded-full font-body">
                      {project.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-off-white font-normal mb-2">{project.title}</h3>
                  <p className="text-slate text-sm">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ACCREDITATIONS ═══ */}
      <section id="accreditations" className="py-28 lg:py-36 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/20 to-navy pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="reveal section-label">Trust & Certification</span>
            <h2 className="reveal font-heading text-4xl lg:text-5xl font-light text-off-white mt-4 leading-tight" style={{ transitionDelay: "100ms" }}>
              Certified, Not Just <span className="text-brand italic">Experienced</span>
            </h2>
            <div className="reveal mx-auto mt-4" style={{ transitionDelay: "200ms" }}><div className="brand-rule mx-auto" /></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "FIRAS Accredited", body: "The industry gold standard for passive fire protection installation. Independently audited to ensure every firestopping installation meets the highest standards of life safety." },
              { title: "BM TRADA Certified", body: "Third-party certification for fire door installation and maintenance. Required by most insurers for remedial fire protection works on commercial buildings." },
            ].map((acc, i) => (
              <div key={i} className="reveal badge-glow bg-navy-light/60 border border-brand/15 rounded-lg p-8 text-center" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-brand/30 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-brand" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4" />
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl text-brand mb-3 font-normal">{acc.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{acc.body}</p>
              </div>
            ))}
          </div>

          <div className="reveal text-center mt-12" style={{ transitionDelay: "300ms" }}>
            <p className="text-slate text-sm max-w-xl mx-auto">
              Shepway Fire Protection is one of only a handful of contractors in Kent
              holding <strong className="text-off-white">both</strong> FIRAS and BM TRADA
              accreditations — giving clients, insurers and building owners complete confidence
              in the compliance of every installation.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ TEAM ═══ */}
      <section className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="reveal section-label">Our People</span>
              <h2 className="reveal font-heading text-4xl lg:text-5xl font-light text-off-white mt-4 mb-4 leading-[1.15]" style={{ transitionDelay: "100ms" }}>
                The Team Behind<br /><span className="text-brand italic">Every Project</span>
              </h2>
              <div className="reveal mt-1 mb-8" style={{ transitionDelay: "200ms" }}><div className="brand-rule" /></div>

              <p className="reveal text-slate leading-relaxed mb-6" style={{ transitionDelay: "250ms" }}>
                Led by Paul Gavin (Managing Director) and David Greenhalgh
                (Commercial Director), our senior team brings over 80 years of
                combined construction industry experience.
              </p>
              <p className="reveal text-slate leading-relaxed mb-8" style={{ transitionDelay: "350ms" }}>
                Stuart McAteer, our Property Services General Manager, has
                spent 30+ years at Discovery Park — an unrivalled depth of
                knowledge across one of Kent&apos;s most complex commercial
                estates. Our 10-person certified fire stopping team is based
                right here in Kent.
              </p>

              <div className="reveal" style={{ transitionDelay: "450ms" }}>
                <a href="#contact" className="inline-flex items-center gap-2 text-brand hover:text-brand-light transition-colors text-sm tracking-wide">
                  Work with our team
                  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                </a>
              </div>
            </div>

            <div className="reveal-right">
              <div
                className="depth-image rounded-lg overflow-hidden cursor-default"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ transition: "transform 0.3s ease" }}
              >
                <Image src="/images/project-08.jpg" alt="Shepway team project" width={1024} height={680} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="py-28 lg:py-36 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/30 to-navy pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="reveal section-label">Get in Touch</span>
              <h2 className="reveal font-heading text-4xl lg:text-5xl font-light text-off-white mt-4 mb-4 leading-[1.15]" style={{ transitionDelay: "100ms" }}>
                Start Your <span className="text-brand italic">Project</span>
              </h2>
              <div className="reveal mt-1 mb-8" style={{ transitionDelay: "200ms" }}><div className="brand-rule" /></div>

              <p className="reveal text-slate leading-relaxed mb-10" style={{ transitionDelay: "250ms" }}>
                Whether you need a free site assessment, a quote for an upcoming
                project, or expert advice on fire protection compliance — our
                team is ready to help.
              </p>

              <div className="reveal space-y-6" style={{ transitionDelay: "350ms" }}>
                {[
                  {
                    label: "Phone", value: "01303 274902", href: "tel:01303274902",
                    icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>,
                  },
                  {
                    label: "Email", value: "info@shepwaycommercial.co.uk", href: "mailto:info@shepwaycommercial.co.uk",
                    icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 6L2 7" /></svg>,
                  },
                  {
                    label: "Address", value: "Unit 1, The Glenmore Centre, Shearway Business Park, Folkestone, Kent CT19 4RJ", href: "https://maps.google.com/?q=Shearway+Business+Park+Folkestone+Kent",
                    icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
                  },
                ].map((item) => (
                  <a key={item.label} href={item.href} target={item.label === "Address" ? "_blank" : undefined} rel={item.label === "Address" ? "noopener noreferrer" : undefined} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded border border-divider/60 flex items-center justify-center text-brand/50 group-hover:text-brand group-hover:border-brand/30 transition-colors flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[2px] uppercase text-brand/40 mb-1">{item.label}</div>
                      <div className="text-off-white group-hover:text-brand-light transition-colors text-sm leading-relaxed">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="reveal-right">
              <div className="bg-navy-light/60 border border-divider/40 rounded-lg p-8 lg:p-10">
                <h3 className="font-heading text-xl text-off-white mb-6 font-normal">Request a Free Assessment</h3>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] tracking-[2px] uppercase text-slate block mb-2">Name</label>
                      <input type="text" className="w-full bg-navy/60 border border-divider/50 rounded px-4 py-3 text-sm text-off-white placeholder:text-steel-light/40 focus:outline-none focus:border-brand/50 transition-colors" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="text-[10px] tracking-[2px] uppercase text-slate block mb-2">Company</label>
                      <input type="text" className="w-full bg-navy/60 border border-divider/50 rounded px-4 py-3 text-sm text-off-white placeholder:text-steel-light/40 focus:outline-none focus:border-brand/50 transition-colors" placeholder="Company name" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[2px] uppercase text-slate block mb-2">Email</label>
                    <input type="email" className="w-full bg-navy/60 border border-divider/50 rounded px-4 py-3 text-sm text-off-white placeholder:text-steel-light/40 focus:outline-none focus:border-brand/50 transition-colors" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[2px] uppercase text-slate block mb-2">Service Required</label>
                    <select className="w-full bg-navy/60 border border-divider/50 rounded px-4 py-3 text-sm text-slate focus:outline-none focus:border-brand/50 transition-colors appearance-none">
                      <option>Select a service</option>
                      <option>Ceilings &amp; Partitions</option>
                      <option>Fire Protection</option>
                      <option>Acoustic Systems</option>
                      <option>Property Services</option>
                      <option>Multiple / Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[2px] uppercase text-slate block mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-navy/60 border border-divider/50 rounded px-4 py-3 text-sm text-off-white placeholder:text-steel-light/40 focus:outline-none focus:border-brand/50 transition-colors resize-none" placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-brand text-white text-sm font-semibold tracking-[1px] uppercase rounded hover:bg-brand-light transition-colors">
                    Send Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BACK TO TOP ═══ */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center shadow-lg hover:bg-brand-light transition-all duration-300 ${
          navSolid ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-divider/30 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image src="/images/shepway-fire-protection-logo.png" alt="Shepway Fire Protection" width={140} height={40} className="h-8 w-auto opacity-90" />
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-xs text-steel-light/60 hover:text-off-white transition-colors tracking-wide">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="text-xs text-steel-light/40 text-center md:text-right">
              &copy; {new Date().getFullYear()} Shepway Commercial Ltd.<br />All Rights Reserved.
              <div className="mt-3 flex items-center justify-center md:justify-end gap-2">
                <span className="text-[10px] text-steel-light/30 uppercase tracking-widest">Built by</span>
                <a href="https://xfactor.dev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 group">
                  <div className="relative w-4 h-4">
                    <div className="absolute w-full h-[3px] rounded-full top-1/2 left-0 -translate-y-1/2 rotate-45" style={{ background: "linear-gradient(135deg, #FF8C42, #CC5500)" }} />
                    <div className="absolute w-full h-[3px] rounded-full top-1/2 left-0 -translate-y-1/2 -rotate-45" style={{ background: "linear-gradient(135deg, #FF8C42, #CC5500)" }} />
                  </div>
                  <span className="text-xs font-bold tracking-widest group-hover:opacity-100 opacity-60 transition-opacity" style={{ fontFamily: "'Space Grotesk', sans-serif", background: "linear-gradient(135deg, #FF8C42, #CC5500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    FACTOR AI
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
