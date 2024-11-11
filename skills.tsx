import React from 'react'
import { FaRegSquareCheck } from "react-icons/fa6";

const Skills = () => {
  return (
    <div id="Skills">
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
        Skills
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">
        {/* Skill */}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaRegSquareCheck className='font-bold text-xl'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className='h-1 w-full bg-gray-300 rounded-xl'>
                <div className='h-1 w-[50%] bg-blue-500'></div>
            </div>
            <div className='font-bold text-blue-500 text-right'>50%</div>
          </div>
        </div>
      </div>
      {/* Skill */}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaRegSquareCheck className='font-bold text-xl'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='h-1 w-full bg-gray-300 rounded-xl'>
                <div className='h-1 w-[50%] bg-blue-500'></div>
            </div>
            <div className='font-bold text-blue-500 text-right'>50%</div>
          </div>
        </div>
      </div>
      {/* Skill */}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaRegSquareCheck className='font-bold text-xl'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              JavaScript/TypeScript
            </h2>
          </div>
          <div className="flex-grow">
            <div className='h-1 w-full bg-gray-300 rounded-xl'>
                <div className='h-1 w-[70%] bg-blue-500'></div>
            </div>
            <div className='font-bold text-blue-500 text-right'>70%</div>
          </div>
        </div>
      </div>
      {/* Skill */}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaRegSquareCheck className='font-bold text-xl'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              NEXT.JS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='h-1 w-full bg-gray-300 rounded-xl'>
                <div className='h-1 w-[30%] bg-blue-500'></div>
            </div>
            <div className='font-bold text-blue-500 text-right'>30%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Skills
