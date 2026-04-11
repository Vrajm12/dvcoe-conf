import { getPageContent } from '@/lib/content';

interface CommitteeMember {
  name: string;
  affiliation?: string;
  location?: string;
  designation?: string;
}

interface CommitteeNationalContent {
  page_title?: string;
  page_intro?: string;
  note?: string;
  members?: CommitteeMember[];
}

const committeemembers = [
  {
    name: "Dr. Debashis Ghosh",
    affiliation: "Professor, Department of E & CE Engineering, IIT Roorkee",
    location: "Roorkee, India"
  },
  {
    name: "Dr. Rajeev Arya",
    affiliation: "Associate Professor, National Institute of Technology, Surat",
    location: "Surat, India"
  },
  {
    name: "Dr. Ranjay Hajara",
    affiliation: "Associate Professor, National Institute of Technology, Silchar",
    location: "Silchar, Assam, India"
  },
  {
    name: "Dr. Ajay Kunteta",
    affiliation: "Professor, Rajasthan Technological University",
    location: "Kota, India"
  },
  {
    name: "Dr. Pravin Prajapati",
    affiliation: "Head, Department of E & TC Engineering, AD Patel Institute of Technology",
    location: "Anand, Gujarat, India"
  },
  {
    name: "Dr. Manoranjan Bharti",
    affiliation: "Professor, National Institute of Technology, Hamirpur",
    location: "Hamirpur, India"
  },
  {
    name: "Dr. Ribhu Chopra",
    affiliation: "Associate Professor, Indian Institute of Technology, Guwahati",
    location: "Guwahati, India"
  },
  {
    name: "Dr. Amit Joshi",
    affiliation: "Associate Professor, COEP Technological University",
    location: "Pune, India"
  },
  {
    name: "Dr. Mukund Kharade",
    affiliation: "Associate Professor, DV COE",
    location: "Pune, India"
  },
  {
    name: "Dr. Ravindra Rathod",
    affiliation: "Professor & Head, Department of Information Technology, Walchand COE",
    location: "Sangli, India"
  },
  {
    name: "Prof. Dr. R.N. Awale",
    affiliation: "Deputy Director & Professor, Department of Electrical Engineering, VJTI",
    location: "Mumbai, India"
  },
  {
    name: "Dr. R. R. Manthalkar",
    affiliation: "Professor, Department of E&TC Engineering, SGGSIE&T",
    location: "Nanded, India"
  },
  {
    name: "Dr. Suhas Gajare",
    affiliation: "Principal, Government College of Engineering",
    location: "Jalgaon, India"
  },
  {
    name: "Dr. Vikul Pawar",
    affiliation: "Head, Department of Computer Science & Engineering, Government College of Engineering",
    location: "Chhatrapati Sambhajinagar, India"
  }
].filter(member => member.name.trim() !== "");

export default async function NationalCommittee() {
  const cmsContent = await getPageContent<CommitteeNationalContent>('committee-national');
  const pageTitle = cmsContent?.page_title || 'National Advisory Committee';
  const pageIntro = cmsContent?.page_intro || 'Esteemed experts from leading national institutions';
  const pageNote =
    cmsContent?.note ||
    'The National Advisory Committee comprises distinguished academicians and researchers from leading institutions across the country providing valuable guidance for the conference.';
  const members = cmsContent?.members && cmsContent.members.length > 0 ? cmsContent.members : committeemembers;

  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{color: '#C2185B'}}>
          {pageTitle}
        </h1>
        <p className="text-gray-600 mb-12 text-center text-lg">
          {pageIntro}
        </p>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {members.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{member.name}</h3>
                {member.affiliation && (
                  <p className="text-gray-700 text-sm mb-1">{member.affiliation}</p>
                )}
                {member.location && (
                  <p className="text-gray-600 text-sm">{member.location}</p>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700 italic text-center">
              {pageNote}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
