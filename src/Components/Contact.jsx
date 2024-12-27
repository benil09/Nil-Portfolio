import React from 'react'
import { CONTACT } from '../constants'

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
    <h2 className='my-16 text-center text-4xl'>Contacts</h2>
 <div className="text-center tracking-tighter">
  <p className='my-4'>{CONTACT.address}</p>
  <p className='my-4'> Ph :  {CONTACT.phoneNo}</p>
  <a href="#" className='border-b'>Mail : {CONTACT.email}</a>
 </div>

</div>
  )
}

export default Contact
