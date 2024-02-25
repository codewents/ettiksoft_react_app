import React from 'react'
import './NavBar.scss'
const NavBar = () => {
  return (
    <div class="navbar-component">
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Your Logo</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</a>
          <div class="dropdown-menu full-width" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Products</a>
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
          


        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
          <div class="dropdown-menu full-width" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Services</a>
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
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Company</a>
          <div class="dropdown-menu full-width" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Company</a>
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
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Language
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">EN</a>
            <a class="dropdown-item" href="#">GE</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Login</a>
        </li>
      </ul>
    </div>
  </nav>




    </div>
   




  )
}

export default NavBar