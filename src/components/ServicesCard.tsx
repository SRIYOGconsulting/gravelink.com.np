import React from "react"
import './ServicesCard.css'
import { Link } from "react-router-dom"


interface Props{
    header:String,
    text:String,
    buttonText:String,
}

 const ServicesCard = ({ header, text, buttonText }:Props) => {
    return (
        <div  className="services-card-container">
            <h2 >{header}</h2>
            <p className="text">{text}</p>
            <div className="services-link">
            <Link to={'../order'} className="service-card-link">{buttonText}</Link>
            </div>
        </div>
    )
}


export default ServicesCard