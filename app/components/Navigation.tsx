'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-blue-600">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="relative w-32 h-14 bg-transparent">
              <Image 
                src="/iccet-2026-logo.png" 
                alt="ICCET 2026 Logo" 
                fill
                priority
                className="object-contain bg-transparent"
              />
            </div>
            <div className="border-l-2 border-gray-300 h-10"></div>
            <div className="flex-shrink-0">
              <div className="text-xl font-bold text-gray-900">ICCET 2026</div>
              <div className="text-xs text-gray-600 -mt-0.5">Computing & Technology</div>
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
          <div className="hidden md:flex space-x-0.5">
            <Link href="/" className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium text-sm">Home</Link>
            
            <div className="relative group">
              <button className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium text-sm inline-flex items-center">
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
              <button className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium text-sm inline-flex items-center">
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
              <button className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium text-sm inline-flex items-center">
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
              <button className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium text-sm inline-flex items-center">
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

            <Link href="/dates" className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium text-sm">Dates</Link>
            
            <Link href="/gallery" className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium text-sm">Prev. Conf.</Link>

            <Link href="/contact" className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium text-sm">Contact</Link>
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
              <p className="font-semibold text-gray-900">Authors</p>
              <Link href="/authors/call-for-papers" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">Call for Papers</Link>
              <Link href="/authors/submission" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">Paper Submission</Link>
            </div>
            <div className="py-2">
              <p className="font-semibold text-gray-900">Registration</p>
              <Link href="/registration/author" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">Author Registration</Link>
              <Link href="/registration/delegate" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">Delegate Fee</Link>
            </div>
            <div className="py-2">
              <p className="font-semibold text-gray-900">Program</p>
              <Link href="/program/keynotes" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">Keynotes/Invited</Link>
              <Link href="/program/schedule" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">Conference Schedule</Link>
            </div>
            <Link href="/dates" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Dates</Link>
            <Link href="/gallery" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Previous Conferences</Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
