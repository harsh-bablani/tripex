
import { Plane, Hotel, Briefcase, Compass, Anchor, Heart, Users, Wand2 } from 'lucide-react';

const services = [
    {
        id: 'flights',
        title: 'Flight Tickets',
        description: 'We offer best deals on domestic and international flights securely and swiftly.',
        icon: <Plane size={36} />
    },
    {
        id: 'hotels',
        title: 'Hotels',
        description: 'From budget-friendly to luxury resorts, find your perfect stay worldwide.',
        icon: <Hotel size={36} />
    },
    {
        id: 'visa',
        title: 'Visa Services',
        description: 'Hassle-free visa assistance with our expert documentation team.',
        icon: <Briefcase size={36} />
    },
    {
        id: 'tours',
        title: 'Domestic & International Tours',
        description: 'Curated tour packages designed for solo travelers, couples, and families.',
        icon: <Compass size={36} />
    },
    {
        id: 'cruises',
        title: 'Cruise Bookings',
        description: 'Sail the seas with premium cruise lines offering unforgettable journeys.',
        icon: <Anchor size={36} />
    },
    {
        id: 'honeymoon',
        title: 'Honeymoon Packages',
        description: 'Romantic getaways tailored for newlyweds to create lifelong memories.',
        icon: <Heart size={36} />
    },
    {
        id: 'group',
        title: 'Group Tours',
        description: 'Exciting and well-coordinated group travel for friends, families, or corporate teams.',
        icon: <Users size={36} />
    },
    {
        id: 'custom',
        title: 'Customized Packages',
        description: 'Personalized itineraries crafted from scratch to perfectly match your preferences.',
        icon: <Wand2 size={36} />
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="section services-section">
            <div className="container">
                <h2 className="section-title">Our Services</h2>
                <p className="section-subtitle">
                    Comprehensive travel solutions tailored to make your journey smooth and memorable.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <div className="service-icon-wrapper">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
