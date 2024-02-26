import React from 'react'
import image1 from '../../../Assets/images/contact-us/contact_section1.svg';
import EttiksoftInput from '../../../Components/DataProviders/EttiksoftInput';
import './ContactUsPage.scss'
import { Link } from 'react-router-dom';

import TrustedByGlobalBrands from '../../../Components/ActionPerformers/TrustedByGlobalBrands/TrustedByGlobalBrands'
const ContactUsPage = () => {
  return (
    <div className="contact-us-container">
      <div className="part-one d-flex justify-content-evenly align-items-center mt-5">
        <div className="contact-us-content d-flex flex-column">
          <h1>
            Contact us
          </h1>
          <p className='text-justify'>
            Having any questions about our products and services or looking for sales support. Our team is happy to answer your questions. Fill out the form, and we’ll be in touch as soon as possible.
          </p>
          <img src={image1} alt="" srcset="" className='contact-us-grp-img' />
        </div>
        <div className="contact-us-form bg-dark p-5">
          <form>
            <div className="d-flex align-items-center" style={{ 'gap': '1rem' }}>
              <EttiksoftInput type={'text'} label={'First Name*'} />
              <EttiksoftInput type={'text'} label={'Last Name*'} />
            </div>
            <EttiksoftInput type={'text'} label={'Business Email'} />
            <EttiksoftInput type={'text'} label={'Business Name'} />
            <div className="d-flex" style={{ 'gap': '1rem' }}>
              <EttiksoftInput type={'text'} label={'ext'} />
              <EttiksoftInput type={'text'} label={'Contact'} />
            </div>
            <EttiksoftInput type={'text'} label={'Product'} />
            <EttiksoftInput type={'text'} label={'Type of Query'} />
            <EttiksoftInput type={'text'} label={'Your Message'} />
          </form>
        </div>
      </div>
      {/* <div className="part-two mt-5 mb-3 bg-dark">
        <div className="info-card d-flex p-5">
          <div className="product-support">
            <img src={image1} alt="" srcset="" className='contact-us-grp-img' height={100} width={100}/>
            <h1>Product Support</h1>
            <p>Looking for a demo, or have questions about our products and pricing?</p>
            <Link>sales@ettiksoft.com</Link>
          </div>
          <hr />
          <div className="product-support">
            <img src={image1} alt="" srcset="" className='contact-us-grp-img' height={100} width={100}/>
            <h1>Product Support</h1>
            <p>Looking for a demo, or have questions about our products and pricing?</p>
            <Link>sales@ettiksoft.com</Link>
          </div>
          <hr />
          <div className="product-support">
            <img src={image1} alt="" srcset="" className='contact-us-grp-img' height={100} width={100}/>
            <h1>Product Support</h1>
            <p>Looking for a demo, or have questions about our products and pricing?</p>
            <Link>sales@ettiksoft.com</Link>
          </div>
        </div>
      </div> */}
      <TrustedByGlobalBrands/>
    </div>
  )
}

export default ContactUsPage
