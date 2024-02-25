import React from 'react'
import './OurServices.scss'

const OurServices = ({ service }) => {
    return (
        <>
            <div className="our-services d-flex p-4">
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
        </>
    )
}

export default OurServices
