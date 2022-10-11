import React, {useState} from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (


        <div className='w-screen h-14 bg-zinc-100 fixed border-b-2 border-zinc-300'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='font-bold text-2xl ml-3'>CARGO</h1>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>Bike</li>
                        <li>About</li>
                    </ul>
                </div>

                <div className='md:hidden' onClick={handleClick}>
                    {!nav ? <Bars3Icon className='w-5 mr-3' /> : <XMarkIcon className='w-5 mr-3'/>}
                    
                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolue bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-zinc-300 w-full'>Home</li>
                <li className='border-b-2 border-zinc-300 w-full'>Bike</li>
                <li className='border-b-2 border-zinc-300 w-full'>About</li>
                <li className='border-b-2 border-zinc-300 w-full'>Businesses</li>
            </ul>
        </div>
    )
}
export default Navbar