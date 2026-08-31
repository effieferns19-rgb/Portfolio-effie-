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
    img: '/images/proj_industrisalg.png',
    figma: 'https://embed.figma.com/proto/ogvkLzjoZdThZE3VZ0PjkH/notion---resume?node-id=2614-5712&scaling=scale-down-width&content-scaling=fixed&page-id=2301%3A2&starting-point-node-id=2863%3A2027&embed-host=share',
    title: 'Redesigning Industrisalg AS for seamless B2B e-commerce experience.',
  },
  {
    id: 2,
    img: '/images/proj_norweh.png',
    figma: 'https://embed.figma.com/proto/ogvkLzjoZdThZE3VZ0PjkH/notion---resume?node-id=2760-1125&scaling=scale-down-width&content-scaling=fixed&page-id=2301%3A2&starting-point-node-id=2863%3A2027&embed-host=share',
    title: 'Transforming Norw’eh into an E-commerce Platform',
  },
  {
    id: 3,
    img: '/images/proj_hotel.png',
    figma: 'https://embed.figma.com/proto/ogvkLzjoZdThZE3VZ0PjkH/notion---resume?node-id=2858-10070&scaling=scale-down-width&content-scaling=fixed&page-id=2301%3A2&starting-point-node-id=2863%3A2027&embed-host=share',
    title: 'Redesigning Hotel Continental for a premium five-star, multi-venue hospitality experience.',
  },
];

export const TIMELINE = [
  {
    badge: '2015 – 2017',
    title: 'BFA Applied Arts, Goa College of Art.',
    desc: 'Built a foundation in graphic design, visual systems, typography and design storytelling.',
    photos: ['/images/tl_bfa.jpg'],
    caption: "Batch of '21",
  },
  {
    badge: '2021 – 2022',
    title: 'Freelance Graphic Designer',
    desc: "Freelancing raised questions about user needs and behaviour that visual design alone couldn't answer",
    photos: [],
    caption: '',
  },
  {
    badge: '2022 – 2024',
    title: 'MDes, Human-Centred Design, SMI Bangalore',
    desc: 'Specialised in designing with people, grounded in research',
    photos: ['/images/tl_research.jpg', '/images/tl_smi.jpg'],
    caption: 'SMI Bengaluru',
  },
  {
    badge: 'Nov 2023',
    title: 'Showcased two projects at India HCI 2023',
    desc: 'Gained insights from keynote speakers and industry tracks hosted by UPES Dehradun',
    photos: ['/images/hci_poster.jpg'],
    caption: 'India HCI 2023',
  },
  {
    badge: 'Jul – Nov 2024',
    title: 'Assistant Researcher, UNESCO State of Education Report 2024',
    desc: "Assisted in research and developing various research methodologies to organize vast information effectively for UNESCO's State of Education Report, focused on arts and culture education",
    photos: [],
    caption: '',
  },
  {
    badge: 'Feb 2025 – Present',
    title: 'UI/UX Designer - Kilowott, Goa',
    desc: 'Currently designing products and experiences, continually building on this foundation',
    photos: ['/images/kw_team.jpg'],
    caption: 'Design team, KW',
  },
];

export const LIFE_PHOTOS = [
  '/images/life_waffle.jpg',
  '/images/life_beach.jpg',
  '/images/life_kayak.jpg',
  '/images/life_tacos.jpg',
  '/images/life_friends.jpg',
];
