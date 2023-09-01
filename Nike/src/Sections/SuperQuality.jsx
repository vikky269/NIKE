import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

import { motion, useAnimation } from "framer-motion"

import { useInView } from "react-intersection-observer"

import { useEffect } from "react"

const SuperQuality = () => {

  const control = useAnimation()
  const [ref, inView] = useInView()


  const boxVariant = {
    visible: {x:0},
    hidden: {x:100}
  }
  
  const textVariant = {
    visible: {x:0},
    hidden: {x:-100},
  }
  
  useEffect(() => {
    if (inView) {
      control.start("visible")
    } 
  }, [control, inView])




  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <motion.div 
      ref={ref}
      variants={textVariant}
      initial="hidden"
      animate={control}
      transition={{duration:1}}
      
      className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin capitalize font-bold lg:max-w-lg">
          We provide you <span className="text-coral-red">Super</span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className="mt-11 w-[200px]">
          <Button label="Shop now" 
          />
        </div>
      </motion.div>

      <div className="flex-1 justify-center items-center">
        <motion.img
         ref={ref}
         variants={boxVariant}
         initial="hidden"
         animate={control}
         transition={{duration:1}}

          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality
