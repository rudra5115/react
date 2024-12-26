import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='pt-10 px-4 md:px20 lg:px-32 bg-gray-900 w-full overflow-hidden' id="Footer">
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <img src="https://estatedev.in/assets/logo_dark-BlEproOr.svg" alt="" />
                    <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt totam dolor facilis! Saepe sapiente sequi ex veniam nostrum autem, explicabo, tenetur, dolores quo officia in! Obcaecati sequi eligendi consequatur ea?</p>
                </div>
                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg mb-4 font-wight'>Company</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <a href="#Header" className='hover:text-white'>Home</a>
                        <a href="#About" className='hover:text-white'>About Us</a>
                        <a href="#Contect" className='hover:text-white'>Contect Us</a>
                        <a href="#" className='hover:text-white'>Privacy Policy</a>
                    </ul>
                </div>
                <div className='w-full md:w-1/3'>
                    <h3 className='text-white text-lg mb-4 font-wight'>Subscribe to our newsletter</h3>
                    <p className='text-gray-400 mb-4 max-w-80'>The latest news , articals and resourse sent to your inbox weekly</p>
                    <div className='flex gap-2'>
                        <input type="email" placeholder='Enter Your Email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
                        <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
                Copyright 2024 @ Rudra Patel
            </div>
        </div>
    </>
  )
}

export default Footer