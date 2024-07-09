import React from 'react';

const MechanismCard = ({ heading, description, image }) => {
  return (
    <div className="gradient-mech flex flex-col md:flex-row lg:flex-row items-center justify-between rounded-lg overflow-hidden max-w-4xl mx-auto">
      <div className="md:w-2/3 h-48 p-6">
        <h3 className="text-2xl font-bold mb-2">{heading}</h3>
        <p>{description}</p>
      </div>
      <div className="md:w-1/3 h-36 p-0 mt-4 md:mt-0 md:ml-4 flex justify-center items-center">
        <img src={image} alt="Illustration" className="w-[11vw] h-auto" />
      </div>
    </div>
  );
};

export default MechanismCard;
