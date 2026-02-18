'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-blue-600">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg p-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">MAI 2026</div>
              <div className="text-xs text-gray-600 -mt-1">Machine Vision &amp; AI</div>
            </div>
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
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
          <div className="hidden md:flex space-x-1">
            <Link href="/" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium">Home</Link>
            
            <div className="relative group">
              <button className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium inline-flex items-center">
                Committee
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <Link href="/committee/international" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition first:rounded-t-lg">International Advisory Committee</Link>
                <Link href="/committee/national" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">National Advisory Committee</Link>
                <Link href="/committee/organizing" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition last:rounded-b-lg">Organizing Committee</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium inline-flex items-center">
                Registration
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <Link href="/registration/author" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition first:rounded-t-lg">Author Registration</Link>
                <Link href="/registration/delegate" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition last:rounded-b-lg">Delegate Fee</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium inline-flex items-center">
                Authors
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <Link href="/authors/call-for-papers" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition first:rounded-t-lg">Call for Papers</Link>
                <Link href="/authors/submission" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition last:rounded-b-lg">Paper Submission</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium inline-flex items-center">
                Program
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <Link href="/program/keynotes" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition first:rounded-t-lg">Keynotes/Invited</Link>
                <Link href="/program/schedule" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition last:rounded-b-lg">Conference Schedule</Link>
              </div>
            </div>

            <Link href="/dates" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium">Dates</Link>
            
            <div className="relative group">
              <button className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium inline-flex items-center">
                Gallery
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <Link href="/gallery/2021" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition first:rounded-t-lg">Gallery 2021</Link>
                <Link href="/gallery/2022" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Gallery 2022</Link>
                <Link href="/gallery/2023" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition last:rounded-b-lg">Gallery 2023</Link>
              </div>
            </div>

            <Link href="/contact" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium">Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-gray-50 rounded-lg mt-4 p-4 space-y-1">
            <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <div className="py-2">
              <p className="font-semibold text-gray-900">Committee</p>
              <Link href="/committee/international" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">International Advisory</Link>
              <Link href="/committee/national" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">National Advisory</Link>
              <Link href="/committee/organizing" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">Organizing</Link>
            </div>
            <div className="py-2">
              <p className="font-semibold text-gray-900">Registration</p>
              <Link href="/registration/author" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">Author Registration</Link>
              <Link href="/registration/delegate" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">Delegate Fee</Link>
            </div>
            <div className="py-2">
              <p className="font-semibold text-gray-900">Authors</p>
              <Link href="/authors/call-for-papers" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">Call for Papers</Link>
              <Link href="/authors/submission" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">Paper Submission</Link>
            </div>
            <div className="py-2">
              <p className="font-semibold text-gray-900">Program</p>
              <Link href="/program/keynotes" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">Keynotes/Invited</Link>
              <Link href="/program/schedule" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">Conference Schedule</Link>
            </div>
            <Link href="/dates" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Dates</Link>
            <div className="py-2">
              <p className="font-semibold text-gray-900">Gallery</p>
              <Link href="/gallery/2021" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">Gallery 2021</Link>
              <Link href="/gallery/2022" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">Gallery 2022</Link>
              <Link href="/gallery/2023" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">Gallery 2023</Link>
            </div>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
