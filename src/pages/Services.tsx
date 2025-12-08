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
        text="When talking about branding design, it typically refers to key brand elements such as the logo, color scheme, typography, and other design components that makes a brand stand out from competitors, and recognizable to consumers."
        buttonText="ORDER NOW"
      />

      <ServicesCard
        img="/images/services/2.jpg"
        header="Coating Cylinder"
        text="The plasma coating of the cylinder bores is able to replace the pressing, shrinking, casting-in of cylinder sleeves or the use of expensive, nickel containing galvanic plating processes. By replacing sleeves the wall thickness between the individual bores of the engine blocks can be made much thinner."
        buttonText="ORDER NOW"
      />

      <ServicesCard
        img="/images/services/3.jpg"
        header="Packet Printing"
        text="Packaging printing means any lithographic, flexographic, gravure, or letterpress printing that results in identifying or beautifying paper, paperboard, or cardboard products to be used as containers, enclosures, wrappings, or boxes."
        buttonText="ORDER NOW"
      />

      <ServicesCard
        img="/images/services/4.jpg"
        header="Printing Cylinder"
        text="Printing cylinders are round printing forms that are required in gravure and flexo printing. In contrast to printing plates, which are produced in flat form, printing cylinders are already processed and imaged when round."
        buttonText="ORDER NOW"
      />

      <ServicesCard
        img="/images/services/5.jpg"
        header="Packet Designing"
        text="Packaging design is the connection of form, structure, materials, colour, imagery, typography, and regulatory information with ancillary design elements to make a product suitable for marketing.” To put that into a simpler form: Your packaging is an element of your marketing strategy."
        buttonText="ORDER NOW"
      />

      <ServicesCard
        img="/images/services/6.jpg"
        header="Flexography Photopolymer Plate"
        text="Flexographic printing plates are flexible photopolymer plates, used in flexo printing to transfer ink & images to a flexible substrate, such as paper or film."
        buttonText="ORDER NOW"
      />
    </div>
  );
};

export default Services;
