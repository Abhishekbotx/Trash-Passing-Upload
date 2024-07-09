import React from 'react';

const MissionCard = ({ title, content}) => {
  return (
    <div className={`bg-gradient-to-r from-slate-800 to-lime-500  border-2 border-white text-center  text-white rounded-lg shadow-md lg:p- md:p- px-4 py-6 lg:h-[20rem] md:h-[20rem]     md:mx-7  mx-10 sm:mx-7`}>
      <h3 className="text-2xl font-semibold raleway-medium mb-4">{title}</h3>
      <p className=" lg:text-xl raleway-base">{content}</p>
    </div>
  );
};

export default MissionCard;