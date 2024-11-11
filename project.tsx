import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Project = () => {
  return (
    <div id="Project">
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
      {/* Projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="project"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/Pictures/Project[1].jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Number Guessing Game
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Game
            </h1>
            <p className="leading-relaxed line-clamp-2">  
            Guess the secret number in unlimited number of tries, use your mind to guess number in this Number guessing game!
            </p>
            <Link target='_blank' href={"https://new-skill-html-css-d12.vercel.app/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">View Project</p>
            </Link>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="project"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/Pictures/Project.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Simple Calculator
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Calculator
            </h1>
            <p className="leading-relaxed line-clamp-2">  
              The Simple Calculator is a user-friendly tool designed to perform basic arithmetic operations with ease.
            </p>
            <Link target='_blank' href={"https://new-skill-html-css-d16-calculator.vercel.app/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">View Project</p>
            </Link>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="project"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/Pictures/Project[1].jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Number Guessing Game
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Game
            </h1>
            <p className="leading-relaxed line-clamp-2">  
            Guess the secret number in unlimited number of tries, use your mind to guess number in this Number guessing game!
            </p>
            <Link target='_blank' href={"https://new-skill-html-css-d12.vercel.app/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">View Project</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
