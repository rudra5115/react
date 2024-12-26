import React, { useState,useEffect } from "react";

const Navbar = () => {
    const [show,setShow] = useState(false)

    useEffect(() => {
        if(show){
            document.body.style.overflow="hidden"
        }else{
            document.body.style.overflow="auto"
        }
        return()=>{
            document.body.style.overflow="auto"
        };
    }, [show])
    

    return (
        <>
            <div className="absolute top-0 left-0 w-full z-10">
                <div className="container mx-auto flex justify-between item-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
                    <img src="https://estatedev.in/assets/logo-CfQex_Go.svg" alt="" />
                    <ul className="hidden md:flex gap-5 text-white mt-3">
                        <a href="#header" className='cursor-pointer hover:text-gray-400'>Home</a>
                        <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                        <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                        <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testtimonials</a>
                    </ul>
                    <button className="hidden md:block bg-white px-8 py-2 rounded-full">SignUp</button>
                    <img onClick={()=>setShow(true)} src="data:image/svg+xml,%3csvg%20width='36'%20height='29'%20viewBox='0%200%2036%2029'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='35.9988'%20height='4'%20rx='2'%20fill='white'/%3e%3crect%20x='13.0898'%20y='12.5'%20width='22.9083'%20height='4'%20rx='2'%20fill='white'/%3e%3crect%20x='4.91016'%20y='25'%20width='31.0899'%20height='4'%20rx='2'%20fill='white'/%3e%3c/svg%3e" class="md:hidden w-7 cursor-pointer" alt=""/>
                </div>

                {/* mobile menu */}
                <div className={`md:hidden ${show ? 'fixed w-full' : 'h-0 w-0' }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                    <div className="flex justify-end p-6 cursor-pointer">
                        <img onClick={()=>setShow(false)} src="data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_7625_1251)'%3e%3cpath%20d='M46.6175%200L25%2021.6902L3.38257%200L0.0722656%203.29969L21.7009%2025.0004L0.0722656%2046.7018L3.38257%2050L25%2028.3105L46.6175%2050L49.9278%2046.7018L28.2991%2025.0004L49.9278%203.29969L46.6175%200Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_7625_1251'%3e%3crect%20width='50'%20height='50'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="" className="w-6 " />
                    </div>
                    <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                        <a onClick={()=>setShow(false)} href="#Header" className="px--4 py-2 rounded-full inline-block">Home</a>
                        <a onClick={()=>setShow(false)} href="#About" className="px--4 py-2 rounded-full inline-block">About</a>
                        <a onClick={()=>setShow(false)} href="#Projects" className="px--4 py-2 rounded-full inline-block">Projects</a>
                        <a onClick={()=>setShow(false)} href="#Testimonails" className="px--4 py-2 rounded-full inline-block">Testimonails</a>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar