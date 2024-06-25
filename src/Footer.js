// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-gray-100">
      <div className="container mx-auto py-8 px-4">
        <div className="md:flex md:justify-between">
          {/* Company Information */}
          <div className="md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Company Name</h2>
            <p className="text-sm">123 Farm Road</p>
            <p className="text-sm">City, State 12345</p>
            <p className="text-sm">ponharishkumars@gmail.com</p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2"><a href="#" className="text-sm hover:text-gray-200">Home</a></li>
              <li className="mb-2"><a href="#" className="text-sm hover:text-gray-200">Shop</a></li>
              <li className="mb-2"><a href="#" className="text-sm hover:text-gray-200">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-sm hover:text-gray-200">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-sm">Phone: +91 6374777732</p>
            {/* <p className="text-sm">Follow us: 
              <a href="#" className="ml-1 text-sm text-gray-200 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="ml-1 text-sm text-gray-200 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="ml-1 text-sm text-gray-200 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
