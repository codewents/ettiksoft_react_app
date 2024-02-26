import React from 'react'
import image1 from '../../../Assets/images/life-at-ettiksoft/section1-LAE.jpg';
import './LifeAtEttiksoftPage.scss'

import image2 from '../../../Assets/images/life-at-ettiksoft/section2-LAE/1.jpg';
import image3 from '../../../Assets/images/life-at-ettiksoft/section2-LAE/2.jpg';
import image4 from '../../../Assets/images/life-at-ettiksoft/section2-LAE/3.jpg';
import image5 from '../../../Assets/images/life-at-ettiksoft/section2-LAE/4.jpg';
import image6 from '../../../Assets/images/life-at-ettiksoft/SECTION4-LAE/lifeat_section4_1.jpg';
import image7 from '../../../Assets/images/life-at-ettiksoft/SECTION4-LAE/lifeat_section4_2.jpg';
import image8 from '../../../Assets/images/life-at-ettiksoft/SECTION4-LAE/lifeat_section4_3.jpg';
import image9 from '../../../Assets/images/life-at-ettiksoft/SECTION4-LAE/lifeat_section4_4.jpg';
import image10 from '../../../Assets/images/life-at-ettiksoft/SECTION5 -LAE/1.jpg';
import image11 from '../../../Assets/images/life-at-ettiksoft/SECTION5 -LAE/2.jpg';
import image12 from '../../../Assets/images/life-at-ettiksoft/SECTION5 -LAE/3.jpg';






const LifeAtEttiksoftPage = () => {
  return (
    <div className="life-at-ettiksoft-container">
      <div className="lae-banner">
        <img src={image1} alt="" className='image-fluid mb-5' srcset="" />
        <div className="banner-context p-3">
          <h1>
            Crafting a Cozy Workspace Experience.
          </h1>
          <p>
            From thoughtfully designed ergonomic spaces to warm aesthetics, every detail is curated to ensure comfort and productivity.
          </p>
        </div>
      </div>
      <div className="dynamic-work-environment">
        <h1 className='text-center'>
          Our workplace thrives as a dynamic environment that nurtures collaboration.
        </h1>
        <div className="dye-images m-4 d-flex ">
          <img src={image2} alt="Image 1" className="img-fluid " />
          <img src={image3} alt="Image 1" className="img-fluid " />
          <img src={image5} alt="Image 1" className="img-fluid" />
          <img src={image4} alt="Image 1" className="img-fluid" />
        </div>
      </div>

      <div className="lae-review bg-dark mt-5 pt-5 pb-5 d-flex align-items-center justify-content-center">
        <div className="lea-review-card p-5 d-flex align-items-center">
          <img src={image6} alt="Image 1" className="img-fluid" />
          <div className="lea-review-card-content p-3">
            <h1>
              Innovative, Supportive, Dynamic.
            </h1>
            <div className="bg-dark" style={{ borderRadius: "25px", padding: "20px" }}>
              <p>
                Work environment
              </p>
              <p>
                Surrounded by state-of-the-art facilities and advanced technology, EttikSoft's infrastructure empowers me to excel and contribute to cutting-edge projects.
              </p>
              <p>
                Arun prasad
              </p>
              <p>
                Software Developer, ETTIKSOFT˝
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-four-images d-flex mb-3">
        <img src={image6} alt="Image 1" className="img-fluid " />
        <img src={image7} alt="Image 1" className="img-fluid " />
        <img src={image8} alt="Image 1" className="img-fluid" />
        <img src={image9} alt="Image 1" className="img-fluid" />
      </div>
      <div className="our-initiatives-container mt-3 mb-3 p-4">
        <h1 className='text-center'>
          Our Initiatives
        </h1>
        <div className="our-initiatives-cards d-flex align-items-center justify-content-center">
          <div className="initiatives-card d-flex flex-column bg-dark p-3">
            <img src={image10} alt="Image 1" className="img-fluid"  />
            <div className="initiatives-card-content d-flex flex-column">
              <h1>Social Impact Club</h1>
              <p>
                The Social Impact Club engages employees in activities such as blood donation and tree planting.
              </p>
            </div>
          </div>
          <div className="initiatives-card d-flex flex-column bg-dark p-3">
            <img src={image11} alt="Image 1" className="img-fluid"  />
            <div className="initiatives-card-content d-flex flex-column">
              <h1>Social Impact Club</h1>
              <p>
                The Social Impact Club engages employees in activities such as blood donation and tree planting.
              </p>
            </div>
          </div>
          <div className="initiatives-card d-flex flex-column bg-dark p-3">
            <img src={image12} alt="Image 1" className="img-fluid"  />
            <div className="initiatives-card-content d-flex flex-column">
              <h1>Social Impact Club</h1>
              <p>
                The Social Impact Club engages employees in activities such as blood donation and tree planting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LifeAtEttiksoftPage
