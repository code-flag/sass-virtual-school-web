"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { Book, File, FileEdit, FileUp, LayoutDashboardIcon, LogOut, Pen, Send, SendHorizonal, Settings, User } from 'lucide-react'
import Image from 'next/image'

export const navLinks = [
  {
      href: "/dashboard",
      icon: LayoutDashboardIcon,
      tooltip: "Dashboard",
    },
    {
      href: "/dashboard/#",
      icon: Pen,
      tooltip: "Study",
    },
    {
      href: "/dashboard/#",
      icon: Book,
      tooltip: "Exams",
    },
    {
        href: "#",
        icon: User,
        tooltip: "Profile",
      },
]



const LeftSidebar = () => {
    const [openModal, setOpenModal] = useState(false)
    const path = usePathname()
    const searchParams = useSearchParams()
    const params = searchParams.get("q")

    const activeRoute = path 

   

    // console.log("PATH",activeRoute)

  return (
    <aside className="md:w-[13rem] backdrop-blur-sm shadow-sm bg-white relative min-h-screen shadow-3xl md:h-screen max-lg:hidden h-auto w-full flex flex-col md:flex-col gap-10 md:gap-5 px-  z-30">
         <div className='mt-3 pt-2 px-6 '>
         <div className=' flex flex-row gap-2 items-center'>
            <Link href={"/"} className=' text-[#407BFF] text- text-center'>
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
        {/* <hr /> */}
        <div className=' flex flex-col gap-4 px-6 mt-6'>
            {
                navLinks.map((link,idx) => (
                <div key={idx} className=' flex flex-col gap-6 items-center justify-center'>
                    <Link href={link?.href} className={`${activeRoute === link?.href ? "bg-[#407BFF] rounded-xl hover:transition-all hover:opacity-80 text-white" : " text-[#475569] rounded-xl hover:bg-gray-100 hover:transition-all transition-all"}  flex flex-row gap-2 items-center w-full  px-2 py-2  `}>
                        <link.icon size={20} className={`${activeRoute === link?.href ? "text-white" : "text-[#407BFF]"}`} />
                        <span>{link?.tooltip}</span>
                    </Link>
                </div>
                ))
            }
        </div>




    </aside>
  )
}

export default LeftSidebar