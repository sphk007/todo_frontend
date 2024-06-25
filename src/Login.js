import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const handleSubmit=async(e)=> {
    e.preventDefault();
    try{
    // const response=await axios.get(`http;//localhost:3001/users`);
    const response = await axios.get('http://localhost:3001/users', {
      params: {
        email,
        password,
      },
    });
    const user=response.data.find((user)=>user.email===email&&user.password===password);
    if(user){
      alert("logged in");
      console.log("hi")
    }
    else{
      alert("invalidCredentials");
      console.log("bye")
    }
  }catch(err){
    console.log(err);
  }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="text"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
            >
              Login
            </button>
          </div>
          <div className="text-center">
            <Link to={'/register'} className="text-green-600 hover:underline">
             don't have an account? SignUp
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
