import React from 'react'
import './Services.css'
import ServicesCard from '../components/ServicesCard'

const Services = () => {
    return (
        <div className='service-container'>

            <h1>Services</h1>
            <div >
                <ServicesCard header={"Design & Branding"}
                    text="When talking about branding design,
            it typically refers to key brand elements such as the logo, color scheme,
             typography, and other design components that makes a brand stand out from competitors,
             and recognizable to consumers." buttonText="ORDER NOW" />
            </div>
            <ServicesCard header={"Coating Cylinder"}
                text="The plasma coating of the cylinder bores is able to replace the pressing,
               shrinking, casting-in of cylinder sleeves or the use of expensive, nickel containing galvanic plating processes.
               By replacing sleeves the wall thickness between the individual bores of the engine blocks can be made much thinner."

                buttonText="ORDER NOW" />
            <ServicesCard header={"Packet Printing"} text="Packaging design is the connection of form,
            structure, materials, colour, imagery, typography, and regulatory information with
            ancillary design elements to make a product suitable for marketing.” To put that into
            a simpler form: Your packaging is an element of your marketing strategy."
                buttonText="ORDER NOW" />
            <ServicesCard header={"Printing Cylinder"} text="Printing cylinders are round printing forms that are required in gravure and flexo printing. In contrast to printing plates, which are produced in flat form, printing cylinders are already processed and imaged when round."
                buttonText="ORDER NOW" />
            <ServicesCard header={"Flexography Photopolymer Plate"} text="Flexographic printing plates are flexible photopolymer plates,
                 used in flexo printing to transfer ink & images to a flexible substrate, such as paper or film."
                buttonText="ORDER NOW" />

           
        </div>
    )
}

export default Services
