import { MapPin } from 'lucide-react';

const destinations = [
    {
        id: 'thailand',
        name: 'Thailand',
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800',
        description: 'Land of Smiles, ancient temples, and stunning beaches.'
    },
    {
        id: 'singapore',
        name: 'Singapore',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800',
        description: 'Modern marvels, Gardens by the Bay, and rich culture.'
    },
    {
        id: 'bali',
        name: 'Bali',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
        description: 'Tropical paradise, spiritual retreats, and vibrant nightlife.'
    },
    {
        id: 'malaysia',
        name: 'Malaysia',
        image: '/malaysia.jpg',
        description: 'Diverse landscapes, iconic Petronas Towers, and rainforests.'
    },
    {
        id: 'australia',
        name: 'Australia',
        image: '/australia.jpg',
        description: 'Great Barrier Reef, Outback adventures, and Sydney Opera House.'
    }
];

const Destinations: React.FC = () => {
    return (
        <section id="destinations" className="section container">
            <h2 className="section-title">Top Destinations</h2>
            <p className="section-subtitle">
                Explore our curated selection of breathtaking locations across the globe. Unforgetable experiences await.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {destinations.map((dest, index) => (
                    <div
                        key={dest.id}
                        className={`destination-card ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                    >
                        <img src={dest.image} alt={dest.name} className="destination-img" />
                        <div className="destination-overlay">
                            <div className="destination-info">
                                <h3>{dest.name}</h3>
                                <p><MapPin size={16} color="#38BDF8" /> {dest.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Destinations;
