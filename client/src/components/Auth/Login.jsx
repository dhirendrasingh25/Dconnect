import React from 'react'
import { useState } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios"
import { useToast } from "@chakra-ui/react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  
  const navigate = useNavigate();

  const formSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/user/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // console.log(response.data); 
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      })
      localStorage.setItem("userInfo", JSON.stringify(data));
      reset();
      navigate('/')
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      console.log('Error occurred:', error);
    }
  };
  return (
    <div className='sm:w-[40%] sm:h-[70%] p-2  mt-24 sm:mt-0 rounded-lg bg-white'>
      <form onSubmit={handleSubmit(formSubmit)}>
      <div className='flex flex-col '>
        <div className='flex flex-row '>
          <button className='p-2 w-full px-6 text-center text-lg font-semibold text-[#4b48e5] bg-[#e6e5fb] rounded-lg '>Login</button>
          <Link to='/signup'><button className='p-2 w-full px-6 text-center text-lg font-semibold text-[#4b48e5] '>Signup</button></Link>
        </div>
        <div className='flex flex-col p-2 py-2'>
          <div className='flex flex-col'>
            <div className='p-2 font-semibold '>Email Address</div>
            <input
              id="email"
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                  message: "Email not valid",
                },
              })}
              className='p-2 w-full outline-none  text-gray-500'
              type='text'
              placeholder='Enter Email Address'
            ></input>
          </div>
          {errors.email && (
                  <p className="text-red-500 pl-2 font-semibold">{errors.email.message}</p>
                )}
          <div className='flex flex-col '>
            <div className='p-2 font-semibold'>Password</div>
              <div className='flex flex-row'>
              <input
                id="password"
                {...register("password", {
                  required: "Password is Required",
                })}
                className='p-2 w-full outline-none text-gray-500'
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter Password'
              ></input>
              <button type="button" onClick={()=>setShowPassword(!showPassword)}>
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </button>
            </div>
            {errors.password && (
                  <p className="text-red-500 font-semibold pl-2">{errors.password.message}</p>
                )}
          </div>
        </div>
        <div className=''>
          <button type='Submit'  className='w-full text-xl p-2 rounded-lg text-white py-2 font-semibold bg-[#918fef]'>Login</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Login
