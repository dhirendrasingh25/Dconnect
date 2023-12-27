import React from 'react'
import WebStoriesIcon from '@mui/icons-material/WebStories';
import MessageIcon from '@mui/icons-material/Message';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import ChatCard from '../Cards/ChatCard';
import { useState } from 'react';

const HomePage = () => {
    const [query, setQuery] = useState(null)

    const handleSearch=(e)=>{
        e.preventDefault()
        console.log(e.target.value);
    }

  return (
    <div className='relative'>
      <div className='py-14 top-0  bg-[#5C59E8] w-full'></div>
      <div className='flex h-[94vh]  absolute top-6 w-full'>
        <div className='flex flex-row  w-full h-full mx-6'>
        <div className='w-[30%] flex flex-col bg-[#cacaf6] h-full'>
            <div className='flex p-3 flex-row justify-between'>
                <div className='flex flex-row items-center'>
                    <div className='flex items-center '>
                      <button> 
                    <img className='rounded-full border-[#7676e8] border-2 w-10 h-10' 
                      src='https://res.cloudinary.com/dzpmwlc9b/image/upload/v1703345697/SOCIALMEDIA/eakfabs8ewvy6vbwvxmg.jpg'/>
                    </button>
                    </div>
                    <div className='px-2 text-[#5a5ae3] font-semibold'>
                        username
                    </div>
                </div>
                <div className='flex flex-row items-center'>
                    <div className='p-2 ' >
                    <button className='text-[#7676e8]'> <WebStoriesIcon /></button>
                    </div>
                    <div className='p-2'> 
                     <button className='text-[#7676e8]' >  <MessageIcon /></button> 
                    </div>
                </div>
            </div>
            <div className='p-3 flex flex-col bg-[#ededfc] h-full'>
            <div className='flex flex-row border-b-2 border-[#e6e5fb] pb-1 justify-between items-center '>
                <div className='flex flex-row items-center bg-[#cacaf6] rounded-lg w-[93%]'>
                    <div className='px-2 text-[#5C59E8]'>
                       <SearchIcon />
                    </div>
                    <div className='w-full'>
                        <input type='text' placeholder="Search or start new Chat" className='p-2 text-[#5C59E8] border-none outline-none  rounded-lg bg-[#cacaf6] w-full '></input>
                    </div>
                </div>
                <div className='p-2'>
                    <button className='text-[#5C59E8]'><FilterListIcon /></button>
                </div>
            </div>
            <div className='overflow-y-scroll h-full'>
                {
                    [1,1,1,1,1,1,1,1].map((item)=>
                    <ChatCard />
                    )
                }
            </div>
            </div>  
        </div>
        

        <div className='bg-[#e6e6fa] flex flex-col w-[70%] h-full'>

        </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
