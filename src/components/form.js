import React from 'react'
import Input from './input'
import Button from './button'

const Form = () => {
  return (
    <>
      <form > 
        <h1>Contact Us</h1>
        <Input type={'text'} placeholder={'Enter name'} />
        <Input  type={'email'} placeholder={'Enter email'} />
        <textarea placeholder='Leave message...' className='input' rows='4' />
        <Button />
      </form>
    </>
  )
}

export default Form
