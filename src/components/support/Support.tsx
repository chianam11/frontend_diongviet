import React from 'react'
import Image from 'next/image'
const Support = () => {
  return (
    <button className='fixed bottom-28 z-50 right-6 text-white rounded-full shadow-lg transition-colors duration-300'>
        <Image
          src="/mascotcr-support.svg"
          alt="Support Icon"
          className="min-w-[3rem]"
          width={32}
          height={32}/>
    </button>
  )
}

export default Support