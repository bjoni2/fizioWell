import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FAQ from './components/FAQ';
import profilePhoto from './assets/profile.JPG';
import './App.css';

function AppContent() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">Shko në përmbajtjen kryesore</a>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section 
          className="hero" 
          id="home"
        >
          <div className="hero-background">
            <svg className="hero-svg-bg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#0097A9', stopOpacity: 1}} />
                  <stop offset="50%" style={{stopColor: '#005f73', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#0088a0', stopOpacity: 1}} />
                </linearGradient>
                <filter id="blur">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
                </filter>
              </defs>
              {/* Main gradient background */}
              <rect width="1440" height="900" fill="url(#grad1)" />
              
              {/* Organic blob shapes - premium medical aesthetic */}
              <ellipse cx="1200" cy="150" rx="350" ry="280" fill="rgba(107, 170, 61, 0.15)" filter="url(#blur)" />
              <ellipse cx="200" cy="750" rx="280" ry="350" fill="rgba(255, 255, 255, 0.08)" filter="url(#blur)" />
              <ellipse cx="100" cy="200" rx="200" ry="250" fill="rgba(0, 151, 169, 0.12)" filter="url(#blur)" />
              
              {/* Subtle geometric accent lines */}
              <line x1="0" y1="300" x2="1440" y2="320" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="2" />
              <line x1="0" y1="600" x2="1440" y2="620" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="2" />
              
              {/* Medical/wellness subtle icons hidden in background */}
              <circle cx="1350" cy="100" r="60" fill="rgba(255, 255, 255, 0.04)" />
              <circle cx="90" cy="850" r="50" fill="rgba(255, 255, 255, 0.04)" />
              
              {/* Diagonal accent */}
              <path d="M 0 0 L 1440 900" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
              <path d="M 1440 0 L 0 900" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
            </svg>
          </div>

          <div className="container">
            <div className="hero-content">
              <h1>Rehabilitim dhe Mirëqenie Fizike</h1>
              <p>Rikthehuni në formën tuaj optimale me terapi profesionale të përqendruar në rezultate</p>
              <button className="hero-cta" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Kontakto Tani</button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services" id="services">
          <div className="container">
            <h2>Shërbimet Tona</h2>
            <p className="services-subtitle">Fizioterapi e personalizuar sipas nevojave tuaja</p>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🦴</div>
                <h3>Ortopedi</h3>
                <p>Rehabilitim i plotë për traumat ortopedike, operacionet kirurgjikale dhe problemet e sistemit skeletal</p>
              </div>
              <div className="service-card">
                <div className="service-icon">💪</div>
                <h3>Muskulo-Skeletik</h3>
                <p>Trajtim i dhimbjes muskulare, tendosjes dhe kufizimeve të lëvizshmërisë</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🧠</div>
                <h3>Neurologji</h3>
                <p>Rehabilitim për paraliza dhe probleme neurologjike të ndryshme</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🤝</div>
                <h3>Terapi Manuale</h3>
                <p>Teknika manuale të avancuara për lehtësimin e dhimbjes dhe rritjen e lëvizshmërisë</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about" id="about">
          <div className="container">
            <h2>Pse të Zgjedhësh FizioWell?</h2>
            <p className="about-subtitle">Gjashtë arsye kryesore pse pacientët e besojnë shëndetin e tyre në FizioWell</p>
            <div className="reasons-grid">
              <div className="reason-card">
                <div className="reason-icon">🎯</div>
                <h3>Fokus në Rezultate</h3>
                <p>Çdo plan trajtimi është i dizenjuar për të arritur rezultate të matshme dhe të qëndrueshme</p>
              </div>
              <div className="reason-card">
                <div className="reason-icon">👨‍⚕️</div>
                <h3>Ekspertiza Profesionale</h3>
                <p>Fizioterapist i certifikuar me formim kombëtar në të gjitha fushat kryesore</p>
              </div>
              <div className="reason-card">
                <div className="reason-icon">💎</div>
                <h3>Shërbim Personal</h3>
                <p>Konsulta individuale me vëmendje të plotë për nevojat dhe qëllimet tuaja specifike</p>
              </div>
              <div className="reason-card">
                <div className="reason-icon">🏆</div>
                <h3>Teknika Moderne</h3>
                <p>Përdorim i metodave më të fundit shkencore dhe pajisjeve të avancuara për rehabilitim</p>
              </div>
              <div className="reason-card">
                <div className="reason-icon">⏰</div>
                <h3>Fleksibilitet në Orar</h3>
                <p>Orare të gjera e praktike me mundësinë e planifikimit sipas kërkesave të tua</p>
              </div>
              <div className="reason-card">
                <div className="reason-icon">📍</div>
                <h3>Lokacion Strategjik</h3>
                <p> Në një nga zonat më të aksesueshme në Tiranë</p>
              </div>
            </div>
          </div>
        </section>

        {/* Therapist Profile Section */}
        <section className="therapist" id="therapist">
          <div className="container">
            <h2>Mbi Fizioterapistin</h2>
            <p className="therapist-subtitle">Njihu me profesionistin që përqendrohet në shëndetin tuaj</p>
            <div className="therapist-content">
              <div className="therapist-image">
                <img 
                  src={profilePhoto} 
                  alt="Msc. Alvi Thanasi - Fizioterapist" 
                  className="therapist-photo"
                />
              </div>
              <div className="therapist-info">
                <h3 className="therapist-name">Msc. Pt. Alvi Thanasi</h3>
                <p className="therapist-title">Fizioterapist i Diplomuar në Universitetin Europian të Tiranës</p>
                
                <div className="credentials-section">
                  <h4>Edukimi dhe Kualifikimet</h4>
                  <ul className="credentials-list">
                    <li>Diplomë Bachelor në Fizioterapi - Universiteti Europian i Tiranës (2022)</li>
                    <li>Diplomë në Teknikën e Kinetic Flossing (2022)</li>
                    <li>Master në Fizioterapi me profilerim në Teknikat e Rehabilitimit - Universiteti Europian i Tiranës (2024)</li>
                    <li>Kurs i Avancuar në Trajtimin e Sindromit Miofascial (2024)</li>
                    <li>Certifikim në Dry Needling - Top 30 (2025)</li>
                  </ul>
                </div>

                <div className="specializations">
                  <h4>Specialitete</h4>
                  <div className="spec-tags">
                    <span className="spec-tag">Patologji Cervikale</span>
                    <span className="spec-tag">Sindrom Miofascial</span>
                    <span className="spec-tag">Rehabilitim Post-Operator</span>
                    <span className="spec-tag">Patologji Lombare</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Section */}
        <section className="contact" id="contact">
          <div className="container">
            <h2>Na Kontakto</h2>
            <div className="contact-grid">
              <div className="contact-main">
                <div className="info-item">
                  <strong>📍 Adresa:</strong>
                  <p>Rruga Petro Korçari<br/>Tiranë, Shqipëri 1060</p>
                </div>
                <div className="info-item">
                  <strong>📞 Telefoni:</strong>
                  <p><a href="tel:+355696360177">+355 69 636 0177</a></p>
                </div>
              </div>
              <div className="hours-section">
                <h3>Orari i Hapjes</h3>
                <div className="hours-item">
                  <strong>E Hënë - E Premte:</strong>
                  <p>09:00 - 20:00</p>
                </div>
                <div className="hours-item">
                  <strong>E Shtunë:</strong>
                  <p>09:00 - 16:00</p>
                </div>
                <div className="hours-item closed">
                  <strong>E Diel:</strong>
                  <p>I mbyllur</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2025 FizioWell Clinic. Të gjitha të drejtat e rezervuara. | Tiranë, Shqipëri</p>
        </div>
      </footer>
    </>
  );
}

function App() {
  return <AppContent />;
}

export default App;
