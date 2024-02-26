import React from 'react'
import group_image from '../../../Assets/images/about/aboutus.jpg'
import './AboutUsPage.scss'
import EttiksoftButton from '../../../Components/DataProviders/EttiksoftButton'
import image1 from '../../../Assets/images/about/section5/1.svg';
import image2 from '../../../Assets/images/about/section5/2.svg';
import image3 from '../../../Assets/images/about/section5/3.svg';
import image4 from '../../../Assets/images/about/section5/4.svg';

const AboutUsPage = () => {

  return (
    <>
      <div className="about-us-container">
        <h1 className='p-5 text-center'>We Ettiksoft</h1>
        <img src={group_image} alt="" className='image-fluid mb-5' srcset="" />
        <div className=" p-4 w-75 mb-5" style={{ margin: "0 auto" }}>
          <h1 className='text-center p-2'>
            Unlocking Innovation Beyond Limits.
          </h1>
          <p className='m-0 text-justify text-center'>
            We will be a leading technology-based solution provider, offering best in class innovative products and services, we will stand unique with our Customer Centric, People First, and sustainable approach.
          </p>
        </div>
        <div className="bg-dark p-5 w-100" style={{ margin: "0 auto" }}>
          <h1 className='text-center p-2'>
            On a Mission to Transform Future Endeavors.

          </h1>
          <p className='m-0 text-justify text-center'>
            Striving for prominence, we provide advanced technology solutions with a commitment to excellence, innovation, and social responsibility, creating value for customers, associates, and suppliers.
          </p>
        </div>
        <div className="explore-about">
          <h1 className='text-center text-justify p-5'>
            Explore the vibrant culture that defines life at ETTIKSOFT
          </h1>
          <div className='d-flex justify-content-center mb-4' >
            <EttiksoftButton buttonText={"Explore"} />
          </div>
          <div className="explore-images container d-flex">
            <div className="col1 d-flex justify-content-center align-items-center">
              <img src={image1} alt="Image 1" className="img-fluid" />
            </div>
            <div className="col2 d-flex flex-column">
              <img src={image2} alt="Image 1" className="img-fluid" />
              <img src={image3} alt="Image 1" className="img-fluid" />
            </div>
            <div className="col3">
              <img src={image4} alt="Image 1" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUsPage
