import React from 'react'
import { useState } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios"
import { useToast } from "@chakra-ui/toast";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const toast = useToast();
  const [pic, setPic] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const navigate = useNavigate()

  const formSubmit=async (formData)=>{
    
    
    //  console.log(data);
    if(formData.cpassword !== formData.password){
      toast({
        title: "Confirm Password and Password do not match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:7070/user/register/",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          pic: pic,
        },
        config
      );
      console.log(data);

      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      reset()
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
      
    }
  
    // try {
    //   const response = await axios.post('', data, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });
    //   console.log(response.data); 
      
    // } catch (error) {
    //   console.log('Error occurred:', error);
    //   setPasswordError("Email Already Exists")
    // }
    
  } 
  const postDetails = (pics) => {
    
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(pics);
    if (pics.type === "image/jpeg" || pics.type === "image/png" || pics.type === "image/jpg" || pics.type === "image/svg") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "Dconnect");
      data.append("cloud_name", "dzpmwlc9b");
      fetch("https://api.cloudinary.com/v1_1/dzpmwlc9b/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          
        })
        .catch((err) => {
          console.log(err);
          
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      
      return;
    }
  }; 
  return (
    <div className='sm:w-[40%] sm:h-[70%] p-2 mt-24 sm:mt-0 rounded-lg bg-white'>
    <form onSubmit={handleSubmit(formSubmit)}>
    <div className='flex flex-col '>
        <div className='flex flex-row '>
        <Link to='/'><button className='p-2 w-full px-6 text-center text-lg font-semibold text-[#4b48e5] rounded-lg '>Login</button></Link>
         <button className='p-2 w-full px-6 text-center text-lg font-semibold text-[#4b48e5] bg-[#e6e5fb] rounded-lg '>Signup</button>
        </div>
        <div className='flex flex-col p-2 py-2'>
        <div className='flex flex-col'>
            <div className='p-2 font-semibold '>Name
            {errors.name && (
                  <span className="text-red-500 pl-2 font-semibold">{errors.name.message}</span>
                )}
            </div>
            <input
                id="name"
                {...register("name", {
                  required: "Name is required",
                  
                })}
                className='p-2 w-full outline-none  text-gray-500'
                type='text'
                placeholder='Enter Name'
            ></input>
            </div>
            
          <div className='flex flex-col'>
            <div className='p-2 font-semibold '>Email Address
            {errors.email && (
                  <span className= "  text-red-500 pl-2 font-semibold">{errors.email.message}</span>
                )}
            </div>
            
            <input
                id="email"
                {...register("email", {
                required: "Email is required",
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
          <div className='flex flex-col '>
            <div className='p-2 font-semibold'>Password
            {errors.password && (
                  <span className="text-red-500 pl-2 font-semibold">{errors.password.message}</span>
                )}
            </div>
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
            
          </div>
          <div className='flex flex-col '>
            <div className='p-2 font-semibold'>Confirm Password
            {errors.cpassword && (
                  <span className="text-red-500 pl-2 font-semibold">{errors.cpassword.message}</span>
                )}
            </div>
              <div className='flex flex-row'>
              <input
                id="cpassword"
                {...register("cpassword", {
                    required: "Confirm Password is Required",
                })}
                className='p-2 w-full outline-none text-gray-500'
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter Password'
              ></input>
              <button type='button' onClick={()=>setShowPassword(!showPassword)}>
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </button>
            </div>
            
          </div>
          <div className='flex flex-col '>
            <div className='p-2 font-semibold'>Upload your Picture</div>
              <div className='flex flex-row'>
              <input
                onChange={(e) => postDetails(e.target.files[0])}
                className='p-2 w-full outline-none text-gray-500'
                type='file'
                placeholder='Enter Password'
                accept='.jpg, .png, .jpeg'
              ></input>
            </div>

          </div>
        </div>
        <div className=''>
            <button className='w-full text-xl p-2 rounded-lg text-white py-2 font-semibold bg-[#918fef]'>Signup</button> 
        </div>
      </div>        
    </form>

    </div>
  )
}

export default Signup
