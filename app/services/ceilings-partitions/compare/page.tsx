import Image from "next/image";
import CeilingsPartitionsContent from "../_content";

export default function ComparePage() {
  return (
    <div
      className="min-h-screen bg-[#f4f7fa]"
      style={{ fontFamily: '"Open Sans", "Segoe UI", system-ui, -apple-system, sans-serif' }}
    >
      {/* ═══ HEADER ═══ */}
      <header className="sticky top-0 z-50 bg-white border-b-4 border-[#d62828] shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-4 py-3 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="text-[10px] tracking-[3px] uppercase text-[#d62828] font-semibold">Client Review</div>
            <h1 className="text-lg lg:text-xl font-semibold text-[#1a3a5e]">
              Shepway Ceilings &amp; Partitions — Live vs Proposed
            </h1>
          </div>
          <a
            href="https://shepwaycommercial.co.uk/services/shepway-ceilings-partitions/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 border border-[#1a3a5e]/30 text-[#1a3a5e] hover:bg-[#1a3a5e] hover:text-white transition-colors rounded-full"
          >
            Open live page ↗
          </a>
        </div>
      </header>

      {/* ═══ EXPLANATION ═══ */}
      <div className="bg-white border-b border-[#e0e0e0]">
        <div className="max-w-screen-2xl mx-auto px-4 py-4 text-sm text-[#444] leading-relaxed">
          <p>
            <strong className="text-[#1a3a5e]">How to read this:</strong> the
            left column is your current live page (a screenshot from
            shepwaycommercial.co.uk). The right column is the proposed update —
            same overall layout (header · hero · body + services sidebar ·
            footer), with shorter, sharper body copy that addresses the client
            feedback on the previous draft.
          </p>
        </div>
      </div>

      {/* ═══ TWO COLUMNS ═══ */}
      <div className="grid lg:grid-cols-2 gap-px bg-[#d0d8e0]">
        {/* LEFT: live page screenshot */}
        <div className="bg-white">
          <div className="sticky top-[73px] z-40 bg-white border-b border-[#e0e0e0] px-4 py-2">
            <div className="text-[10px] tracking-[3px] uppercase text-[#666] font-semibold">
              ◀ LIVE — your current site
            </div>
          </div>
          <Image
            src="/images/live-ceilings-page.png"
            alt="Live shepwaycommercial.co.uk ceilings & partitions page"
            width={1440}
            height={2030}
            className="w-full h-auto block"
            priority
          />
        </div>

        {/* RIGHT: proposed rebuild */}
        <div className="bg-white">
          <div className="sticky top-[73px] z-40 bg-[#fde8e8] border-b border-[#d62828]/40 px-4 py-2">
            <div className="text-[10px] tracking-[3px] uppercase text-[#d62828] font-semibold">
              PROPOSED — same layout, new copy ▶
            </div>
          </div>
          <CeilingsPartitionsContent />
        </div>
      </div>

      <div className="bg-white border-t border-[#e0e0e0] px-4 py-6 text-center">
        <p className="text-xs text-[#666]">
          Comparison preview · not for public release · feedback to&nbsp;
          <a href="mailto:kevinfactor@gmail.com" className="text-[#d62828]">kevinfactor@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
