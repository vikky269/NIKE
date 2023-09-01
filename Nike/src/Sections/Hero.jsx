import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import {motion} from 'framer-motion'

const Hero = () => {

  const exampleVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
    hidden: { opacity: 0, scale: 0 },
  }

  const heroText = {
    visible: { opacity: 1, translateX:0, transition: { duration: 2 } },
    hidden: { opacity: 0,  translateX:-100 },
  }
  
const[bigShoeImage, setbigShoeImage] = useState(bigShoe1)

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <motion.p
        initial={{x:-100, opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{duration:2}}
        className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </motion.p>
        <motion.h1 
        variants={heroText}
        animate="visible"
        initial="hidden"
        className="mt-10 text-8xl font-palanquin max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative xl:z-10 xl:pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </motion.h1>
        <motion.p 
        initial={{x:-100}}
        animate={{x:0}}
        transition={{duration:2}}
        className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike Arrivals, Quality comfort, and innovation for
          your active life.
        </motion.p>
        <motion.div
         initial={{x:-100}}
         animate={{x:0}}
         transition={{duration:2}}
        >
        <Button label="Shop now" IconURL={arrowRight} />
        </motion.div>
       

        <motion.div
        initial={{x:-100}}
        animate={{x:0}}
        transition={{duration: 2}}
        className="flex justify-start items-start gap-16 flex-wrap w-full mt-20">
          {statistics.map((stat) => {
            return (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold xl:text-4xl">
                  {stat.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </motion.div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <motion.img
         variants={exampleVariant}
         animate="visible"
         initial="hidden"
          src={bigShoeImage}
          alt="bigshoe1"
          width={610}
          height={510}
          className="object-contain relative z-10 xl:pl-8"
        />

        <motion.div 
        initial={{translateY:100}}
        animate={{translateY:0}}
        transition={{duration: 3}}
        className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe)=>{
            return(
                <div key={shoe}>
                <ShoeCard
                imgURL={shoe}
                ChangeBigShoeImage= {(shoe)=> setbigShoeImage(shoe)}
                bigShoeImage = {bigShoeImage} />
                </div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}

export default Hero;
