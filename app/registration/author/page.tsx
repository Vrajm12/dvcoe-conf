const registrationData = {
  policy: [
    "At least one author per paper has to register.",
    "Each registration entitles the author to present one paper only.",
    "Registration fee includes conference proceedings, conference kit, and refreshments.",
    "Registration fee DOES NOT include accommodation.",
    "For accepted papers, at least one author must register to have the paper included in the proceedings.",
    "One registration fee only covers a single paper."
  ],
  fees: [
    {
      category: "Students (UG/PG/Research Scholar)",
      indian: "₹6,000",
      foreign: "$150"
    },
    {
      category: "Academicians",
      indian: "₹9,000",
      foreign: "$300"
    },
    {
      category: "Industry Persons",
      indian: "₹10,000",
      foreign: "$350"
    }
  ],
  bank: [
    "Name of the Beneficiary (In favour of): Director, SVNIT-CCE",
    "Bank Account No: 37030749143",
    "Nature of Bank Account: Current Account",
    "Name of The Bank: STATE BANK OF INDIA (SBI)",
    "Name & Address of The Bank Branch: STATE BANK OF INDIA (SBI) SVRCET Branch, SVNIT Campus, Ichchanath, Surat 395007, Gujarat, India",
    "Bank Branch Code: 03320",
    "IFSC Code: SBIN0003320",
    "MICR Code: 395002012",
    "Branch Contact No: 0261-2258618, 0261-2227125"
  ]
};

export default function AuthorRegistration() {
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Author Registration
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Registration Policy</h2>
            <ul className="space-y-3 text-gray-700">
              {registrationData.policy.map((policy, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">{index + 1}.</span>
                  <span>{policy}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Registration Fees</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-blue-800 px-6 py-3 text-left">Category</th>
                    <th className="border border-blue-800 px-6 py-3 text-left">Indian (INR)</th>
                    <th className="border border-blue-800 px-6 py-3 text-left">Foreign (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {registrationData.fees.map((fee, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="border border-gray-300 px-6 py-4">{fee.category}</td>
                      <td className="border border-gray-300 px-6 py-4 font-semibold">{fee.indian}</td>
                      <td className="border border-gray-300 px-6 py-4 font-semibold">{fee.foreign}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Bank Details for Transfer</h2>
            <div className="space-y-3 text-gray-700">
              {registrationData.bank.map((detail, index) => (
                <p key={index} className="text-sm leading-relaxed">
                  <span className="font-semibold text-gray-800">{detail.split(':')[0]}:</span>
                  {detail.split(':').slice(1).join(':')}
                </p>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Registration Process</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>Complete the online registration form</li>
              <li>Pay the registration fee via bank transfer or the provided payment gateway</li>
              <li>Upload proof of payment</li>
              <li>Receive registration confirmation via email</li>
              <li>Submit camera-ready manuscript</li>
            </ol>
            
            <div className="mt-8 text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
