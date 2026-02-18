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
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h3 className="font-bold text-lg text-gray-800">Prof. [Name]</h3>
              <p className="text-gray-600">[University/Institution]</p>
              <p className="text-sm text-gray-500">[State/City]</p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h3 className="font-bold text-lg text-gray-800">Dr. [Name]</h3>
              <p className="text-gray-600">[University/Institution]</p>
              <p className="text-sm text-gray-500">[State/City]</p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h3 className="font-bold text-lg text-gray-800">Prof. [Name]</h3>
              <p className="text-gray-600">[University/Institution]</p>
              <p className="text-sm text-gray-500">[State/City]</p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h3 className="font-bold text-lg text-gray-800">Dr. [Name]</h3>
              <p className="text-gray-600">[University/Institution]</p>
              <p className="text-sm text-gray-500">[State/City]</p>
            </div>
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
