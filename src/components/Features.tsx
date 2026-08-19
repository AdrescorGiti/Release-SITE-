import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: '⚡',
      title: t.features.f1_title,
      description: t.features.f1_desc
    },
    {
      icon: '🦀',
      title: t.features.f2_title,
      description: t.features.f2_desc
    },
    {
      icon: '💻',
      title: t.features.f3_title,
      description: t.features.f3_desc
    },
    {
      icon: '🎨',
      title: t.features.f4_title,
      description: t.features.f4_desc
    }
  ];

  return (
    <section id="architecture" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 py-8 mb-10">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.05, type: "spring", bounce: 0.3 }}
          className="bg-white/[0.03] border border-white/[0.08] p-6 rounded-2xl hover:bg-white/[0.06] hover:border-accent hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(0,112,243,0.2)]"
        >
          <div className="text-[24px] mb-4 text-accent">
            {feature.icon}
          </div>
          <h3 className="text-[15px] font-bold text-white mb-2">{feature.title}</h3>
          <p className="text-[13px] text-text-dim leading-[1.5]">{feature.description}</p>
        </motion.div>
      ))}
    </section>
  );
}
