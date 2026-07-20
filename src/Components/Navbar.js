import React, { useState, useEffect } from 'react';
import {TRANSLATIONS} from '../data';

const Navbar = ({ lang }) => {
  const [visible, setVisible] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky-nav ${visible ? 'visible' : ''}`}>
      <a href="#hero" className="nav-logo">Jaures AGOSSOU</a>
      <div className="nav-right-container">
        <ul className="nav-menu">
          <li><a href="#hero">{t.navStart}</a></li>
          <li><a href="#projects">{t.navMissions}</a></li>
          <li><a href="/assets/cv/CV.pdf" target="_blank">{t.navData}</a></li>
          <li><a href="#contact">{t.navComms}</a></li>
        </ul>
      </div>
    </nav>
  );
};

const BackgroundEffects = () => (
  <>
    <div className="bg-grid"></div>
    <div className="background-fx">
      <div className="floating-icon icon-1" style={{top: '10%', left: '5%', animationDelay: '0s', fontSize: '3rem'}}>🎮</div>
      <div className="floating-icon icon-2" style={{top: '20%', right: '10%', animationDelay: '2s', fontSize: '5rem'}}>{`{ }`}</div>
      <div className="floating-icon icon-3" style={{bottom: '15%', left: '10%', animationDelay: '4s', fontSize: '4rem'}}>👾</div>
      <div className="floating-icon icon-4" style={{bottom: '30%', right: '5%', animationDelay: '1s', fontSize: '2rem'}}>⚔️</div>
      <div className="floating-icon icon-5" style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.02, fontSize: '15rem'}}>&lt;/&gt;</div>
    </div>
  </>
);

export {
    Navbar,
    BackgroundEffects
}