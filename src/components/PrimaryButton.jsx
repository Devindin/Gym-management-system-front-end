import React from 'react'


function PrimaryButton({label , eventname, bgcolor , textcolor ,type}) {

    const buttonStyle ={
        backgroundColor:bgcolor,
        color : textcolor,
    }
  return (
    <button
    type ="submit"
    className='w-[200px] rounded-md h-[50px] mt-3'
    onClick={eventname}
    style={buttonStyle}
    >
    <span className="font-poppins font-semibold text-[28px] leading-[25px] tracking-[0.1em]">
    {label}
    </span>
  </button>
  )
}

export default PrimaryButton
