export default function InternationalCommittee() {
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          International Advisory Committee
        </h1>
        
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-8 text-center">
            Distinguished members from leading institutions worldwide
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sample committee members - replace with actual data */}
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h3 className="font-bold text-lg text-gray-800">Prof. [Name]</h3>
              <p className="text-gray-600">[University/Institution]</p>
              <p className="text-sm text-gray-500">[Country]</p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h3 className="font-bold text-lg text-gray-800">Prof. [Name]</h3>
              <p className="text-gray-600">[University/Institution]</p>
              <p className="text-sm text-gray-500">[Country]</p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h3 className="font-bold text-lg text-gray-800">Dr. [Name]</h3>
              <p className="text-gray-600">[University/Institution]</p>
              <p className="text-sm text-gray-500">[Country]</p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h3 className="font-bold text-lg text-gray-800">Prof. [Name]</h3>
              <p className="text-gray-600">[University/Institution]</p>
              <p className="text-sm text-gray-500">[Country]</p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600 italic">
              The International Advisory Committee consists of renowned researchers and academics 
              from prestigious institutions around the world who provide strategic guidance and 
              support for the conference.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
