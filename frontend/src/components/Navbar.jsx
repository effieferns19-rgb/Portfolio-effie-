import React, { useState, useEffect } from 'react';
import { NAV } from '../data/mock';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="nav-wrap">
      <nav className="nav-pill" style={scrolled ? { boxShadow: '0 14px 34px rgba(31,29,29,0.16)' } : {}}>
        <button className="nav-logo" onClick={() => scrollTo('top')} aria-label="Home">EF</button>
        <div className="nav-links">
          {NAV.map((n) => (
            <button
              key={n.label}
              className="nav-link"
              data-testid={`nav-${n.label.toLowerCase().replace(/\s+/g, '-')}-link`}
              onClick={() => (n.label === 'Resume' ? window.open('/resume.pdf', '_blank', 'noopener') : scrollTo(n.target))}
            >
              {n.label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
