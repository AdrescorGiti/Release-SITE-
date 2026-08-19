import { motion } from 'motion/react';

export function TerminalMockup() {
  return (
    <div className="rounded-xl overflow-hidden bg-[rgba(10,10,15,0.8)] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-[20px] font-mono min-h-[320px] flex flex-col relative z-20 w-full">
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-2.5 bg-white/[0.05] gap-2">
        <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
        <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
        <div className="ml-auto text-[11px] text-text-dim">gvalli — root@gos</div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 text-[12px] sm:text-[13px] leading-[1.5] text-white flex-1 overflow-y-auto overflow-x-hidden break-words">
        <div>
          <span className="text-accent mr-2">$</span>
          <span>gvalli install neofetch</span>
        </div>
        
        <div className="text-text-dim">[INFO] Indexing G OS Main Repository...</div>
        <div className="text-text-dim">[INFO] Fetching neofetch.gpkg (240 KB)</div>
        <div className="text-[#27c93f]">[DONE] Installed neofetch in 0.04s</div>
        <div>&nbsp;</div>

        <div className="text-accent">OS: G OS v0.7.2 Beta x86_64</div>
        <div>Kernel: 6.16.4-gos-optimized</div>
        <div>Init: runit (system-supervision)</div>
        <div>Uptime: 1.2s (boot to login)</div>
        <div>Memory: 482MiB / 32168MiB</div>
        <div>&nbsp;</div>
        
        <div className="flex items-center">
          <span className="text-accent mr-2">$</span>
          <div className="w-2 h-4 bg-white animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
