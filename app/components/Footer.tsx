import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">MAI 2026</h3>
            <p className="text-sm">
              International Conference on Machine Vision &amp; Augmented Intelligence
            </p>
            <p className="text-sm mt-2 text-yellow-400">Hybrid mode</p>
            <p className="text-sm mt-4">
              Electronics Engineering Department<br />
              Sardar Vallabhbhai National Institute of Technology<br />
              Surat - 395 007, Gujarat, India
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/dates" className="hover:text-white transition">Important Dates</Link></li>
              <li><Link href="/authors/call-for-papers" className="hover:text-white transition">Call for Papers</Link></li>
              <li><Link href="/registration/author" className="hover:text-white transition">Registration</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Committee</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/committee/international" className="hover:text-white transition">International Advisory</Link></li>
              <li><Link href="/committee/national" className="hover:text-white transition">National Advisory</Link></li>
              <li><Link href="/committee/organizing" className="hover:text-white transition">Organizing Committee</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link href="/program/schedule" className="hover:text-white transition">Program Schedule</Link></li>
              <li><Link href="/gallery/2023" className="hover:text-white transition">Gallery</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2026 MAI Conference. All rights reserved.</p>
          <p className="mt-2 text-gray-400">
            Hosted by Electronics Engineering Department, SVNIT Surat
          </p>
        </div>
      </div>
    </footer>
  );
}
