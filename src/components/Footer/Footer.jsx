import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/3 px-4">
          <h3 className="text-lg font-bold mb-4">Custom Blog</h3>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li><a className="text-sm text-gray-300 hover:text-white" href="#">Home</a></li>
            <li><a className="text-sm text-gray-300 hover:text-white" href="#">About Us</a></li>
            <li><a className="text-sm text-gray-300 hover:text-white" href="#">Services</a></li>
            <li><a className="text-sm text-gray-300 hover:text-white" href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <h3 className="text-lg font-bold mb-4">Additional Links</h3>
          <ul>
            <li><a className="text-sm text-gray-300 hover:text-white" href="#">Blog</a></li>
            <li><a className="text-sm text-gray-300 hover:text-white" href="#">FAQ</a></li>
            <li><a className="text-sm text-gray-300 hover:text-white" href="#">Terms of Service</a></li>
            <li><a className="text-sm text-gray-300 hover:text-white" href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}