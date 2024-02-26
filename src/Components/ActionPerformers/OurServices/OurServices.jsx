import React from 'react'
import './OurServices.scss'
import AutomotiveComponent from './AutomotiveComponent/AutomotiveComponent'

const OurServices = ({ service, reverse }) => {
    return (
        <>
            {service.service !== "Automotive" && (
                <div className={reverse === true ? 'our-services d-flex mt-5 flex-row-reverse' : "our-services d-flex mt-5"}>
                    <div className="service-content d-flex align-item-center justify-content-center flex-column">
                        <h1 className='service-content-header text-center'>
                            {service.heading}
                        </h1>
                        <p className='service-content-para m-0 p-5'>
                            {service.paragraph}
                        </p>
                    </div>
                    <img className='service-image' src={service.imagePath} alt="" srcset="" />
                </div>
            )}
            {service.service === "Automotive" && (
                <AutomotiveComponent />
            )}
        </>
    )
}

export default OurServices
