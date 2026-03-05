import React, { useState } from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        purpose: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // WhatsApp logic
        const phoneNumber = '7300099597';
        const text = `Hello Tripex World,%0A%0AMy Name: ${formData.name}%0APhone Number: ${formData.number}%0ATrip Purpose: ${formData.purpose}%0A%0AMessage:%0A${formData.message}`;

        const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${text}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" className="section container contact-section">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">
                Ready to start your adventure? Get in touch with our travel experts today.
            </p>

            <div className="contact-container">
                <div className="contact-info-block">
                    <h3>Let's Plan Your Perfect Trip</h3>
                    <p>We're here to help you design the travel experience of a lifetime. Drop us a message or visit our office.</p>

                    <div className="contact-details">
                        <div className="contact-detail-item">
                            <Phone className="contact-detail-icon" />
                            <div>
                                <strong>Phone</strong>
                                <p>+91 73000 99597</p>
                            </div>
                        </div>

                        <div className="contact-detail-item">
                            <Mail className="contact-detail-icon" />
                            <div>
                                <strong>Email</strong>
                                <p>info@tripexworld.com</p>
                            </div>
                        </div>


                        <div className="contact-detail-item">
                            <Clock className="contact-detail-icon" />
                            <div>
                                <strong>Business Hours</strong>
                                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="number">WhatsApp Number</label>
                            <input
                                type="tel"
                                id="number"
                                name="number"
                                className="form-control"
                                placeholder="+91 00000 00000"
                                value={formData.number}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="purpose">Purpose of Trip</label>
                            <select
                                id="purpose"
                                name="purpose"
                                className="form-control"
                                value={formData.purpose}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select Purpose</option>
                                <option value="Leisure/Vacation">Leisure / Vacation</option>
                                <option value="Business Trip">Business Trip</option>
                                <option value="Honeymoon">Honeymoon</option>
                                <option value="Family Gathering">Family Gathering</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message / Query</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-control"
                                placeholder="Tell us about your dream destination..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                            Send Message via WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
