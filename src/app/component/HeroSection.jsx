"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className='grid grid-cols-1 mt-20 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 sm:text-5xl text-4xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-tr from-purple-500 to-pink-600'>
              Hello, I m {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'M.Umair',
                1000,
                'Web Developer',
                1000,
                'Full Stack Developer',
                1000,
                'UI/UX Designer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            I am a full stack developer, Laravel, and more languages. 
           
          </p>
          <div>
            <button className="hire px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 w-full sm:w-fit mr-4 text-xl text-white">
              Hire me
            </button>
            <button className="CV px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 border border-orange-500 mt-3">
  <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
    Download CV
  </span>
</button>

          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0 relative'>
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] overflow-hidden relative">
            <Image
              className='absolute top-0 left-0'
              src="/images/Umair.png"
              alt='hero image'
              layout='fill' // Responsive behavior
              objectFit='cover' // Ensures the image covers the container
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
