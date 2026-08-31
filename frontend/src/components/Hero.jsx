import React from 'react';
import Sparkle from './Sparkle';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

// left % (center of card), top offset (px), rotation, width, z-class
const CARDS = [
  { src: '/images/card_building.png', left: '20%', top: 24, rot: '-8deg', w: 250, z: 'c1' },
  { src: '/images/card_waffle.png', left: '35%', top: 10, rot: '-3deg', w: 252, z: 'c2' },
  { src: '/images/card_pink.png', left: '50%', top: 0, rot: '0deg', w: 256, z: 'c5' },
  { src: '/images/card_lake.png', left: '65%', top: 10, rot: '3deg', w: 252, z: 'c3' },
  { src: '/images/card_doorway.png', left: '80%', top: 24, rot: '8deg', w: 250, z: 'c4' },
];

const Hero = () => {
  return (
    <section className="hero grid-bg" id="top">
      <div className="hero-head">
        <Sparkle size={26} style={{ top: 30, left: '22%' }} />
        <Sparkle size={16} style={{ top: 150, left: '17%' }} />
        <Sparkle size={30} style={{ top: 40, right: '20%' }} />
        <Sparkle size={18} style={{ top: 120, right: '15%' }} />
        <p className="welcome">Welcome to Effie’s</p>
        <h1>Design Journey</h1>
        <p className="sub">
          UI/UX designer by profession, and always hungry for good design, good food, and a good story.
        </p>
      </div>

      <div className="cards-row">
        {CARDS.map((c, i) => (
          <div
            key={i}
            className={`hcard ${c.z}`}
            style={{ left: c.left, top: c.top, width: c.w, '--rot': c.rot }}
          >
            <img src={c.src} alt="" draggable="false" />
          </div>
        ))}
      </div>

      <button className="btn-terra hero-btn" onClick={() => scrollTo('contact')}>
        Get in touch
      </button>
    </section>
  );
};

export default Hero;
