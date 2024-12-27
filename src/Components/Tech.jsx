import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";









function Tech() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Tech-Stack</h2>
     <div className="flex flex-wrap items-center justify-center gap-4">

     <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiMongodb style={{color:"#47A248"}} className='text-7xl text-cyan-400'/>
     </div>
     <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiExpress className='text-7xl text-white-400'/>
     </div>
     <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <RiReactjsLine className='text-7xl text-cyan-400'/>
              
     </div>
     <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaNodeJs style={{color:" #339933"}} className='text-7xl text-cyan-400'/>
     </div>
     <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaFigma style={{color:"#A259FF"}} className='text-7xl text-red-400'/>
     </div>
     <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaPython style={{color:" #FFD43B"}} className='text-7xl text-white-400'/>
     </div>
     <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaJava style={{color:"#5382A1"}} className='text-7xl text-white-400'/>
     </div>
     <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiMysql style={{color:" #5D9B9F "}}  className='text-7xl text-white-400'/>
     </div>
     <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaGithub style={{color:"white"}}  className='text-7xl text-white-400'/>
     </div>
    
     </div>
           
    </div>
  )
}

export default Tech
