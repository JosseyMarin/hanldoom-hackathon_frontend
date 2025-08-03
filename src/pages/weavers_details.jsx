// WeaverDetail.jsx
import { useParams, Link } from 'react-router-dom';

const WeaverDetail = () => {
  const { id } = useParams();
  
  const weavers = [
    {
      id: 1,
      name: "Lakshmi Devi",
      age: "42 years",
      experience: "18 years",
      village: "Pochampally, Telangana",
      craft: "Ikat Saree",
      products: ["Silk Saree", "Cotton Saree", "Sico Dress Material"],
      priceRange: "₹2,500 – ₹4,500",
      certifications: ["UNWTO World Best Tourism Village"],
      contactMethods: { email: true, whatsapp: true },
      image: "https://example.com/lakshmi.jpg",
      bio: "Specializes in traditional Pochampally Ikat weaving techniques..."
    },
    // Other weavers...
  ];

  const weaver = weavers.find(w => w.id === parseInt(id));

  if (!weaver) return <div>Weaver not found</div>;

  return (
    <div className="weaver-detail">
      <Link to="/weavers" className="back-button">← Back to Weavers</Link>
      
      <h1>{weaver.name}</h1>
      
      <div className="weaver-info">
        <img src={weaver.image} alt={`Portrait of ${weaver.name}`} />
        
        <div className="details">
          <p><strong>Age:</strong> {weaver.age}</p>
          <p><strong>Experience:</strong> {weaver.experience}</p>
          <p><strong>Village:</strong> {weaver.village}</p>
          <p><strong>Craft:</strong> {weaver.craft}</p>
          
          <h3>Products</h3>
          <ul>
            {weaver.products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
          
          <p><strong>Price Range:</strong> {weaver.priceRange}</p>
          
          {weaver.certifications && (
            <>
              <h3>Certifications</h3>
              <ul>
                {weaver.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </>
          )}
          
          <h3>Contact Options</h3>
          <div className="contact-options">
            {weaver.contactMethods.email && <span>Email Available</span>}
            {weaver.contactMethods.whatsapp && <span>WhatsApp Available</span>}
          </div>
          
          <p className="bio">{weaver.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default WeaverDetail;