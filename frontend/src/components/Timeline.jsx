import React, { useState, useEffect, useRef } from 'react';
import { TIMELINE } from '../data/mock';

const Timeline = () => {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = scrollRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? scrolled / total : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Reveal order (matches reference): BFA -> MDes -> Freelance
  const on = (threshold) => (progress >= threshold ? 'active' : '');
  const bfa = on(0.1);
  const mdes = on(0.42);
  const free = on(0.72);

  return (
    <section className="timeline" id="timeline">
      <div className="tl-scroll" ref={scrollRef}>
        <div className="tl-sticky grid-bg">
          <div className="tl-inner">
            <div className="tl-head">
              <h2>Design journey so far</h2>
              <p className="tl-desc">
                From a <b>BFA to designing human-centred experiences —</b> here’s the path that shaped how I think, research, and design.
              </p>
            </div>

            <div className="tl-track">
              <svg className="tl-svg" viewBox="0 0 1200 620" preserveAspectRatio="none">
                <path
                  className="tl-dash"
                  d="M -20 250 C 180 250 200 250 260 250 C 420 250 430 560 620 560 C 850 560 820 300 1040 300 C 1180 300 1220 300 1260 300"
                />
              </svg>

              <span className={`tl-dot ${bfa}`} style={{ left: 258, top: 244 }} />
              <span className={`tl-dot ${free}`} style={{ left: 614, top: 554 }} />
              <span className={`tl-dot ${mdes}`} style={{ left: 1034, top: 294 }} />

              {/* BFA */}
              <div className={`tl-node ${bfa}`} style={{ left: 290, top: 190 }}>
                <span className="tl-badge">{TIMELINE[0].badge}</span>
                <h4>{TIMELINE[0].title}</h4>
                <p>{TIMELINE[0].desc}</p>
              </div>
              <div className={`tl-photo ${bfa}`} style={{ left: 40, top: 300, width: 190, height: 210 }}>
                <img src={TIMELINE[0].photo} alt="" />
                <span className="cap">{TIMELINE[0].caption}</span>
              </div>

              {/* Freelance */}
              <div className={`tl-node ${free}`} style={{ left: 604, top: 400, textAlign: 'center', width: 240, marginLeft: -20 }}>
                <span className="tl-badge">{TIMELINE[1].badge}</span>
                <h4>{TIMELINE[1].title}</h4>
                <p>{TIMELINE[1].desc}</p>
              </div>

              {/* MDes */}
              <div className={`tl-node ${mdes}`} style={{ left: 830, top: 150 }}>
                <span className="tl-badge">{TIMELINE[2].badge}</span>
                <h4>{TIMELINE[2].title}</h4>
                <p>{TIMELINE[2].desc}</p>
              </div>
              <div className={`tl-photo ${mdes}`} style={{ left: 590, top: 60, width: 190, height: 190, transform: 'rotate(-4deg)' }}>
                <img src={TIMELINE[2].photo} alt="" />
                <span className="cap">{TIMELINE[2].caption}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile stacked */}
      <div className="tl-mobile grid-bg">
        {TIMELINE.map((t, i) => (
          <div className="tlm-item" key={i}>
            <div className="tlm-photo">
              <img src={t.photo} alt="" />
            </div>
            <div>
              <span className="tl-badge active">{t.badge}</span>
              <h4 style={{ fontFamily: 'var(--serif)', fontWeight: 700, color: 'var(--terra)', margin: '10px 0 6px', fontSize: 21 }}>{t.title}</h4>
              <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: '#6a6459', margin: 0, lineHeight: 1.5 }}>{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
