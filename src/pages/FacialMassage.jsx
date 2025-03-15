import React from "react";
import "./FacialMassage.css";
import GlowFacial from "../assets/image copy.png";
import HydratingFacial from "../assets/Picsart_25-03-01_10-41-08-388.jpg";       
import AntiAgingFacial from "../assets/Picsart_25-03-01_10-41-40-668.jpg";
import RelaxingMassage from "../assets/PURPLE.jpg";
import DeepTissueMassage from "../assets/UntitledLogo.png";
import AromatherapyMassage from "../assets/vilot2.jpg";

const FacialMassage = () => {
  const facialServices = [
    { name: "Glow Facial", image: GlowFacial, details: "Achieve radiant skin with our glow facial treatment." },
    { name: "Hydrating Facial", image: HydratingFacial, details: "Deep hydration for a fresh and youthful look." },
    { name: "Anti-Aging Facial", image: AntiAgingFacial, details: "Reduce wrinkles and fine lines with this treatment." },
  ];

  const massageServices = [
    { name: "Relaxing Massage", image: RelaxingMassage, details: "Unwind with a soothing full-body massage." },
    { name: "Deep Tissue Massage", image: DeepTissueMassage, details: "Relieve muscle tension with deep tissue techniques." },
    { name: "Aromatherapy Massage", image: AromatherapyMassage, details: "Enhance relaxation with aromatic oils." },
  ];

  return (
    <div className="facial-massage-container">
      {/* Page Header */}
      <h2 className="page-title">💆‍♀️ Facial & Massage Services</h2>
      <p className="page-description">
        Pamper yourself with our luxurious facials and relaxing massages!
      </p>

      {/* Facial Services Section */}
      <div className="services-section">
        <h3 className="section-title">🌿 Facial Treatments</h3>
        <div className="service-grid">
          {facialServices.map((service, index) => (
            <div key={index} className="service-card">
              <div className="card-inner">
                <div className="card-front">
                  <img src={service.image} alt={service.name} className="service-image" />
                </div>
                <div className="card-back">
                  <h4>{service.name}</h4>
                  <p>{service.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Massage Services Section */}
      <div className="services-section">
        <h3 className="section-title">💆‍♂️ Massage Therapy</h3>
        <div className="service-grid">
          {massageServices.map((service, index) => (
            <div key={index} className="service-card">
              <div className="card-inner">
                <div className="card-front">
                  <img src={service.image} alt={service.name} className="service-image" />
                </div>
                <div className="card-back">
                  <h4>{service.name}</h4>
                  <p>{service.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacialMassage;