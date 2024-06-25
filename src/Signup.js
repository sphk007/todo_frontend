import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const SignUp = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    // const navigate=useNavigate();

    // const handleSubmit=()=>{
    //     console.log(name);
    //     console.log(email);
    //     console.log(password);

    //     axios.post("http://localhost:3001/users",{name,email,password}).then(()=>{
    //         alert("User Registered")
    //         setName("");
    //         setEmail("");
    //         setPassword("");
    //         navigate('/login');
    //     })
    //     .catch((e)=>{
    //         console.log(e);
    //     })
    // }


    const handleSubmit=()=> {
      axios.post('http://localhost:5006/saveuser', {name,email,password})
          .then(() => {
              alert('Data has been posted successfully');
              setName("");
              setEmail("");
              setPassword("");
          })
          .catch(() => {
              alert('Failed to post data');
          });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              onChange={(e)=>{setName(e.target.value)}}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              onChange={(e)=>{setEmail(e.target.value)}}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="text"
              id="password"
              value={password}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              onChange={(e)=>{setPassword(e.target.value)}}
              required
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center">
            <Link to={'/login'} className="text-green-600 hover:underline">
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
