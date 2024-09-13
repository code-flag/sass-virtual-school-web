"use client"
import { getUserToken } from '@/components/hooks/useGetToken';
import BottomNavbar from '@/components/navigations/BottomNavbar';
import LeftSidebar from '@/components/navigations/LeftSidebar';
import TopNavbar from '@/components/navigations/TopNavbar';
import Loading from '@/components/reusables/Loading';
import { redirect, useRouter } from 'next/navigation'
import { Suspense } from 'react';

const DashboardLayout = ({children}) => {

  
  const router = useRouter();

  const token = getUserToken()

  console.log("token", token)

  // if(!token) return redirect("/signin")


 

  return (
  <Suspense fallback={<Loading />}>
    <main className='flex flex-col md:flex-row min-h-screen overflow-hidden max-w-7xl mx-auto'>
    <LeftSidebar />
    <div className="relative h-screen flex flex-col flex-1 w-full custom-scrollbar overflow-y-auto bg-[#F1F1F1] " >
      <TopNavbar  />
          {children}
      <BottomNavbar />
    </div>
     </main>
    </Suspense>
  )
}

export default DashboardLayout