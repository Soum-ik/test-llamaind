import React, { useEffect, useState } from 'react';
import logo from '../../public/images/halfLogo.png';


const CircularProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) {
          return prev + 10
        } else {
          clearInterval(interval); // Stop the animation when reaching 100%
          return prev;
        }
      });
    }, 1000); // Adjust the interval speed (20ms gives a smooth animation)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex flex-col items-center   justify-center w-full h-full">
      {/* SVG Circle */}
      <div className=' relative'>
        <svg className=" size-[100px] lg:size-[150px]    transform rotate-180" viewBox="0 0 36 36">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#3534C0', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#06FFDF', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            className="text-gray-200 z-20"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            strokeWidth="3"
          ></path>
          <path
            className="stroke-[url(#gradient)] z-20"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            strokeWidth="2"
            strokeDasharray={`${progress}, 100`} // Dynamic stroke-dasharray
          >

          </path>
        </svg>
        <img
          src={logo}
          alt="Logo"
          className="   z-50 absolute w-[50px] h-auto absolute-center"
        />
      </div>

      {/* Progress percentage below the circle */}
      <div className=" flex items-center justify-between overflow-hidden">
        <h1 className="text-[68px] xs:text-[80px] flex-1 sm:text-[95px] md:text-[120px]   text-center xl:w-[700px] text-white font-Orbitron font-bold opacity-5 z-50">{progress}%</h1>
      </div>
    </div>
  );
};

export default CircularProgressBar;
