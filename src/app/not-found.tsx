
import React from 'react'
import Image from 'next/image'




    

 
const notFound = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
    <div>
        <Image src="/notfound.png" className='w-fit mx-auto drop-shadow-lg animate-bounce' width={50} height={100} alt='/notfound.jpg'/>
        <h3 className='text-xl font-bold text-blue-700'>oops Page Not Found</h3>
    </div>
    </div>
  )
}

export default notFound