import React from 'react'


function Button({label , eventname, bgcolor , textcolor ,type}) {

    const buttonStyle ={
        backgroundColor:bgcolor,
        color : textcolor,
    }
  return (
    <button
    type ="submit"
    className='w-[400px] rounded-[15px] h-[50px] mt-3  border-2 border-[#64748B]'
    onClick={eventname}
    style={buttonStyle}
    >
    <span className="font-poppins text-[28px] leading-[25px] tracking-[0.1em] uppercase">
    {label}
    </span>
  </button>
  )
}

export default Button
