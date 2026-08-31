import React, { useState } from 'react';
import Sparkle from './Sparkle';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

// left % (center), top offset (px), rotation, width, base z-index
const CARDS = [
  { src: '/images/card_building.png', left: 20, top: 24, rot: -8, w: 250, z: 1 },
  { src: '/images/card_waffle.png', left: 35, top: 10, rot: -3, w: 252, z: 2 },
  { src: '/images/card_pink.png', left: 50, top: 0, rot: 0, w: 256, z: 5 },
  { src: '/images/card_lake.png', left: 65, top: 10, rot: 3, w: 252, z: 3 },
  { src: '/images/card_doorway.png', left: 80, top: 24, rot: 8, w: 250, z: 4 },
];

const SPREAD = 42; // px neighbours move away from the hovered card

const Hero = () => {
  const [hover, setHover] = useState(null);

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
        {CARDS.map((c, i) => {
          let shift = 0;
          let lift = 0;
          if (hover !== null) {
            if (i < hover) shift = -SPREAD;
            else if (i > hover) shift = SPREAD;
            else lift = -18;
          }
          const transform = `translate(calc(-50% + ${shift}px), ${lift}px) rotate(${c.rot}deg)`;
          return (
            <div
              key={i}
              className="hcard"
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              style={{
                left: `${c.left}%`,
                top: c.top,
                width: c.w,
                transform,
                zIndex: hover === i ? 40 : c.z,
                animationDelay: `${Math.abs(i - 2) * 90}ms`,
                '--enter-x': `${(2 - i) * 46}px`,
                '--rot': `${c.rot}deg`,
              }}
            >
              <img src={c.src} alt="" draggable="false" />
            </div>
          );
        })}
      </div>

      <button
        className="btn-terra hero-btn"
        data-testid="hero-get-in-touch-btn"
        onClick={() => window.open('/resume.pdf', '_blank', 'noopener')}
      >
        Get in touch
      </button>
    </section>
  );
};

export default Hero;
