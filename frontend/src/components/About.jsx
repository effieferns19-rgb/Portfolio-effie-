import React, { useEffect, useRef, useState } from 'react';

// Paragraph broken into tokens. type: word | cap | img
const TOKENS = [
  { t: 'A' }, { t: 'designer' }, { t: 'inspired' }, { t: 'by' }, { t: 'stories,' },
  { t: 'places,' }, { t: 'and' }, { t: 'people.' }, { t: 'Whether' }, { t: "I'm" },
  { t: 'exploring' }, { t: 'caf\u00e9s' }, { img: '/images/about_cafe.jpg' },
  { t: 'traveling' }, { t: 'or' }, { t: 'learning' }, { t: 'a' }, { t: 'new' }, { t: 'hobby,' },
  { t: "I'm" }, { t: 'always' }, { t: 'collecting' }, { t: 'ideas.' },
  { t: 'That' }, { t: 'CURIOSITY', cap: true }, { t: 'drives' }, { img: '/images/life_kayak.jpg' },
  { t: 'everything' }, { t: 'I' }, { t: 'create.' },
  { t: 'I' }, { t: 'love' }, { t: 'designing' }, { t: 'thoughtful,' }, { t: 'engaging' },
  { t: 'concepts' }, { t: 'because' }, { t: 'I' }, { t: 'BELIEVE', cap: true },
  { img: '/images/craft_bakes.jpg' }, { t: 'STORYTELLING', cap: true },
  { t: 'is' }, { t: 'the' }, { t: 'secret' }, { t: 'ingredient' }, { t: 'to' }, { t: 'a' }, { t: 'great' }, { t: 'design!' },
];

const About = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const wordCount = TOKENS.filter((x) => x.t).length;

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress: 0 when para top at 80% vh, 1 when para bottom at 30% vh
      const start = vh * 0.8;
      const end = vh * 0.25;
      const p = (start - rect.top) / (start - end + rect.height);
      const clamped = Math.max(0, Math.min(1, p));
      setActive(Math.round(clamped * wordCount));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [wordCount]);

  let wi = 0;
  return (
    <section className="about grid-bg" id="about">
      <div className="about-role-wrap">
        <h2>Hello! I’m Effie</h2>
        <div className="role">UI/ UX Designer</div>
      </div>
      <p className="about-para" ref={ref}>
        {TOKENS.map((tok, i) => {
          if (tok.img) {
            return <img key={i} className="about-inline" src={tok.img} alt="" />;
          }
          const idx = wi++;
          const on = idx < active;
          return (
            <span key={i} className={`w ${tok.cap ? 'cap' : ''} ${on ? 'on' : ''}`}>
              {tok.t}{' '}
            </span>
          );
        })}
      </p>
    </section>
  );
};

export default About;
