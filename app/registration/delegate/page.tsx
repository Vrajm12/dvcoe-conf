export default function DelegateFee() {
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Delegate Registration
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Delegate Information</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Delegates who are not presenting papers but wish to attend the conference can register 
              as participants. Delegate registration provides full access to all conference sessions, 
              keynote speeches, and networking opportunities.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Delegate Fees</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-blue-800 px-6 py-3 text-left">Category</th>
                    <th className="border border-blue-800 px-6 py-3 text-left">Early Bird</th>
                    <th className="border border-blue-800 px-6 py-3 text-left">Regular</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4">Indian Delegates</td>
                    <td className="border border-gray-300 px-6 py-4 font-semibold">₹ TBA</td>
                    <td className="border border-gray-300 px-6 py-4 font-semibold">₹ TBA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-6 py-4">Foreign Delegates</td>
                    <td className="border border-gray-300 px-6 py-4 font-semibold">$ TBA</td>
                    <td className="border border-gray-300 px-6 py-4 font-semibold">$ TBA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4">Student Delegates (Indian)</td>
                    <td className="border border-gray-300 px-6 py-4 font-semibold">₹ TBA</td>
                    <td className="border border-gray-300 px-6 py-4 font-semibold">₹ TBA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-6 py-4">Student Delegates (Foreign)</td>
                    <td className="border border-gray-300 px-6 py-4 font-semibold">$ TBA</td>
                    <td className="border border-gray-300 px-6 py-4 font-semibold">$ TBA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Student delegates must provide valid student ID proof at the time of registration.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Registration Benefits</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span>Access to all conference sessions and presentations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span>Conference materials and proceedings (digital)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span>Networking opportunities with researchers and industry experts</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span>Certificate of participation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span>Conference kit and refreshments</span>
              </li>
            </ul>
            
            <div className="mt-8 text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Register as Delegate
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
