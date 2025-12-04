import React from "react";
import "./ServicesCard.css";
import { Link } from "react-router-dom";

interface Props {
  header: string;
  text: string;
  buttonText: string;
  img: string;
}

const ServicesCard = ({ img, header, text, buttonText }: Props) => {
  return (
    <div className="service-row">
      <div className="service-row-img">
        <img src={img} alt={header} />
      </div>

      <div className="service-row-content">
        <h2>{header}</h2>
        <p>{text}</p>
        <Link to="/order" className="service-btn">
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
