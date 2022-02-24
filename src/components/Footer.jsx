import React from 'react';
import logo from '../../images/logo.png';
import { MdFavorite } from 'react-icons/md';
import { FiCode } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-center items-center flex-col gradient-bg-footer p-4">
      <div className='sm:flex-row w-full flex flex-col justify-between items-center gap-1 my-4'>
        <div className='flex flex-[0.5] justify-center items-center'>
          <img src={logo} alt="logo" className='w-16 h-14 cursor-pointer'/>
          <h1 id="logo-text" className="text-white text-4xl">KRYPTODECK</h1>
        </div>
        <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
          <p className='text-white text-base text-center mx-2 cursor-pointer'>Market</p>
          <p className='text-white text-base text-center mx-2 cursor-pointer'>Exchange</p>
          <p className='text-white text-base text-center mx-2 cursor-pointer'>Tutorial</p>
          <p className='text-white text-base text-center mx-2 cursor-pointer'>Wallet</p>
        </div>
      </div>
      <div className='flex justify-center items-center flex-col mt-5'>
        <p className="text-white text-center">Come join us</p>
        <p className="text-white text-center">info@kryptodeck.com</p>
      </div>
      <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5'/>
      <div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
        <p className="text-white text-center">@kryptodeck 2022</p>
        <p className="text-white text-start">&#60;&#47;&#62; with ❤️ in 🇨🇲</p>
        <p className="text-white text-center">All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer