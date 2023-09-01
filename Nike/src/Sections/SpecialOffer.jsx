import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { motion, useAnimation } from "framer-motion"

import { useInView } from "react-intersection-observer"

import { useEffect } from "react"

const SpecialOffer = () => {

  const control = useAnimation()
  const [ref, inView] = useInView()


  const boxVariant = {
    visible:  { y:0},
    hidden: { y:200}
  }
  
  const textVariant = {
    visible: {y:0},
    hidden: {y:200},
  }

  useEffect(() => {
    if (inView) {
      control.start("visible")
    } 
  },[control, inView])



  return (

    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <motion.img
         ref={ref}
         variants={boxVariant}
         initial="hidden"
         animate={control}
         transition={{duration:1}}
         src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <motion.div 
      
      ref={ref}
      variants={textVariant}
      initial="hidden"
      animate={control}
      transition={{duration:1}}

      className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className=" flex flex-wrap gap-4 mt-11">
          <div>
            <Button label="View details" IconURL={arrowRight} />
          </div>

          <div>
            <Button
              label="learn more"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default SpecialOffer;
