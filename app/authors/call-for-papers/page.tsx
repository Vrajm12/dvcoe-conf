export default function CallForPapers() {
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Call for Papers
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">About</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The International Conference on Machine Vision and Augmented Intelligence (MAI-2026) 
              invites original research papers, review papers, and case studies in all areas of 
              machine vision, computer vision, artificial intelligence, and related fields.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We welcome contributions that present novel ideas, methodologies, and applications 
              in these rapidly evolving domains.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Topics of Interest</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-3">Machine Vision</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Image Processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Object Detection and Recognition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Video Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>3D Vision</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-3">Artificial Intelligence</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Deep Learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Neural Networks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Machine Learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Pattern Recognition</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-3">Applications</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Medical Imaging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Autonomous Systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Robotics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Surveillance Systems</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-3">Augmented Intelligence</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>AR/VR Technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Human-AI Interaction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Cognitive Computing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Intelligent Systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Submission Guidelines</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="font-semibold text-blue-900 mr-3 min-w-[30px]">1.</span>
                <span>Papers should be original and not published or submitted elsewhere</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-blue-900 mr-3 min-w-[30px]">2.</span>
                <span>Manuscripts should be prepared in IEEE double-column format</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-blue-900 mr-3 min-w-[30px]">3.</span>
                <span>Full papers should not exceed 6 pages including references</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-blue-900 mr-3 min-w-[30px]">4.</span>
                <span>All submissions will undergo double-blind peer review</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-blue-900 mr-3 min-w-[30px]">5.</span>
                <span>Accepted papers will be published in the conference proceedings</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Submit?</h2>
            <p className="mb-6">Submit your research paper through our submission portal</p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Go to Submission Portal
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
