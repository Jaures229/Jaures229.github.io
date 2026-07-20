import React, { useState} from 'react';
import {TRANSLATIONS, EXPERIENCES, EDUCATION} from '../data';
import { TimelineEntry } from '../Effects/Effects';

export const ExperienceEducation = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [openIds, setOpenIds] = useState(() => new Set(['exp-0', 'edu-0']));

  const toggle = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  return (
    <section id="experience-education" className="timeline-section">
      <h2 className="section-title"><span>03.</span> {t.experienceTitle}</h2>

      <div className="timeline-container timeline-track">
        {EXPERIENCES.map((exp, index) => {
          const id = `exp-${index}`;
          return (
            <TimelineEntry
              key={id}
              lang={lang}
              type="pro"
              period={exp.period}
              title={exp.role[lang]}
              subtitle={exp.company}
              summary={exp.summary[lang]}
              isOpen={openIds.has(id)}
              onToggle={() => toggle(id)}
            >
              <ul className="timeline-list">
                {exp.achievements[lang].map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            </TimelineEntry>
          );
        })}
      </div>

      <h2 className="section-title timeline-subsection-title"><span>04.</span> {t.educationTitle}</h2>

      <div className="timeline-container timeline-track">
        {EDUCATION.map((edu, index) => {
          const id = `edu-${index}`;
          return (
            <TimelineEntry
              key={id}
              lang={lang}
              type="edu"
              period={edu.period}
              title={edu.degree[lang]}
              subtitle={edu.school}
              summary={edu.summary[lang]}
              isOpen={openIds.has(id)}
              onToggle={() => toggle(id)}
            >
              <p className="timeline-details">{edu.details[lang]}</p>
            </TimelineEntry>
          );
        })}
      </div>
    </section>
  );
};
