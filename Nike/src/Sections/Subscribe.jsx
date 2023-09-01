import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section className='max-container flex justify-between items-center max-lg:flex-col gap-10' id='contact-us'>
      <h3 className='font-palanquin leading-[68px] lg:max-w-md text-4xl text-center font-bold'>
        Sign Up For <span className='text-coral-red'>Updates</span> & Newsletter
      </h3>

      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type="text" placeholder='Subscribe@nike.com' className='input' />
        <div className='flex max-sm:jutify-end items-center max-sm:w-full'>
          <Button label="Sign up" fullwidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe