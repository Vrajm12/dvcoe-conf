export default function OrganizingCommittee() {
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Organizing Committee
        </h1>
        
        <div className="max-w-5xl mx-auto">
          {/* Chief Patron */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b-2 border-blue-600 pb-2">
              Chief Patron
            </h2>
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h3 className="font-bold text-xl text-gray-800">[Name]</h3>
              <p className="text-gray-600">[Designation]</p>
              <p className="text-sm text-gray-500">[Institution]</p>
            </div>
          </div>
          
          {/* Patron */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b-2 border-blue-600 pb-2">
              Patron
            </h2>
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h3 className="font-bold text-xl text-gray-800">[Name]</h3>
              <p className="text-gray-600">[Designation]</p>
              <p className="text-sm text-gray-500">[Institution]</p>
            </div>
          </div>
          
          {/* Conference Chair */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b-2 border-blue-600 pb-2">
              Conference Chair
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <h3 className="font-bold text-lg text-gray-800">Prof. [Name]</h3>
                <p className="text-gray-600">[Department]</p>
                <p className="text-sm text-gray-500">[Institution]</p>
              </div>
            </div>
          </div>
          
          {/* Program Committee */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b-2 border-blue-600 pb-2">
              Program Committee
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <h3 className="font-bold text-lg text-gray-800">Dr. [Name]</h3>
                <p className="text-gray-600">[Department]</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <h3 className="font-bold text-lg text-gray-800">Dr. [Name]</h3>
                <p className="text-gray-600">[Department]</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <h3 className="font-bold text-lg text-gray-800">Dr. [Name]</h3>
                <p className="text-gray-600">[Department]</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <h3 className="font-bold text-lg text-gray-800">Dr. [Name]</h3>
                <p className="text-gray-600">[Department]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
