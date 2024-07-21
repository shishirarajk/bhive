import React from "react";
import direction from "../assets/app-icons/assistant_direction.png";
import direction2x from "../assets/app-icons/assistant_direction@2x.png";
import data from "../constants/data.json"

const Overview = () => {
  return (
    <div className="mx-3 px-3 md:mt-12">
      <div className="flex justify-between items-center md:mb-6">
        <h2 className="text-text-main font-bold text-[24px]">Our Spaces</h2>
        <span className="text-primary-main text-[50px] md:hidden">
          &#x2192;
        </span>
      </div>
      {/* card */}
      <div className="flex flex-wrap justify-evenly">
           
      {
        data && data.map((d,i)=>{
       let item=`/assets/${d.images.toString().split('/')[1]}`
          return(
            <div key={i} className="w-[320px] h-[384px] rounded-xl border-solid border-2 border-[#EEE7E7CC] my-3">
              <div>
                {/* header starts */}
                <div className="px-4 py-1 flex justify-between items-center h-16">
                  <div className="text-text-main font-semibold text-lg w-[90%]">
                    {d.name}
                  </div>
                  <div className="flex flex-col items-center w-[10%]">
                    <img className="md:hidden" src={direction} alt="" />
                    <img className="hidden md:block" src={direction2x} alt="" />
                    <span className="text-[8px]">8Km</span>
                  </div>
                </div>
                {/* image starts */}
                <div className="rounded-md px-3">
                  <img className="rounded-md h-[220px]" src={item} alt="place" />
                </div>
    
                {/* price info */}
    
                <div className="flex justify-between items-center mt-1">
                  {/* day pass */}
                  <div className=" flex p-2 border-[0.5px] border-[#E5DDDD] rounded-md w-36 h-auto justify-between mx-3 mt-2">
                    <div>
                      <p className="text-text-secondary text-xs font-medium">
                        Day pass
                      </p>
                      <p className="text-text-main text-lg font-semibold">
                        {d.day_pass_price}<span className="font-medium text-xs">/Day</span>
                      </p>
                    </div>
                    <div className="justify-items-center content-center">
                      <span className="text-text-main font-bold text-opacity-[40%]">
                        &#707;
                      </span>
                      <span className="text-text-main font-bold text-opacity-[60%]">
                        &#707;
                      </span>
                      <span className="text-text-main font-bold text-opacity-[100%]">
                        &#707;
                      </span>
                    </div>
                  </div>
                  {/* bulk pass */}
    
                  {/* <div className="relative">
                    <span className="text-[8px] text-white bg-black p-2 text-nowrap">20% Discount</span>
                </div> */}
                  <div className="relative flex p-2 border-2 border-[#FFCF22] bg-primary-main rounded-md w-36 h-auto justify-between mx-3 mt-2">
                    <div className="absolute top-[-3px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="text-[8px] text-white bg-black p-[2.5px] whitespace-nowrap">
                        20% Discount
                      </span>
                    </div>
                    <div>
                      <p className="text-text-secondary text-xs font-medium">
                        Bulk pass
                      </p>
                      <p className="text-text-main text-lg font-semibold">
                        249<span className="font-medium text-xs">/10 Day</span>
                      </p>
                    </div>
    
                    <div className="justify-items-center content-center">
                      <span className="text-text-main font-bold text-opacity-[40%]">
                        &#707;
                      </span>
                      <span className="text-text-main font-bold text-opacity-[60%]">
                        &#707;
                      </span>
                      <span className="text-text-main font-bold text-opacity-[100%]">
                        &#707;
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
          )
        })
      }
       </div>
    </div>
  );
};

export default Overview;
