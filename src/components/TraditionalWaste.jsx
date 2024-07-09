import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './../index.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Pagination, Navigation } from 'swiper/modules';
import TraditionalCard from './TraditionalCard';

const TraditionalWaste = () => {
  return (
    <div className="py-2 bg-black relative md:w-[80vw] mx-auto">
      <div>
        <div className='mx-10 py-3 md:my-8 bg-gradient-to-r from-slate-800 to-lime-500  text-3xl text-white  text-center rounded-lg  uppercase lime '>
          <p className=' lg:px-52 md:px-40 px-4'>traditional waste collection vs. trashtamer approach</p>
          <p> </p>
        </div>
        <div className='raleway-sm text-white mx-10 my-12'>
          <p>In traditional waste collection systems, households and businesses often dispose of all types of waste together, leading to contamination and inefficiencies in recycling efforts. Here's how TrashTamer revolutionizes waste management</p>
        </div>
      </div>
      <div className="text-center mb-6">
        
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          slidesPerGroup={1}
          speed={800}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          breakpoints={{
            350: {
              slidesPerView: 1,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
              // slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
              // slidesPerGroup: 2,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper bg-black"
        >
          <SwiperSlide>
            <div className='bg-black'>
              <h3 className="text-2xl md:text-3xl font-semibold uppercase mb-4 custom-color1"> Traditional Approach</h3>
              <TraditionalCard
              
                title="Uneven and Channelized Waste Recovery System"
                content="Inconsistent and inefficient waste recovery processes lead to significant amounts of recyclable materials being lost to landfills, undermining efforts to maximize resource reuse and sustainability."
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-black'>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 uppercase custom-color1"> TrashTamer Approach</h3>
              <TraditionalCard
                title="Efficient Waste Segregation"
                content="TrashTamer automates the separation of different types of waste , ensuring that recyclables, organic waste, and hazardous materials are properly sorted. This reduces contamination, making recycling more effective and minimizing amount of waste."
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-black'>
              <h3 className="text-2xl md:text-3xl font-semibold uppercase mb-4 custom-color1"> Problems</h3>
              <TraditionalCard
                title="Uneven and Channelized Waste Recovery System"
                content="Inconsistent and inefficient waste recovery processes lead to significant amounts of recyclable materials being lost to landfills, undermining efforts to maximize resource reuse and sustainability."
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-black'>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 uppercase custom-color1"> Solutions</h3>
              <TraditionalCard
                title="Efficient Waste Segregation"
                content="TrashTamer automates the separation of different types of waste at the source, ensuring that recyclables, organic waste, and hazardous materials are properly sorted. This reduces contamination, making recycling more effective and minimizing the amount of waste sent to landfills."
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-black'>
              <h3 className="text-2xl md:text-3xl font-semibold uppercase mb-4 custom-color1"> Problems</h3>
              <TraditionalCard
                title="Uneven and Channelized Waste Recovery System"
                content="Inconsistent and inefficient waste recovery processes lead to significant amounts of recyclable materials being lost to landfills, undermining efforts to maximize resource reuse and sustainability."
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-black'>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 uppercase custom-color1"> Solutions</h3>
              <TraditionalCard
                title="Efficient Waste Segregation"
                content="TrashTamer automates the separation of different types of waste at the source, ensuring that recyclables, organic waste, and hazardous materials are properly sorted. This reduces contamination, making recycling more effective and minimizing the amount of waste sent to landfills."
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="custom-next absolute lg:right-[1vw] md:bottom-[12vh]  right-[2vw] lg:bottom-[24vh] bottom-[24vh] bg-white p-3 px-4 rounded-full  transform -translate-y-1/2 z-10">
          <FontAwesomeIcon icon={faArrowRight} size="2x" className='text-lime-300 font-thin' />
        </div>
        <div className="custom-prev absolute lg:left-[1vw] md:bottom-[12vh]  lg:bottom-[24vh] left-[2vw] bottom-[24vh] bg-white p-3 px-4 rounded-full transform -translate-y-1/2 z-10">
          <FontAwesomeIcon icon={faArrowLeft} size="2x" className='text-lime-300 font-thin' />
        </div>
      </div>
    </div>
  );
}

export default TraditionalWaste;
