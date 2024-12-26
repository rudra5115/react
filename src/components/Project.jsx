import React, { useEffect, useState } from 'react'
import { projectsData } from '../assets/assets'
import { motion } from "motion/react"

const Project = () => {
    const [currunt,setcurrent]= useState(0)
    const [card,setcard]= useState(1);

    useEffect(()=>{
        const updateCard =()=>{
            if(window.innerWidth >= 1024){
                setcard(projectsData.length)
            }else{
                setcard(1)
            };
        };
        updateCard();

        window.addEventListener('resize',updateCard);
        return()=> window.removeEventListener('resize',updateCard);
    },[])
    const nextProject= ()=>{
        setcurrent((prevIndex)=> (prevIndex+1) % projectsData.length)
    }
    
    const prevProject= ()=>{
        setcurrent((prevIndex)=> prevIndex === 0 ? projectsData.length-1 : prevIndex - 1)
    }

  return (
    <>
        < motion.div 
             initial={{opacity:0, x:-200}}
             transition={{duration: 1}}
             whileInView={{opacity:1,x:0}}
             viewport={{once:true}}     
            className='container mx-auto py-4 pt-20 px-6 md-px-20 lg:px-32 my-20 w-full overflow-hidden' id="Projects">
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center' >Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Competed</span></h1>
            <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Creafting Spaces , Builinding Legacies-Explore Our Portfolio</p>

            {/* slider button */}
            <div className='flex justify-end items-center mb-8'>
                <button onClick={prevProject}  className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
                    <img src="data:image/svg+xml,%3csvg%20width='9'%20height='14'%20viewBox='0%200%209%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%201L1%207L8%2013'%20stroke='%232563EB'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" alt="" />
                </button>
                <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project'>
                    <img src="data:image/svg+xml,%3csvg%20width='9'%20height='14'%20viewBox='0%200%209%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%201L8%207L1%2013'%20stroke='%232563EB'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" alt="" />
                </button>
            </div>

            {/* Project slider  */}
            <div className='overflow-hidden'>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{transform: `translateX(-${(currunt * 100)/card}%)`}}>
                    {projectsData.map((project,index)=>(
                            <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                                <img src={project.image} alt="" className='w-full h-auto mb-14' />
                                <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                    <div className='inline-block bg-white  w-3/4 px-4 py-4 shadow-md'>
                                        <h2 className='text-xl font-semibold text-gray-800'> 
                                            {project.title}
                                        </h2>
                                        <p className='text-gray-500 text-sm'>
                                            {project.price} <span>|</span> {project.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
        </motion.div>
    </>
  )
}

export default Project