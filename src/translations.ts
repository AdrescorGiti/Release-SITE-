export type Language = 'en' | 'ru';

export const translations = {
  en: {
    nav: {
      arch: 'Architecture',
      ecosystem: 'GValli Ecosystem',
      benchmarks: 'Benchmarks',
      community: 'Community',
      getIso: 'Get ISO'
    },
    hero: {
      badge: 'Engineered for Raw Performance',
      title1: 'The Independent',
      title2: 'Linux Meta-Distribution',
      subtitle: 'Engineered for raw performance. Built from scratch with runit init, custom kernel optimizations, and a lightning-fast Rust-native toolkit.',
      download: 'Download G OS 0.7.2',
      docs: 'Documentation',
      kernel: 'Kernel 6.16.x',
      rust: 'Built with Rust',
      indep: 'Independent Base'
    },
    timer: {
      title: 'Release In:',
      days: 'Days',
      hours: 'Hours',
      mins: 'Mins',
      secs: 'Secs',
      released: 'Available Now'
    },
    features: {
      title: 'Core Architecture',
      desc: 'Engineered from the ground up to strip away bloat and maximize computational efficiency.',
      f1_title: 'runit Init Engine',
      f1_desc: 'Instant boot times and deterministic service management without systemd overhead.',
      f2_title: 'GValli Package Manager',
      f2_desc: 'Rust-powered speed with static JSON indexing and native .gpkg compilation.',
      f3_title: 'Native Tooling',
      f3_desc: 'Custom security integrity suites and diagnostic centers built for G OS core.',
      f4_title: 'Tailored Flavors',
      f4_desc: 'Optimized KDE Plasma, Budgie, and MATE environments tuned for minimal latency.'
    },
    ecosystem: {
      title: 'The Native Tooling Ecosystem',
      desc: "We didn't just build an operating system; we built the tools to manage it perfectly. Every core utility in G OS is designed to be fast, predictable, and transparent.",
      t1_title: 'GValli CLI',
      t1_desc: 'The core package management utility. Written in Rust for memory safety and parallelized dependency resolution.',
      t2_title: 'GOS Toolkit',
      t2_desc: 'Modern system control panel and security integrity suite. Manage services, networking, and firewalls centrally.',
      t3_title: 'gfetch Integration',
      t3_desc: 'Custom system information tool embedded directly into the terminal lifecycle, providing instant diagnostic views.',
      core_title: 'GValli Core',
      core_desc: 'Hybrid package ecosystem managing native .gpkg repositories seamlessly.'
    },
    community: {
      badge: 'Join the Movement',
      title: 'Built by Developers,\nFor Developers.',
      desc: 'G OS is an independent, community-driven project architected by Giti Adrescor. Follow the journey, contribute to the source, and join our growing community of enthusiasts.'
    },
    footer: {
      copyright: 'Copyright © 2026 G OS Project. Architected by Giti Adrescor.',
      sys_status: 'System Status:',
      repo_online: 'Live Repo: Online',
      build_iso: 'Build Service: Compiling ISO...'
    }
  },
  ru: {
    nav: {
      arch: 'Архитектура',
      ecosystem: 'Экосистема GValli',
      benchmarks: 'Бенчмарки',
      community: 'Сообщество',
      getIso: 'Скачать ISO'
    },
    hero: {
      badge: 'Создано для максимальной производительности',
      title1: 'Независимый',
      title2: 'Linux Мета-Дистрибутив',
      subtitle: 'Разработан для высочайшей производительности. Создан с нуля на базе runit, с оптимизированным ядром и молниеносным инструментарием на Rust.',
      download: 'Скачать G OS 0.7.2',
      docs: 'Документация',
      kernel: 'Ядро 6.16.x',
      rust: 'Написано на Rust',
      indep: 'Независимая база'
    },
    timer: {
      title: 'Релиз через:',
      days: 'Дней',
      hours: 'Часов',
      mins: 'Минут',
      secs: 'Секунд',
      released: 'Уже доступно'
    },
    features: {
      title: 'Архитектура ядра',
      desc: 'Спроектировано с нуля для устранения лишнего кода и максимизации вычислительной эффективности.',
      f1_title: 'Инициализация runit',
      f1_desc: 'Мгновенная загрузка и детерминированное управление службами без перегруженности systemd.',
      f2_title: 'Пакетный менеджер GValli',
      f2_desc: 'Скорость языка Rust со статической JSON-индексацией и нативной компиляцией .gpkg.',
      f3_title: 'Нативные утилиты',
      f3_desc: 'Собственные комплексы безопасности и центры диагностики, встроенные в ядро G OS.',
      f4_title: 'Настроенные оболочки',
      f4_desc: 'Оптимизированные сборки KDE Plasma, Budgie и MATE с минимальной задержкой.'
    },
    ecosystem: {
      title: 'Экосистема нативных инструментов',
      desc: "Мы не просто создали ОС; мы разработали идеальные инструменты для управления ею. Каждая утилита в G OS спроектирована для скорости и прозрачности.",
      t1_title: 'GValli CLI',
      t1_desc: 'Главная утилита управления пакетами. Написана на Rust для безопасности памяти и параллельного разрешения зависимостей.',
      t2_title: 'GOS Toolkit',
      t2_desc: 'Современная панель управления системой. Централизованное управление службами, сетью и фаерволами.',
      t3_title: 'Интеграция gfetch',
      t3_desc: 'Кастомная утилита системной информации, встроенная прямо в жизненный цикл терминала.',
      core_title: 'GValli Core',
      core_desc: 'Гибридная экосистема пакетов для бесшовного управления нативными репозиториями .gpkg.'
    },
    community: {
      badge: 'Присоединяйся к движению',
      title: 'Создано разработчиками,\nДля разработчиков.',
      desc: 'G OS — это независимый проект, созданный архитектором Giti Adrescor. Следите за развитием, вносите вклад в код и присоединяйтесь к нам.'
    },
    footer: {
      copyright: 'Copyright © 2026 Проект G OS. Архитектор: Giti Adrescor.',
      sys_status: 'Статус систем:',
      repo_online: 'Репозиторий: Онлайн',
      build_iso: 'Билд-сервер: Создание ISO...'
    }
  }
};
