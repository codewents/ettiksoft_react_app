import React from 'react'
import './IOTSolutionsPage.scss'
import OurServices from '../../../Components/ActionPerformers/OurServices/OurServices'
import iotSolutions from '../../../Assets/images/service/iot-solutions/businessman-pointing-his-business-presentation-high-technology-digital-screen 1 1.png'
import mesImage from '../../../Assets/images/service/iot-solutions/productions.svg'
const IOTSolutionsPage = () => {
  const ourServicesList = [
    {
      heading: 'We excel in versatile IoT solutions.',
      paragraph: "Ettiksoft's IIoT solutions guarantee a secure, safe, and intelligent ecosystem, evolving alongside user experiences.",
      imagePath: iotSolutions,
      reverse: false
    },
    
    {
      paragraph: 'Recognizing the foundational role of Manufacturing Execution Systems (MES) in smart factories, Ettiksoft seamlessly connects the shop floor to the top floor.',
      paragraphTwo: "Our MES solutions encompass a spectrum of capabilities vital for IIoT success, aiding industrial manufacturers in process tracking, documentation, shop floor operations, and maintaining transparency across assets.",
      imagePath: mesImage,
      reverse: true
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