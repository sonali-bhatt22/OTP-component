import React from 'react'
import Otp from './components/Otp'
import Nav from './components/Nav'
import Button from './components/Button'
import { useState } from 'react'
const Project = () => {
  const [input, setInput] = useState(null)
  const [disabled, setDisabled] = useState(true)

  const handleInput = (e) =>{
    const value = e.target.value
    setInput(value)
    if (value.length > 0){
      setDisabled(false)
    }else{
      setDisabled(true)
    }

  }
  return (
    <div className='w-screen h-screen bg-blue-700 flex justify-center '>
      
      <div>
       

        <h1 className='text-3xl text-white font-bold ml-20 mt-36 '>Verify Your Age</h1>
        <div className='flex flex-col gap-3 mt-10 items-center mb-10'>
            <p className='text-[#93c4fd6e]'>Please confirm your birth year. This data will not be stored </p>
            <input type="text" onChange={handleInput}  name="" id="" placeholder='Your Birth Year' className='bg-[#8cc1cf34] p-4 w-[370px] text-white rounded-md outline-none font-semibold'/>
            <Button name={"Continue"} disabled={disabled}/>
            <Nav/>
        </div>
        
        
      </div>
      
    </div>
  )
}

export default Project
