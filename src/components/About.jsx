import Navbar from './Navbar'; // Adjust the import path as necessary
import '../assets/css/About.css'; // Ensure to import your CSS here

const About = () => {
  return (
    <div className="about-page"> {/* Added the about-page class here */}
      <Navbar />
      <div className="about-container w3-content w3-padding-64 fade-in" style={{ marginTop: '80px' }}>
        <h2 className="w3-wide w3-center">ABOUT</h2>
        <p className="w3-opacity w3-center"><i>Who We Are</i></p>
        <p className="w3-justify">
          At Atelier In, we are passionate about architecture and design. With a team of experienced architects and designers, we strive to create innovative and sustainable spaces that inspire and engage. Our commitment to excellence and attention to detail sets us apart in the industry, ensuring that every project we undertake is a testament to our dedication to quality and creativity.
          <br /><br />
          Whether you&apos;re looking to design a new home, renovate an existing space, or undertake a large-scale commercial project, our team is here to guide you through every step of the process. Explore our portfolio to see examples of our work and get in touch with us to discuss how we can bring your vision to life.
        </p>
      </div>

      <div className="about-container w3-content w3-padding-64 fade-in" style={{ textAlign: 'center' }}>
        <h2 className="w3-wide">Meet Our Team</h2>
        <div className="team-member">
          <img src="https://i.pinimg.com/736x/5f/b0/67/5fb0674d0565befff3bc993ba7fe747f.jpg" alt="Team Member 1" />
          <h3>Jeonghan Yoon</h3>
          <p>CEO</p>
        </div>
        <div className="team-member">
          <img src="https://i.pinimg.com/736x/c0/92/e3/c092e3c434a281f47ea4e9fbc8a357ad.jpg" alt="Team Member 2" />
          <h3>Joshua Hong</h3>
          <p>Lead Architect</p>
        </div>
        <div className="team-member">
          <img src="https://pbs.twimg.com/media/F4ikAyiaEAAD-ds.jpg" alt="Team Member 3" />
          <h3>Heeseung Lee</h3>
          <p>Interior Designer</p>
        </div>
        <div className="team-member">
          <img src="https://pbs.twimg.com/media/F4ikAyXaIAE-Ml4.jpg" alt="Team Member 4" />
          <h3>Jake Sim</h3>
          <p>Project Manager</p>
        </div>
        <div className="team-member">
          <img src="https://i.pinimg.com/564x/b1/a4/45/b1a44537c75b50c20ee8c7422b861e02.jpg" alt="Team Member 5" />
          <h3>Mark Lee</h3>
          <p>Landscape Architect</p>
        </div>
        <div className="team-member">
          <img src="https://i.pinimg.com/474x/12/81/91/128191f0b0e31ca462c7302b75ecf276.jpg" alt="Team Member 6" />
          <h3>Haechan Lee</h3>
          <p>Urban Planner</p>
        </div>
      </div>

      <footer className="footer">
        <p>© 2024 Atelier In. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
