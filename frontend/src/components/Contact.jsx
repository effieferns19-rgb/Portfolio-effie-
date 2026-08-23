import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const NotionIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 8v8" />
    <path d="M8 8l7 8" />
    <path d="M15 8v8" />
  </svg>
);

const Contact = () => {
  return (
    <>
      <div className="pre-contact grid-bg" style={{ paddingBottom: 20 }}>
        <p>
          The side of me that doesn’t show up in a portfolio — a little bit of <b>everything that makes</b> me, me.
        </p>
      </div>
      <section
        className="contact"
        id="contact"
        style={{ backgroundImage: 'url(/images/footer_sky.jpg)' }}
      >
        <p className="c-lead">
          If you’re looking for a designer who’s curious, thoughtful, and always up for a challenge — let’s talk.
        </p>
        <a href="mailto:effie@example.com">
          <button className="btn-terra">Hire me!</button>
        </a>
        <h2>Let’s build together?</h2>
        <div className="socials">
          <a href="mailto:effie@example.com" aria-label="Email"><Mail size={24} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={24} /></a>
          <a href="https://notion.so" target="_blank" rel="noreferrer" aria-label="Notion"><NotionIcon size={24} /></a>
        </div>
        <p className="copyright">© 2026 Effie. All rights reserved.</p>
      </section>
    </>
  );
};

export default Contact;
