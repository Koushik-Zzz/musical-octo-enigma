import React from 'react';

interface testimonialProp {
  profile: string;
  name: string;
  description: string;
  svg: string | React.ReactElement;
};

const TestimonalCard = ({ profile, name, description, svg }: testimonialProp) => {
  return (
    <div className="p-10 bg-[#F8F8F8] rounded-[10px] w-90 h-82 relative">

        <div className="absolute bottom-0 right-4 z-0">
          {svg}
        </div>
        <div className="relative z-10">
          <div className="w-full flex items-center gap-3 text-[#285A43] font-bold mb-6">
            <img className="h-12 rounded-full" src={profile} alt="" />
            <p>{name}</p>
          </div>
          <p className="text-[#121212] text-lg font-extralight">{description}</p>
        </div>
    </div>
  )
}

export default TestimonalCard