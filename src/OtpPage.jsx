import React from 'react'
import Otp from './components/Otp'
import Nav from './components/Nav'
import Button from './components/Button'

const OtpPage = () => {
  return (
    <div className='w-screen h-screen bg-blue-700 flex justify-center '>
      
      <div>
        
        <h1 className='text-3xl text-white font-bold ml-20 mt-32 '>Check Your Email For A Code</h1>
        <div className='flex flex-col gap-3 mt-10 items-center '>
            <p className='text-[#93c4fd6e] sm:ml-10'>Please enter the verification code sent to your email id bhattsonali36@gmail.com </p>
            <Otp number={6}/>
            {/* //<Button name={"verify"} disabled={true}/> */}
            <p className='text-[#93c4fd6e]'>Can't find the email? Click here to resend</p>
            <Nav/>
        </div>
        
        
      </div>
     
      
      
    </div>
  )
}

export default OtpPage
