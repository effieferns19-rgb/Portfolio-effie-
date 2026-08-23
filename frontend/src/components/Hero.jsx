import React from 'react';
import Sparkle from './Sparkle';
import { HERO_PHOTOS } from '../data/mock';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => {
  return (
    <section className="hero grid-bg" id="top">
      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto' }}>
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
        <div className="env-photos">
          {HERO_PHOTOS.map((p, i) =>
            p.type === 'pink' ? (
              <div key={i} className={`polaroid pink-card ${p.cls}`}>
                <span>{p.text}</span>
              </div>
            ) : (
              <div key={i} className={`polaroid ${p.cls}`}>
                <img src={p.src} alt="" />
                {p.cap && <span className={`cap ${p.script ? 'script' : ''}`}>{p.cap}</span>}
              </div>
            )
          )}
        </div>
        <div className="env-pocket">
          <div className="env-front" />
        </div>
        <button className="btn-terra env-btn" onClick={() => scrollTo('contact')}>
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default Hero;
