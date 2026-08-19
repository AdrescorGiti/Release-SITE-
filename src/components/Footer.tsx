import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-6 flex flex-col md:flex-row items-center justify-between border-t border-white/[0.05] text-[11px] text-text-dim mt-8 gap-4 md:gap-0">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div>{t.footer.copyright}</div>
        
        {/* System Status Indicators */}
        <div className="flex items-center gap-4 bg-white/[0.02] px-3 py-1.5 rounded-md border border-white/[0.05]">
          <span className="font-semibold text-white/50">{t.footer.sys_status}</span>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-green-500/80 font-mono tracking-wide">{t.footer.repo_online}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" style={{ animationDuration: '2s' }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            <span className="text-yellow-500/80 font-mono tracking-wide">{t.footer.build_iso}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-5">
        <a href="https://t.me/GOS_Tux" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram</a>
        <a href="https://github.com/AdrescorGiti?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
      </div>
    </footer>
  );
}
