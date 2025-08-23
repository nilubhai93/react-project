import React from 'react'
import Logo from "../../assets/Logo.png"
import { IoMdSearch } from "react-icons/io";
import { GoHeartFill } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";




const Navbar = () => {
  return (
    <header className='bg-red-100 fixed top-0 right-0 left-0'>
      <nav className=' max-w-[1300px] px-12 mx-auto h-[14vh] flex items-center justify-between'>
        {/* logo */}
        <a href="#" className=' flex w-15 h-15 bg-zinc-300 rounded-full p-2'>
          <img src={Logo} className='w-full h-full object-contain' />
        </a>

        {/* Nav Actions */}
        <div className='flex items-center justify-center gap-x-5'>
          
          {/* search bar */}
          <div className='p-1 rounded-full flex justify-center items-center border-2 border-solid' >
            <input
              type="text"
              name="search"
              id="search"
              placeholder='Search...'
              autoComplete='off' 
              className='h-[5vh] pl-4 focus:outline-none'
            />

            <button className='flex justify-center items-center w-10 h-10 rounded-full  bg-blue-600 text-white text-xl'>
              <IoMdSearch />
            </button>
          </div>

          {/* icons */}
          <button className='text-[1.7rem] text-zinc-800 relative'>
            <GoHeartFill/>
            <span className=' flex justify-center bg-red-600 text-white w-5 h-5 rounded-full  text-[14px] absolute bottom-4 left-4'>1</span>
          </button>

          {/* shopping bag icon*/}
          <button className='text-[1.7rem] text-zinc-800 relative'>
            <HiMiniShoppingBag />
            <span className=' flex justify-center bg-red-600 text-white w-5 h-5 rounded-full  text-[14px] absolute bottom-4 left-4'>1</span>
          </button>
          
        </div>
      </nav>
    </header>
  )
}

export default Navbar