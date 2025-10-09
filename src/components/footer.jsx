// import React from "react";
// import React, { useState } from "react";
import logo from "../assets/logo.png";
import x from "../assets/x.png";
import linkedin from "../assets/linkdin.png";
// import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import github from "../assets/github.png";
// import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    // <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
    // <footer className="bg-gray-800 text-gray-300 pt-16 pb-8">
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      {/* <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10"> */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* <img src={logo} alt="Sami.io Logo" className="w-12 h-12" /> */}
            <img src={logo} alt="Sami.io Logo" className="w-10 h-10" />
            {/* <h2 className="text-xl font-bold text-white">Sami.io</h2> */}
            <h2 className="text-xl font-semibold text-white">Sami.io</h2>
          </div>
          {/* <p className="text-sm text-gray-400">
            A platform for developers and learners.  
            Download and explore our tools.
          </p> */}
          <p className="text-sm text-gray-400">
            A platform built for developers and learners.  
            Download, explore, and grow with our tools and apps.
          </p>
        </div>

       
        <div>
          {/* <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3> */}
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {/* <li><a href="/" className="hover:text-purple-500 transition">Home</a></li> */}
            <li><a href="/" className="hover:text-purple-400 transition">Home</a></li>
            <li><a href="/apps" className="hover:text-purple-400 transition">Apps</a></li>
            <li><a href="/installation" className="hover:text-purple-400 transition">Installation</a></li>
            {/* <li><a href="/about" className="hover:text-purple-400 transition">About</a></li> */}
            <li><a href="/contact" className="hover:text-purple-400 transition">Contact</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            {/* <li><a href="#" className="hover:text-purple-500 transition">Documentation</a></li> */}
            <li><a href="#" className="hover:text-purple-400 transition">Docs</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">API</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Support</a></li>
            {/* <li><a href="#" className="hover:text-purple-400 transition">FAQ</a></li> */}
            <li><a href="#" className="hover:text-purple-400 transition">Blog</a></li>
          </ul>
        </div>

 
        <div>
          {/* <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3> */}
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          {/* <div className="flex items-center gap-3 mb-4"> */}
          <div className="flex items-center gap-4 mb-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              {/* <img src={facebook} alt="Facebook" className="w-6 h-6 hover:opacity-80" /> */}
              <img src={facebook} alt="Facebook" className="w-7 h-7 hover:opacity-80" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="w-7 h-7 hover:opacity-80" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              {/* <img src={x} alt="X" className="w-6 h-6 hover:opacity-80" /> */}
              <img src={x} alt="X" className="w-7 h-7 hover:opacity-80" />
            </a>
            <a href="https://github.com/XDR-SAM" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="w-7 h-7 hover:opacity-80" />
            </a>
          </div>
          {/* <p className="text-sm text-gray-400">Connect with us on social media!</p> */}
          <p className="text-sm text-gray-400">Let's connect and collaborate!</p>
        </div>
      </div>

  
      {/* <div className="text-center text-gray-500 text-sm mt-8"> */}
      <div className="text-center text-gray-500 text-sm mt-6">
        {/* © {new Date().getFullYear()} Sami.io. All rights reserved. */}
        © {new Date().getFullYear()} Sami.io — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;