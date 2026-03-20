import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">ICCET 2026</h3>
            <p className="text-sm text-white">
              9th International Conference on Computing and Technology
            </p>
            <p className="text-sm mt-2 text-yellow-400">Hybrid mode</p>
            <p className="text-sm mt-4 text-white">
              Dnyanvilas College of Engineering<br />
              Gat No. 76, Dudulgaon, Alandi<br />
              Pimpri-Chinchwad, Pune<br />
              Maharashtra 412105, India
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="!text-white hover:!text-yellow-400 transition">Home</Link></li>
              <li><Link href="/dates" className="!text-white hover:!text-yellow-400 transition">Important Dates</Link></li>
              <li><Link href="/authors/call-for-papers" className="!text-white hover:!text-yellow-400 transition">Call for Papers</Link></li>
              <li><Link href="/registration/author" className="!text-white hover:!text-yellow-400 transition">Registration</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Committee</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/committee/international" className="!text-white hover:!text-yellow-400 transition">International Advisory</Link></li>
              <li><Link href="/committee/national" className="!text-white hover:!text-yellow-400 transition">National Advisory</Link></li>
              <li><Link href="/committee/organizing" className="!text-white hover:!text-yellow-400 transition">Organizing Committee</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="!text-white hover:!text-yellow-400 transition">Contact Us</Link></li>
              <li><Link href="/program/schedule" className="!text-white hover:!text-yellow-400 transition">Program Schedule</Link></li>
              <li><Link href="/gallery/2023" className="!text-white hover:!text-yellow-400 transition">Gallery</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-white">
          <p>&copy; 2026 MAI Conference. All rights reserved.</p>
          <p className="mt-2 text-white">
            Hosted by Dnyanvilas College of Engineering, Pune
          </p>
        </div>
      </div>
    </footer>
  );
}
