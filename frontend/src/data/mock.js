// Mock content for Effie's portfolio landing page (frontend-only)

export const NAV = [
  { label: 'Work', target: 'work' },
  { label: 'About me', target: 'about' },
  { label: 'Resume', target: 'timeline' },
];

export const HERO_PHOTOS = [
  { src: '/images/hero_arch.jpg', cls: 'env-p1', cap: '' },
  { src: '/images/hero_icecream.jpg', cls: 'env-p2', cap: 'Crispy edges, soft centres', script: true },
  { type: 'pink', cls: 'env-p3', text: 'Fuelled by curiosity, caffeine and whatever I cook.' },
  { src: '/images/hero_lake.jpg', cls: 'env-p4', cap: 'Always curious to explore', script: true },
  { src: '/images/hero_doorway.jpg', cls: 'env-p5', cap: '' },
];

export const WORK = [
  {
    id: 1,
    img: '/images/proj_industrisalg1.jpg',
    tags: ['Redesign', 'B2B'],
    title: 'Redesigning Industrisalg AS for seamless B2B e-commerce experience.',
  },
  {
    id: 2,
    img: '/images/proj_industrisalg2.jpg',
    tags: ['Redesign', 'B2B'],
    title: 'Redesigning Industrisalg’s B2B interface for seamless experience',
  },
];

export const TIMELINE = [
  {
    badge: '2015 – 2017',
    title: 'BFA Applied Arts, Goa College of Art.',
    desc: 'Built a foundation in graphic design, visual systems, typography and design storytelling.',
    photo: '/images/tl_bfa.jpg',
    caption: "Batch of '21",
  },
  {
    badge: '2021 – 2022',
    title: 'Freelance Graphic Designer',
    desc: "Freelancing raised questions about user needs and behaviour that visual design alone couldn't answer.",
    photo: '/images/tl_poster.jpg',
    caption: 'Research',
  },
  {
    badge: '2022 – 2024',
    title: 'MDes, Human-Centred Design, SMI Bangalore',
    desc: 'Specialised in designing with people, grounded in research.',
    photo: '/images/tl_smi.jpg',
    caption: 'SMI Bengaluru',
  },
];

export const LIFE_PHOTOS = [
  '/images/life_waffle.jpg',
  '/images/life_beach.jpg',
  '/images/life_kayak.jpg',
  '/images/life_tacos.jpg',
  '/images/life_friends.jpg',
];
