import React from 'react';
import { LIFE_PHOTOS } from '../data/mock';
import useIsMobile from '../hooks/useIsMobile';
import SwipeDeck from './SwipeDeck';

// x/y/r = fanned (hover) target, sr = stacked default rotation
const FAN = [
  { x: -338, y: 12, r: -7, sr: -5, z: 1, w: 200, h: 262 },
  { x: -172, y: 3, r: -3.5, sr: -2.5, z: 3, w: 212, h: 282 },
  { x: 0, y: -6, r: 0, sr: 0, z: 6, w: 224, h: 300 },
  { x: 172, y: 3, r: 3.5, sr: 2.5, z: 3, w: 212, h: 282 },
  { x: 338, y: 12, r: 7, sr: 5, z: 1, w: 200, h: 262 },
];

const LifeGallery = () => {
  const isMobile = useIsMobile();
  return (
    <section className="life">
      <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto' }}>
        <h2>
          Somewhere between work<br />
          <span className="hl">and everything else</span>
        </h2>
      </div>
      {isMobile ? (
        <SwipeDeck
          className="life-deck"
          cardWidth={244}
          deckHeight={390}
          items={LIFE_PHOTOS.map((src, i) => (
            <div key={i} className="deck-polaroid">
              <img src={src} alt="" draggable="false" />
            </div>
          ))}
        />
      ) : (
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
      )}
    </section>
  );
};

export default LifeGallery;
