import { useState } from 'react';
import '../styles/InstagramFeed.css';

export default function InstagramFeed() {
  // This component demonstrates how to add Instagram integration
  // You can implement this in multiple ways:

  return (
    <section id="instagram" className="instagram-section">
      <div className="container">
        <h2>Na Ndiqni në Instagram</h2>
        <p className="section-subtitle">Shikoni përditësimet më të fundit, këshilla dhe stori nga FizioWell</p>

        {/* Option 1: Embedded Instagram Feed (requires HTML Meta Business Partner API) */}
        <div className="instagram-embed">
          <a href="https://www.instagram.com/fiziowellclinic/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="instagram-link">
            <span className="instagram-icon">📸</span>
            <span>@fiziowellclinic</span>
            <span className="follow-btn">Ndiqni</span>
          </a>
        </div>

        {/* Option 2: Display Instagram posts manually if API is set up */}
        <div className="instagram-posts">
          {/* Posts would be fetched from Instagram API and displayed here */}
        </div>

        <p className="instagram-note">
          Vazhdoni të na ndiqni për këshilla ditore, stori rehabilitimi dhe përditësime të klinikan tonë.
        </p>
      </div>
    </section>
  );
}
