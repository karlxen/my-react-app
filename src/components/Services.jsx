import Navbar from './Navbar'; // Assuming you have a Navbar component
import '../assets/css/Service.css'; // Importing the external stylesheet

const Services = () => {
  const scrollServices = (direction) => {
    const scrollContainer = document.getElementById('scroll-container');
    const scrollAmount = direction * 300;
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="services-page"> {/* Apply the services-page class here */}
      <Navbar />
      <div className="servicesw3-container w3-content">
        <h2 className="w3-wide w3-center">SERVICES</h2>
        <p className="service-header w3-center"><i>What We Offer</i></p>

        <button className="scroll-button scroll-left-btn" onClick={() => scrollServices(-1)}>
          &#10094;
        </button>
        <div className="services-container" id="scroll-container">
          {/* Service boxes */}
          <div className="service-box">
            <img
              src="https://thearchitectsdiary.com/wp-content/uploads/2023/02/Arch2O-architectural-sketching-10-architecture-sketching-tips-1-1024x585.jpg"
              alt="Architectural Design Image"
            />
            <h3>Architectural Design</h3>
            <p>Creating innovative architectural designs that meet your needs and exceed your expectations.</p>
          </div>
          <div className="service-box">
            <img
              src="https://blog.novatr.com/hubfs/The%20process%20of%20interior%20designing.jpg"
              alt="Interior Design Image"
            />
            <h3>Interior Design</h3>
            <p>Transforming spaces with personalized interior design solutions that reflect your style.</p>
          </div>
          <div className="service-box">
            <img
              src="https://www.aacc.edu/media/college/images/areas-of-study/architecture/Landscape-Architecture_shutterstock_366207515_1200x600_optimzed.jpg"
              alt="Landscape Design Image"
            />
            <h3>Landscape Design</h3>
            <p>Enhancing outdoor spaces with creative landscape designs that blend beauty and functionality.</p>
          </div>
          <div className="service-box">
            <img
              src="https://www.chitkara.edu.in/blogs/wp-content/uploads/2024/03/The-Intersection-of-Archite.jpg"
              alt="Urban Planning Image"
            />
            <h3>Urban Planning</h3>
            <p>Developing sustainable urban plans that promote community and environmental wellness.</p>
          </div>
          <div className="service-box">
            <img
              src="https://cdn-wordpress-info.futurelearn.com/wp-content/uploads/FL_3D_Modelling_Blog_Header_1500x750.jpg.optimal.jpg"
              alt="3D Modeling Image"
            />
            <h3>3D Modeling</h3>
            <p>Utilizing advanced technology to create realistic 3D models for project visualization.</p>
          </div>
          <div className="service-box">
            <img
              src="https://www.probuilder.com/sites/default/files/pb/project%20management.jpg"
              alt="Project Management Image"
            />
            <h3>Project Management</h3>
            <p>Providing comprehensive project management services to ensure timely and successful project delivery.</p>
          </div>
          <div className="service-box">
            <img
              src="https://bgcconsultants.in/wp-content/uploads/2021/11/three-boxes-img-1.jpg"
              alt="Consultation Image"
            />
            <h3>Consultation</h3>
            <p>Offering expert consultations to guide you through every step of your architectural journey.</p>
          </div>
          <div className="service-box">
            <img
              src="https://www.shutterstock.com/image-photo/home-design-architects-reviewing-house-600nw-2272662721.jpg"
              alt="Custom Design Image"
            />
            <h3>Custom Design</h3>
            <p>Crafting unique design solutions tailored to your specific requirements and vision.</p>
          </div>
        </div>

        <button className="scroll-button scroll-right-btn" onClick={() => scrollServices(1)}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Services;
