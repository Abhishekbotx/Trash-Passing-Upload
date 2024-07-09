import React from 'react'
import HomeCard from './HomeCards'
import MissionCard from './OurMissionCard'

const OurVision = () => {
  return (
    <div>
      <h2 className="raleway-sm text-white mx-36 mb-8">With TrashTamer, waste management transcends the limitations of traditional collection methods, offering a sustainable solution that benefits both communities and the environment.</h2>
    <div className="flex flex-col md:flex-row px-0 lg:flex-row  bg-black pb-8 gap-x-1 gap-y-3 justify-center items-center relative bottom-2">
      
      <div className="flex flex-col  md:w-2/5 items-center md:pr-5">
        <h3 className="text-2xl md:text-3xl text-center font-semibold mb-4 uppercase custom-color1 ">Our mission</h3>
        <MissionCard
          title="Mixed Waste Disposal"
          content="Built on the core principles of sanitation and recycling we aim to make sustainability and hygiene accessible to everyone"
        />
      </div>
      <div className="flex flex-col  md:w-2/5 md:pl-5 -400 items-center">
        <h3 className="text-2xl md:text-3xl text-center font-semibold mb-4 uppercase custom-color1">Our Vision</h3>
        <MissionCard
          title="Automated Segregation"
          content="Revolutionize waste management in India through innovation and community engagement, creating a cleaner, greener, and sustainable future."
        />
      </div>
    </div>
    </div>
  )
}

export default OurVision