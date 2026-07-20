import React, { useState} from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import {SITE_URL, SITE_IMAGE, SEO } from './data';
import {Skills} from './Components/Skills.js'
import { ProjectGallery } from './Components/ProjectGallery.js';
import { Hero } from './Components/Hero.js';
import { ExperienceEducation } from './Components/ExperienceEducation.js';
import { Navbar, BackgroundEffects } from './Components/Navbar.js';
import { Footer } from './Components/Footer.js';
import {useKonamiCode, CornerHUD} from './Effects/Effects.js'

function App() {
  const godMode = useKonamiCode();
  const [lang, setLang] = useState('fr');
  const seo = SEO[lang];
  // Une seule page réelle existe (SPA à bascule de langue côté client) :
  // le canonical doit toujours pointer vers la racine, jamais vers une route /en inexistante.
  const canonicalUrl = SITE_URL;
  const ogImageUrl = `${SITE_URL}/${SITE_IMAGE}`;

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jaurès AGOSSOU",
    jobTitle: "Gameplay Programmer",
    url: SITE_URL,
    image: ogImageUrl,
    sameAs: [
      "https://github.com/Jaures229",
      "https://jaures229.itch.io",
    ],
    knowsAbout: ["C++", "C#", "Unity", "ECS", "Game Development"],
  };

  return (
    <div className={`App ${godMode ? 'rainbow-mode' : ''}`}>
      <Helmet htmlAttributes={{ lang }}>
        <meta charSet="utf-8" />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="author" content="Jaurès AGOSSOU" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content={lang === 'fr' ? 'fr_FR' : 'en_US'} />
        <meta property="og:site_name" content="Jaurès AGOSSOU — Portfolio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={ogImageUrl} />

        {/* Structured data (rich results) */}
        <script type="application/ld+json">
          {JSON.stringify(personJsonLd)}
        </script>
      </Helmet>
      
      <CornerHUD lang={lang} setLang={setLang} />
      <Navbar lang={lang} />
      <BackgroundEffects />
      
      <div className="container">
        <Hero lang={lang} setLang={setLang} />
        <Skills lang={lang} />
        <ProjectGallery lang={lang} />
        
        {/* NOUVELLE SECTION INJECTÉE ICI */}
        <ExperienceEducation lang={lang} />
        
        <Footer lang={lang} />
      </div>
    </div>
  );
}
export default App;
