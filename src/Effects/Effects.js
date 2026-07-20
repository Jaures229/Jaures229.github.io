import React, { useState, useEffect } from 'react';
import {TRANSLATIONS} from '../data';

const TimelineEntry = ({ lang, type, period, title, subtitle, summary, isOpen, onToggle, children }) => {
  const t = TRANSLATIONS[lang];
  const isOngoing = /présent|present/i.test(period);

  return (
    <div className={`timeline-card ${type === 'pro' ? 'pro-card' : 'edu-card'} ${isOpen ? 'open' : ''}`}>
      <div className="timeline-node">
        <span className="timeline-node-icon">{type === 'pro' ? '⚔' : '🎓'}</span>
      </div>

      <div className="timeline-content">
        <button className="timeline-card-header" onClick={onToggle} aria-expanded={isOpen}>
          <div className="timeline-header">
            <div className="timeline-header-top">
              <span className="timeline-period">{period}</span>
              {isOngoing && (
                <span className="timeline-ongoing-tag">
                  <span className="pulse-dot"></span>{t.ongoing}
                </span>
              )}
            </div>
            <h3 className="timeline-role">{title}</h3>
            <div className="timeline-sub">{subtitle}</div>
            {!isOpen && <p className="timeline-summary">{summary}</p>}
          </div>
          <span className="timeline-toggle">
            <span className="timeline-toggle-label">{isOpen ? t.collapseEntry : t.expandEntry}</span>
            <span className="timeline-toggle-icon">▾</span>
          </span>
        </button>
        <div className="timeline-body-wrapper">
          <div className="timeline-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};


const CornerHUD = ({ lang, setLang }) => (
  <div className="hud-container">
    <div className="hud-corner top-left"></div>
    {/* Déplacement du sélecteur de langue flottant dans le coin supérieur droit du HUD si la nav est masquée */}
    <div className="hud-corner top-right" style={{display: 'flex', justifyContent: 'flex-end', padding: '10px'}}></div>
    <div className="hud-corner bottom-left"></div>
    <div className="hud-corner bottom-right"></div>
    <div className="hud-scanline"></div>
  </div>
);

const ScrollIndicator = () => (
  <div className="scroll-indicator">
    <div className="mouse-icon">
      <div className="wheel"></div>
    </div>
    <div className="arrow-pixel">▼</div>
  </div>
);

const useTypewriter = (text, speed = 100) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setDisplayedText(text.slice(0, index));
      if (index >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
};


const useKonamiCode = () => {
  const [success, setSuccess] = useState(false);
  const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newHistory = [...history, e.key].slice(-10);
      setHistory(newHistory);
      if (JSON.stringify(newHistory) === JSON.stringify(sequence)) {
        setSuccess(true);
        alert("CHEAT CODE ACTIVATED: GOD MODE ON 🎮");
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [history, sequence]);

  return success;
};

export {
    TimelineEntry,
    useKonamiCode,
    useTypewriter,
    CornerHUD,
    ScrollIndicator
}