'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg sticky top-0 z-50">
      <div className="w-full px-4">
        <div className="flex justify-between items-center py-3">
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="relative w-40 h-16 bg-transparent">
              <Image 
                src="/iccet-2026-logo.png" 
                alt="ICCET 2026 Logo" 
                fill
                priority
                className="object-contain bg-transparent"
              />
            </div>
            <div className="border-l-2 border-blue-600 h-10"></div>
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-white">ICCET 2026</div>
              <div className="text-xs text-blue-200 -mt-1">Computing in Engineering & Technology</div>
            </div>
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none hover:text-blue-200 transition"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-0.5">
            <Link href="/" className="px-3 py-2 text-white hover:text-blue-100 hover:bg-blue-700 rounded-lg transition font-medium text-sm uppercase" style={{ color: '#ffffff' }}>Home</Link>
            
            <div className="relative group">
              <button className="px-3 py-2 text-white hover:text-blue-100 hover:bg-blue-700 rounded-lg transition font-medium text-sm inline-flex items-center uppercase">
                Committee
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                <Link href="/committee/international" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition first:rounded-t-lg">International Advisory Committee</Link>
                <Link href="/committee/national" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">National Advisory Committee</Link>
                <Link href="/committee/organizing" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition last:rounded-b-lg">Organizing Committee</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="px-3 py-2 text-white hover:text-blue-100 hover:bg-blue-700 rounded-lg transition font-medium text-sm inline-flex items-center uppercase">
                Authors Information
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                <Link href="/authors/call-for-papers" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition first:rounded-t-lg">Call for Papers</Link>
                <Link href="/authors/submission" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition last:rounded-b-lg">Submission Guidelines</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="px-3 py-2 text-white hover:text-blue-100 hover:bg-blue-700 rounded-lg transition font-medium text-sm inline-flex items-center uppercase">
                Registration
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                <Link href="/registration/author" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition first:rounded-t-lg">Author Registration</Link>
                <Link href="/registration/delegate" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition last:rounded-b-lg">Delegate Fee</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="px-3 py-2 text-white hover:text-blue-100 hover:bg-blue-700 rounded-lg transition font-medium text-sm inline-flex items-center uppercase">
                Program
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                <Link href="/program/keynotes" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition first:rounded-t-lg">Keynotes/Invited</Link>
                <Link href="/program/schedule" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition last:rounded-b-lg">Conference Schedule</Link>
              </div>
            </div>

            <Link href="/dates" className="px-3 py-2 text-white hover:text-blue-100 hover:bg-blue-700 rounded-lg transition font-medium text-sm uppercase" style={{ color: '#ffffff' }}>Important Dates</Link>
            
            <Link href="/gallery" className="px-3 py-2 text-white hover:text-blue-100 hover:bg-blue-700 rounded-lg transition font-medium text-sm uppercase" style={{ color: '#ffffff' }}>Previous Conference</Link>

            <Link href="/contact" className="px-3 py-2 text-white hover:text-blue-100 hover:bg-blue-700 rounded-lg transition font-medium text-sm uppercase" style={{ color: '#ffffff' }}>Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-blue-800 rounded-lg mt-4 p-4 space-y-1 border border-blue-700">
            <Link href="/" className="block py-2 text-white hover:text-blue-200 font-medium">Home</Link>
            <div className="py-2">
              <p className="font-semibold text-blue-100">Committee</p>
              <Link href="/committee/international" className="block pl-4 py-1 text-sm text-blue-200 hover:text-white">International Advisory</Link>
              <Link href="/committee/national" className="block pl-4 py-1 text-sm text-blue-200 hover:text-white">National Advisory</Link>
              <Link href="/committee/organizing" className="block pl-4 py-1 text-sm text-blue-200 hover:text-white">Organizing</Link>
            </div>
            <div className="py-2">
              <p className="font-semibold text-blue-100">Authors Information</p>
              <Link href="/authors/call-for-papers" className="block pl-4 py-1 text-sm text-blue-200 hover:text-white">Call for Papers</Link>
              <Link href="/authors/submission" className="block pl-4 py-1 text-sm text-blue-200 hover:text-white">Submission Guidelines</Link>
            </div>
            <div className="py-2">
              <p className="font-semibold text-blue-100">Registration</p>
              <Link href="/registration/author" className="block pl-4 py-1 text-sm text-blue-200 hover:text-white">Author Registration</Link>
              <Link href="/registration/delegate" className="block pl-4 py-1 text-sm text-blue-200 hover:text-white">Delegate Fee</Link>
            </div>
            <div className="py-2">
              <p className="font-semibold text-blue-100">Program</p>
              <Link href="/program/keynotes" className="block pl-4 py-1 text-sm text-blue-200 hover:text-white">Keynotes/Invited</Link>
              <Link href="/program/schedule" className="block pl-4 py-1 text-sm text-blue-200 hover:text-white">Conference Schedule</Link>
            </div>
            <Link href="/dates" className="block py-2 text-white hover:text-blue-200 font-medium">Important Dates</Link>
            <Link href="/gallery" className="block py-2 text-white hover:text-blue-200 font-medium">Previous Conference</Link>
            <Link href="/contact" className="block py-2 text-white hover:text-blue-200 font-medium">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
