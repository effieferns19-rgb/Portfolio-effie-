import React from 'react';
import { LIFE_PHOTOS } from '../data/mock';

// x/y/r = fanned (hover) target, sr = stacked default rotation
const FAN = [
  { x: -335, y: 24, r: -10, sr: -6, z: 1, w: 200, h: 262 },
  { x: -170, y: 6, r: -5, sr: -3, z: 3, w: 212, h: 282 },
  { x: 0, y: -8, r: 0, sr: 0, z: 6, w: 224, h: 300 },
  { x: 170, y: 6, r: 5, sr: 3, z: 3, w: 212, h: 282 },
  { x: 335, y: 24, r: 10, sr: 6, z: 1, w: 200, h: 262 },
];

const LifeGallery = () => {
  return (
    <section className="life">
      <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto' }}>
        <h2>
          Somewhere between work<br />
          <span className="hl">and everything else</span>
        </h2>
      </div>
      <div className="life-fan">
        {FAN.map((f, i) => (
          <div
            key={i}
            className="fan-card"
            style={{
              width: f.w,
              height: f.h,
              zIndex: f.z,
              '--x': `${f.x}px`,
              '--y': `${f.y}px`,
              '--r': `${f.r}deg`,
              '--sr': `${f.sr}deg`,
            }}
          >
            <img src={LIFE_PHOTOS[i]} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LifeGallery;
