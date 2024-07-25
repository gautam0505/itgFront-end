import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Verifyotp from '../components/Verifyotp'
import { useForm } from "react-hook-form"

const Login = () => {

  

  
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
      
     
  
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
            <div className='mt-5 space-y-5 border-[2px] p-10 shadow-md rounded-md'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <span>Enter Your Phone Number:</span> <br/><br/>
                    <input 
                    type='number' 
                    placeholder='1234567890' 
                   
                    className='w-80 h-10 px-3 border rounded-md outline-none '
                    {...register("number" , { required: true })} 
                    />
                    <br/><br/>
                    
                    <button 
                    onClick={()=> document.getElementById('my_modal_3').showModal()}
                    className='bg-zinc-500 text-zinc-50 rounded-md px-3 py-3'>Get OTP</button>

                </form>
            </div>

            
    </div>
    <div style={{visibility: 'hidden' }}>
    <Verifyotp />
    </div>
    
    </>
  )
}

export default Login