import React, { useState } from 'react';
import './Footer.scss';
import logo from '../../../Assets/images/ettiksoft-logo.png'
import { faFacebook, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  const [isOpenCompany, setIsOpenCompany] = useState(false);
  const [isOpenProducts, setIsOpenProducts] = useState(false);
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);

  const toggleAccordion = (section) => {
    if (window.innerWidth >= 568) return; // Only toggle under 568px

    switch (section) {
      case 'Company':
        setIsOpenCompany(prevState => !prevState);
        setIsOpenProducts(false);
        setIsOpenServices(false);
        setIsOpenContact(false);
        break;
      case 'Products':
        setIsOpenProducts(prevState => !prevState);
        setIsOpenCompany(false);
        setIsOpenServices(false);
        setIsOpenContact(false);
        break;
      case 'Services':
        setIsOpenServices(prevState => !prevState);
        setIsOpenCompany(false);
        setIsOpenProducts(false);
        setIsOpenContact(false);
        break;
      case 'Contact':
        setIsOpenContact(prevState => !prevState);
        setIsOpenCompany(false);
        setIsOpenProducts(false);
        setIsOpenServices(false);
        break;
      default:
        break;
    }
  };

  return (
    <footer >
      <div class="container">
        <div class="row">
          <div className="col-md-2 col-sm-6 my-4 mx-3">
            <h5 className="mb-3" onClick={() => toggleAccordion('Logo')}>   <a class="navbar-brand" href="#">
              <img src={logo} alt="Logo" />
            </a></h5>
            <ul className={`list-unstyled d-flex`}>
              {/* <li className="mr-3"><a href="#"><FontAwesomeIcon class="icon" icon={faFacebook} /> </a></li>
              <li className="mr-3"><a href="#"><FontAwesomeIcon class="icon" icon={faInstagram} /></a> </li>
              <li className="mr-3"><a href="#"><FontAwesomeIcon class="icon" icon={faLinkedinIn} /> </a></li>
              <li className="mr-3"><a href="#"><FontAwesomeIcon class="icon" icon={faYoutube} /> </a></li> */}
            </ul>
          </div>
          <div className="col-md-2 col-sm-6 mb-4 mx-3">
            <h5 className="mb-3" onClick={() => toggleAccordion('Company')}>Company</h5>
            <ul className={`list-unstyled ${isOpenCompany ? 'visible' : ''}`}>
              <li>About Us</li>
              <li>Life at Ettiksoft</li>
              <li>Careers</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6 mb-4 mx-3">
            <h5 className="mb-3" onClick={() => toggleAccordion('Products')}>Products</h5>
            <ul className={`list-unstyled ${isOpenProducts ? 'visible' : ''}`}>
              <li>Load Box</li>
              <li>Break Out Box</li>
              <li>EMI Wiring</li>
              <li>EV Components</li>
              <li>Variant Switch</li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6 mb-4 mx-3">
            <h5 className="mb-3" onClick={() => toggleAccordion('Services')}>Services</h5>
            <ul className={`list-unstyled ${isOpenServices ? 'visible' : ''}`}>
              <li>IOT Solutions</li>
              <li>Mobility Engineering</li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6 mb-4 mx-3">
            <h5 className="mb-3" onClick={() => toggleAccordion('Contact')}>Contact</h5>
            <ul className={`list-unstyled ${isOpenContact ? 'visible' : ''}`}>
              <li class="title">Phone</li>
              <li>+91 73736 89304</li>
              <li>+91 97898 81190</li>
              <li class="title">Email</li>
              <li>info@ettiksoft.com</li>
              <li class="title">Head Office</li>
              <li>No:6/1116-1/3, Paramathi Road, C E B Colony, Namakkal, Tamil Nadu 637001.</li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
