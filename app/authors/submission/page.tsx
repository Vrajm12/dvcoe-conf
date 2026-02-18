export default function PaperSubmission() {
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Paper Submission
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Submission Process</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Prepare Your Manuscript</h3>
                  <p className="text-gray-700">
                    Format your paper according to IEEE conference template. Ensure all guidelines 
                    are followed including page limits, font sizes, and citation style.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Create an Account</h3>
                  <p className="text-gray-700">
                    Register on our submission portal with your email address. You will receive 
                    a confirmation email with login credentials.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Submit Your Paper</h3>
                  <p className="text-gray-700">
                    Log in to the submission portal and upload your manuscript in PDF format. 
                    Provide paper title, abstract, keywords, and author information.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Review Process</h3>
                  <p className="text-gray-700">
                    Your paper will undergo double-blind peer review by experts in the field. 
                    You will receive feedback and decision notification via email.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Camera-Ready Submission</h3>
                  <p className="text-gray-700">
                    If accepted, submit the final camera-ready version incorporating reviewer 
                    comments. Complete registration to ensure publication.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Submission Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-gray-800 mb-2">File Format</h3>
                <p className="text-gray-700">PDF (Portable Document Format)</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-gray-800 mb-2">Paper Length</h3>
                <p className="text-gray-700">Maximum 6 pages including references</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-gray-800 mb-2">Template</h3>
                <p className="text-gray-700">IEEE Conference Template</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-gray-800 mb-2">Language</h3>
                <p className="text-gray-700">English (US or UK)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <h3 className="font-bold text-lg mb-2 text-blue-900">Important Notes</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Ensure your paper does not contain author information for blind review</li>
              <li>• Check for plagiarism before submission</li>
              <li>• Keep a copy of your submission ID for future reference</li>
              <li>• Monitor your email for review updates and decisions</li>
            </ul>
          </div>
          
          <div className="text-center">
            <button className="bg-blue-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg">
              Submit Your Paper
            </button>
            <p className="mt-4 text-gray-600">
              Need help? <a href="/contact" className="text-blue-600 hover:underline">Contact us</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
