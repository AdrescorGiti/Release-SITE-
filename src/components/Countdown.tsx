import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Clock } from 'lucide-react';

function AnimatedNumber({ value }: { value: string }) {
  return (
    <div className="relative h-[28px] sm:h-[36px] overflow-hidden flex justify-center items-center w-[2.5ch]">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -15, opacity: 0, position: 'absolute', left: 0, right: 0, textAlign: 'center' }}
          transition={{ duration: 0.2 }}
          className="block font-mono text-2xl sm:text-3xl font-bold text-white leading-none"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export function Countdown() {
  const { t } = useLanguage();
  
  // Target: August 26, 2026, 02:00 MSK (UTC+3) -> August 25, 23:00 UTC
  const targetDate = new Date(Date.UTC(2026, 7, 25, 23, 0, 0)).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setIsReady(true);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (isReady) {
    return (
      <div className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 font-mono text-sm w-full sm:w-auto justify-center">
        {t.timer.released}
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-4 px-6 py-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-[0_15px_30px_rgba(0,0,0,0.4)] w-full sm:w-auto"
    >
      <div className="flex items-center gap-2 text-accent bg-accent/10 px-3 py-1 rounded border border-accent/20">
        <Clock className="w-4 h-4" />
        <span className="text-[12px] font-bold tracking-wider uppercase">{t.timer.title}</span>
      </div>
      
      <div className="flex items-center gap-3 sm:gap-5 mt-1">
        <div className="flex flex-col items-center gap-1">
          <AnimatedNumber value={String(timeLeft.days).padStart(2, '0')} />
          <span className="text-[10px] sm:text-[11px] text-text-dim uppercase tracking-wider font-semibold">{t.timer.days}</span>
        </div>
        <span className="text-white/20 pb-4 font-bold text-xl">:</span>
        <div className="flex flex-col items-center gap-1">
          <AnimatedNumber value={String(timeLeft.hours).padStart(2, '0')} />
          <span className="text-[10px] sm:text-[11px] text-text-dim uppercase tracking-wider font-semibold">{t.timer.hours}</span>
        </div>
        <span className="text-white/20 pb-4 font-bold text-xl">:</span>
        <div className="flex flex-col items-center gap-1">
          <AnimatedNumber value={String(timeLeft.minutes).padStart(2, '0')} />
          <span className="text-[10px] sm:text-[11px] text-text-dim uppercase tracking-wider font-semibold">{t.timer.mins}</span>
        </div>
        <span className="text-white/20 pb-4 font-bold text-xl">:</span>
        <div className="flex flex-col items-center gap-1">
          <AnimatedNumber value={String(timeLeft.seconds).padStart(2, '0')} />
          <span className="text-[10px] sm:text-[11px] text-text-dim uppercase tracking-wider font-semibold">{t.timer.secs}</span>
        </div>
      </div>
    </motion.div>
  );
}
