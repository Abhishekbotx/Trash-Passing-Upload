import React from 'react';

const TraditionalCard = ({ title, content}) => {
  return (
    <div className={`bg-gradient-to-r from-slate-800 to-lime-500  border-2 border-white  text-white rounded-lg shadow-md lg:p-6 md:p-6 p-8 lg:h-[15rem] md:h-[15rem] min-h-[20rem]   mx-10 `}>
      <h3 className="text-2xl font-semibold raleway-medium mb-4">{title}</h3>
      <p className=" lg:text-lg raleway-base">{content}</p>
    </div>
  );
};

export default TraditionalCard;
