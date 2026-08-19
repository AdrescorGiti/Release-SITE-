import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Download, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <>
      <nav className="h-[80px] flex items-center justify-between border-b border-white/[0.05] relative z-50">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="G OS Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(0,112,243,0.8)]" />
          <span className="text-white font-extrabold text-[20px] tracking-tight hidden sm:block">G OS</span>
          <div className="px-2 py-0.5 rounded border border-accent bg-accent/10 flex items-center justify-center ml-1 sm:ml-2">
            <span className="text-[10px] font-mono text-accent uppercase tracking-wider">v0.7.2 Beta</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 text-[14px] text-text-dim">
          <a href="#architecture" className="hover:text-white transition-colors duration-200">{t.nav.arch}</a>
          <a href="#gvalli-ecosystem" className="hover:text-white transition-colors duration-200">{t.nav.ecosystem}</a>
          <a href="#community" className="hover:text-white transition-colors duration-200">{t.nav.community}</a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-text-dim hover:text-white transition-colors text-[12px] font-semibold uppercase"
          >
            <Globe className="w-3.5 h-3.5" />
            {language}
          </button>
          
          <a 
            href="https://github.com/AdrescorGiti?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white text-[14px] font-semibold rounded-md hover:bg-white/10 transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-text-dim hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-[80px] left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-white/[0.05] z-40 px-6 py-6 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4 text-[16px] text-text-dim">
              <a href="#architecture" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">{t.nav.arch}</a>
              <a href="#gvalli-ecosystem" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">{t.nav.ecosystem}</a>
              <a href="#community" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">{t.nav.community}</a>
            </div>
            <div className="h-px bg-white/[0.05] w-full" />
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => { setLanguage(language === 'en' ? 'ru' : 'en'); setIsMobileMenuOpen(false); }}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 text-white text-[14px] font-semibold rounded-md hover:bg-white/10 transition-colors w-full uppercase"
              >
                <Globe className="w-4 h-4" />
                Language: {language === 'en' ? 'RU' : 'EN'}
              </button>
              <a 
                href="https://github.com/AdrescorGiti?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 text-white text-[14px] font-semibold rounded-md hover:bg-white/10 transition-colors w-full"
              >
                <Github className="w-4 h-4" />
                Explore Source
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
