"use client"
// import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <img src="/logo.png" alt="JLL" className="h-10 cursor-pointer" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="/properties" className="hover:text-red-600">Properties in India</Link>
          <Link href="/trends" className="hover:text-red-600">Trends & Insights</Link>
          <Link href="/services" className="hover:text-red-600">Services</Link>
          <Link href="/about" className="hover:text-red-600">About Us</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/contact" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-red-700">Contact Us</Link>
          <a href="tel:+918657589440" className="flex items-center">
            <span className="text-red-600">+91-865-758-9440</span>
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link href="/properties" className="block py-2 px-4 hover:bg-gray-100">Properties in India</Link>
          <Link href="/trends" className="block py-2 px-4 hover:bg-gray-100">Trends & Insights</Link>
          <Link href="/services" className="block py-2 px-4 hover:bg-gray-100">Services</Link>
          <Link href="/about" className="block py-2 px-4 hover:bg-gray-100">About Us</Link>
          <Link href="/contact" className="block py-2 px-4 bg-red-600 text-white hover:bg-red-700">Contact Us</Link>
          <a href="tel:+918657589440" className="block py-2 px-4 hover:bg-gray-100">
            +91-865-758-9440
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
