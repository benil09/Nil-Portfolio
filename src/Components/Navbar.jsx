import React from 'react'

import {FaLinkedin} from  "react-icons/fa"
import {FaGithub} from  "react-icons/fa"
import {FaInstagram} from  "react-icons/fa"
import {FaTwitter} from  "react-icons/fa"
function Navbar() { 
  return (
    <nav className='mb-20 flex items-center justify-between py-6 '>
        <div className='flex flex-shrink-0 items-center'>
          <h1 className='text-4xl font-bold '>Portfolio</h1>
        </div>
        <div className='flex m-8 items-center justify-center gap-4 text-2xl'>
            <FaGithub/>
            <FaInstagram/>
            <FaTwitter/>
            <FaLinkedin/>

        </div>
    </nav>
  )
}

export default Navbar
 