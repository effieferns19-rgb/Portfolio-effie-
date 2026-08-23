import React from 'react';
import Sparkle from './Sparkle';
import { LIFE_PHOTOS } from '../data/mock';

const FAN = [
  { left: '10%', w: 190, h: 250, rot: -14, z: 1 },
  { left: '27%', w: 200, h: 270, rot: -7, z: 2 },
  { left: '50%', w: 220, h: 300, rot: 0, z: 3, translate: true },
  { right: '27%', w: 200, h: 270, rot: 7, z: 2 },
  { right: '10%', w: 190, h: 250, rot: 14, z: 1 },
];

const LifeGallery = () => {
  return (
    <section className="life grid-bg">
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
              left: f.left,
              right: f.right,
              width: f.w,
              height: f.h,
              zIndex: f.z,
              transform: `${f.translate ? 'translateX(-50%) ' : ''}rotate(${f.rot}deg)`,
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
