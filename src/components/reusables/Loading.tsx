import { Loader2 } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-white fixed top-0 bottom-0 right-0 left-0'>
        <Loader2 className='animate-spin text-primary' size={100} />
    </div>
  )
}

export default Loading