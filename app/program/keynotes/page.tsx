export default function Keynotes() {
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Keynote Speakers &amp; Invited Talks
        </h1>
        
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-gray-600 mb-12 text-lg">
            Distinguished speakers from leading institutions worldwide
          </p>
          
          {/* Keynote Speaker 1 */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg aspect-square flex items-center justify-center">
                  <span className="text-6xl text-blue-600">👤</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Prof. [Keynote Speaker Name]</h2>
                <p className="text-blue-600 font-semibold mb-2">[University/Institution]</p>
                <p className="text-gray-600 mb-4">[Country]</p>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Talk Title: <span className="font-normal text-gray-700">&ldquo;[Talk Title]&rdquo;</span></h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  [Brief bio and research interests of the speaker. Include notable achievements, 
                  research areas, and contributions to the field.]
                </p>
                <div className="bg-blue-50 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Abstract:</strong> [Brief description of the keynote talk topic and what 
                    attendees can expect to learn.]
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Keynote Speaker 2 */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg aspect-square flex items-center justify-center">
                  <span className="text-6xl text-purple-600">👤</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Dr. [Keynote Speaker Name]</h2>
                <p className="text-blue-600 font-semibold mb-2">[University/Institution]</p>
                <p className="text-gray-600 mb-4">[Country]</p>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Talk Title: <span className="font-normal text-gray-700">&ldquo;[Talk Title]&rdquo;</span></h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  [Brief bio and research interests of the speaker. Include notable achievements, 
                  research areas, and contributions to the field.]
                </p>
                <div className="bg-purple-50 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Abstract:</strong> [Brief description of the keynote talk topic and what 
                    attendees can expect to learn.]
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Invited Speakers Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Invited Speakers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-600 pl-4 py-3">
                <h3 className="font-bold text-lg text-gray-800">Prof. [Name]</h3>
                <p className="text-gray-600">[University/Institution]</p>
                <p className="text-sm text-gray-500 mt-1">[Country]</p>
                <p className="text-sm text-blue-600 mt-2 italic">&ldquo;[Talk Title]&rdquo;</p>
              </div>
              
              <div className="border-l-4 border-purple-600 pl-4 py-3">
                <h3 className="font-bold text-lg text-gray-800">Dr. [Name]</h3>
                <p className="text-gray-600">[University/Institution]</p>
                <p className="text-sm text-gray-500 mt-1">[Country]</p>
                <p className="text-sm text-purple-600 mt-2 italic">&ldquo;[Talk Title]&rdquo;</p>
              </div>
              
              <div className="border-l-4 border-green-600 pl-4 py-3">
                <h3 className="font-bold text-lg text-gray-800">Prof. [Name]</h3>
                <p className="text-gray-600">[University/Institution]</p>
                <p className="text-sm text-gray-500 mt-1">[Country]</p>
                <p className="text-sm text-green-600 mt-2 italic">&ldquo;[Talk Title]&rdquo;</p>
              </div>
              
              <div className="border-l-4 border-orange-600 pl-4 py-3">
                <h3 className="font-bold text-lg text-gray-800">Dr. [Name]</h3>
                <p className="text-gray-600">[University/Institution]</p>
                <p className="text-sm text-gray-500 mt-1">[Country]</p>
                <p className="text-sm text-orange-600 mt-2 italic">&ldquo;[Talk Title]&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
