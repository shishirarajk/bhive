import React from 'react'
import Hero from "../assets/app-icons/hero.png"

const HeroSection = () => {
  return (
    <div>
        <div className=' md:flex md:flex-row-reverse'>
            <div className='w-full flex justify-center items-center md:w-[40%]'>
                <img className='w-[80%] h-auto'  src={Hero} alt="" />
            </div>
            <div className='w-full md:flex md:w-[60%] md:items-center md:justify-center md:h-auto m-auto p-2'>
                <p className='text-center md:text-left text-[20px] md:text-5xl font-semibold text-text-main'>Host your meeting with world-class amenities. Starting at <span className='text-primary-main'>₹199/-!</span></p>
            </div>
        </div>
    </div>
  )
}

export default HeroSection