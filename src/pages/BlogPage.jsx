import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/BlogPage.css';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const blogPosts = [
    {
      id: 1,
      category: 'therapy',
      categoryLabel: 'Terapi',
      title: 'Fizioterapia Manuale: Si Ndihmon Në Dhimbjen Kronike',
      excerpt: 'Zbuloni si të tratat e manuele mund të lehtësojnë dhimbjen kronike dhe të përmirësojnë lëvizshmërinë.',
      content: 'Fizioterapia manuale përfshin teknika të cilat ndikojnë në muskujt, nyjat dhe endet e buta. Këto teknika rrisin qarkullimin e gjakut, reduktojnë inflamacionin dhe rikthejnë funksionin normal. Shumë pacientë raportojnë lehtësim të konsiderueshëm pas disa seancave.\n\nTeknikat kryesore përfshijnë: masazh terapeutik, mobilizim të nyjes, dhe stretching të drejtpërdrejtë. Çdo teknikë zgjidhet sipas kushtit specifik të pacientit.',
      image: '🤝',
      date: '2024-11-01',
      readTime: '5 min'
    },
    {
      id: 2,
      category: 'exercise',
      categoryLabel: 'Ushtrime',
      title: 'Stërvitje Shtëpiake Për Shëndetin e Shpinës',
      excerpt: 'Mëso ushtimet më efektive për të forcuar shpinën dhe parandaluar shqetësimet.',
      content: 'Nuk keni nevojë të shkoni në gjimnastik për të patur shpinë të fortë. Këto 5 ushtrime të thjeshta mund të bëhen në shtëpi me 20 minuta në ditë. Ata janë të provuar shkencërisht për të forcuar muskujt e shpinës.\n\n1. Planks - 30 sekonda çdo ditë\n2. Bird dogs - 10 përsëritje për anë\n3. Superman holds - 15 sekonda\n4. Back extensions - 12 përsëritje\n5. Core breathing - 10 përsëritje',
      image: '💪',
      date: '2024-10-28',
      readTime: '4 min'
    },
    {
      id: 3,
      category: 'treatment',
      categoryLabel: 'Trajtime',
      title: 'Rehabilitimi Pas Lëndimit të Këmbës: Faza të Rëndësishme',
      excerpt: 'Përshkrim i plote i fazave të rikuperimit pas lëndimit të këmbës.',
      content: 'Rikuperimi nga një lëndim këmbe kalon përmes disa fazave të rëndësishme: faza e imobilizimit, faza e mobilizimit, faza e forcimit dhe faza e kthimit në aktivitet. Çdo fazë ka rëndësinë e vet dhe nuk duhet të nxitoni procesin.\n\nFaza e imobilizimit zgjat zakonisht 1-2 javë, faza e mobilizimit 2-3 javë, faza e forcimit 4-8 javë, dhe kthimi në aktivitet mund të zgjasë disa muaj.',
      image: '🦵',
      date: '2024-10-25',
      readTime: '6 min'
    },
    {
      id: 4,
      category: 'prevention',
      categoryLabel: 'Parandalim',
      title: 'Si Të Parandaloni Lëndimet Sportive Me Ngrohje Të Duhurit',
      excerpt: 'Mëso teknikat e ngrohjes për të parandaluar lëndimet gjatë bërjes se sporteve.',
      content: 'Ngrohja e duhur para sportit mund të zvogëlojë rrezikun e lëndimit deri në 50%. Ajo përgatit muskujt dhe artikulacionet për aktivitet më të intensiv. Ju duhet të ngroheni për 10-15 minuta para se të bëni çdo sport serioz.\n\nNgrohja duhet të përfshijë: qarkulluese lehtë (5 min), stretching dinamik (5 min), dhe progresiv rritje të intensitetit.',
      image: '🏃',
      date: '2024-10-20',
      readTime: '4 min'
    },
    {
      id: 5,
      category: 'therapy',
      categoryLabel: 'Terapi',
      title: 'Terapi Neurologjike: Fakt dhe Mite',
      excerpt: 'Zbuloni të vërtetën prapa mitet të zakonshme për terapinë neurologjike.',
      content: 'Shumë njerëz besojnë mite për terapinë neurologjike. Në realitet, ajo bazohet në shkencë të ngurtë dhe neuroplasticiteti i trurit. Terapeuti i aftësuar mund të ndihmojë pacientët të rikuperojnë funksionet e humbura përmes stërvitje të duhur.\n\nNeuroplasticiteti është aftësia e trurit për të formuar lidhje të reja neurale. Kjo do të thotë se edhe pas një aksidenti neurolog, mund të arrihet rikuperim i konsiderueshëm.',
      image: '🧠',
      date: '2024-10-15',
      readTime: '5 min'
    },
    {
      id: 6,
      category: 'exercise',
      categoryLabel: 'Ushtrime',
      title: 'Stretching Ditor: Më Shumë Se Thjesht Fleksibilitet',
      excerpt: 'Si zgjatja ditore ndikon në shëndetin tuaj përveç fleksibilitetit.',
      content: 'Stretching nuk vetëm e rrit fleksibilitetin por gjithashtu përmirëson qarkullimin, zvogëlon stres dhe përmirëson balancën. Kur e bëni stretching, bëje në mënyrë të ngadaltë dhe të kontrolluar për 20-30 sekonda.\n\nBëni stretching 2-3 herë në javë për rezultate optimale. Mos duhet të ndjeni dhimbje, vetëm një ndjenjë të lehtë të stretching-ut.',
      image: '🧘',
      date: '2024-10-10',
      readTime: '3 min'
    }
  ];

  return (
    <>
      <Header />
      <section className="blog-page">
      <div className="blog-page-hero">
        <div className="container">
          <Link to="/" className="back-link">← Kthehu në Shtëpi</Link>
          <h1>Blogu Ynë</h1>
          <p>Këshilla, ushtrime dhe informacion mbi fizioterapinë</p>
        </div>
      </div>

      <div className="container">
        <div className="blog-filters">
          <button 
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            Të Gjitha
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'therapy' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('therapy')}
          >
            Terapi
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'exercise' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('exercise')}
          >
            Ushtrime
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'treatment' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('treatment')}
          >
            Trajtime
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'prevention' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('prevention')}
          >
            Parandalim
          </button>
        </div>

        <div className="blog-posts-grid">
          {blogPosts
            .filter(post => selectedCategory === 'all' || post.category === selectedCategory)
            .map(post => (
            <article key={post.id} className="blog-post-card">
              <div className="blog-post-image">{post.image}</div>
              <div className="blog-post-content">
                <span className="blog-post-category">{post.categoryLabel}</span>
                <h2>{post.title}</h2>
                <p className="blog-post-excerpt">{post.excerpt}</p>
                <p className="blog-post-meta">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('sq-AL', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                  {' • '}{post.readTime}
                </p>
                <p className="blog-post-full-content">{post.content}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
