'use client';
import React from 'react'

const Login = () => {

    const handleValidation = (e, regex) => {
        const parentElement = e.target.parentNode;
        if (!regex.test(e.target.value)) {
            parentElement.querySelector('.error').style.display = 'block';
            console.log('value: ' + e.target.value)
            console.log('regex: ' + regex)
        } else {
            parentElement.querySelector('.error').style.display = 'none';
        }
    }


  return (
    <div className='h-screen bg-red-300 flex justify-center items-center'>
        <div className='p-10 bg-white rounded' style={{ width: '500px' }}>
            <form className='gap-8 flex flex-col'>
                <div className="flex flex-col gap-2">
                    <label className=''>Username</label>
                    <input type="text" placeholder='Username' className='border-solid rounded border-2 border-black p-1' required onInput={(e) => handleValidation(e, /^[A-Za-z0-9]{3,9}$/)}/>
                    <span className="error">Username must be more than 3 characters!</span>
                </div>
                <div className="flex flex-col gap-2">
                    <label className=''>Password</label>
                    <input type="password" placeholder='Password' className='border-solid rounded border-2 border-black p-1' required onInput={(e) => handleValidation(e, /^[A-Za-z0-9]{5,}$/)}/>
                    <span className="error">Password must use special characters, numbers, and uppercase!</span>
                </div>
                <div className="flex flex-col gap-2">
                    <label className=''>Email</label>
                    <input type="email" placeholder='Email' className='border-solid rounded border-2 border-black p-1' required onInput={(e) => handleValidation(e, /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}$/)}/>
                    <span className="error">Email not valid!</span>
                </div>
                <div className="flex flex-col gap-2">
                    <label className=''>Phone Number</label>
                    <input type="number" placeholder='Phone' className='border-solid rounded border-2 border-black p-1' required/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login