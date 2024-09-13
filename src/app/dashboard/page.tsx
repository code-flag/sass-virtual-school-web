

import Loading from '@/components/reusables/Loading'
import React, { Suspense } from 'react'

const Dashboard = () => {
  return (
    <div className="bg-white flex flex-col text-black md:items-center md:justify-center min-h-screen">
        <Suspense fallback={<Loading />}>
         <h1>Dashboard page</h1>
        </Suspense>
      </div>
  )
}

export default Dashboard