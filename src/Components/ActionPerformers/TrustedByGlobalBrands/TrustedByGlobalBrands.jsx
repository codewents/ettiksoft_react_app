import React from 'react'
import './TrustedByGlobalBrands.scss'
import client_one from '../../../Assets/images/our-client-img-1.png'
import client_two from '../../../Assets/images/our-client-img-2.png'
import client_three from '../../../Assets/images/our-client-img-3.png'
import client_four from '../../../Assets/images/our-client-img-4.png'

const TrustedByGlobalBrands = () => {
  return (
    <div className="trusted-brands-comtainer bg-dark p-4">
      <h1 className='text-center'>
        Trusted by Global Brands
      </h1>
      <div className="brands-list d-flex justify-content-evenly mt-5 mb-3">
          <img src={client_one} className = "client-image image-fluid" alt="" srcset="" />
          <img src={client_two} className = "client-image image-fluid" alt="" srcset="" />
          <img src={client_three} className = "client-image image-fluid" alt="" srcset="" />
          <img src={client_four} className = "client-image image-fluid" alt="" srcset="" />

      </div>
    </div>
  )
}

export default TrustedByGlobalBrands