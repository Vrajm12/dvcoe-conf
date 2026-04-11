import Link from 'next/link';
import { getPageContent } from '@/lib/content';

interface CommitteeInternationalContent {
  page_title?: string;
  members?: {
    name: string;
    affiliation: string;
    location: string;
  }[];
}

export default async function InternationalCommittee() {
  const cmsContent = await getPageContent<CommitteeInternationalContent>('committee-international');
  const pageTitle = cmsContent?.page_title || 'International Advisory Committee';
  const defaultMembers = [
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
  const members = cmsContent?.members && cmsContent.members.length > 0 ? cmsContent.members : defaultMembers;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-blue-900 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4" style={{color: '#FFFFFF'}}>
            {pageTitle}
          </h1>
          <div className="flex items-center justify-center text-sm space-x-2" style={{color: '#FFFFFF'}}>
            <Link href="/" className="hover:text-yellow-300 transition" style={{color: '#FFFFFF'}}>Home</Link>
            <span style={{color: '#FFFFFF'}}>|</span>
            <span style={{color: '#FFFFFF'}}>{pageTitle}</span>
          </div>
        </div>
      </section>

      {/* Committee Members Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide" style={{color: '#C2185B'}}>
                {pageTitle}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {members.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-2xl transition-all border-t-4 border-blue-600"
                >
                  <div className="relative z-10">
                    <h3 className="font-bold text-lg mb-3" style={{color: '#1F2937'}}>{member.name}</h3>
                    <p className="text-sm mb-2" style={{color: '#374151'}}>{member.affiliation}</p>
                    <p className="text-sm font-semibold" style={{color: '#2563EB'}}>{member.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

