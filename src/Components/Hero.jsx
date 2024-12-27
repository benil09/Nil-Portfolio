import React from 'react'
import {HERO_CONTENT} from "../constants/index.js"
import profilePic from "../assets/kevinProfile.jpg"
import {motion} from "framer-motion"

function Hero() {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-36'>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start ">
                <motion.h1 
                initial={{x:-100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:0.5,delay:0.5}}
                className='pb-16 text-6xl flex font-bold tracking-tight lg:mt-16 lg:text-8xl'>Nilkamal Priydarshi</motion.h1>
                <span className='bg-gradient-to-r from-pink-400 via-slate-400 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent justify-start '>Full Stack Developer </span>
                <p className='mt-5 my-2 max-w-xl py-6  tracking-tighter'>{HERO_CONTENT}</p>
            </div>
            </div>
            <div className="w-full  lg:w-1/3 lg:p-8">
            <div className="flex justify-center">
              <img className='rounded-2xl ' src={profilePic} alt="mainImage" />

            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
