import React from "react";
import { Link } from "react-router-dom";

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
        <img src={img} alt={header} className="service-img" />
      </div>

      <div className="service-card-right">
        <h4>{header}</h4>
        <p>{text}</p>
        <Link to="/order" className="service-btn">
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
