import React, { forwardRef } from 'react'

const Button = forwardRef(({name, disabled, ref}) => {
  return (
    <div>
      <button ref={ref} className={` p-4 rounded-md mt-3 text-[#002b5b] w-[370px] ${disabled ? "bg-blue-200 ": "bg-green-400"}`}>{name}</button>
    </div>
  )
})

export default Button
