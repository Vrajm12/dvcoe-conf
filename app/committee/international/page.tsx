import Link from 'next/link';

export default function InternationalCommittee() {
  const members = [
    { name: "Prof. Gwanggil JEON", affiliation: "Incheon National University", location: "Korea" },
    { name: "Prof. Wei-Chang Hong", affiliation: "Ph.D, Jiaxian Engineering University, Nanton", location: "China" },
    { name: "Prof. Zdzislaw Polkowski", affiliation: "Kielce University", location: "Kyushu, Poland" },
    { name: "Prof. Sheng-Lung Peng", affiliation: "Ph.D Professor, National Taipei University of Business", location: "Taiwan" },
    
    { name: "Prof. Qin Xin", affiliation: "University of the Faroe Islands", location: "Faroe Island" },
    { name: "Prof. Amiya Nayak", affiliation: "Ph.D, University of Ottawa", location: "Ontario, Canada" },
    { name: "Prof. Dac Nhuong Le", affiliation: "Haiphong University", location: "Viet Nam" },
    { name: "Prof. M. Sánchez Fernández", affiliation: "ETSIST Universidad de les Palmas", location: "Palmas, Argentina" },
    
    { name: "Professor Shui Yu", affiliation: "Ph.D, University of Technology Sydney", location: "Australia" },
    { name: "Prof. Dr. Anna Esposito", affiliation: "Universita della Campania", location: "Italy" },
    { name: "Prof. Danilo Pelusi", affiliation: "Faculty of Communication Sciences", location: "Teramo, Italy" },
    { name: "Imrich Chlamtac", affiliation: "Bruno Kessler Professor, University of Trento", location: "Italy" },
    
    { name: "Prof. Waleed S Alnumay", affiliation: "King Saud University", location: "Riyadh, Saudi Arabia" },
    { name: "Prof. Patrick SIARRY", affiliation: "Ph.D, University of Paris-Est", location: "Paris, France" },
    { name: "Prof. Ajit Kumar Verma", affiliation: "University of Applied Sciences", location: "Stralsund, Norway" },
    { name: "Dr. Binh Thai Pham", affiliation: "Nguyen Tat Thanh University", location: "Vietnam" },
    
    { name: "Dr. Bruce van Niekerk", affiliation: "Cape Peninsula University of Technology", location: "South Africa" },
    { name: "Prof. Korhan Cengiz", affiliation: "Trakya University", location: "Turkey" },
    { name: "Dr. Le Hoang Son", affiliation: "Institute of Information Technology", location: "Vietnam" },
    { name: "Dr. Noor Zaman", affiliation: "School of Computing & IT, Taylor's University", location: "Malaysia" },
    
    { name: "Dr. P. Kumar", affiliation: "University of Kwa-Zulu Natal", location: "Durban, South Africa" },
    { name: "Prof Lalit Garg", affiliation: "Faculty of Information & Communication Technology, University of Malta", location: "Malta" },
    { name: "Dr. Amrit Mukherjee", affiliation: "University of South Bohemia", location: "Czech Republic" },
    { name: "Dr. Ishaani Priyadarshini", affiliation: "Savannah College", location: "Washington, USA" },
    
    { name: "Dr. Mohammad Kamrul Hasan", affiliation: "Universiti Kebangsaan", location: "Malaysia (UKM)" },
    { name: "Dr. Pratik Goswami", affiliation: "Yeungnam University", location: "Gyeongsan-si, South Korea" }
  ];

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            International Advisory Committee
          </h1>
          <div className="flex items-center justify-center text-sm space-x-2">
            <Link href="/" className="hover:text-blue-300 transition">Home</Link>
            <span>|</span>
            <span>International Advisory Committee</span>
          </div>
        </div>
      </section>

      {/* Committee Members Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide" style={{color: '#C2185B'}}>
                International Advisory Committee
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {members.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-gray-600 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <h3 className="font-bold text-lg mb-2">{member.name}</h3>
                    <p className="text-sm text-gray-200 mb-1">{member.affiliation}</p>
                    <p className="text-sm text-gray-300">{member.location}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-400"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
