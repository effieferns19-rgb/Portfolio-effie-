import React from 'react';
import Sparkle from './Sparkle';
import { LIFE_PHOTOS } from '../data/mock';

// x/y/r = fanned (hover) target, sr = stacked default rotation
const FAN = [
  { x: -430, y: 40, r: -14, sr: -7, z: 1, w: 200, h: 262 },
  { x: -214, y: -2, r: -7, sr: -3.5, z: 3, w: 212, h: 282 },
  { x: 0, y: -22, r: 0, sr: 0, z: 6, w: 224, h: 300 },
  { x: 214, y: -2, r: 7, sr: 3.5, z: 3, w: 212, h: 282 },
  { x: 430, y: 40, r: 14, sr: 7, z: 1, w: 200, h: 262 },
];

const LifeGallery = () => {
  return (
    <section className="life">
      <div style={{ position: 'relative', maxWidth: 1000, margin: '0 auto' }}>
        <Sparkle size={22} style={{ top: 10, left: '22%' }} />
        <Sparkle size={16} style={{ top: 70, left: '18%' }} />
        <Sparkle size={24} style={{ top: 6, right: '24%' }} />
        <Sparkle size={16} style={{ top: 60, right: '18%' }} />
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
