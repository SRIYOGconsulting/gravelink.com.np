import React from "react";
import "./ServicesCard.css";

interface Props {
  header: string;
  text: string;
  buttonText: string;
  img: string;
}

const ServicesCard = ({ img, header, text, buttonText }: Props) => {
  return (
    <div className="service-card">
      <div className="service-card-left">
        <img src={img} alt={header} className="service-card-image" />
      </div>

      <div className="service-card-right">
        <h2>{header}</h2>
        <p>{text}</p>
        <a href="/order" className="service-btn">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default ServicesCard;
