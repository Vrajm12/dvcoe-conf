const committeemembers = [
  {
    name: "Prof. S N Singh",
    designation: "IIITM Gwalior"
  },
  {
    name: "Prof. Sudhan Majhi",
    designation: "Indian Institute of Science, Bangalore"
  },
  {
    name: "Debasish Ghose",
    designation: "Indian Institute of Science, Bangalore"
  },
  {
    name: "Prof. B.K Panigrahi",
    designation: "IIT Delhi"
  },
  {
    name: "Prof. Nagendra Prasad Pathak",
    designation: "IIT Roorkee"
  },
  {
    name: "Prof. Preetam Kumar",
    designation: "IIT Patna"
  },
  {
    name: "Prof. Tapan Kumar Gandhi",
    designation: "IIT Delhi"
  },
  {
    name: "Prof. Manav R. Bhatnagar",
    designation: "IIT Delhi"
  },
  {
    name: "Prof. Dharmendra Singh",
    designation: "IIT Roorkee"
  },
  {
    name: "Prof. N K Pathak",
    designation: "IIT Roorkee"
  },
  {
    name: "Prof. YN Singh",
    designation: "IIT Kanpur"
  },
  {
    name: "Prof. Manoj Thakiur",
    designation: "IIT Mandi"
  },
  {
    name: "Gaurav Trivedi",
    designation: "IIT Guwahati"
  },
  {
    name: "Prof. Millie Pant",
    designation: "IIT Roorkee"
  },
  {
    name: "Prof. Sanjay Singh",
    designation: "IIT BHU"
  },
  {
    name: "Prof. Rajalakshmi P",
    designation: "IIT Hyderabad"
  },
  {
    name: "Prof. Ram Bilas Pachori",
    designation: "IIT Indore"
  },
  {
    name: "Prof. S. C. Sharma",
    designation: "IIT Roorkee"
  },
  {
    name: "Prof. Aditya Trivedi",
    designation: "IIITM Gwalior"
  },
  {
    name: "Prof. Ritu Tiwari",
    designation: "IIITM Gwalior"
  },
  {
    name: "Prof. Sateesh Kumar Peddoju",
    designation: "IIT Roorkee"
  },
  {
    name: "Prof. Sayandeep Saha",
    designation: "IIT Bombay"
  }
].filter(member => member.name.trim() !== "");

export default function NationalCommittee() {
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          National Advisory Committee
        </h1>
        
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-8 text-center">
            Esteemed experts from leading national institutions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {committeemembers.map((member, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                <h3 className="font-bold text-lg text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.designation}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600 italic">
              The National Advisory Committee comprises distinguished academicians and researchers 
              from leading institutions across the country providing valuable guidance for the conference.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
