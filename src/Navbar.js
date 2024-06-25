import React,{useState} from 'react'

import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
   
   <nav className="bg-green-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white">
            <a href="#">AGRI E-Commerce</a>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          <div className={`md:flex items-center w-full md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="md:flex md:space-x-6">
              <li className="my-2 md:my-0">
                <Link to={'/'} className="text-white">Home</Link>
              </li>
              <li className="my-2 md:my-0">
                <a href="#" className="text-white">Shop</a>
              </li>
              <li className="my-2 md:my-0">
                <a href="#" className="text-white">About</a>
              </li>
              <li className="my-2 md:my-0">
                <a href="#" className="text-white">Contact</a>
              </li>
              <li className="my-2 md:my-0">
                <Link to={'/todo'} className='text-white'>Todo</Link>
              </li>
              <li className="my-2 md:my-0">
                <Link to={'/login'} className='text-white'>Login</Link>
              </li>
            </ul>
            {/* <div className="flex items-center mt-4 md:mt-0">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border rounded-lg border-gray-300 focus:outline-none"
              />
              <button className="ml-2 text-gray-800 hover:text-gray-600">
                <FaShoppingCart size={24} />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  )
}


export default Navbar;