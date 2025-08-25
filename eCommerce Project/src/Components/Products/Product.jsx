import React, { useState } from 'react'
import ProductList from "./ProductList.js"
import { GoHeartFill } from 'react-icons/go';

const Product = () => {

    const categories = ["All", "Mens", "Womens", "Kids", "New Arrivals", "On Sale"]
    const [activeTab, setActiveTab] = useState("All");
    const renderProducts = ProductList.map(product => {
        return (
            // card
            <div className='bg-zinc-100 p-5 border-zinc-300 rounded-lg'>
                <div className='flex justify-between items-center'>
                    <button className='text-3xl text-zinc-300'>
                        <GoHeartFill />
                    </button>
                    <span className='bg-red-600 px-3 py-1 text-white'>Sale</span>
                </div>


                {/* product image */}
                <div className=' w-full h-[30vh]'>
                    <img src={product.image}/>
                </div>


                {/* product details */}
                <div className='text-center mt-3'>
                    <h3 className='text-[1.4rem] font-semibold sm:text-sm '>{product.name}</h3>
                    <div className='mt-1 mb-5'>
                        <span className='text-red-600 font-semibold text-lg'>  ₹{product.price}</span>
                    </div>
                    <button className='bg-blue-600 text-white text-lg py-1 w-full rounded-lg cursor-pointer active:bg-blue-800' > Add to Cart</button>
                </div>

            </div>
        )
    })
    return (
        <section className='max-w-[1300px] mx-auto px-12 py-10'>

            {/* Tab */}
            <div className='flex gap-3 justify-center items-center mt-8'>
                {
                    categories.map(category => {
                        return (
                            <button key={category} className={` px-8 py-2 rounded-full text-lg whitespace-nowrap cursor-pointer
                            ${activeTab === category ? "bg-blue-600 text-white" : "bg-zinc-100 text-zinc-800"}`}
                                onClick={() => setActiveTab(category)}>
                                {category}
                            </button>
                        )
                    })
                }
            </div>


            {/* product listing */}
            <div className='grid grid-cols-4 gap-9 mt-12'>
                {renderProducts}
            </div>
        </section>
    )
}

export default Product