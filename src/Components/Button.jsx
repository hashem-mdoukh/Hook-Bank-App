import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-medium font-poppins text-primary outline-none ${styles} rounded-[10px]`}>
      Get Strated
    </button>
  )
}

export default Button
