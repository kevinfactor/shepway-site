"use client";

import Image from "next/image";

/* ─── Styling tokens (sampled from live shepwaycommercial.co.uk) ─── */
/*  brand red  #d62828  · navy heading #1a3a5e  · light blue rows #e6f0f7
    body text #444      · page bg     #fff      · footer bg       #1a3a5e   */

/* Services sidebar — exact items from the live page, do not change */
const SERVICES = [
  "Suspended ceilings including mineral fibre, metal pan and liner for application in offices, medical facilities, pharmaceutical, educational, and industrial.",
  "Solid and feature ceilings on metal furring (M/F) system.",
  "Fire rated ceilings.",
  "Acoustic rafts and baffles.",
  "Load bearing systems for plant and services.",
  "Metal stud partitions with fire and acoustic properties to suit most internal applications.",
  "Glazed partitioning systems including doors and walls with optional acoustic and fire rating, internal blinds, manifestations and switchable smart glass.",
  "Fire rated column encasement systems.",
  "X-ray protection systems for medical and dental facilities.",
  "External cementitious systems.",
  "Finishing: including tape and jointing, airless spray plaster and multi finish skim coat plaster.",
];

const NAV_LINKS = [
  { label: "Home", href: "https://shepwaycommercial.co.uk/" },
  { label: "About", href: "https://shepwaycommercial.co.uk/about/" },
  { label: "Services", href: "https://shepwaycommercial.co.uk/services/" },
  { label: "Portfolio", href: "https://shepwaycommercial.co.uk/portfolio/" },
  { label: "Contact", href: "https://shepwaycommercial.co.uk/contact/" },
];

const CREDENTIALS = [
  { title: "60+ Years in Kent", body: "Family business since 1966." },
  { title: "Directly-Employed Team", body: "Kent-based ceiling fixers, dry liners, plasterers and jointers." },
  { title: "Product Experienced", body: "Rockfon, Ecophon, Zentia, British Gypsum, Knauf, Siniat." },
];

const BENEFITS = [
  { title: "Architect's detail maintained", body: "Systems installed to the manufacturer's detail and the architect's specification — not substituted on site." },
  { title: "Programme certainty", body: "Six decades of in-house labour planning. We deliver the man-power we commit to — including shifts, weekends and phased handovers." },
  { title: "Single-source coordination", body: "Ceilings, fire protection and acoustic systems through one Shepway division — eliminating interface risk between trades." },
  { title: "Trade-trained site management", body: "Our project managers and directors are trade-trained ceiling fixers and dry liners. The team running your job has installed what they manage." },
];

const PROCESS = [
  { n: "1", title: "Tender Review", body: "We review the architect's drawings, fire strategy and acoustic schedule to confirm scope, programme and buildability." },
  { n: "2", title: "Setting-Out & Coordination", body: "Setting-out is coordinated with the principal contractor, M&E trades and the architect's reflected ceiling plan before installation begins." },
  { n: "3", title: "Installation", body: "A directly-employed Shepway team installs the system. Quality is checked at first-fix, second-fix and pre-finish — not just at hand-over." },
  { n: "4", title: "Hand-Over & Snagging", body: "Hand-over documentation, manufacturer warranties, fire-rated certification and a photographic record. Snagging closed by the same team." },
];

const QUALITY_DETAILS = [
  "Grid lines aligned with partition lines, doors and light fittings",
  "Perimeter trims cut accurately to irregular soffit conditions",
  "Plasterboard joints set out to avoid corner cracks at door reveals",
  "Acoustic seals at partition heads and bases — installed, not assumed",
  "Fire-rated ceilings with cavity barriers correctly bridged",
  "Glass partition silicone joints finished to a consistent line",
  "Service penetrations sealed and recorded for hand-over",
  "Final decoration handed over without crack-line shadowing",
];

/* ─── Component ─── */

type Mode = "full" | "zone-a" | "zone-b";

interface ContentProps {
  mode?: Mode;
  chrome?: boolean;
}

export default function CeilingsPartitionsContent({ mode = "full", chrome = true }: ContentProps = {}) {
  // mode/zone props retained for /compare route — current build renders the same content for all modes
  void mode; void chrome;

  return (
    <main
      className="bg-white text-[#444]"
      style={{ fontFamily: '"Open Sans", "Segoe UI", system-ui, -apple-system, sans-serif' }}
    >
      {/* ═══ HEADER ═══ */}
      <header className="bg-white border-b border-[#e6e6e6]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <a href="https://shepwaycommercial.co.uk/" className="flex flex-col leading-none">
            <span className="text-[#d62828] font-semibold text-2xl tracking-tight">Shepway</span>
            <span className="text-[#d62828] text-[11px] tracking-wide">Ceilings &amp; Partitions</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-[#444]">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-[#d62828] transition-colors">
                {link.label}
              </a>
            ))}
            <a href="tel:01303274902" className="flex items-center gap-1.5 text-[#1a3a5e] font-semibold">
              <span aria-hidden>☎</span>
              <span>01303 274902</span>
            </a>
          </nav>
        </div>
      </header>

      {/* ═══ HERO ═══ */}
      <section className="relative">
        <div className="grid grid-cols-2 gap-0">
          <div className="relative aspect-[4/3] sm:aspect-[16/10]">
            <Image src="/images/project-01.jpg" alt="Shepway ceiling installation" fill className="object-cover" priority />
          </div>
          <div className="relative aspect-[4/3] sm:aspect-[16/10]">
            <Image src="/images/project-03.jpg" alt="Glass partitioning corridor" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* ═══ MAIN BODY — two columns: new copy left, services sidebar right ═══ */}
      <section className="py-10 lg:py-14">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.7fr_1fr] gap-10">

          {/* ─── LEFT — body copy (NEW) ─── */}
          <article>
            <h1 className="text-2xl lg:text-3xl font-semibold text-[#1a3a5e] leading-snug mb-5">
              Interior fit-out specialist in ceilings, dry lining and glass partitions — across Kent and South East England.
            </h1>

            <p className="text-[#444] leading-relaxed mb-4">
              Family-run since 1966, Shepway Commercial is one of Kent&apos;s
              longest-established specialist interior contractors. Our
              directly-employed team of ceiling fixers, dry liners, plasterers
              and jointers delivers the same high standard, project after project.
            </p>

            <p className="text-[#444] leading-relaxed mb-4">
              Roughly half our work is as a <strong className="text-[#1a3a5e]">specialist sub-contractor</strong> on
              larger projects — schools, hospitals, laboratories and
              commercial offices. The other half is <strong className="text-[#1a3a5e]">direct to the end user</strong> —
              building owners, occupiers and estates teams on standalone
              fit-outs, refurbishments and reactive works.
            </p>

            <p className="text-[#444] leading-relaxed mb-6">
              We don&apos;t design or specify — we install what the architect has
              drawn, to the standard the design demands. Our objective is
              straightforward: complete every project on programme, without
              compromising the quality of the finished product.
            </p>

            {/* Phone callout (matches the live page's blue callout style) */}
            <a
              href="tel:01303274902"
              className="block bg-[#e6f0f7] border border-[#c8d8e8] rounded px-5 py-3.5 mb-7 text-[#1a3a5e] hover:bg-[#d8e6f0] transition-colors"
            >
              <span className="text-sm">Contact Shepway Ceilings &amp; Partitions for a direct quote or if you have a tender enquiry.</span>
              <span className="block text-base font-semibold mt-1">☎ 01303 274902</span>
            </a>

            {/* Compact credentials row */}
            <div className="grid sm:grid-cols-3 gap-3 mb-7">
              {CREDENTIALS.map((c) => (
                <div key={c.title} className="bg-[#f4f7fa] border border-[#e0e0e0] rounded px-4 py-3">
                  <div className="text-sm font-semibold text-[#1a3a5e] mb-0.5">{c.title}</div>
                  <div className="text-xs text-[#666] leading-snug">{c.body}</div>
                </div>
              ))}
            </div>

          </article>

          {/* ─── RIGHT — services sidebar (PRESERVED from live) ─── */}
          <aside>
            <h2 className="text-2xl font-semibold text-[#1a3a5e] mb-2">Services</h2>
            <div className="w-12 h-[3px] bg-[#d62828] mb-4" />
            <ul className="rounded overflow-hidden border border-[#e0e0e0]">
              {SERVICES.map((s, i) => (
                <li
                  key={i}
                  className={`px-4 py-3 text-sm leading-snug text-[#444] ${i % 2 === 0 ? "bg-[#e6f0f7]" : "bg-white"}`}
                >
                  {s}
                </li>
              ))}
            </ul>
          </aside>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/*  ADDITIONAL CONTENT — full-width sections below body    */}
      {/*  Demo of further detail that can be added to the page.  */}
      {/* ─────────────────────────────────────────────────────── */}

      {/* ═══ WHY CHOOSE SHEPWAY ═══ */}
      <section className="py-12 lg:py-16 bg-[#f4f7fa] border-y border-[#e6e6e6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#1a3a5e] mb-2">
              Why architects, surveyors and principal contractors choose Shepway
            </h2>
            <div className="w-16 h-[3px] bg-[#d62828]" />
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#d62828] text-white flex items-center justify-center text-sm font-bold mt-0.5">
                  ✓
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#1a3a5e] mb-1">{b.title}</h3>
                  <p className="text-sm text-[#555] leading-relaxed">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#1a3a5e] mb-2">
              From tender package to hand-over
            </h2>
            <div className="w-16 h-[3px] bg-[#d62828]" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS.map((p) => (
              <div key={p.n} className="border border-[#e0e0e0] rounded-md p-5 bg-white">
                <div className="w-9 h-9 rounded-full bg-[#d62828] text-white flex items-center justify-center font-bold mb-3">
                  {p.n}
                </div>
                <h3 className="text-sm font-semibold text-[#1a3a5e] mb-2 leading-snug">{p.title}</h3>
                <p className="text-xs text-[#555] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ QUALITY LIVES IN THE DETAIL ═══ */}
      <section className="py-12 lg:py-16 bg-[#f4f7fa] border-y border-[#e6e6e6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#1a3a5e] mb-2">
              Quality lives in the detail
            </h2>
            <div className="w-16 h-[3px] bg-[#d62828] mb-4" />
            <p className="text-sm text-[#555] leading-relaxed max-w-3xl">
              The difference between a competent fit-out and a high-quality one
              is rarely visible from a tender drawing — it shows up in the details:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 rounded overflow-hidden border border-[#e0e0e0]">
            {QUALITY_DETAILS.map((d, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 px-4 py-3 ${i % 2 === 0 ? "bg-[#e6f0f7]" : "bg-white"}`}
              >
                <span className="text-[#d62828] font-bold mt-0.5">✓</span>
                <span className="text-sm text-[#444] leading-relaxed">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURED PROJECT ═══ */}
      {/* TODO: confirm scope figure (m² / value) and outcome detail with Paul/David */}
      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <div className="text-[10px] tracking-[3px] uppercase text-[#d62828] font-semibold mb-2">Featured Project</div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#1a3a5e] mb-2">
              One Ashford Hospital — Healthcare Fit-Out
            </h2>
            <div className="w-16 h-[3px] bg-[#d62828]" />
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="overflow-hidden rounded border border-[#e0e0e0]">
              <Image src="/images/project-one-ashford.jpg" alt="One Ashford Hospital exterior" width={720} height={480} className="w-full h-auto" />
            </div>
            <div className="overflow-hidden rounded border border-[#e0e0e0]">
              <Image src="/images/project-05.jpg" alt="Healthcare interior fit-out" width={720} height={480} className="w-full h-auto" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-[#1a3a5e] mb-2">Project Scope</h3>
              <p className="text-sm text-[#555] leading-relaxed">
                Specialist sub-contractor for ceilings, dry lining and
                partitioning across consulting rooms, theatre support and ward
                accommodation, working to the architect&apos;s approved drawings.
              </p>
              <p className="text-xs text-[#999] italic mt-1">[scope figure TBC]</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1a3a5e] mb-2">Works Undertaken</h3>
              <ul className="text-sm text-[#555] leading-relaxed space-y-1">
                <li>• Mineral-fibre and metal-pan ceilings</li>
                <li>• Hygienic clean-room ceilings to clinical areas</li>
                <li>• Metal stud partitioning</li>
                <li>• X-ray protected partitions to imaging suites</li>
                <li>• Fire-rated ceilings and partitions</li>
                <li>• Tape, joint and skim finishes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1a3a5e] mb-2">Outcome</h3>
              <p className="text-sm text-[#555] leading-relaxed">
                Delivered to the principal contractor&apos;s programme alongside
                concurrent M&amp;E and finishing trades, with a finish standard
                that satisfied the hospital&apos;s clinical hand-over
                requirements.
              </p>
              <p className="text-xs text-[#999] italic mt-1">[outcome detail TBC]</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA STRIP ═══ */}
      <section className="bg-[#1a3a5e] text-white py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold">From tender package to snag-free hand-over.</h2>
            <p className="text-sm text-white/80 mt-1">Speak to our team about your next ceilings &amp; partitions package.</p>
          </div>
          <a
            href="tel:01303274902"
            className="inline-block px-6 py-3 bg-[#d62828] text-white text-sm font-semibold tracking-[1px] uppercase rounded hover:bg-[#b82222] transition-colors"
          >
            ☎ 01303 274902
          </a>
        </div>
      </section>

      {/* ═══ FOOTER — matches the live shepwaycommercial.co.uk footer ═══ */}
      <footer className="bg-[#1a3a5e] text-white border-t-4 border-[#d62828]">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="text-base font-semibold mb-3 text-white">Address</h4>
            <p className="text-white/85 leading-relaxed">
              Unit 1, The Glenmore Centre<br />
              Shearway Business Park<br />
              Folkestone<br />
              Kent CT19 4RJ
            </p>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-3 text-white">Phone, Email &amp; Hours</h4>
            <p className="text-white/85 leading-relaxed">
              <a href="tel:01303274902" className="hover:text-white">☎ 01303 274902</a><br />
              <a href="mailto:info@shepwaycommercial.co.uk" className="hover:text-white break-all">info@shepwaycommercial.co.uk</a><br />
              Mon – Fri | 9:00am – 5:00pm
            </p>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-3 text-white">Social Media</h4>
            <p className="text-white/85 mb-3">
              <a href="#" className="hover:text-white mr-4" aria-label="Facebook">f</a>
              <a href="#" className="hover:text-white" aria-label="LinkedIn">in</a>
            </p>
            <a href="https://shepwaycommercial.co.uk/privacy-policy/" className="text-white/85 hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="bg-black/20">
          <div className="max-w-6xl mx-auto px-6 py-3 text-xs text-white/70 flex flex-wrap items-center justify-between gap-2">
            <span>&copy; {new Date().getFullYear()} Shepway Commercial. All Rights Reserved.</span>
            <span>Website by Marino IT Services</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
