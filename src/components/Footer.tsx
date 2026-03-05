
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <img src="/logo.jpeg" alt="Tripex World Logo" className="logo-img" style={{ height: '50px', width: 'auto' }} />
                        </h2>
                        <p>
                            Your trusted partner for global tours and travel. We turn your dream vacations into reality with premium, hassle-free travel packages.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                            <a href="#" style={{ color: 'white', opacity: 0.8 }}><Facebook size={20} /></a>
                            <a href="#" style={{ color: 'white', opacity: 0.8 }}><Instagram size={20} /></a>
                            <a href="#" style={{ color: 'white', opacity: 0.8 }}><Twitter size={20} /></a>
                            <a href="#" style={{ color: 'white', opacity: 0.8 }}><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#destinations">Destinations</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="#services">Flight Deals</a></li>
                            <li><a href="#services">Hotel Bookings</a></li>
                            <li><a href="#services">Visa Assistance</a></li>
                            <li><a href="#services">Holiday Packages</a></li>
                            <li><a href="#services">Cruise Booking</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Tripex World. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
