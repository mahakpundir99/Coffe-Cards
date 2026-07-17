import React from 'react';

const Card = (props) => {
  return (
    <div className="w-full max-w-85 bg-white rounded-4xl p-5 shadow-sm border border-gray-100 flex flex-col font-sans relative">
      
      {/* Top Floating Price Tag */}
      <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md text-gray-900 font-medium px-4 py-1.5 rounded-full text-lg shadow-sm z-10">
        {props.price}$
      </div>

      {/* Main Image Container */}
      <div className="w-full h-72 rounded-3xl bg-[#b1c7a1] overflow-hidden relative">
        <img 
          src={props.img} 
          alt="Ice Matcha" 
          className="w-full h-full object-cover"
        />
        
        {/* Bottom Banner inside Image */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#7c966a] text-white text-xs py-2 text-center font-light tracking-wide rounded-b-3xl">
           Free Delivery until {props.deliveryDate}
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-5 px-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">{props.title}</h2>
          <button className="flex items-center gap-1 text-sm font-medium text-gray-800 border-b border-gray-800 pb-0.5">
            Order Now <span className="text-xs">↗</span>
          </button>
        </div>

        {/* Static Badges/Tags */}
        <div className="flex flex-wrap gap-2">
          <span className="bg-[#edf1e9] text-[#556947] text-xs px-3 py-1.5 rounded-full font-medium">
            {props.tags[0]}
          </span>
          <span className="bg-[#edf1e9] text-[#556947] text-xs px-3 py-1.5 rounded-full font-medium">
             {props.tags[1]}
          </span>
          <span className="bg-[#edf1e9] text-[#556947] text-xs px-3 py-1.5 rounded-full font-medium">
             {props.tags[2]}
          </span>
          <span className="bg-[#edf1e9] text-[#556947] text-xs px-3 py-1.5 rounded-full font-medium">
             {props.tags[3]}
          </span>
        </div>
      </div>

    </div>
  );
};

export default Card;
