import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <div className="pre-contact" style={{ paddingBottom: 20 }}>
        <p>
          The side of me that doesn’t show up in a portfolio — a little bit of <b>everything that makes</b> me, me.
        </p>
      </div>
      <section className="contact" id="contact" style={{ backgroundImage: 'url(/images/footer_sky.png)' }}>
        <p className="c-lead">
          If you’re looking for a designer who’s curious, thoughtful, and always up for a challenge.
        </p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="btn-terra" data-testid="contact-hire-me-btn">Hire me!</button>
        </a>
        <h2>Let’s build together?</h2>
        <div className="socials">
          <a href="mailto:effieferns19@gmail.com" aria-label="Email" data-testid="footer-email-link"><Mail size={24} /></a>
          <a href="https://www.linkedin.com/in/effie-fernandes-429b801b8/" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-testid="footer-linkedin-link"><Linkedin size={24} /></a>
          <a href="tel:+919370777682" aria-label="Call" data-testid="footer-phone-link"><Phone size={24} /></a>
        </div>
        <p className="copyright">© 2026 Effie. All rights reserved.</p>
      </section>
    </>
  );
};

export default Contact;
