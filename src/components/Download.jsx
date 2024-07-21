import React from "react";
import download from "../assets/app-icons/download.png";
import google from "../assets/app-icons/google.png";
import app from "../assets/app-icons/app.png";

const Download = () => {
  return (
    <div className="mx-3 px-3 mb-6 md:mt-12">
      <div className="flex justify-between items-center md:mb-6 ">
        <h2 className="text-text-main font-bold text-[24px]">
          Download our app now
        </h2>
        <span className="text-primary-main text-[50px] md:hidden">
          &#x2192;
        </span>
      </div>

      <div className="flex flex-col justify-center items-center md:flex-row md:justify-normal md:w-[100%]">
        <div className="md:w-[40%]">
          <img className="w-full" src={download} alt="download" />
        </div>
        <div className="md:ml-14 md:pl-13 md:w-[60%]">
         
          <h2 className="hidden md:block text-xl text-[#605F5F] font-medium mb-6">
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks.
          </h2>
          <div className="flex">
            <img className="mr-2" src={google} alt="google" />
            <img className="ml-2" src={app} alt="app" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
