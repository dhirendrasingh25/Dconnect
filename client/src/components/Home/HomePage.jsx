import React from 'react'


const HomePage = ({children}) => {
  return (
    <div className='bg-[#7573eb] w-screen h-screen '>
      <div className='flex justify-center items-center p-10 drop-shadow-xl'>
        <div className=' text-center text-3xl font-bold p-6 text-[#4b48e5] bg-white sm:w-[40%] rounded-lg'>Dconnect</div>
      </div>
      <div className='sm:flex justify-center  mx-3 sm:m-0 drop-shadow-lg '>
       {children}
      </div>
    </div>
  )
}

export default HomePage
