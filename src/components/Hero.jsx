import React from 'react'
import bgImg from '../assets/ebullitt-classic_2020_0073.jpg'
import {ArrowDownIcon} from '@heroicons/react/24/solid'


const Hero = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-between'>
            <div className='mt-12 md:mt-4 lg:mt-0'>
                <img className='w-full h-auto' src={bgImg} alt="" />
            </div>
        <div className='max-w-[1240px] m-auto'>

            <div className='flex flex-col justify-center w-full px-2'>
                <h1 className='text-4xl font-bold mb-2 text-center'>Enjoyable City Transportation</h1>
                <p className='text-2xl text-center py-4'>unrivalled stability, greater control and maximum space</p>
                <p className='text-center text-gray-400 mt-10'>Starting from</p>
                <p className='text-center font-bold mt-3 mb-5'>4.960 EUR</p>
                <p className='text-center text-sm uppercase'>Explore</p>
                <div className='flex justify-center mt-3'>
                        <ArrowDownIcon className='w-5 animate-bounce'/>
                </div>
            </div>
        
        </div>    
    </div>
  )
}

export default Hero