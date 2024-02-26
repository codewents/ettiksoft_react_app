import React from 'react'
import mobEngImage from '../../../Assets/images/service/mobility-engineering/mobiliti-engineering-section1.jpg'
import electronicHVImage from '../../../Assets/images/service/mobility-engineering/electronic-hv-img.jpg'
import cyberSecurityImage from '../../../Assets/images/service/mobility-engineering/Cyber-Security-img.jpg'
import automotiveSoftwareImage from '../../../Assets/images/service/mobility-engineering/automative-software-img.jpg'
import functionalSafetyImage from '../../../Assets/images/service/mobility-engineering/functional-safety-img.jpg'
import modelBasedImage from '../../../Assets/images/service/mobility-engineering/model-based-img.jpg'
import OurServices from '../../../Components/ActionPerformers/OurServices/OurServices'




const MobilityEngineeringPage = () => {
  const ourServicesList = [
    {
      heading: 'We excel in versatile Mobility Engineering Services.',
      paragraph: "Ettiksoft's team work systematically to understand clients ideas and requirements we convert these ideas into reality and deploy the products or services with high quality. Our experties focuses on reliability, safety, and cyber security in Mobility Engineeering.",
      imagePath: mobEngImage,
      reverse: true
    },
    
    // {
    //   heading:"Electronic HW and Mechanical.",
    //   paragraph: {
    //     services: ['ECU design for Automotive grade', 'PCB design', '3d Mechanical design' ,'Concept to Prototype (POC)'],
    //     tools: ['Cadence Orcad', 'Solidworks', 'Autocad', 'Sketchup']
    //   },
    //   imagePath: electronicHVImage,
    //   reverse: false
    // },
    // {
    //   heading:"Electronic HW and Mechanical.",
    //   paragraph: {
    //     services: ['ECU design for Automotive grade', 'PCB design', '3d Mechanical design' ,'Concept to Prototype (POC)'],
    //     tools: ['Cadence Orcad', 'Solidworks', 'Autocad', 'Sketchup']
    //   },
    //   imagePath: automotiveSoftwareImage,
    //   reverse: true
    // },
    // {
    //   heading:"Electronic HW and Mechanical.",
    //   paragraph: {
    //     services: ['ECU design for Automotive grade', 'PCB design', '3d Mechanical design' ,'Concept to Prototype (POC)'],
    //     tools: ['Cadence Orcad', 'Solidworks', 'Autocad', 'Sketchup']
    //   },
    //   imagePath: cyberSecurityImage,
    //   reverse: false
    // },
    // {
    //   heading:"Electronic HW and Mechanical.",
    //   paragraph: {
    //     services: ['ECU design for Automotive grade', 'PCB design', '3d Mechanical design' ,'Concept to Prototype (POC)'],
    //     tools: ['Cadence Orcad', 'Solidworks', 'Autocad', 'Sketchup']
    //   },
    //   imagePath: functionalSafetyImage,
    //   reverse: true
    // },
    // {
    //   heading:"Electronic HW and Mechanical.",
    //   paragraph: {
    //     services: ['ECU design for Automotive grade', 'PCB design', '3d Mechanical design' ,'Concept to Prototype (POC)'],
    //     tools: ['Cadence Orcad', 'Solidworks', 'Autocad', 'Sketchup']
    //   },
    //   imagePath: modelBasedImage,
    //   reverse: false
    // }
  ];
  return (
    <>
      {ourServicesList.map((service,index)=>{
        return <OurServices service={service} key={index} reverse={service.reverse}/>
      })}
    </>
  )
}

export default MobilityEngineeringPage