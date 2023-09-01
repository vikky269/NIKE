import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-6'>
        <img src={imgURL} alt="Customerimg" className='rounded-full object-cover w-[120px] h-[120px]' />
         <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
         <div className=' mt-3 flex justify-center items-center gap-2.5'>
            <img src={star} alt="star"  width={24} height={24} className='object-contain m-0'/>
            <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
         </div>
         <h3 className='font-bold mt-1 font-palanquin text-center text-3xl'>
            {customerName}
         </h3>
    </div>
  )
}

export default ReviewCard