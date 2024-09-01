import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className='bg-[#FFFFFF] py-4'>
    <div className='align-element flex justify-between items-center  border-b-[0.7px] border-b-[#D3DAE9] '>
      <Logo />
      
    </div>
      
  </nav>
  )
}

export default Navbar