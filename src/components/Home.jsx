import React, { useEffect, useState, useRef } from 'react';
import Navbar from './Navbar'; // Importing the Navbar component
import './hstyle.css'; // Importing the external stylesheet

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const contentRef = useRef(null); // Ref for the content that will animate on scroll

  // Handle scrolling effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll-based animation for content
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const sections = document.querySelectorAll('.fade-up');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div style={{ scrollBehavior: 'smooth' }}> {/* Smooth scroll behavior */}
      {/* Import Navbar */}
      <Navbar />

      {/* Header Image with Fade-in Effect */}
      <div
        className={`header-image ${scrolled ? 'scrolled' : ''}`}
        style={{
          backgroundImage: 'url("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7e410935958631.57b97ba56e68b.jpg")',
        }}
      >
        <h1>ATELIER IN</h1>
      </div>

      {/* Welcome Section with Fade-up Effect */}
      <div
        ref={contentRef} // Ref to observe this section
        className="w3-container w3-content fade-up"
      >
        <h2 className="section-title">Welcome to Atelier In</h2>
        <p className="section-content">
          Atelier In is a premier architectural firm dedicated to transforming your vision into reality. With a focus on innovative design, sustainability, and excellence, we create spaces that inspire and connect. Explore our world of architecture and discover how we can help shape yours.
        </p>
        <img
          src="https://images.unsplash.com/photo-1491557345352-5929e343eb89?fit=crop&w=1200&q=80"
          alt="Architectural Design"
        />
      </div>

      {/* Why Choose Us Section with Fade-up Effect */}
      <div className="w3-container fade-up">
        <h2 className="section-title">Why Choose Us?</h2>
        <p className="section-content">
          With over a decade of experience, Atelier In has established itself as a leader in the architectural industry. Our commitment to quality, creativity, and client satisfaction sets us apart. Join us on a journey where every project is a masterpiece, and every design tells a story.
        </p>
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?fit=crop&w=1200&q=80"
          alt="Construction Site"
        />
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 Atelier In. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
