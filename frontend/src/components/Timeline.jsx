import React from 'react';
import { TIMELINE } from '../data/mock';

const Timeline = () => {
  return (
    <section className="timeline grid-bg" id="timeline">
      <div className="tl-head">
        <h2>Design journey so far</h2>
        <p className="tl-desc">
          From a <b>BFA to designing human-centred experiences —</b> here’s the path that shaped how I think, research, and design.
        </p>
      </div>

      {/* Desktop curved dotted path */}
      <div className="tl-track">
        <svg className="tl-svg" viewBox="0 0 1200 620" preserveAspectRatio="none">
          <path
            className="tl-dash"
            d="M -20 250 C 180 250 200 250 260 250 C 420 250 430 560 620 560 C 850 560 820 300 1040 300 C 1180 300 1220 300 1260 300"
          />
        </svg>

        <span className="tl-dot" style={{ left: 258, top: 244 }} />
        <span className="tl-dot soft" style={{ left: 614, top: 554 }} />
        <span className="tl-dot soft" style={{ left: 1034, top: 294 }} />

        {/* Node 1 - BFA */}
        <div className="tl-node" style={{ left: 290, top: 190 }}>
          <span className="tl-badge">{TIMELINE[0].badge}</span>
          <h4>{TIMELINE[0].title}</h4>
          <p>{TIMELINE[0].desc}</p>
        </div>
        <div className="tl-photo" style={{ left: 40, top: 300, width: 190, height: 210 }}>
          <img src={TIMELINE[0].photo} alt="" />
          <span className="cap">{TIMELINE[0].caption}</span>
        </div>

        {/* Node 2 - Freelance */}
        <div className="tl-node" style={{ left: 604, top: 400, textAlign: 'center', width: 240, marginLeft: -20 }}>
          <span className="tl-badge">{TIMELINE[1].badge}</span>
          <h4>{TIMELINE[1].title}</h4>
          <p>{TIMELINE[1].desc}</p>
        </div>

        {/* Node 3 - MDes */}
        <div className="tl-node" style={{ left: 830, top: 150 }}>
          <span className="tl-badge">{TIMELINE[2].badge}</span>
          <h4>{TIMELINE[2].title}</h4>
          <p>{TIMELINE[2].desc}</p>
        </div>
        <div className="tl-photo" style={{ left: 590, top: 60, width: 190, height: 190, transform: 'rotate(-4deg)' }}>
          <img src={TIMELINE[2].photo} alt="" />
          <span className="cap">{TIMELINE[2].caption}</span>
        </div>
      </div>

      {/* Mobile stacked */}
      <div className="tl-mobile">
        {TIMELINE.map((t, i) => (
          <div className="tlm-item" key={i}>
            <div className="tlm-photo">
              <img src={t.photo} alt="" />
            </div>
            <div>
              <span className="tl-badge">{t.badge}</span>
              <h4 style={{ fontFamily: 'var(--serif)', fontWeight: 700, color: 'var(--salmon)', margin: '10px 0 6px', fontSize: 21 }}>{t.title}</h4>
              <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: '#6a6459', margin: 0, lineHeight: 1.5 }}>{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
