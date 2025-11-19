import { useState, useEffect } from 'react';
import '../styles/TestimonialsCarousel.css';

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      id: 1,
      name: 'Agim Rama',
      author: 'Agim Rama',
      location: 'Tirana',
      rating: 5,
      text: 'FizioWell më ndihmoi të shërohem nga shqetësimi i shpinës. Terapeuti ishte shumë profesional dhe i kujdesshëm. Do ta rekomandoj me siguri!',
      avatar: '👨‍💼'
    },
    {
      id: 2,
      name: 'Merita Kocollari',
      author: 'Merita Kocollari',
      location: 'Durrës',
      rating: 5,
      text: 'Pas aksidentit, FizioWell ishte zgjidhja e përsosur. Stafi i dedikuar dhe trajnimi i duhur më rikthyeu në lojë. Faleminderit!'
    },
    {
      id: 3,
      name: 'Hasan Veseli',
      author: 'Hasan Veseli',
      location: 'Vlorë',
      rating: 5,
      text: 'Shërbimi në FizioWell është jashtëzakonshëm. Çdo seancë fizioterapie ishte e targetuar dhe efektive. Shumë i kënaqur me rezultatet!'
    },
    {
      id: 4,
      name: 'Zana Berisha',
      author: 'Zana Berisha',
      location: 'Prishtinë',
      rating: 5,
      text: 'Problemi im me artikulacionet e dorës u zbut shumë. Terapistët në FizioWell përdorin teknika moderne dhe mjete të avancuara.'
    },
    {
      id: 5,
      name: 'Demir Krasniqi',
      author: 'Demir Krasniqi',
      location: 'Shkodër',
      rating: 5,
      text: 'Pas operacionit, FizioWell më ndihmoi të rikuperohem më shpejt se sa prisja. Rekomendoj plotësisht këtë klinikë!'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setAutoplay(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2>Ç'Thonë Pacientët Tanë</h2>
        <p className="section-subtitle">Dëgjoni nga njerëzit që e kanë përjetuar përmirësimin me FizioWell</p>

        <div className="carousel-container">
          <div className="carousel-main">
            <div className="testimonial-card" key={current.id}>
              <div className="stars">
                {'⭐'.repeat(current.rating)}
              </div>
              <p className="testimonial-text">"{current.text}"</p>
                            <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonials[currentIndex].author.charAt(0)}
                  {testimonials[currentIndex].author.split(' ')[1].charAt(0)}
                </div>
                <div className="author-info">
                  <h4>{testimonials[currentIndex].author}</h4>
                  <p>{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </div>
          </div>

          <button 
            className="carousel-btn prev-btn" 
            onClick={prevSlide}
            aria-label="Testimonja e mëparshme"
          >
            ❮
          </button>
          <button 
            className="carousel-btn next-btn" 
            onClick={nextSlide}
            aria-label="Testimonja e ardhshme"
          >
            ❯
          </button>

          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Testimonja ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
