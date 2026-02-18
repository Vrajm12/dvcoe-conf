export default function Dates() {
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Important Dates
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 text-center">
              <h2 className="text-3xl font-bold mb-2">MAI-2026</h2>
              <p className="text-blue-200">Mark your calendars for these important deadlines</p>
            </div>
            
            <div className="p-8">
              <div className="space-y-6">
                <div className="flex items-start border-l-4 border-blue-600 pl-6 py-4 bg-blue-50 rounded-r-lg">
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg text-gray-800 mb-1">Paper Submission Opens</h3>
                    <p className="text-gray-600 text-sm">Start submitting your research papers</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-blue-900 text-white px-4 py-2 rounded font-bold">
                      TBA
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start border-l-4 border-red-600 pl-6 py-4 bg-red-50 rounded-r-lg">
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg text-gray-800 mb-1">Paper Submission Deadline</h3>
                    <p className="text-gray-600 text-sm">Final date for paper submission</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-red-600 text-white px-4 py-2 rounded font-bold">
                      TBA
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start border-l-4 border-purple-600 pl-6 py-4 bg-purple-50 rounded-r-lg">
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg text-gray-800 mb-1">Notification of Acceptance</h3>
                    <p className="text-gray-600 text-sm">Authors will be notified about paper status</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-purple-600 text-white px-4 py-2 rounded font-bold">
                      TBA
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start border-l-4 border-orange-600 pl-6 py-4 bg-orange-50 rounded-r-lg">
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg text-gray-800 mb-1">Camera-Ready Submission</h3>
                    <p className="text-gray-600 text-sm">Submit final version of accepted papers</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-orange-600 text-white px-4 py-2 rounded font-bold">
                      TBA
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start border-l-4 border-yellow-600 pl-6 py-4 bg-yellow-50 rounded-r-lg">
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg text-gray-800 mb-1">Early Bird Registration Deadline</h3>
                    <p className="text-gray-600 text-sm">Register at discounted rates</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-yellow-600 text-white px-4 py-2 rounded font-bold">
                      TBA
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start border-l-4 border-green-600 pl-6 py-4 bg-green-50 rounded-r-lg">
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg text-gray-800 mb-1">Conference Dates</h3>
                    <p className="text-gray-600 text-sm">Main conference event (Hybrid Mode)</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-green-600 text-white px-4 py-2 rounded font-bold">
                      2026
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-100 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 className="font-bold text-lg text-blue-900 mb-2">Stay Updated</h3>
            <p className="text-gray-700">
              Dates are subject to change. Please check this page regularly for updates or 
              subscribe to our newsletter for notifications.
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <a href="/authors/submission" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Submit Your Paper
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
