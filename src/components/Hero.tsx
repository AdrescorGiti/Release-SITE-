import { motion } from 'motion/react';
import { TerminalMockup } from './TerminalMockup';
import { useLanguage } from '../context/LanguageContext';
import { Countdown } from './Countdown';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="overview" className="flex-1 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 lg:py-20 relative">
      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="flex flex-col items-start text-left z-10"
      >
        <h1 className="text-[28px] xs:text-[32px] sm:text-[44px] md:text-[52px] leading-[1.1] font-extrabold tracking-tight text-gradient mb-5 break-words max-w-full">
          {t.hero.title1} <br className="hidden sm:block" /> {t.hero.title2}
        </h1>
        
        <p className="text-[15px] sm:text-[16px] text-text-dim max-w-[480px] leading-[1.6] mb-8">
          {t.hero.subtitle}
        </p>
        
        <div className="flex flex-col w-full sm:w-auto gap-6 z-20">
          <Countdown />
          
          {/* 
            [РАЗМЕСТИТЬ ССЫЛКУ НА СКАЧИВАНИЕ ЗДЕСЬ]
            Когда придет время релиза, раскомментируйте этот блок кода и вставьте ссылку 
            на ваше ISO вместо "#".
          */}
          {/*
          <a 
            href="#" 
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white text-[16px] font-bold rounded-xl shadow-[0_0_20px_rgba(0,112,243,0.4)] hover:brightness-110 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,112,243,0.6)] transition-all"
          >
            <Download className="w-5 h-5" />
            {t.hero.download}
          </a>
          */}

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <a 
              href="https://github.com/AdrescorGiti?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-3.5 bg-white/5 border border-white/10 text-white text-[14px] font-semibold rounded-xl hover:bg-white/10 hover:-translate-y-0.5 transition-all text-center"
            >
              <span>{t.hero.docs}</span>
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-[12px] text-text-dim">
          <span className="bg-white/5 px-2 py-1 rounded border border-white/5">{t.hero.kernel}</span>
          <span className="hidden sm:inline mx-1">•</span>
          <span className="bg-white/5 px-2 py-1 rounded border border-white/5">{t.hero.rust}</span>
          <span className="hidden sm:inline mx-1">•</span>
          <span className="bg-white/5 px-2 py-1 rounded border border-white/5">{t.hero.indep}</span>
        </div>
      </motion.div>

      {/* Right Content - Terminal */}
      <motion.div 
        initial={{ opacity: 0, x: 40, rotateY: -15, perspective: 1000 }}
        animate={{ opacity: 1, x: 0, rotateY: 0 }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.3 }}
        className="w-full relative z-10"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute -inset-1 bg-gradient-to-tr from-accent/20 to-purple-500/20 rounded-2xl blur-xl opacity-50"></div>
        <TerminalMockup />
      </motion.div>
    </section>
  );
}
