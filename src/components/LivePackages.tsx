import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Package, Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type RepoPackage = {
  name: string;
  version: string;
};

export function LivePackages() {
  const [packages, setPackages] = useState<RepoPackage[]>([]);
  const { language } = useLanguage();

  useEffect(() => {
    // Fetch live package list directly from GitHub repo
    fetch('https://raw.githubusercontent.com/AdrescorGiti/gvalli-repo/main/packages.json')
      .then(res => res.json())
      .then(data => {
        if (data && data.packages) {
          setPackages(data.packages);
        }
      })
      .catch(err => console.error("Failed to fetch packages:", err));
  }, []);

  if (packages.length === 0) return null;

  // Duplicate items to create a seamless infinite scrolling marquee effect
  const marqueeItems = [...packages, ...packages, ...packages];

  return (
    <div className="w-full border-y border-white/[0.05] bg-bg py-3 flex items-center relative z-10 mb-12">
      {/* Live Stats Counter (Solid background to hide scrolling text underneath) */}
      <div className="flex items-center px-4 sm:px-6 border-r border-white/10 z-30 bg-bg shrink-0 h-full relative shadow-[5px_0_15px_rgba(5,5,8,1)]">
        <Activity className="w-4 h-4 text-accent mr-2 animate-pulse" />
        <span className="text-white font-mono text-[11px] sm:text-[12px] uppercase tracking-wider whitespace-nowrap">
          {language === 'en' ? 'Live Repo Packages:' : 'В Репозитории:'} <span className="text-accent font-bold ml-1">{packages.length}</span>
        </span>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex-1 overflow-hidden h-full flex items-center">
        {/* Gradient masks for smooth fade edges inside the marquee area */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-bg to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-bg to-transparent z-20 pointer-events-none"></div>
        
        {/* Scrolling Ticker */}
        <motion.div 
          className="flex gap-8 px-8 shrink-0 z-10"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {marqueeItems.map((pkg, i) => (
            <div key={i} className="flex items-center gap-2 whitespace-nowrap">
              <Package className="w-3.5 h-3.5 text-text-dim" />
              <span className="text-text-main text-[13px] font-bold">{pkg.name}</span>
              <span className="text-text-dim text-[11px] font-mono bg-white/5 px-1.5 py-0.5 rounded">{pkg.version}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
