import React from 'react'
import Logo from "../../assets/Logo.png"
import { IoMdSearch } from "react-icons/io";
import { GoHeartFill } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";




const Navbar = () => {
  return (
    <header className='bg-red-300'>
      <nav className=' max-w-[1300px] px-12 mx-auto h-[14vh] flex items-center justify-between'>
        {/* logo */}
        <a href="#" className=' flex w-15 h-15 bg-zinc-300 rounded-full p-2'>
          <img src={Logo} className='w-full h-full object-contain' />
        </a>

        {/* Nav Actions */}
        <div className='flex items-center justify-center gap-x-5'>
          
          {/* search bar */}
          <div className='p-1 rounded-full flex justify-center items-center border-2 border-solid border-blue-500'>
            <input
              type="text"
              name="search"
              id="search"
              placeholder='Search...'
              autoComplete='off' 
              className='h-[5vh] pl-4'
            />

            <button>
              <IoMdSearch />
            </button>
          </div>

          {/* icons */}
          <button className='text-[1.7rem] text-zinc-800'>
            <GoHeartFill/>
          </button>

          {/* shopping bag icon*/}
          <button className='text-[1.7rem] text-zinc-800'>
            <HiMiniShoppingBag />
          </button>
          
        </div>
      </nav>
    </header>
  )
}

export default Navbar