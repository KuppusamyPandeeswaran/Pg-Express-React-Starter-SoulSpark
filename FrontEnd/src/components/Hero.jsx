import React from 'react'

export default function Hero() {
   
  return (

<div className="relative bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 py-12 lg:py-24">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        <h1  className="text-blue-950  [text-shadow:_0_2px_4px_rgba(14_165_223_/_0.5)] text-4xl leading-snug font-manrope font-extrabold space-y-2">
            React Starter 
        </h1>

         
          <p className="text-lg lg:text-xl text-gray-700">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem.
          Anim aute id magna aliqua. Qui irure qui,magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          </p>

        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            className="w-full lg:max-w-full"
            src="/hero.jpg"
            alt="Learning Platform"
          />
        </div>
      </div>
    </div>

  )
}

