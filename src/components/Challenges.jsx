import React from 'react'
import HomeCard from './HomeCards'
const Challenges = () => {
  return (
    <div className="py-12 bg-black ">
    <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl tracking-widest font-mono uppercase font-bold mb-6">The Challenges Faced in Modern Waste Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h3 className="text-2xl md:text-3xl font-semibold uppercase mb-4 custom-color1"> Problems</h3>
                <HomeCard
                    title="Uneven and Channelized Waste Recovery System"
                    content="Inconsistent and inefficient waste recovery processes lead to significant amounts of recyclable materials being lost to landfills, undermining efforts to maximize resource reuse and sustainability."
                />
            </div>
            <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 uppercase custom-color1"> Solutions</h3>
                <HomeCard
                    title="Efficient Waste Segregation"
                    content="TrashTamer automates the separation of different types of waste at the source, ensuring that recyclables, organic waste, and hazardous materials are properly sorted. This reduces contamination, making recycling more effective and minimizing the amount of waste sent to landfills."
                />
            </div>
        </div>
    </div>
    
</div>
  )
}

export default Challenges