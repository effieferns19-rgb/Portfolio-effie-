import React from 'react';
import Sparkle from './Sparkle';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

// left % (center of card), top offset (px), rotation, width, z-class
const CARDS = [
  { src: '/images/card_building.png', left: '23%', top: 58, rot: '-7deg', w: 196, z: 'c-a' },
  { src: '/images/card_waffle.png', left: '37%', top: 24, rot: '-3deg', w: 205, z: 'c-b' },
  { src: '/images/card_lake.png', left: '63%', top: 24, rot: '4deg', w: 205, z: 'c-b' },
  { src: '/images/card_doorway.png', left: '77%', top: 58, rot: '8deg', w: 196, z: 'c-a' },
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
        <div className="env-back" />

        {CARDS.map((c, i) => (
          <div
            key={i}
            className={`hcard ${c.z}`}
            style={{ left: c.left, top: c.top, width: c.w, '--rot': c.rot }}
          >
            <img src={c.src} alt="" draggable="false" />
          </div>
        ))}

        {/* Envelope front pocket */}
        <svg className="env-front" viewBox="0 0 1000 320" preserveAspectRatio="none" aria-hidden="true">
          <path
            className="env-pocket"
            d="M8 60 C 8 36 26 28 58 28 L 210 28 C 330 28 350 58 500 58 C 650 58 670 28 790 28 L 942 28 C 974 28 992 36 992 60 L 992 286 C 992 310 974 318 946 318 L 54 318 C 26 318 8 310 8 286 Z"
          />
          <path
            className="env-stitch"
            d="M24 64 C 24 46 38 40 58 40 L 212 40 C 332 40 352 70 500 70 C 648 70 668 40 788 40 L 942 40 C 962 40 976 46 976 64 L 976 284 C 976 300 964 306 946 306 L 54 306 C 36 306 24 300 24 284 Z"
          />
        </svg>

        {/* Pink center card (in front of the pocket) */}
        <div className="hcard c-pink" style={{ left: '50%', top: 96, width: 194, '--rot': '1deg' }}>
          <div className="pink-poly">
            <div className="pink-text">Fuelled by curiosity, caffeine and whatever I cook.</div>
            <img src="/images/hero_pancake.jpg" alt="" draggable="false" />
          </div>
        </div>

        <button className="btn-terra env-btn" onClick={() => scrollTo('contact')}>
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default Hero;
