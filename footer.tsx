import React from 'react'
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={require("../../../public/assets/Pictures/logo.jpeg")}
       alt="logo"
       width="100"
       height="100"
       className='w-[50px]'
       />
      <span className="ml-3 text-xl">Mubashir Khan</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Mubashir Khan
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="ml-3 text-gray-500" href=''>
      <FaLinkedin/>
      </a>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
