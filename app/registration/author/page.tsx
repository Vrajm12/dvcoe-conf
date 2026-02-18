export default function AuthorRegistration() {
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Author Registration
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Registration Information</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              All authors of accepted papers must register for the conference. At least one author 
              per paper must register at the full registration rate. Registration includes access to 
              all conference sessions, proceedings, and conference materials.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
              <h3 className="font-bold text-lg mb-2 text-blue-900">Important Note</h3>
              <p className="text-gray-700">
                Papers will be included in the conference proceedings only after the registration 
                fee has been paid and the camera-ready version has been submitted.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Registration Fees</h2>
            
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
                    <td className="border border-gray-300 px-6 py-4">Indian Authors</td>
                    <td className="border border-gray-300 px-6 py-4 font-semibold">₹ TBA</td>
                    <td className="border border-gray-300 px-6 py-4 font-semibold">₹ TBA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-6 py-4">Foreign Authors</td>
                    <td className="border border-gray-300 px-6 py-4 font-semibold">$ TBA</td>
                    <td className="border border-gray-300 px-6 py-4 font-semibold">$ TBA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4">Student Authors (Indian)</td>
                    <td className="border border-gray-300 px-6 py-4 font-semibold">₹ TBA</td>
                    <td className="border border-gray-300 px-6 py-4 font-semibold">₹ TBA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-6 py-4">Student Authors (Foreign)</td>
                    <td className="border border-gray-300 px-6 py-4 font-semibold">$ TBA</td>
                    <td className="border border-gray-300 px-6 py-4 font-semibold">$ TBA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Registration Process</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>Complete the online registration form</li>
              <li>Pay the registration fee via the provided payment gateway</li>
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
