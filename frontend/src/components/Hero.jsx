import React from 'react';
import Sparkle from './Sparkle';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

// left % (center of card), top offset (px), rotation, width, z-class
const CARDS = [
  { src: '/images/card_building.png', left: '15%', top: 116, rot: '-5deg', w: 208, z: 'c-a' },
  { src: '/images/card_waffle.png', left: '30%', top: 32, rot: '-1deg', w: 230, z: 'c-b' },
  { src: '/images/card_lake.png', left: '66%', top: 32, rot: '1deg', w: 230, z: 'c-b' },
  { src: '/images/card_doorway.png', left: '86%', top: 96, rot: '4deg', w: 208, z: 'c-a' },
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

      <div className="env-wrap">
        <img className="env-layer env-back-img" src="/images/envelope.png" alt="" aria-hidden="true" />

        {CARDS.map((c, i) => (
          <div
            key={i}
            className={`hcard ${c.z}`}
            style={{ left: c.left, top: c.top, width: c.w, '--rot': c.rot }}
          >
            <img src={c.src} alt="" draggable="false" />
          </div>
        ))}

        {/* Pink center card (in front of the pocket) */}
        <div className="hcard c-pink" style={{ left: '48%', top: 135, width: 214, '--rot': '3deg' }}>
          <div className="pink-poly">
            <div className="pink-text">Fuelled by curiosity, caffeine and whatever I cook.</div>
            <img src="/images/hero_pancake.jpg" alt="" draggable="false" />
          </div>
        </div>

        {/* Envelope front pocket (clipped copy layered above card bottoms) */}
        <img className="env-layer env-front-img" src="/images/envelope.png" alt="" aria-hidden="true" />

        <button className="btn-terra env-btn" onClick={() => scrollTo('contact')}>
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default Hero;
