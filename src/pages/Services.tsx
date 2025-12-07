import React from "react";
import ServicesCard from "../components/ServicesCard";
import "./Services.css";

const Services = () => {
  return (
    <div className="service-container">
      <h1>Services</h1>

      <ServicesCard
        img="/images/services/1.jpg"
        header="Design & Branding"
        text="Branding design includes logos, colors, typography, and design elements that help make your brand recognizable."
        buttonText="ORDER NOW"
      />

      <ServicesCard
        img="/images/services/2.jpg"
        header="Coating Cylinder"
        text="Plasma coating replaces sleeves, allows thinner walls between engine bores, and improves performance."
        buttonText="ORDER NOW"
      />

      <ServicesCard
        img="/images/services/3.jpg"
        header="Packet Printing"
        text="Packaging design combines form, structure, materials, imagery, and text to support marketing."
        buttonText="ORDER NOW"
      />

      <ServicesCard
        img="/images/services/4.jpg"
        header="Printing Cylinder"
        text="Printing cylinders are used in gravure & flexo printing and are processed in round form."
        buttonText="ORDER NOW"
      />

      <ServicesCard
        img="/images/services/5.jpg"
        header="Packet Designing"
        text="Flexographic printing plates are flexible photopolymer plates used to transfer ink to various materials."
        buttonText="ORDER NOW"
      />

      <ServicesCard
        img="/images/services/6.jpg"
        header="Flexography Photopolymer Plate"
        text="These photopolymer plates are essential for flexo printing to print on flexible materials."
        buttonText="ORDER NOW"
      />
    </div>
  );
};

export default Services;
