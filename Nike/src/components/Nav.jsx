import React, { useState } from 'react'
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'


const Nav = () => {

    const[open, setopen] = useState(false)
    console.log(open)

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container max-lg:relative'>
            <a href="/">
                <img src= {headerLogo} alt="logo" width={130} height={29} className='m-0 w-[129px] h-[29px]'/>
            </a>
            <ul className={`flex-1 flex justify-center items-center gap-16 
             ${open ? "max-lg:flex-col max-lg:gap-16 max-lg:bg-slate-gray max-lg:absolute max-lg:top-3.5 max-lg:right-0 max-lg:mt-12 max-lg:p-9 sticky" : "max-lg:hidden"} ${open? "top-10":"top-[-490px]"} `}>
               {navLinks.map((item)=> {
                return (
                    <li key={item.label}>
                        <a 
                        href= {item.href} 
                        className='font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red max-lg:text-white'>
                            {item.label}
                        </a>
                    </li>
                )
               })}
                  
            </ul>

            <div onClick={()=>setopen(!open)} className='hidden max-lg:block cursor-pointer'>
                    <img src= {hamburger} alt="hamburger"  width={25} height={25}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav