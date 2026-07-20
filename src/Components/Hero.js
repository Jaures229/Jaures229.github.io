import {TRANSLATIONS} from '../data';
import { useTypewriter, ScrollIndicator } from '../Effects/Effects';

export const Hero = ({ lang, setLang }) => {
  const t = TRANSLATIONS[lang];
  const subtitle = useTypewriter(t.heroSubtitle, 50);

  return (
    <header id="hero" className="hero">
      <div className="hero-content-wrapper">
        <div className="hero-text">
          <div className="glitch-wrapper">
            <h1 className="glitch" data-text="[Jaurès AGOSSOU]">[Jaurès AGOSSOU]</h1>
          </div>

          <div className="subtitle">
            {subtitle}<span className="cursor-blink">_</span>
          </div>
          
          <div className="rpg-stats">
            <div className="stat-item">{t.heroStatsLvl}</div>
            <div className="stat-item">HP <span style={{color:'#ef4444'}}>██████</span></div>
            <div className="stat-item">MP <span style={{color:'#3b82f6'}}>████░░</span></div>
          </div>

          <p>{t.heroDesc}</p>

          <a 
            href="assets/cv/CV.pdf" 
            className="btn-cv" 
            target="_blank" 
            rel="noopener noreferrer"
            download="[AGOSSOU_JAURES]_CV.pdf"
          >
            {t.downloadCV}
          </a>
        </div>

        <div className="hero-avatar">
          <div className="hero-avatar-lang">
            <div className="lang-selector">
              <button className={`lang-btn ${lang === 'fr' ? 'active' : ''}`} onClick={() => setLang('fr')}>FR</button>
              <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
            </div>
          </div>
          <div className="avatar-frame">
            <img 
              src="assets/images/avatar.jpg" 
              alt="Avatar Pixel" 
              className="avatar-img"
            />
          </div>
          <div className="avatar-status">
            <span className="status-dot"></span> ONLINE
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </header>
  );
};