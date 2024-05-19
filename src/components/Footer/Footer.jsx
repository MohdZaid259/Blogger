import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full light:bg-red-500 dark:bg-gray-900 font-footer py-10">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/3 px-4">
          <h3 className="text-lg font-bold mb-4">Blogger</h3>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li><a className="text-sm text-inherit hover:text-gray-700" href="#">Home</a></li>
            <li><a className="text-sm text-inherit hover:text-gray-700" href="#">About Us</a></li>
            <li><a className="text-sm text-inherit hover:text-gray-700" href="#">Services</a></li>
            <li><a className="text-sm text-inherit hover:text-gray-700" href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <h3 className="text-lg font-bold mb-4">Additional Links</h3>
          <ul>
            <li><a className="text-sm text-inherit hover:text-gray-700" href="#">Blog</a></li>
            <li><a className="text-sm text-inherit hover:text-gray-700" href="#">FAQ</a></li>
            <li><a className="text-sm text-inherit hover:text-gray-700" href="#">Terms of Service</a></li>
            <li><a className="text-sm text-inherit hover:text-gray-700" href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
