import React from 'react';
import TraditionalCraftsmanship from '../assets/Traditional-Craftsmanship.jpg';
import Suitableandauthentic from '../assets/Suitable-and-Authentic.jpg';

const InfoSection = () => {
  const infoCards = [
    {
      title: "Traditional Craftsmanship",
      description: "Handloom weaving is an ancient craft that has been passed down through generations, preserving cultural heritage and traditional techniques.",
      image: TraditionalCraftsmanship,
      alt: "Handloom weaving"
    },
    {
      title: "Sustainable and Authentic",
      description: "Handloom products are eco-friendly, using natural fibers and minimal energy compared to machine-made textiles.",
      image: Suitableandauthentic,
      alt: "Sustainable fashion"
    },
    {
      title: "Supporting Artisans",
      description: "By choosing handloom, you support rural artisans and help sustain their livelihoods and traditional skills.",
      image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Weaver community"
    }
  ];

  return (
    <section className="info-section" id="about">
      <h2 className="section-title">About Handloom Weaving</h2>
      <div className="info-cards">
        {infoCards.map((card, index) => (
          <div className="info-card" key={index}>
            <div className="card-img">
              <img src={card.image} alt={card.alt} />
            </div>
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;