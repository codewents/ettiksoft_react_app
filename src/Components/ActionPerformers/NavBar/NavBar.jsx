import './NavBar.scss'

import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import logo from '../../../Assets/images/ettiksoft-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown,faGlobe } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'
import PopupModal from '../PopupModal/PopupModal'
import EttiksoftButton from '../../DataProviders/EttiksoftButton'

const NavBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };
  return (

    <div class="navbar-component">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link class="navbar-brand" to="/">Your Logo</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</Link>
              <div class="dropdown-menu full-width" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/products">Products</Link>
                <span class="dropdown-line"></span>
                <div class="dropdown-cards d-flex flex-row flex-wrap">
                  <div class="col-12 col-md-4 my-3 ">
                    <div class="card card-hover border-0">
                      <div class="card-body">
                        <h5 class="card-title">Product 1</h5>
                        <p class="card-text">Description for Product 1.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4 my-3 border-0">
                    <div class="card card-hover border-0">
                      <div class="card-body">
                        <h5 class="card-title">Product 2</h5>
                        <p class="card-text">Description for Product 2.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4 my-3 ">
                    <div class="card card-hover border-0">
                      <div class="card-body">
                        <h5 class="card-title">Product 3</h5>
                        <p class="card-text">Description for Product 3.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4 my-3 ">
                    <div class="card card-hover border-0">
                      <div class="card-body">
                        <h5 class="card-title">Product 4</h5>
                        <p class="card-text">Description for Product 4.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4 my-3">
                    <div class="card card-hover border-0">
                      <div class="card-body">
                        <h5 class="card-title">Product 5</h5>
                        <p class="card-text">Description for Product 5.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


>>>>>>> acb9714e5b0f0ced63d22d433a1d6345a59df748

            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</Link>
              <div class="dropdown-menu full-width" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" href="#">Services</Link>
                <span class="dropdown-line"></span>
                <div class="dropdown-cards d-flex flex-row flex-wrap">
                  <div class="col-12 col-md-4 my-3 ">
                    <Link to='/iot-solutions'>
                    <div class="card card-hover border-0">
                      <div class="card-body">
                        <h5 class="card-title">IOT Solutions</h5>
                        <p class="card-text text-black">Description for Product 1.</p>
                      </div>
                    </div>
                    </Link>
                  </div>
                  <div class="col-12 col-md-4 my-3 border-0">
                    <Link to='/mobility-engineering'>
                    <div class="card card-hover border-0">
                      <div class="card-body">
                        <h5 class="card-title">Mobility Engineering Services</h5>
                        <p class="card-text text-black">Description for Product 2.</p>
                      </div>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Company</Link>
              <div class="dropdown-menu full-width" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" href="#">Company</Link>
                <span class="dropdown-line"></span>
                <div class="dropdown-cards d-flex flex-row flex-wrap">
                  <div class="col-12 col-md-4 my-3 ">
                    <div class="card card-hover border-0">
                      <div class="card-body">
                        <h5 class="card-title">Product 1</h5>
                        <p class="card-text d-none d-md-block">Description for Product 1.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4 my-3 border-0">
                    <div class="card card-hover border-0">
                      <div class="card-body">
                        <h5 class="card-title">Product 2</h5>
                        <p class="card-text d-none d-md-block">Description for Product 2.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4 my-3 ">
                    <div class="card card-hover border-0">
                      <div class="card-body">
                        <h5 class="card-title ">Product 3</h5>
                        <p class="card-text d-none d-md-block">Description for Product 3.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4 my-3 ">
                    <div class="card card-hover border-0">
                      <div class="card-body">
                        <h5 class="card-title">Product 4</h5>
                        <p class="card-text d-none d-md-block">Description for Product 4.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4 my-3">
                    <div class="card card-hover border-0">
                      <div class="card-body">
                        <h5 class="card-title">Product 5</h5>
                        <p class="card-text d-none d-md-block">Description for Product 5.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Language
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" href="#">EN</Link>
                <Link class="dropdown-item" href="#">GE</Link>
              </div>
            </li>
            <li class="nav-item">
              {/* <Link className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Login</Link> */}
              <EttiksoftButton key={1}  buttonText={'Login'} buttonType={'bootstrap'}/>
            </li>
          </ul>
        </div>

      </nav>
      {/* <PopupModal type={"Signin"} /> */}
      <PopupModal type={"Enquiry"} />



    </div>





  )
}

export default NavBar