import {TRANSLATIONS} from '../data';

export const Footer = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  return (
    <footer id="contact">
      <h2 className="section-title" style={{marginTop: 100, border: 'none'}}><span>05.</span> {t.contactTitle}</h2>

      <div className="insert-coin-anim">
        {t.insertCoin}
      </div>
    
      <p>{t.contactText}</p>
        <div className="contact-icons">
          <a href="mailto:contact.jauresagossou@gmail.com">
            <img src="assets/icons/email.svg" alt="Email" className="contact-logo" /> EMAIL </a>
          <a href="https://linkedin.com/in/jaurès-agossou-4021a1264">
            <img src="assets/icons/linkedin.svg" alt="LinkedIn" className="contact-logo" /> LINKEDIN
          </a>
          <a href="https://github.com/Jaures229">
            <img src="assets/icons/github.svg" alt="GitHub" className="contact-logo" /> GITHUB
          </a>
        </div>
        <br />
      <a href="assets/cv/CV.pdf" download="[AGOSSOU_JAURES]_CV.pdf" style={{color: 'var(--accent)', fontSize: '0.8rem'}}>[ {t.downloadCV} ]</a>
      <br /><br />
      © 2026 - Portfolio
    </footer>
  );
};
