import {TRANSLATIONS, ARSENAL} from '../data';

export const Skills = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  return (
    <section id="skills">
      <h2 className="section-title"><span>01.</span> {t.techTitle}</h2>
      <div className="skill-tree-container">
        <div className="skill-tree-root">
          <div className="skill-root-node">
            <span className="skill-root-tag">{t.skillRootTag}</span>
            <img src="assets/images/avatar.jpg" alt="Jaurès AGOSSOU" className="skill-root-avatar" />
            <strong className="skill-root-name">Jaurès AGOSSOU</strong>
          </div>
        </div>

        <div className="skill-tree-branches">
          <div className="skill-branch">
            <h3>{t.skillEngines}</h3>
            <div className="branch-leaves">
              {ARSENAL["MOTEURS"].map((skill, index) => (
                <div key={index} className="skill-badge-node acquired">
                  {skill.icon ? (
                    <img src={skill.icon} alt={skill.name} className="skill-logo" />
                  ) : (
                    <span className="skill-icon-placeholder">//</span>
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-branch">
            <h3>{t.skillLanguages}</h3>
            <div className="branch-leaves">
              {ARSENAL["LANGAGES"].map((skill, index) => (
                <div key={index} className="skill-badge-node acquired">
                  {skill.icon ? (
                    <img src={skill.icon} alt={skill.name} className="skill-logo" />
                  ) : (
                    <span className="skill-icon-placeholder">//</span>
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-branch">
            <h3>{t.skillTools}</h3>
            <div className="branch-leaves">
              {ARSENAL["OUTILS & CONCEPTS"].map((skill, index) => (
                <div key={index} className="skill-badge-node acquired">
                  {skill.icon ? (
                    <img src={skill.icon} alt={skill.name} className="skill-logo" />
                  ) : (
                    <span className="skill-icon-placeholder">//</span>
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-branch">
            <h3>{t.skillLibraries}</h3>
            <div className="branch-leaves">
              {ARSENAL["LIBRAIRIE"].map((skill, index) => (
                <div key={index} className="skill-badge-node acquired">
                  {skill.icon ? (
                    <img src={skill.icon} alt={skill.name} className="skill-logo" />
                  ) : (
                    <span className="skill-icon-placeholder">//</span>
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

