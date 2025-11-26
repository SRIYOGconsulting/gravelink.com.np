import React from "react"
import './ServicesCard.css'


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
            <button className="btn">{buttonText}</button>
        </div>
    )
}


export default ServicesCard