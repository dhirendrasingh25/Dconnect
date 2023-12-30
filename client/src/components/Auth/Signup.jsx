import React from 'react'
import { useState } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  
  return (
    <div className='sm:w-[40%] sm:h-[70%] p-2  mt-24 sm:mt-0 rounded-lg bg-white'>
      <div className='flex flex-col '>
        <div className='flex flex-row '>
        <Link to='/'><button className='p-2 w-full px-6 text-center text-lg font-semibold text-[#4b48e5] rounded-lg '>Login</button></Link>
         <button className='p-2 w-full px-6 text-center text-lg font-semibold text-[#4b48e5] bg-[#e6e5fb] rounded-lg '>Signup</button>
        </div>
        <div className='flex flex-col p-2 py-2'>
          <div className='flex flex-col'>
            <div className='p-2 font-semibold '>Email Address</div>
            <input
              className='p-2 w-full outline-none  text-gray-500'
              type='text'
              placeholder='Enter Email Address'
            ></input>
          </div>
          <div className='flex flex-col '>
            <div className='p-2 font-semibold'>Password</div>
              <div className='flex flex-row'>
              <input
                className='p-2 w-full outline-none text-gray-500'
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter Password'
              ></input>
              <button onClick={()=>setShowPassword(!showPassword)}>
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </button>
            </div>
          </div>
        </div>
        <div className=''>
          <button className='w-full text-xl p-2 rounded-lg text-white py-2 font-semibold bg-[#918fef]'>Signup</button>
        </div>
      </div>
    </div>
  )
}

export default Signup
