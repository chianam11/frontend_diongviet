"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
const Support = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(setIsOpen);
  
  return (
  <div>
    {isOpen&&<div className='bg-black w-full fixed bottom-0 right-0 left-0 top-0 opacity-40'>

   </div>}
   
      <button className='fixed bottom-28 z-50 right-6 text-white rounded-full shadow-lg transition-colors duration-300' >
        <Image
          src="/mascotcr-support.svg"
          alt="Support Icon"
          className="min-w-[3rem]"
          width={32}
          height={32}/>
    </button>
    </div>
    
  )
}

export default Support