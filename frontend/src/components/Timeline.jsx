import React, { useState, useEffect, useRef } from 'react';
import { TIMELINE } from '../data/mock';

const STRIP_W = 2500;
const STRIP_H = 760;
const YOFF = 48;

// Layout of each milestone inside the 2400 x 720 strip
const POS = [
  { dot: { x: 330, y: 300 }, node: { x: 352, y: 300, w: 230, align: 'left' }, anchor: 440,
    photos: [{ x: 150, y: 330, w: 150, h: 178, rot: -3 }] },
  { dot: { x: 780, y: 520 }, node: { x: 660, y: 545, w: 250, align: 'center' }, anchor: 795,
    photos: [] },
  { dot: { x: 1180, y: 330 }, node: { x: 1205, y: 232, w: 220, align: 'left' }, anchor: 1300,
    photos: [{ x: 995, y: 300, w: 178, h: 128, rot: 4, peek: true }, { x: 985, y: 178, w: 170, h: 210, rot: -3 }] },
  { dot: { x: 1440, y: 270 }, node: { x: 1360, y: 430, w: 240, align: 'center' }, anchor: 1480,
    photos: [{ x: 1360, y: 150, w: 150, h: 200, rot: 3 }] },
  { dot: { x: 1760, y: 630 }, node: { x: 1720, y: 330, w: 250, align: 'center' }, anchor: 1855,
    photos: [] },
  { dot: { x: 2130, y: 300 }, node: { x: 2200, y: 160, w: 210, align: 'left' }, anchor: 2300,
    photos: [{ x: 1990, y: 130, w: 158, h: 190, rot: -2 }] },
];

const PATH_D =
  'M -60 250 C 120 250 210 300 330 300 C 470 300 560 150 480 150 C 370 150 400 560 780 520 ' +
  'C 1060 490 980 330 1180 330 C 1320 330 1370 160 1440 270 C 1520 430 1760 250 1650 560 ' +
  'C 1600 690 1830 690 1760 630 C 1980 560 2000 300 2130 300 C 2290 300 2380 500 2310 570 ' +
  'C 2250 630 2500 560 2560 380';

const Timeline = () => {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [vw, setVw] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440);

  useEffect(() => {
    const onScroll = () => {
      const el = scrollRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? scrolled / total : 0);
      setVw(window.innerWidth);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const maxShift = Math.max(STRIP_W - vw, 0);
  const tx = -progress * maxShift;
  const focusIndex = Math.min(Math.max(Math.round(progress * (POS.length - 1)), 0), POS.length - 1);

  return (
    <section className="timeline" id="timeline">
      <div className="tl-scroll" ref={scrollRef}>
        <div className="tl-sticky">
          <div className="tl-strip" style={{ transform: `translate3d(${tx}px,0,0)` }}>
            <svg className="tl-strip-svg" viewBox={`0 0 ${STRIP_W} ${STRIP_H}`} preserveAspectRatio="none">
              <defs>
                <mask id="tlDraw" maskUnits="userSpaceOnUse" x="0" y="0" width={STRIP_W} height={STRIP_H}>
                  <path
                    d={PATH_D}
                    transform={`translate(0, ${YOFF})`}
                    fill="none"
                    stroke="#fff"
                    strokeWidth="30"
                    strokeLinecap="round"
                    pathLength="1"
                    strokeDasharray={`${Math.max(progress, 0.0001)} 1`}
                  />
                </mask>
              </defs>
              <path className="tl-dash-bg" d={PATH_D} transform={`translate(0, ${YOFF})`} />
              <path className="tl-dash" d={PATH_D} transform={`translate(0, ${YOFF})`} mask="url(#tlDraw)" />
            </svg>

            <div className="tl-strip-head">
              <h2>Design journey so far</h2>
              <p className="tl-desc">
                From a <b>BFA to designing human-centred experiences —</b> here’s the path that shaped how I think, research, and design.
              </p>
            </div>

            {TIMELINE.map((t, i) => {
              const p = POS[i];
              const foc = focusIndex === i ? 'focus' : '';
              return (
                <React.Fragment key={i}>
                  <span className="tl-dot" style={{ left: p.dot.x - 7, top: p.dot.y + YOFF - 7 }} />
                  {p.photos.map((ph, j) => (
                    <div
                      key={j}
                      className={`tl-photo ${foc}`}
                      style={{ left: ph.x, top: ph.y + YOFF, width: ph.w, height: ph.h, transform: `rotate(${ph.rot}deg)`, zIndex: ph.peek ? 1 : 2 }}
                    >
                      <img src={t.photos[j]} alt="" />
                      {!ph.peek && t.caption && <span className="cap">{t.caption}</span>}
                    </div>
                  ))}
                  <div
                    className={`tl-node ${foc}`}
                    style={{ left: p.node.x, top: p.node.y + YOFF, width: p.node.w, textAlign: p.node.align }}
                  >
                    <span className="tl-badge">{t.badge}</span>
                    <h4>{t.title}</h4>
                    <p>{t.desc}</p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile stacked */}
      <div className="tl-mobile grid-bg">
        <div className="tl-head">
          <h2>Design journey so far</h2>
          <p className="tl-desc">
            From a <b>BFA to designing human-centred experiences —</b> here’s the path that shaped how I think, research, and design.
          </p>
        </div>
        {TIMELINE.map((t, i) => (
          <div className="tlm-item" key={i}>
            {t.photos[0] ? (
              <div className="tlm-photo"><img src={t.photos[0]} alt="" /></div>
            ) : (
              <div className="tlm-photo tlm-nophoto" />
            )}
            <div>
              <span className="tl-badge active">{t.badge}</span>
              <h4 style={{ fontFamily: 'var(--serif)', fontWeight: 700, color: 'var(--terra)', margin: '10px 0 6px', fontSize: 20 }}>{t.title}</h4>
              <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: '#6a6459', margin: 0, lineHeight: 1.5 }}>{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
