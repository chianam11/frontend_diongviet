"use client"
import React from 'react'
import { RootState } from "@/redux/store";
import {  useSelector } from 'react-redux';
import Link from 'next/link';
const Cart = () => {
  const uniqueItemCount = useSelector((state: RootState) => Object.keys(state.cart.items).length);
  return (
    <div className='relative'>
      <Link href={"/check-out"}><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 lg:size-7 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg></Link>

         
<div className='absolute top-[-7px] right-[-8px] text-red inline-block bg-yellow-200 rounded-full text-[0.6rem] text-center px-[0.2rem]'>
  <Link href={"/check-out"}>  <span className='text-red-500'>{uniqueItemCount}</span></Link>
</div>
</div>
   

  )
}

export default Cart