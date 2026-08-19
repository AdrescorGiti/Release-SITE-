import { motion } from 'motion/react';
import { Terminal, Shield, Wrench } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Ecosystem() {
  const { t } = useLanguage();

  const tools = [
    {
      icon: <Terminal className="w-5 h-5 text-accent" />,
      title: t.ecosystem.t1_title,
      description: t.ecosystem.t1_desc
    },
    {
      icon: <Shield className="w-5 h-5 text-accent" />,
      title: t.ecosystem.t2_title,
      description: t.ecosystem.t2_desc
    },
    {
      icon: <Wrench className="w-5 h-5 text-accent" />,
      title: t.ecosystem.t3_title,
      description: t.ecosystem.t3_desc
    }
  ];

  return (
    <section id="gvalli-ecosystem" className="py-12 sm:py-20 border-t border-white/[0.05]">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
        >
          <h2 className="text-[28px] sm:text-[32px] md:text-[38px] font-extrabold text-white mb-4 tracking-tight leading-[1.2]">{t.ecosystem.title}</h2>
          <p className="text-text-dim mb-8 text-[15px] sm:text-[16px] leading-relaxed max-w-xl">
            {t.ecosystem.desc}
          </p>
          
          <div className="space-y-4 max-w-xl">
            {tools.map((tool, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:border-accent/50 hover:bg-white/[0.06] hover:translate-x-2 transition-all duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  {tool.icon}
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-white mb-1">{tool.title}</h4>
                  <p className="text-text-dim text-[13px] sm:text-[14px] leading-relaxed">{tool.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="relative w-full mt-8 lg:mt-0"
        >
          <div className="aspect-square max-w-[340px] sm:max-w-sm mx-auto relative bg-[rgba(10,10,15,0.6)] border border-white/10 rounded-[2rem] backdrop-blur-md p-8 flex flex-col items-center justify-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,112,243,0.3)]">
             <div className="w-20 h-20 rounded-full border-2 border-accent flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,112,243,0.3)] bg-accent/5">
               <Terminal className="w-10 h-10 text-accent drop-shadow-[0_0_15px_rgba(0,112,243,0.8)]" />
             </div>
             <h3 className="text-[22px] font-bold text-white mb-3">{t.ecosystem.core_title}</h3>
             <p className="text-text-dim text-[14px] max-w-[240px] leading-relaxed">
               {t.ecosystem.core_desc}
             </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
