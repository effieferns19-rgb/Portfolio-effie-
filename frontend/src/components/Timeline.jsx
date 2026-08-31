import React, { useState, useEffect, useRef } from 'react';
import { TIMELINE } from '../data/mock';

const STRIP_W = 2200;
const STRIP_H = 640;
const YOFF = 0;

// Layout of each milestone inside the 2200 x 640 strip
const POS = [
  { dot: { x: 250, y: 250 }, node: { x: 295, y: 285, w: 250, align: 'left' }, anchor: 250,
    photos: [{ x: 95, y: 300, w: 150, h: 180, rot: -3 }] },
  { dot: { x: 640, y: 205 }, node: { x: 515, y: 238, w: 250, align: 'center' }, anchor: 640,
    photos: [] },
  { dot: { x: 1040, y: 232 }, node: { x: 1035, y: 268, w: 250, align: 'left' }, anchor: 1040,
    photos: [{ x: 855, y: 280, w: 145, h: 172, rot: -3 }] },
  { dot: { x: 1440, y: 220 }, node: { x: 1300, y: 255, w: 280, align: 'center' }, anchor: 1440,
    photos: [] },
  { dot: { x: 1900, y: 240 }, node: { x: 1900, y: 278, w: 210, align: 'left' }, anchor: 1900,
    photos: [{ x: 1730, y: 290, w: 145, h: 172, rot: -3 }] },
];

const PATH_D =
  'M -60 232 C 70 244 160 250 250 250 C 380 250 470 205 640 205 ' +
  'C 820 205 890 232 1040 232 C 1200 232 1300 220 1440 220 ' +
  'C 1620 220 1750 240 1900 240 C 2010 240 2090 246 2260 250';

const Timeline = () => {
  const scrollRef = useRef(null);
  const pathRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [vw, setVw] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440);
  const [fracs, setFracs] = useState(null);

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

  // Measure where each dot sits along the path (as a fraction of total length)
  useEffect(() => {
    const path = pathRef.current;
    if (!path || !path.getTotalLength) return;
    const total = path.getTotalLength();
    const samples = 900;
    const res = POS.map((p) => {
      let best = Infinity;
      let bestLen = 0;
      for (let s = 0; s <= samples; s++) {
        const len = (s / samples) * total;
        const pt = path.getPointAtLength(len);
        const d = (pt.x - p.dot.x) ** 2 + (pt.y - p.dot.y) ** 2;
        if (d < best) { best = d; bestLen = len; }
      }
      return bestLen / total;
    });
    setFracs(res);
  }, []);

  const maxShift = Math.max(STRIP_W - vw, 0);
  const tx = -progress * maxShift;
  // A milestone is "reached" once the drawing line passes its dot; it then stays at full opacity.
  const reached = (i) => {
    const th = fracs ? fracs[i] - 0.01 : POS[i].anchor / STRIP_W;
    return progress >= th;
  };

  return (
    <section className="timeline" id="timeline">
      <div className="tl-scroll" ref={scrollRef}>
        <div className="tl-sticky">
          <div className="tl-fixedhead">
            <h2>Design journey so far</h2>
            <p className="tl-desc">
              From a <b>BFA to designing human-centred experiences —</b> here’s the path that shaped how I think, research, and design.
            </p>
          </div>

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
              <path ref={pathRef} className="tl-dash" d={PATH_D} transform={`translate(0, ${YOFF})`} mask="url(#tlDraw)" />
            </svg>

            {TIMELINE.map((t, i) => {
              const p = POS[i];
              const on = reached(i) ? 'on' : '';
              return (
                <React.Fragment key={i}>
                  <span className={`tl-dot ${on}`} style={{ left: p.dot.x - 7, top: p.dot.y + YOFF - 7 }} />
                  {p.photos.map((ph, j) => (
                    <div
                      key={j}
                      className={`tl-photo ${on}`}
                      style={{ left: ph.x, top: ph.y + YOFF, width: ph.w, height: ph.h, transform: `rotate(${ph.rot}deg)`, zIndex: ph.peek ? 1 : 2 }}
                    >
                      <img src={t.photos[j]} alt="" />
                      {!ph.peek && t.caption && <span className="cap">{t.caption}</span>}
                    </div>
                  ))}
                  <div
                    className={`tl-node ${on}`}
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
