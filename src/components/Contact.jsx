import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#080808] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/409c30b6-a341-48cd-9d2e-7296b6e46daa" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 py-10'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'> Contact</p>

            <p className='text-gray-300 py-4 '>  Submit the form below // or Email me -@mrinalsingha17@gmail.com</p>
        </div>

        <input className= 'bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="Email" placeholder='Email' name='email' />

        <textarea className='bg-[#ccd6f6] p-2' name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
      
        <button
        className='px-4 py-3 text-white border-2 hover:bg-pink-600 mt-4
        hover:border-pink-600 mx-auto flex items-center 
        '
        >Let's Build Together</button>
      </form>
    </div>
  )
}

export default Contact
