// Mechanism.js
import React from 'react';
import svg1 from './../../Img/image1.svg';
import svg2 from './../../Img/image2.svg';
import svg3 from './../../Img/image3.svg';
import svg4 from './../../Img/image4.svg';
import svg5 from './../../Img/image5.svg';
import svg6 from './../../Img/image6.svg';
import Card from './MechanismCard';

  
const Mechanism = () => {
    const mechanismData = [
        {
          heading: "1. LOAD THE DRAWERS",
          description: "TrashTamer features six intuitive compartments for wet waste, dry waste, paper, plastic, e-waste, and sanitary waste. Simply open the drawers and sort your trash with ease – each type has its designated spot.",
          image: svg1
        },
        {
          heading: "2. SORT WITH A SMILE",
          description: "Turn sorting trash into a satisfying routine. Whether it's kitchen scraps, old newspapers, dry waste, plastic, sanitary waste, or outdated electronics, TrashTamer makes it easy and enjoyable to dispose of waste responsibly.",
          image: svg2
        },
        {
          heading: "3. AUTOMATIC BAG SEALING MAGIC",
          description: "Close the drawer and let TrashTamer's automatic bag sealer work its magic. It wraps your trash in color-coded bags, ensuring each type of waste is clearly identified and neatly contained. It’s like your trash is getting a stylish makeover.",
          image: svg3
        },
        {
          heading: "4. TUNNEL TIME!",
          description: "Watch as TrashTamer’s built-in tunnel pipe system whisks away the sealed bags. This secret trash highway keeps your living space pristine, transporting waste to a central dumpster without a trace.",
          image: svg5
        },
        {
          heading: "5. OFF TO THE RECYCLING RACES",
          description: "From the central dumpster, sorted waste heads to the appropriate recycling facilities. Wet waste becomes compost, paper gets recycled, plastic is reprocessed, and e-waste is harvested for valuable materials – all thanks to your sorting efforts.",
          image: svg4
        },
        {
          heading: "6. LIVE HAPPILY EVER CLEANER",
          description: "With TrashTamer, your home stays tidy, your building’s waste management is efficient, and the environment benefits. It’s the perfect solution for modern living – a cleaner home, a greener planet, and a simpler life.",
          image: svg6
        }
      ];
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="flex flex-col items-center space-y-4 pb-8 pt-8 px-4">

        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center roboto-slab">JOIN THE REVOLUTION</h1>
        <p className="text-xl mb-8   text-center md:mx-20 tracking-wider  mt-10 md:mb-14 text-lime-300 px-4">
          Revolutionize your waste management and step into a future where waste sorting is easy, efficient, and eco-friendly. Join the revolution today!
        </p>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold poppins-semibold">HOW OUR PRODUCT WORKS?</h2>
      </div>

      <div className="flex flex-col items-center space-y-8 pb-8 px-4">
        {mechanismData.map((card,index)=>(
            <Card
            heading={card.heading}
            description={card.description}
            image={card.image}
            key={index}
          />
        ))}
        
      </div>
    </div>
  );
};

export default Mechanism;
