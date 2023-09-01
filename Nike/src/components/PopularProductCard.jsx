import React from 'react'
import { star } from '../assets/icons'

import { motion, useAnimation } from "framer-motion"

import { useInView } from "react-intersection-observer"

import { useEffect } from "react"



const PopularProductCard = ({imgURL, name, price}) => {

  const control = useAnimation()
  const [ref, inView] = useInView()


  const boxVariant = {
    visible:  {scale:1},
    hidden: {scale:0},
  }
  
  useEffect(() => {
    if (inView) {
      control.start("visible")
    } 
  }, [control, inView])



  return (
    <motion.div 
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        transition={{duration:1}}
    
    className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt="image" className='w-[280px] h-[280px]'/>

         <div className='flex mt-8 justify-start gap-2.5'>
         <img src={star} alt="rating"  width={24} height={24}/>
         <p className='text-slate-gray text-xl leading-normal font-montserrat'>(4.5)</p>
         </div>
         <h3 className='text-2xl mt-2 leading-normal font-semibold font-palanquin'>{name}</h3>
         <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{price}</p>
    </motion.div>
  )
}

export default PopularProductCard