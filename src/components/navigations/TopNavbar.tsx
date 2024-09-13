"use client"

import React, { useEffect, useState } from 'react'
import { MessageCircleQuestion } from 'lucide-react'
import Link from 'next/link'

import { usePathname, useSearchParams } from 'next/navigation'
import Image from 'next/image'



const TopNavbar = () => {

  const params = useSearchParams()
  const path = usePathname()
  const q = params.get("q")

  const pathName = path
  // console.log(pathName)

  

  return (
    <nav className="md:h-[70px] h-[60px] bg-white backdrop-blur-sm  shadow-sm max-lg:py-1 py-5 max-lg:px-4 px-9 sticky max-md:fixed top-0 w-full flex flex-row items-center justify-between z-30">
         
              <>
              <div className='mt- pt-2 px-2 lg:hidden '>
              <div className=' flex flex-row gap-2 items-center'>
                  <Link href={"/"} className=' text-violet-600 text- text-center'>
                  <Image
                  src="/images/logo/logo-2.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full dark:hidde"
                />
                  </Link>
             
              </div>
              </div>
                <div className=' flex flex-row gap-2 items-center justify-center'>
                  <div className=" lg:hidden p- h-8 w-8 lg:h-10 lg:w-10 flex items-center text-lg justify-center rounded-full bg-orange-500 font-bold text-white">
                    <span>F</span>
                  </div>
                </div>
                </>
        

           <div className={`${pathName === "/admi" ? "max-lg:hidden" : ""} max-lg:hidden flex flex-row  lg:hidden gap-2 items-center justify-center`}>
              <div className=" p- h-8 w-8 lg:h-10 lg:w-10 flex items-center text-lg justify-center rounded-full bg-orange-500 font-bold text-white">
                <span>B</span>
              </div>
            </div>

         <div className='  max-lg:hidden flex flex-row gap-2 items-center justify-center'>

             <div className=" p- h-8 w-8 lg:h-10 lg:w-10 flex items-center text-lg justify-center rounded-full bg-orange-500 font-bold text-white">
                <span>F</span>
              </div>
           
        </div>


      
    </nav>
  )
}

export default TopNavbar