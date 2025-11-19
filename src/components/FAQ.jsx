import { useState } from 'react';
import '../styles/FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      icon: '📅',
      question: 'Sa seanca fizioterapie do të më duhen?',
      answer: 'Numri i seancave varet nga natyra dhe rëndësia e gjëndjes tënd. Zakonisht pacientët marrin 2-3 seanca në javë për 4-12 javë. Fizioterapisti ynë do të hartoj një plan individual për ty.'
    },
    {
      id: 2,
      icon: '🏥',
      question: 'Çfarë të pres në seancën e parë?',
      answer: 'Seanca e parë zgjat zakonisht 60 minuta. Do të bëjmë një vlerësim të plotë të gjëndjes tënd, përfshirë historikun mjekësor, tipin e dhimbjes dhe shkalla e lëvizshmërisë. Pas kësaj do të ndërtojmë një plan të personalizuar.'
    },
    {
      id: 3,
      icon: '📋',
      question: 'A më duhet raport mjekësor për fizioterapinë?',
      answer: 'Jo, nuk duhet domosdoshmërisht. Megjithatë, egzaminime si grafi, rezonance magnetike apo Ct-scan do vinin në ndihmë për të nxjerrë një plan rehabilitimi më efikas.'
    },
    {
      id: 4,
      icon: '💰',
      question: 'Cilat janë tarifat e shërbimeve?',
      answer: 'Tarifat variojnë në varësi të llojit të trajtimit. Ofrojmë paketa zbritjesh për shumë seanca. Kontakto klinikën tonë për informacione të hollësishme mbi çmimet.'
    },
    {
      id: 5,
      icon: '✂️',
      question: 'Mund ta marrim fizioterapinë pas operacionit?',
      answer: 'Po, absolutisht! Fizioterapia post-operatore është një nga specialitetet kryesore të FizioWell. Mund të të ndihmojmë në rikuperimin pas çdo operacioni kirurgjikal.'
    },
    {
      id: 6,
      icon: '🕐',
      question: 'Cilat janë oraret e hapjes dhe si mund të rezervoj?',
      answer: 'Ne jemi të hapur nga e Hëna deri te Premte nga 09:00 deri 20:00 dhe të Shtunë nga 09:00 deri 16:00. Mund të na telefonosh ose të na vizitosh drejtpërdrejt.'
    },
    {
      id: 7,
      icon: '🏠',
      question: 'A ofrohet fizioterapia në shtëpi?',
      answer: 'Po, ofrojmë shërbim vizitash në shtëpi për pacientë që nuk mund të vijnë në klinikë. Kontakto klinikën tonë për të diskutuar disponibilitetin.'
    },
    {
      id: 8,
      icon: '⭐',
      question: 'Cilat janë specialitetet kryesore?',
      answer: 'Specialitetet tona përfshijnë: Rehabilitim Ortopedik, Rehabilitim në neurologji, Terapi Manuale, Rehabilitim Sportiv dhe Parandalim i lëndimeve.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h2>Pyetje të Shpeshta</h2>
          <p className="section-subtitle">Përgjigje për pyetjet më të zakonshme</p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.id} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="faq-icon-bg">{faq.icon}</span>
                  <span className="faq-text">{faq.question}</span>
                  <span className="faq-toggle" aria-hidden="true" />
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="faq-answer"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="faq-cta">
          <div className="faq-cta-content">
            <h3>Ende pyetje?</h3>
            <p>Ekipi ynë i specializuar është gati të diskutoj qëllimet e tua dhe të hartoj një plan trajtimi personal.</p>
          </div>
          <a href="#contact" className="cta-button">Rezervo Konsultën</a>
        </div>
      </div>
    </section>
  );
}
