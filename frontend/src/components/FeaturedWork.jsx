import React, { useState } from 'react';
import { WORK } from '../data/mock';
import { X } from 'lucide-react';

const FeaturedWork = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="work" id="work">
      <div className="work-bg" style={{ backgroundImage: 'url(/images/work_sky.png)' }} />
      <div className="section-head">
        <h2>Featured Work</h2>
        <p>A little collection of selected case studies showcasing how I solve complex challenges across projects</p>
      </div>

      <div className="work-list">
        {WORK.map((w, i) => (
          <button
            key={w.id}
            className="work-card"
            style={{ zIndex: i + 1 }}
            onClick={() => setActive(w)}
            aria-label={`Open case study: ${w.title}`}
          >
            <img src={w.img} alt={w.title} />
          </button>
        ))}
      </div>

      {active && (
        <div className="cs-overlay" onClick={() => setActive(null)}>
          <div className="cs-modal" onClick={(e) => e.stopPropagation()}>
            <button className="cs-close" onClick={() => setActive(null)} aria-label="Close">
              <X size={20} />
            </button>
            <div className="cs-frame">
              <iframe
                title={active.title}
                src={active.figma}
                allowFullScreen
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedWork;
