import React from 'react';
import { WORK } from '../data/mock';
import useReveal from '../hooks/useReveal';

const FeaturedWork = () => {
  useReveal();
  return (
    <section className="work" id="work">
      <div className="work-bg" style={{ backgroundImage: 'url(/images/work_sky.png)' }} />
      <div className="section-head">
        <h2>Featured Work</h2>
        <p>A little collection of selected case studies showcasing how I solve complex challenges across projects</p>
      </div>
      <div className="work-list">
        {WORK.map((w) => (
          <article key={w.id} className="work-card reveal">
            <div className="thumb">
              <img src={w.img} alt={w.title} />
            </div>
            <div className="work-tags">
              {w.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <h3>{w.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
