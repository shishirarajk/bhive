import React from "react";
import community from "../assets/app-icons/community.png";
import wifi from "../assets/app-icons/wifi.png";
import quick from "../assets/app-icons/quick.png";
import sports from "../assets/app-icons/sports.png";
import comf from "../assets/app-icons/comf.png";
import coffee from "../assets/app-icons/coffee.png";
import gym from "../assets/app-icons/gym.png";
import affo from "../assets/app-icons/affo.png";

const Benefits = () => {
  return (
    <div className="mx-3 px-3 md:mt-8">
      <div className="flex justify-between items-center md:mb-6">
        <h2 className="text-text-main font-bold text-[24px]">Why Choose us?</h2>
        <span className="text-primary-main text-[50px] md:hidden">
          &#x2192;
        </span>
      </div>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        <div className="rounded-md md:rounded-none bg-white md:bg-transparent shadow-[0px 2px 4px 0px #0000000F] md:shadow-none flex items-center md:items-start justify-center md:justify-start text-center flex-col px-3 py-2 md:flex-row">
          <img src={community} alt="community" />
          <div className="relative group py-2">
            <p className="text-text-main md:text-left  font-medium text-sm md:px-2 transition-transform transform group-hover:-translate-y-2 duration-500">
              Community Events
            </p>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-xs">One liner details about the feature</span>
            </div>
          </div>
        </div>

        <div className="rounded-md md:rounded-none bg-white md:bg-transparent shadow-[0px 2px 4px 0px #0000000F] md:shadow-none flex items-center md:items-start justify-center md:justify-start text-center flex-col px-3 py-2 md:flex-row">
          <img src={gym} alt="community" />
         <div className="relative group py-2">
            <p className="text-text-main md:text-left font-medium text-sm md:px-2 transition-transform transform group-hover:-translate-y-2 duration-500">
              Gym Facilities
         </p>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-xs">One liner details about the feature</span>
            </div>
          </div>
        </div>

        <div className="rounded-md md:rounded-none bg-white md:bg-transparent shadow-[0px 2px 4px 0px #0000000F] md:shadow-none flex items-center md:items-start justify-center md:justify-start text-center flex-col px-3 py-2 md:flex-row">
          <img src={wifi} alt="community" />
         <div className="relative group py-2">
            <p className="text-text-main md:text-left font-medium text-sm md:px-2 transition-transform transform group-hover:-translate-y-2 duration-500">
              Highspeed Wifi
         </p>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-xs">One liner details about the feature</span>
            </div>
          </div>
        </div>

        <div className="rounded-md md:rounded-none bg-white md:bg-transparent shadow-[0px 2px 4px 0px #0000000F] md:shadow-none flex items-center md:items-start justify-center md:justify-start text-center flex-col px-3 py-2 md:flex-row">
          <img src={coffee} alt="community" />
          <div className="relative group py-2">
            <p className="text-text-main md:text-left font-medium text-sm md:px-2 transition-transform transform group-hover:-translate-y-2 duration-500">
              Cafe & Tea Bar
          </p>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-xs">One liner details about the feature</span>
            </div>
          </div>
        </div>

        <div className="rounded-md md:rounded-none bg-white md:bg-transparent shadow-[0px 2px 4px 0px #0000000F] md:shadow-none flex items-center md:items-start justify-center md:justify-start text-center flex-col px-3 py-2 md:flex-row">
          <img src={affo} alt="community" />
         <div className="relative group py-2">
            <p className="text-text-main md:text-left font-medium text-sm md:px-2 transition-transform transform group-hover:-translate-y-2 duration-500">
            
            Affordable
         </p>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-xs">One liner details about the feature</span>
            </div>
          </div>
        </div>

        <div className="rounded-md md:rounded-none bg-white md:bg-transparent shadow-[0px 2px 4px 0px #0000000F] md:shadow-none flex items-center md:items-start justify-center md:justify-start text-center flex-col px-3 py-2 md:flex-row">
          <img src={comf} alt="community" />
         <div className="relative group py-2">
            <p className="text-text-main md:text-left font-medium text-sm md:px-2 transition-transform transform group-hover:-translate-y-2 duration-500">
            
            Comfort Lounges
         </p>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-xs">One liner details about the feature</span>
            </div>
          </div>
        </div>

        <div className="rounded-md md:rounded-none bg-white md:bg-transparent shadow-[0px 2px 4px 0px #0000000F] md:shadow-none flex items-center md:items-start justify-center md:justify-start text-center flex-col px-3 py-2 md:flex-row">
          <img src={quick} alt="community" />
          <div className="relative group py-2">
            <p className="text-text-main md:text-left font-medium text-sm md:px-2 transition-transform transform group-hover:-translate-y-2 duration-500">
            
            Quick Booking
         </p>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-xs">One liner details about the feature</span>
            </div>
          </div>
        </div>

        <div className="rounded-md md:rounded-none bg-white md:bg-transparent shadow-[0px 2px 4px 0px #0000000F] md:shadow-none flex items-center md:items-start justify-center md:justify-start text-center flex-col px-3 py-2 md:flex-row">
          <img src={sports} alt="community" />
        <div className="relative group py-2">
            <p className="text-text-main md:text-left font-medium text-sm md:px-2 transition-transform transform group-hover:-translate-y-2 duration-500">
            
            Sports Area
         </p>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-xs">One liner details about the feature</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
