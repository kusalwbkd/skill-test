import React from 'react'

const Modal = ({closeModal}:any) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50'>
    <div className='relative bg-white p-8 w-[400px] h-[268px] rounded-[12px] flex flex-col items-center gap-8'>
      <button className='absolute top-4 right-4 text-gray-500 hover:text-gray-700' onClick={closeModal()} >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 className='text-[18px] font-semibold leading-[28px] mb-4 text-center'>Confirm your selection</h2>
      <p className='mb-4 font-normal text-[14px] leading-[20px] text-center'>
        Are you sure you want to submit property selection to the Vivrestays? This action cannot be undone.
      </p>
      <div className='flex gap-5'>
        <button onClick={closeModal()}  className="w-[170px] h-[44px] px-[18px] py-[10px] gap-[8px] bg-white text-black border border-[#D0D5DD] rounded-[8px]">
          Cancel
        </button>
        <button onClick={closeModal()} className="w-[170px] h-[44px] px-[18px] py-[10px] gap-[8px] bg-[#06B231] rounded-[8px] border-[#06B231] text-white" >
          Submit
        </button>
      </div>
    </div>
  </div>
  )
}

export default Modal