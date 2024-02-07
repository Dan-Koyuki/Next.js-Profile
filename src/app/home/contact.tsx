import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1>Sent Mail (Currently not working)</h1>
      <form className='flex justify-center flex-col my-2' >
        <div className='my-4'>
          <label className='mx-6'>Email :</label>
          <input type='email' />
        </div>
        <div className='flex justify-center items-center my-4'>
          <label className='mx-2'>Message :</label>
          <textarea />
        </div>
        <button className='border rounded-lg p-2' type='submit'>Sent</button>
      </form>
    </div>
  )
}

export default Contact