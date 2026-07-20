
import React, { useState, useEffect } from 'react';
import { TECH_ICONS, TRANSLATIONS, PROJECTS} from '../data';


export const ProjectGallery = ({ lang }) => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const t = TRANSLATIONS[lang];

  const filteredProjects = PROJECTS.filter(p =>
    filter === 'all' ? true : p.type === filter
  );

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) return;
    const handleKey = (e) => { if (e.key === 'Escape') setSelectedProject(null); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedProject]);

  return (
    <section id="projects" className="gallery-section">
      <h2 className="section-title"><span>02.</span> {t.missionTitle}</h2>

      <div className="gallery-tabs">
        {['all', 'pro', 'perso'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`tab-btn ${filter === f ? 'active' : ''}`}
          >
            {f === 'all' ? t.allMissions : f === 'pro' ? t.proMissions : t.sideQuests}
          </button>
        ))}
      </div>

      <div className="project-grid-mini">
        {filteredProjects.map((project, index) => (
          <button
            key={index}
            className={`mission-card ${project.featured ? 'featured' : ''}`}
            onClick={() => setSelectedProject(project)}
          >
            <div className="mission-card-visual">
              <img
                src={project.mediaType === 'youtube'
                  ? `https://img.youtube.com/vi/${project.mediaSrc}/hqdefault.jpg`
                  : (project.mediaSrc || 'placeholder.jpg')}
                alt={project.imageAlt}
                className="mission-thumb"
              />
              {project.featured && <span className="mission-featured-tag">★ {t.proMissions}</span>}
              <span className="mission-date-badge">{project.date}</span>
            </div>

            <div className="mission-card-body">
              <span className="badge-type">{project.context[lang]}</span>
              <h3 className="mission-card-title">{project.title}</h3>
              <p className="mission-tagline">{project.tagline[lang]}</p>

              <div className="mission-tech-chips">
                {project.technologies.slice(0, 4).map((techKey, i) => (
                  <span key={i} className="tech-chip">
                    {TECH_ICONS[techKey] && <img src={TECH_ICONS[techKey]} alt="" />}
                    {techKey}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="tech-chip more">+{project.technologies.length - 4}</span>
                )}
              </div>

              <span className="mission-cta">{t.viewBriefing} <span className="mission-cta-arrow">→</span></span>
            </div>
          </button>
        ))}
      </div>

      {selectedProject && (
        <div className="mission-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="mission-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label={t.closeBriefing}>✕</button>

            <div className="modal-media">
              {selectedProject.mediaType === 'youtube' ? (
                <div className="video-ratio-box">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedProject.mediaSrc}?rel=0`}
                    title={selectedProject.title}
                    className="project-iframe"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img src={selectedProject.mediaSrc || 'placeholder.jpg'} alt={selectedProject.imageAlt} className="project-media-img" />
              )}
            </div>

            <div className="modal-body">
              <div className="project-meta">
                <span className="project-date">{selectedProject.date}</span>
                <span className="badge-type">{selectedProject.context[lang]}</span>
              </div>

              <h3 className="project-title">{selectedProject.title}</h3>

              <div className="description">
                <ul>
                  {selectedProject.description[lang].map((desc, i) => <li key={i}>{desc}</li>)}
                </ul>
              </div>

              <div className="tech-showcase">
                <div className="tech-header">
                  <span className="tech-title">{t.systemLoadout}</span>
                  <div className="tech-line"></div>
                </div>
                <div className="tech-grid-display">
                  {selectedProject.technologies && selectedProject.technologies.map((techKey, index) => (
                    <div key={index} className="tech-item-card">
                      {TECH_ICONS[techKey] && (
                        <img src={TECH_ICONS[techKey]} alt={techKey} className="tech-icon-img" />
                      )}
                      <span className="tech-name">{techKey}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="link-group">
                {selectedProject.links.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className={`link-btn ${link.isItch ? 'link-itch' : ''}`}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
