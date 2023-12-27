import React from 'react'

const ChatCard = () => {
  return (

      <div className='flex flex-row items-center my-2 p-1 border-b-2 border-[#e6e5fb]'>
        <div className='w-[20%]'>
        <img 
            className='rounded-full  w-16 h-16' 
            src='https://res.cloudinary.com/dzpmwlc9b/image/upload/v1703345697/SOCIALMEDIA/eakfabs8ewvy6vbwvxmg.jpg'
        />
        </div>
        <div className='flex flex-col w-full p-2'>
        <div className='  flex flex-row justify-between items-center'>
            <div className=' font-medium text-[#5a5ae3] text-xl'>Name</div>
            <div className='text-xs'>timeline</div>
        </div>
        <div className='  flex flex-row justify-between '>
            <div className='text-xs'>Messages ...</div>
            <div className='text-xs rounded-full bg-green-500 p-1 px-2'>10</div>
        </div>

        </div>
      </div>
  )
}

export default ChatCard
