// WeaversOverview.jsx
import { Link } from 'react-router-dom';

const WeaversOverview = () => {
  const weavers = [
    {
      id: 1,
      name: "Lakshmi Devi",
      experience: "18 years",
      village: "Pochampally, Telangana",
      craft: "Ikat Saree",
      image: "https://example.com/lakshmi.jpg"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      experience: "15 years",
      village: "Chowtuppal, Telangana",
      craft: "Ikat Silk",
      image: "https://example.com/rajesh.jpg"
    },
    {
      id: 3,
      name: "Sunita Reddy",
      experience: "22 years",
      village: "Bhoodan Pochampally, Telangana",
      craft: "Cotton Ikat",
      image: "https://example.com/sunita.jpg"
    }
  ];

  return (
    <div className="weavers-overview">
      <h2>Our Skilled Weavers</h2>
      <div className="weavers-grid">
        {weavers.map(weaver => (
          <div key={weaver.id} className="weaver-card">
            <img src={weaver.image} alt={weaver.name} />
            <h3>{weaver.name}</h3>
            <p><strong>Experience:</strong> {weaver.experience}</p>
            <p><strong>Village:</strong> {weaver.village}</p>
            <p><strong>Specialty:</strong> {weaver.craft}</p>
            <Link to={`/weavers/${weaver.id}`} className="view-details-btn">
              View Full Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeaversOverview;