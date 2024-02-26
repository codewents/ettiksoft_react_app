import './NavBar.scss'
import React, { useState } from 'react';
import logo from '../../../Assets/images/ettiksoft-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faGlobe } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'
import PopupModal from '../PopupModal/PopupModal'
import EttiksoftButton from '../../DataProviders/EttiksoftButton'
const NavBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };
  return (

    <>
      <div class="navbar-component">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <Link class="navbar-brand" href="#">
            <img src={logo} alt="Logo" />
          </Link>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link class="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><h6>Products</h6><FontAwesomeIcon icon={faAngleDown} /></Link>
                <div class="dropdown-menu full-width" aria-labelledby="navbarDropdown">
                  <h5 class="dropdown-item" >Products</h5>
                  <span class="dropdown-line"></span>
                  <div class="dropdown-cards d-flex flex-row flex-wrap">
                    <div class="col-6 col-md-4 my-3 ">
                      <div class="card card-hover border-0">
                        <div class="card-body">
                          <h5 class="card-title">Load Box</h5>
                          <p class="card-text">Description for Product 1.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-6 col-md-4 my-3 border-0">
                      <div class="card card-hover border-0">
                        <div class="card-body">
                          <h5 class="card-title">Break Out Box</h5>
                          <p class="card-text">Description for Product 2.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-6 col-md-4 my-3 ">
                      <div class="card card-hover border-0">
                        <div class="card-body">
                          <h5 class="card-title">EMI Wiring</h5>
                          <p class="card-text">Description for Product 3.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-6 col-md-4 my-3 ">
                      <div class="card card-hover border-0">
                        <div class="card-body">
                          <h5 class="card-title">EV Components</h5>
                          <p class="card-text">Description for Product 4.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-6 col-md-4 my-3">
                      <div class="card card-hover border-0">
                        <div class="card-body">
                          <h5 class="card-title">Variant Switch</h5>
                          <p class="card-text">Description for Product 5.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><h6>Services</h6><FontAwesomeIcon icon={faAngleDown} /></Link>
                <div class="dropdown-menu full-width" aria-labelledby="navbarDropdown">
                  <h5 class="dropdown-item">Services</h5>
                  <span class="dropdown-line"></span>
                  <div class="dropdown-cards d-flex flex-row flex-wrap">
                    <div class="col-6 col-md-4 my-3 ">
                      <div class="card card-hover border-0 border-radius" >
                        <Link to='/iot-solutions'>
                          <div class="card-body">
                            <h5 class="card-title">IOT Solutions</h5>
                            <p class="card-text">Description for Product 1.</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div class="col-6 col-md-4 my-3  ">
                      <div class="card card-hover border-0 border-radius">
                        <Link to='/mobility-engineering'>
                          <div class="card-body">
                            <h5 class="card-title">Mobility Engineering</h5>
                            <p class="card-text">Description for Product 2.</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><h6>Company</h6><FontAwesomeIcon icon={faAngleDown} /></Link>
                <div class="dropdown-menu full-width" aria-labelledby="navbarDropdown">
                  <h5 class="dropdown-item" >Company</h5>
                  <span class="dropdown-line"></span>
                  <div class="dropdown-cards d-flex flex-row flex-wrap">

                    <div class="col-6 col-md-4 my-3 ">
                      <div class="card card-hover border-0">
                        <Link to='/about-us'>
                          <div class="card-body">
                            <h5 class="card-title">About Us</h5>
                            <p class="card-text d-none d-md-block">Description for Product 1.</p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div class="col-6 col-md-4 my-3 border-0">
                      <div class="card card-hover border-0">
                        <Link to='/life-at-ettiksoft'>
                          <div class="card-body">
                            <h5 class="card-title">Life at Ettiksoft</h5>
                            <p class="card-text d-none d-md-block">Description for Product 2.</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div class="col-6 col-md-4 my-3 ">
                      <div class="card card-hover border-0">
                        <Link to='/careers'>
                          <div class="card-body">
                            <h5 class="card-title ">Careers</h5>
                            <p class="card-text d-none d-md-block">Description for Product 3.</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div class="col-6 col-md-4 my-3 ">
                      <div class="card card-hover border-0">
                        <Link to='/contact-us'>
                          <div class="card-body">
                            <h5 class="card-title">Contact us</h5>
                            <p class="card-text d-none d-md-block">Description for Product 4.</p>
                          </div>
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown language">
                <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <FontAwesomeIcon class="icon" icon={faGlobe} />   {selectedLanguage}
                </Link>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link class="dropdown-item" href="#" onClick={() => handleLanguageChange('EN')}>EN</Link>
                  <Link class="dropdown-item" href="#" onClick={() => handleLanguageChange('GE')}>GE</Link>
                </div>
              </li>
              <li class="nav-item">
                <EttiksoftButton key={1} buttonText={'Login'} buttonType={'bootstrap'} />
              </li>

            </ul>
          </div>
        </nav>
        {/* <PopupModal type={"Signin"} /> */}
        <PopupModal type={"Enquiry"} />
      </div>
     
    </>





  )
}

export default NavBar