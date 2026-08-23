import React from 'react';

const Sparkle = ({ size = 22, style = {}, className = '' }) => (
  <svg
    className={`sparkle ${className}`}
    style={style}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0c.5 6.2 5.8 11.5 12 12-6.2.5-11.5 5.8-12 12-.5-6.2-5.8-11.5-12-12C6.2 11.5 11.5 6.2 12 0z" />
  </svg>
);

export default Sparkle;
