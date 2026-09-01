import React, { useRef, useState } from 'react';

// A stacked, swipeable card deck for touch/mouse.
// items: array of React nodes rendered as cards (top-most is interactive).
const SwipeDeck = ({ items, cardWidth = 268, deckHeight = 330, className = '' }) => {
  const [order, setOrder] = useState(items.map((_, i) => i));
  const [dx, setDx] = useState(0);
  const [flinging, setFlinging] = useState(false);
  const startX = useRef(null);

  const onDown = (e) => {
    startX.current = e.clientX;
    setFlinging(false);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const onMove = (e) => {
    if (startX.current === null) return;
    setDx(e.clientX - startX.current);
  };
  const finish = () => {
    if (startX.current === null) return;
    startX.current = null;
    if (Math.abs(dx) > 70) {
      const dir = dx > 0 ? 1 : -1;
      setFlinging(true);
      setDx(dir * (cardWidth + 260));
      window.setTimeout(() => {
        setOrder((o) => [...o.slice(1), o[0]]);
        setFlinging(false);
        setDx(0);
      }, 240);
    } else {
      setFlinging(true);
      setDx(0);
    }
  };

  return (
    <div className={`swipe-deck ${className}`} style={{ height: deckHeight }}>
      {order.map((itemIndex, depth) => {
        const isTop = depth === 0;
        const behind = `translateX(-50%) translateY(${depth * 12}px) scale(${1 - depth * 0.055})`;
        const top = `translateX(calc(-50% + ${dx}px)) rotate(${dx / 22}deg)`;
        return (
          <div
            key={itemIndex}
            className={`swipe-card ${isTop ? 'is-top' : ''}`}
            data-testid={isTop ? 'swipe-deck-top-card' : undefined}
            style={{
              width: cardWidth,
              zIndex: order.length - depth,
              transform: isTop ? top : behind,
              transition: flinging
                ? 'transform .24s ease'
                : isTop
                ? 'none'
                : 'transform .35s cubic-bezier(0.2,0.8,0.2,1)',
              opacity: depth > 3 ? 0 : 1,
              pointerEvents: isTop ? 'auto' : 'none',
            }}
            onPointerDown={isTop ? onDown : undefined}
            onPointerMove={isTop ? onMove : undefined}
            onPointerUp={isTop ? finish : undefined}
            onPointerCancel={isTop ? finish : undefined}
          >
            {items[itemIndex]}
          </div>
        );
      })}
    </div>
  );
};

export default SwipeDeck;
