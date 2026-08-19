import { motion } from 'motion/react';
import { Github, Send, Video } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Community() {
  const { t } = useLanguage();

  const socials = [
    {
      name: "Telegram",
      icon: <Send className="w-5 h-5" />,
      url: "https://t.me/GOS_Tux",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/AdrescorGiti?tab=repositories",
    },
    {
      name: "TikTok",
      icon: <Video className="w-5 h-5" />,
      url: "https://www.tiktok.com/@gi_baser?_r=1&_t=ZS-98xE6hCJagC",
    }
  ];

  return (
    <section id="community" className="py-12 sm:py-24 border-t border-white/[0.05]">
      <div className="max-w-3xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        >
          <div className="inline-flex items-center justify-center px-3 py-1 rounded bg-accent/10 border border-accent text-accent font-mono text-[10px] uppercase mb-6 shadow-[0_0_15px_rgba(0,112,243,0.3)]">
            {t.community.badge}
          </div>
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-extrabold text-white mb-4 tracking-tight leading-[1.1] whitespace-pre-line">{t.community.title}</h2>
          <p className="text-text-dim text-[15px] sm:text-[16px] mb-12 max-w-xl mx-auto leading-relaxed">
            {t.community.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 justify-center">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", bounce: 0.4 }}
              className="flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-accent hover:-translate-y-2 transition-all duration-300 text-text-dim hover:text-white shadow-lg hover:shadow-[0_10px_30px_rgba(0,112,243,0.3)]"
            >
              <div className="text-accent mb-1 drop-shadow-[0_0_8px_rgba(0,112,243,0.5)]">
                {social.icon}
              </div>
              <span className="font-semibold text-[13px]">{social.name}</span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
