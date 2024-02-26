import React, { useState } from 'react'
import './HomePage.scss'
import OurServices from '../../Components/ActionPerformers/OurServices/OurServices'
import iotImage from '../../Assets/images/iot-img.jpg'
import iiotImage from '../../Assets/images/iiot-img.jpg'
import medicalImage from '../../Assets/images/medical-img.jpg'
import SEImage from '../../Assets/images/system-engineering-img.png'
import EttiksoftButton from '../../Components/DataProviders/EttiksoftButton'
import introVideo from '../../Assets/images/intro_video.mp4'
import TrustedByGlobalBrands from '../../Components/ActionPerformers/TrustedByGlobalBrands/TrustedByGlobalBrands'

const HomePage = () => {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(null);
  const handleButtonClick = (index) => {
    setSelectedServiceIndex(index);
  };
  const ourServicesList = [
    {
      service: 'Automotive',
      heading: 'System Engineering',
      paragraph: 'Systems engineering is an interdisciplinary field of engineering and engineering management that focuses on how to design, integrate, and manage complex systems over their life cycles. At its core, systems engineering utilizes systems thinking principles to organize this body of knowledge.',
      imagePath: SEImage
    }, {
      service: 'Medical',
      heading: 'Medical',
      paragraph: 'Embedded systems, compact and task-specific, are widely utilized in healthcare for data storage and diagnostics. Medical professionals leverage advanced equipment, such as CT scanners and MRI machines, minimizing the need for physical examinations. Collaborative efforts of scientists and researchers continually enhance medical gadgets, ensuring optimal functionality.',
      imagePath: medicalImage
    },
    {
      service: 'IOT',
      heading: 'IOT',
      paragraph: 'IoT, a transformative technology in the 21st century, has revolutionized the way everyday objects interact with the internet. This connectivity facilitates seamless communication between people, processes, and various devices. Through the integration of low-cost computing, cloud services, big data analytics, and mobile technologies, physical entities can efficiently share and collect data with minimal human intervention.',
      imagePath: iotImage

    },
    {
      service: 'IIOT',
      heading: 'IIOT',
      paragraph: 'The Industrial Internet of Things (IIoT) employs smart sensors, actuators, and devices, including RFID tags, to optimize manufacturing processes. Networking these devices enables data collection, exchange, and analysis, enhancing efficiency and reliability. IIoT is widely used in manufacturing, energy, utilities, and oil/gas industries. It leverages smart machines and real-time analytics for superior data utilization.'
      ,
      imagePath: iiotImage
    },
  ];
  return (
    <>
      <section id="video-container" className='mb-5'>
        <video autoPlay muted loop>
          <source src={introVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Other content for your homepage */}
      </section>
      <div className="our-services-section mb-3">
        <h1 className='text-center p-3'>Our services</h1>
        <div className="our-services-list d-flex justify-content-center align-items-center mt-2">
          {ourServicesList.map((service, index) => (
            <EttiksoftButton key={index} onClickAction={() => handleButtonClick(index)} buttonText={service.service} buttonType={'submit'} />
          ))}
        </div>
        {selectedServiceIndex !== null && (
          <OurServices service={ourServicesList[selectedServiceIndex]} />
        )}
        {selectedServiceIndex === null && (
          <OurServices service={{ service: "Automotive" }} />
        )}
      </div>
      <TrustedByGlobalBrands/>
    </>
  )
}

export default HomePage