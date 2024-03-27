import React from 'react';
import features from '../assets/features.png';

const Features = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="lg:w-1/4">
          <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">Why we are better than others</h3>
          <p className="text-base text-tariary">Lorem ipsum dolanimi alias iure labore quidem, cum optio quas sed facilis tempore quam! Blanditiis ex provident tenetur perspiciatis.</p>
        </div>
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* First Card */}
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] shadow-3xl p-8 flex flex-col items-center justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
              <img src={features} alt="" className="" />
              <h5 className="text-2xl font-semibold text-primary px-5 text-center">Convenient study schedule</h5>
            </div>
            {/* Second Card */}
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] shadow-3xl p-8 flex flex-col items-center justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
              <img src={features} alt="" className="" />
              <h5 className="text-2xl font-semibold text-primary px-5 text-center">Another Feature</h5>
            </div>
            {/* Third Card */}
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] shadow-3xl p-8 flex flex-col items-center justify-center hover:translate-y-4 transition-all duration-300 cursor-pointers">
              <img src={features} alt="" className="" />
              <h5 className="text-2xl font-semibold text-primary px-5 text-center">Third Feature</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
