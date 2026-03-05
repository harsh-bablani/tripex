
import { ArrowRight, Globe } from 'lucide-react';

const Hero: React.FC = () => {
    const scrollToDestinations = () => {
        document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero">
            <img
                src="https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=1920&auto=format&fit=crop"
                alt="Beautiful tropical destination"
                className="hero-bg"
            />
            <div className="hero-overlay"></div>

            <div className="hero-content animate-fade-in">
                <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <Globe size={64} className="text-secondary" color="#38BDF8" />
                    Tripex World
                </h1>
                <p style={{ fontSize: '1.5rem', fontWeight: 300, marginBottom: '1rem' }}>
                    Global Tour & Travel Company
                </p>
                <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: '1.8' }}>
                    Discover the world's most breathtaking destinations with our premium, hassle-free travel packages curated just for you.
                </p>

                <div className="hero-buttons">
                    <button onClick={scrollToDestinations} className="btn btn-primary">
                        Explore Destinations <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                    </button>
                    <button onClick={scrollToContact} className="btn btn-outline">
                        Plan Your Trip
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
