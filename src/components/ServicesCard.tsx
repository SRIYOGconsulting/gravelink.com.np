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
        <img src={img} alt={header} className="services-img" />
      </div>

      <div className="service-card-right">
        <div>
          <div className="services-header">
            <h4>{header}</h4>
          </div>
          
            <p>{text}</p>
          
          <div>
          </div>
        </div>
        <Link to="/order" className="service-btn">
          {buttonText}
        </Link>

      </div>
    </div>
  );
};

export default ServicesCard;
