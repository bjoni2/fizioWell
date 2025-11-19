import '../styles/Blog.css';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      category: 'therapy',
      title: 'Terapi Manuale: Si Ndihmon në Dhimbjen Kronike',
      excerpt: 'Zbulim se si teknikat manuale mund të lehtësojnë dhimbjen kronike dhe ta rikthejnë lëvizshmërinë.',
      image: '🤝',
      date: '2024-11-01',
      readTime: '5 min'
    },
    {
      id: 2,
      category: 'exercise',
      title: 'Ushtrime në Shtëpi për Shëndetin e Shpinës',
      excerpt: 'Mëso ushtimet më efektive për forcimin e shpinës dhe prevenim të problemeve.',
      image: '💪',
      date: '2024-10-28',
      readTime: '4 min'
    },
    {
      id: 3,
      category: 'treatment',
      title: 'Rehabilitimi Pas Lëndimit të Këmbës',
      excerpt: 'Përshkrimi i plotë i fazave të rikuperimit pas një lëndimi.',
      image: '🦵',
      date: '2024-10-25',
      readTime: '6 min'
    }
  ];

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="blog-header">
          <h2>Blog & Këshilla</h2>
          <p className="section-subtitle">Mëso më shumë për fizioterapinë, ushtrimet dhe shëndetin</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">{post.image}</div>
              <div className="blog-content">
                <span className="blog-category">{post.category}</span>
                <h3>{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <p className="blog-details">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('sq-AL', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                  {' • '}{post.readTime}
                </p>
              </div>
              <button className="read-more-btn">Lexo më shumë</button>
            </article>
          ))}
        </div>

        <div className="blog-footer">
          <a href="/blog" className="view-all-btn">
            Shiko të Gjithë Artikujt →
          </a>
        </div>
      </div>
    </section>
  );
}
