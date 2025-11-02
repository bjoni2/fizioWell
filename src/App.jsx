import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="container">
            <h1>Rehabilitim dhe Shërim Fiziologjik</h1>
            <p>Rikthehuni në formën tuaj optimalë me terapi profesionale të përqendruar në rezultate</p>
            <button className="hero-cta" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Kontaktoni Tani</button>
          </div>
        </section>

        {/* Services Section */}
        <section className="services" id="services">
          <div className="container">
            <h2>Specialitetet Tona</h2>
            <p className="services-subtitle">Rehabilitim dhe terapi fiziologjike të personalizuara sipas nevojave tuaja specifike</p>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🦴</div>
                <h3>Ortopedi</h3>
                <p>Rehabilitim i plotë për traumat ortopedike, operacionet kirurgjikale dhe problemet e sistemit skeletal</p>
              </div>
              <div className="service-card">
                <div className="service-icon">💪</div>
                <h3>Muscolo-Skeletik</h3>
                <p>Trajtim i dhimbjes muskulare, tensionit dhe kufizimeve të lëvizshmërisë</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🧠</div>
                <h3>Neurologji</h3>
                <p>Rehabilitim për kuadriplegjikë, paraplejikë dhe probleme neurologjike të tjera</p>
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
            <h2>Pse të Zgjidhni FizioWell?</h2>
            <p className="about-subtitle">Gjashtë arsye kryesore pse i besojnë pacientët shëndetin e tyre në FizioWell</p>
            <div className="reasons-grid">
              <div className="reason-card">
                <div className="reason-icon">🎯</div>
                <h3>Fokus në Rezultate</h3>
                <p>Çdo plan trajtimi është i dizajnuar për të arritur rezultate të matshme dhe të qëndrueshme në kohë</p>
              </div>
              <div className="reason-card">
                <div className="reason-icon">👨‍⚕️</div>
                <h3>Ekspertiza Professional</h3>
                <p>Fizioterapist i certifikuar me formim ndërkombëtar në të gjitha specialitetet kryesore</p>
              </div>
              <div className="reason-card">
                <div className="reason-icon">💎</div>
                <h3>Shërbim Personal</h3>
                <p>Konsultacione individuale me vëmendje të plotë për nevojat dhe objektivat tuaja specifike</p>
              </div>
              <div className="reason-card">
                <div className="reason-icon">🏆</div>
                <h3>Teknika Moderne</h3>
                <p>Përdorim i metodave më të fundit shkencore dhe ekipeve të avancuara për rehabilitim</p>
              </div>
              <div className="reason-card">
                <div className="reason-icon">⏰</div>
                <h3>Fleksibilitet Orari</h3>
                <p>Orar i gjerë funksionimi me mundësinë e këshillimit dhe planifikimit sipas përdorimit tuaj</p>
              </div>
              <div className="reason-card">
                <div className="reason-icon">📍</div>
                <h3>Lokacion Strategjik</h3>
                <p>Në qendër të Tiranës, lehtësisht i arritshëm me transport publik dhe parking të sigurt</p>
              </div>
            </div>
          </div>
        </section>

        {/* Therapist Profile Section */}
        <section className="therapist" id="therapist">
          <div className="container">
            <h2>Mbi Fizioterapistin</h2>
            <p className="therapist-subtitle">Njihuni me profesionistin përsëri i cili përkujdeset për shëndetin tuaj</p>
            <div className="therapist-content">
              <div className="therapist-image">
                <div className="image-placeholder">📸</div>
              </div>
              <div className="therapist-info">
                <h3 className="therapist-name">Alvi Thanasi</h3>
                <p className="therapist-title">Fizioterapist i Diplomuar - Specialist Rehabilitimi</p>
                
                <div className="credentials-section">
                  <h4>Edukimi dhe Kualifikimet</h4>
                  <ul className="credentials-list">
                    <li>Diplomë Bachelor në Fizioterapi - Universiteti i Tiranës (2010)</li>
                    <li>Master në Rehabilitim Fiziologjik - Universiteti i Romës, Itali (2013)</li>
                    <li>Sertifikim në Terapi Manuale - International Federation of Sports Medicine (2015)</li>
                    <li>Especializim në Neurologji Fizioterapi - Barcelona, Spanja (2018)</li>
                  </ul>
                </div>

                <div className="specializations">
                  <h4>Specialitete</h4>
                  <div className="spec-tags">
                    <span className="spec-tag">Rehabilitim Ortopedik</span>
                    <span className="spec-tag">Fiziologji Neurologjike</span>
                    <span className="spec-tag">Terapi Manuale</span>
                    <span className="spec-tag">Rehabilitim Sportiv</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials" id="testimonials">
          <div className="container">
            <h2>Përvojat e Pacientëve</h2>
            <p className="testimonials-subtitle">Dëgjoni nga pacientët që kanë rikuperuar shëndetin e tyre me ndihmën e FizioWell</p>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">"Pas një aksidenti makinerie, mendoja se nuk do të mund të ecja përsëri. Fiziotherapeutët në FizioWell më ndihmuan të rikuperoj plotësisht. Sot jam 100% funksional!"</p>
                <div className="testimonial-author">
                  <p className="author-name">Agim Rama</p>
                  <p className="author-detail">Tirana</p>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">"Pati vite me dhimbje krure dhe probleme vertebrale. Pas nisjes se teri terapeutik në FizioWell, dhimbja ka zhdukur dhe kam rigjetur cilësinë e jetës."</p>
                <div className="testimonial-author">
                  <p className="author-name">Merita Kocollari</p>
                  <p className="author-detail">Durrës</p>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">"Profesionalizmi dhe dedikimi i ekipit në FizioWell është jashtëzakonshëm. Terpia u planifikua sipas nevojave të mia dhe rezultatet ishin më të mirë se ç'pritshesha."</p>
                <div className="testimonial-author">
                  <p className="author-name">Hasan Veseli</p>
                  <p className="author-detail">Vlorë</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact" id="contact">
          <div className="container">
            <h2>Na Kontaktoni</h2>
            <div className="contact-grid">
              <div className="contact-main">
                <div className="info-item">
                  <strong>📍 Adresa:</strong>
                  <p>Rruga Petro Korçari<br/>Tirana, Albania 1060</p>
                </div>
                <div className="info-item">
                  <strong>📞 Telefoni:</strong>
                  <p><a href="tel:+355XXXXXXXXX">+355 (0) XX XXX XXXX</a></p>
                </div>
                <div className="info-item">
                  <strong>✉️ Email:</strong>
                  <p><a href="mailto:info@fiziowellclinic.al">info@fiziowellclinic.al</a></p>
                </div>
              </div>
              <div className="hours-section">
                <h3>Orarit i Hapjes</h3>
                <div className="hours-item">
                  <strong>E hënë - E premte:</strong>
                  <p>09:00 - 20:00</p>
                </div>
                <div className="hours-item">
                  <strong>E shtunë:</strong>
                  <p>09:00 - 16:00</p>
                </div>
                <div className="hours-item closed">
                  <strong>E diel:</strong>
                  <p>I mbyllur</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 FizioWell Clinic. Të gjitha të drejtat e rezervuara. | Tirana, Albania</p>
        </div>
      </footer>
    </>
  );
}

export default App;
