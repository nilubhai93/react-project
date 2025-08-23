import React from 'react'
import BannerImage from "../../assets/banner.jpg"



const Banner = () => {
    return (
        <section className=' bg-red-300 h-[60vh] mt-[14vh] bg-cover bg-top' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='max-w-[1300px] mx-auto px-12 h-full flex flex-col justify-center gap-4 py-2'>
                <h1 className='text-red-600  sm:text-5xl md:text-6xl lg:text-9xl font-bold tracking-tight'> Big Sale!</h1>
                <h2 className='text-zinc-800 text-3xl'> Up to 50% OFF - Limited Time Only</h2>
                <div className='text-6xl font-bold text-zinc-800 flex gap-x-3 mt-5'>
                    <span className='text-white bg-zinc-800 p-3 rounded-xl'>00</span>:
                    <span className='text-white bg-zinc-800 p-3 rounded-xl'>00</span>:
                    <span className='text-white bg-zinc-800 p-3 rounded-xl'>00</span>
                </div>
            </div>
        </section>
    )
}

export default Banner