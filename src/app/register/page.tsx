"use client";

import  {useState} from 'react';
import {supabase} from '@/components/client';

const RegisterPage = () => { 
    const [formData,setFormData] = useState({
        email:'',password:'',
      })

      function handleChange(event){
        setFormData((prevFormData)=>{
          return{
            ...prevFormData,
            [event.target.name]:event.target.value
          }
    
        })
    
      }


      async function handleSubmit(e){
        console.log(formData);
        e.preventDefault()
    
        try {
          const { data, error } = await supabase.auth.signUp(
            {
              email: formData.email,
              password: formData.password,
            }
          )
          if (error) throw error
          alert('Check your email for verification link')
          
          window.location.href = '/login';

        } 
        
        catch (error) {
          alert(error)
        }
      }
    

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-[#64AE9D] p-8 rounded-lg shadow-md hover:shadow-xl">
        <h1 className="text-2xl font-semibold mb-4 text-black">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
         
          <button
            className="bg-black hover:bg-grey text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default RegisterPage;
