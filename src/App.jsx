import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Project from './Project'
import OtpPage from './OtpPage'
import { Link } from 'react-router-dom'
import Nav from './components/Nav'
const App = () => {
  return (

    //   <div className='grid grid-cols-1 sm:grid-cols-12'>
    //    <div className='col-span-1 sm:col-span-4 bg-red-500 '>
    //     Child 1
    //    </div>
    //    <div className='col-span-1 sm:col-span-4 bg-green-500 '>
    //     Child 2
    //    </div>
    //    <div className='col-span-1 sm:col-span-4 bg-blue-500'>
    //     Child 3
    //    </div>
    // </div>
    <div className='w-screen h-screen flex justify-center items-center'>
      
      <Routes>
        <Route path='/' element={<Project/>}/>
        <Route path='/second' element={<OtpPage/>}/>
      </Routes>
      
      

    </div>
  )
}

export default App
