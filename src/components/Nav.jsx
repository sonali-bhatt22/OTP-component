import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
        <nav className='flex gap-32 text-xl text-[#002b5b] mt-32'>
           <Link to='/' className='bg-green-400 px-5 py-1 rounded-md' >First Page</Link>
           <Link to='/second' className='bg-green-400 px-5 py-1 rounded-md' >Second</Link>
        </nav>
        
    </div>
  )
}

export default Nav
