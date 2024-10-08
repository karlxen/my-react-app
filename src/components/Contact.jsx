import React from 'react';
import Navbar from './Navbar'; // Adjust the import path as necessary
import './cstyle.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <Navbar />
            <div className="contact-section slide-in">
                <h2 className="w3-wide w3-center">CONTACT US</h2>
                <p className="w3-opacity w3-center"><i>We would love to hear from you!</i></p>

                <form action="submit_form.php" method="post" className="fade-in">
                    <div className="w3-row-padding w3-margin-bottom">
                        <div className="w3-half">
                            <label htmlFor="name"><b>Name</b></label>
                            <input className="w3-input w3-border" type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="w3-half">
                            <label htmlFor="email"><b>Email</b></label>
                            <input className="w3-input w3-border" type="email" id="email" name="email" placeholder="Your Email" required />
                        </div>
                    </div>

                    <label htmlFor="message"><b>Message</b></label>
                    <textarea className="w3-input w3-border" id="message" name="message" rows="5" placeholder="Your Message" required></textarea>

                    <button className="w3-button w3-black w3-margin-top w3-hover-shadow" type="submit">Send Message</button>
                </form>

                <div className="fade-in">
                    <h3 className="w3-center w3-margin-top">Our Location</h3>
                    <iframe className="contact-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.2897214791333!2d126.95936205015741!3d37.52466720020121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1dfe9605e1f%3A0x3d65021f362cdfde!2sPledis%20Entertainment!5e0!3m2!1sen!2sph!4v1726984564527!5m2!1sen!2sph"
                        allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>

            <footer className="footer">
                <p>© 2024 Atelier In. All rights reserved.</p>
            </footer>
            </div>
    );
};

export default Contact;
