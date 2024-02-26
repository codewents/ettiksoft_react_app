import React from 'react'
import './IOTSolutionsPage.scss'
import OurServices from '../../../Components/ActionPerformers/OurServices/OurServices'
import iotSolutions from '../../../Assets/images/service/iot-solutions/businessman-pointing-his-business-presentation-high-technology-digital-screen 1 1.png'
import mesImage from '../../../Assets/images/service/iot-solutions/productions.svg'
import iotImage from '../../../Assets/images/iot-img.jpg'
import iiotImage from '../../../Assets/images/iiot-img.jpg'
import medicalImage from '../../../Assets/images/medical-img.jpg'
const IOTSolutionsPage = () => {
  const ourServicesList = [
    
    {
      service: 'IOT',
      heading: 'IOT',
      paragraph: 'IoT, a transformative technology in the 21st century, has revolutionized the way everyday objects interact with the internet. This connectivity facilitates seamless communication between people, processes, and various devices. Through the integration of low-cost computing, cloud services, big data analytics, and mobile technologies, physical entities can efficiently share and collect data with minimal human intervention.',
      imagePath: iiotImage

    },
    {
      service: 'Medical',
      heading: 'Medical',
      paragraph: 'Embedded systems, compact and task-specific, are widely utilized in healthcare for data storage and diagnostics. Medical professionals leverage advanced equipment, such as CT scanners and MRI machines, minimizing the need for physical examinations. Collaborative efforts of scientists and researchers continually enhance medical gadgets, ensuring optimal functionality.',
      imagePath: medicalImage
    },
  ];
  
  return (
    <>
      <h1 className='text-center mt-5'> IOT Solutions</h1>
      <OurServices key={0} service={ourServicesList[0]} reverse={ourServicesList[0].reverse} />
      <div className="iot-filler-para mt-5 mb-5 bg-dark">
        <h1 className='text-center p-5'>
          Driving Innovation with Platform Expertise.
        </h1>
        <p className='text-center p-5'>
        Ettiksoft excels in leveraging platforms such as Azure, Mbed OS, Free RTOS, and .Net to deliver optimal IIoT solutions. This expertise plays a pivotal role in crafting advanced solutions, ensuring the reliability and effectiveness of our offerings
        </p>
      </div>
      <h1 className='text-center'>MES Solutions from Shop Floor to Top Floor</h1>
      <OurServices key={1} service={ourServicesList[1]} reverse={ourServicesList[1].reverse} />




    </>
  )
}

export default IOTSolutionsPage