import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import logo from '../assets/logo.png';

import bed from '../assets/bed.png';
import adultsimg from '../assets/adults.png';
import childrenImg from '../assets/children.png';
import parkingImg from '../assets/parking.png';
import petsImgImg from '../assets/pets.png';

import { Property } from '@/type';

const PropertyCard = ({
    id,
    property_name,
    property_code,
    check_in,
    check_out,
    bedrooms,
    adults,
    children,
    parking,
    pets,
    price,
    website,
    website_image
}): Property => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
   
    <div className='grid'>
    <div className='relative border border-[#E7E7E7] border-b-[0.7px] rounded-[28px] h-auto w-full sm:h-[189px] sm:w-[958px] grid grid-cols-1 sm:grid-cols-4 gap-x-5 gap-y-5 sm:gap-y-0 mb-5'>
      <img
        src={website_image}
        alt={'title'}
        className='w-full sm:w-[184px] h-[165px] rounded-[20px] object-cover mx-auto mt-3 col-span-1'
      />
      <div className='col-span-3 px-4 sm:px-0'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mt-5'>
          <div>
            <p className='font-sans font-semibold text-[18px] leading-[21.78px] text-black'>{property_name}</p>
            <p className='font-sans font-normal text-[14px] leading-[16.94px] text-[#44505c]'>Property code: {property_code}</p>
          </div>
          <div className='mt-3 sm:mt-0'>
            <p className='font-sans font-semibold text-[18px] leading-[21.78px] text-[#8c18ff] mr-0 sm:mr-5'>USD {price.toFixed(2)}</p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mt-5'>
          <p className='font-sans font-normal text-[14px] leading-[16.94px]'>Check-in: <span className='font-semibold'>{check_in}</span></p>
          <p className='font-sans font-normal text-[14px] leading-[16.94px] mt-2 sm:mt-0'>Check-out: <span className='font-semibold'>{check_out}</span></p>
          <button onClick={handleButtonClick} className='mt-2 sm:mt-0 sm:mr-5 rounded-[8px] p-2.5 gap-2.5 w-full sm:w-[88px] h-[37px] bg-[#F36F27] text-white font-semibold text-[14px] leading-[16.94px] text-center'>
            Book
          </button>
        </div>
        <div className='border-b-[0.7px] border-b-[#E7E7E7] mt-5'></div>
  
        <div className='grid grid-cols-2 sm:grid-cols-5 gap-x-4 mt-5'>
          <div className='flex items-center'>
            <img src={bed} className='w-[22px] h-[22px]' />
            <div className='flex flex-col justify-center ml-2'>
              <p className='font-sans font-normal text-[12px] leading-[14.52px]'>Bedrooms</p>
              <span className='font-sans font-semibold text-[12px] leading-[14.52px]'>{bedrooms}</span>
            </div>
          </div>
          <div className='flex items-center'>
            <img src={adultsimg} className='w-[22px] h-[22px]' />
            <div className='flex flex-col justify-center ml-2'>
              <p className='font-sans font-normal text-[12px] leading-[14.52px]'>Adults</p>
              <span className='font-sans font-semibold text-[12px] leading-[14.52px]'>{adults}</span>
            </div>
          </div>
          <div className='flex items-center'>
            <img src={childrenImg} className='w-[22px] h-[22px]' />
            <div className='flex flex-col justify-center ml-2'>
              <p className='font-sans font-normal text-[12px] leading-[14.52px]'>Children</p>
              <span className='font-sans font-semibold text-[12px] leading-[14.52px]'>{children}</span>
            </div>
          </div>
          <div className='flex items-center'>
            <img src={parkingImg} className='w-[22px] h-[22px]' />
            <div className='flex flex-col justify-center ml-2'>
              <p className='font-sans font-normal text-[12px] leading-[14.52px]'>Parking</p>
              <span className='font-sans font-semibold text-[12px] leading-[14.52px]'>{parking}</span>
            </div>
          </div>
          <div className='flex items-center'>
            <img src={petsImgImg} className='w-[22px] h-[22px]' />
            <div className='flex flex-col justify-center ml-2'>
              <p className='font-sans font-normal text-[12px] leading-[14.52px]'>Pets</p>
              <span className='font-sans font-semibold text-[12px] leading-[14.52px]'>{pets}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    {isModalOpen && (
      <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50'>
        <div className='relative bg-white p-8 w-[90%] sm:w-[400px] h-[268px] rounded-[12px] flex flex-col items-center gap-8'>
          <button className='absolute top-4 right-4 text-gray-500 hover:text-gray-700' onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className='text-[18px] font-semibold leading-[28px] mb-4 text-center'>Confirm your selection</h2>
          <p className='mb-4 font-normal text-[14px] leading-[20px] text-center'>
            Are you sure you want to submit property selection to Vivrestays? This action cannot be undone.
          </p>
          <div className='flex gap-5'>
            <button onClick={closeModal} className="w-full sm:w-[170px] h-[44px] px-[18px] py-[10px] gap-[8px] bg-white text-black border border-[#D0D5DD] rounded-[8px]">
              Cancel
            </button>
            <button className="w-full sm:w-[170px] h-[44px] px-[18px] py-[10px] gap-[8px] bg-[#06B231] rounded-[8px] border-[#06B231] text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
  )  
}

export default PropertyCard;

