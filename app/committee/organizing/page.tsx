import Image from 'next/image';
import { getPageContent } from '@/lib/content';

interface OrganizingMember {
  name: string;
  profile_link: string;
  designation: string;
  image: string;
}

interface OrganizingSection {
  committee_title: string;
  members: OrganizingMember[];
}

interface CommitteeOrganizingContent {
  page_title: string;
  committees: OrganizingSection[];
}

const organizingData = {
  committees: [
    {
      committee_title: "Chief Patron",
      members: [
        {
          name: "Prof. Rajnish Kamat",
          profile_link: "#",
          designation: "Vice-Chancellor, Dr. Babasaheb Ambedkar Technological University, Lonere",
          image: "/chief-patron.jpeg"
        }
      ]
    },
    {
      committee_title: "Patron",
      members: [
        {
          name: "Hon. Shri. Vishal Vilasrao Tambe",
          profile_link: "#",
          designation: "President, SGMSPM; Ex. Chairman, Standing Committee, PMC; Corporator, Pune Municipal Corporation",
          image: "/vilas-tambe.jpg"
        },
        {
          name: "Hon. Shri. Vaibhav Vilasrao Tambe",
          profile_link: "#",
          designation: "Secretary, Shri Gajanan Maharaj Shikshan Prasarak Mandal",
          image: "/vaibhav-tambe.jpg"
        }
      ]
    },
    {
      committee_title: "General Chairs",
      members: [
        {
          name: "Dr. S. L. Nalbalwar",
          profile_link: "#",
          designation: "Dean (Academics), Dr. Babasaheb Ambedkar Technological University, Lonere-India",
          image: "/General-Chairs Dr. S. L. Nalbalwar.jpeg"
        },
        {
          name: "Dr. Nagendra Prasad Pathak",
          profile_link: "#",
          designation: "Professor (HAG), Indian Institute of Technology, Roorkee-India",
          image: "/n-p-pathak.jpeg"
        }
      ]
    },
    {
      committee_title: "Technical Program Chair",
      members: [
        {
          name: "Dr. Brijesh Iyer",
          profile_link: "#",
          designation: "Professor, Dr. Babasaheb Ambedkar Technological University, Lonere-India",
          image: "/technical-program-chair.jpeg"
        }
      ]
    },
    {
      committee_title: "Organizing Chair",
      members: [
        {
          name: "Dr. Aparna Pande",
          profile_link: "#",
          designation: "Principal, Dnyanvilas College of Engineering",
          image: "/dr-aparna-pande.jpeg"
        },
        {
          name: "Dr. Prachi Deshpande",
          profile_link: "#",
          designation: "Associate Professor, Department of CSE, Maharashtra Institute of Technology, Ch. Sambhaji nagar",
          image: "/prachi-deshpande.jpeg"
        }
      ]
    }
  ]
};

export default async function OrganizingCommittee() {
  const cmsContent = await getPageContent<CommitteeOrganizingContent>('committee-organizing');
  const pageTitle = cmsContent?.page_title ?? 'Organizing Committee';
  const cmsCommittees = cmsContent?.committees as OrganizingSection[] | undefined;
  const committees = cmsCommittees && cmsCommittees.length > 0 ? cmsCommittees : organizingData.committees;

  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">{pageTitle}</h1>

        <div className="max-w-6xl mx-auto space-y-8">
          {committees.map((committee) => (
            <section key={committee.committee_title} className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b-2 border-blue-600 pb-2">{committee.committee_title}</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {committee.members.map((m, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <Image src={m.image} alt={m.name} width={120} height={120} unoptimized className="w-32 h-32 rounded-full object-cover" />
                    <div>
                      <a href={m.profile_link || '#'} target="_blank" rel="noreferrer" className="font-bold text-lg text-gray-800 hover:text-blue-600">{m.name}</a>
                      <p className="text-gray-600">{m.designation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
