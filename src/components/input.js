import React from 'react'

const Input = ({text, placeholder, name}) => {
  return (
    <>    
      <input placeholder={placeholder} name={name}  type={text} autoComplete='off' className='input' />
    </>
  )
}

export default Input
