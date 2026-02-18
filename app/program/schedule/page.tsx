export default function ConferenceSchedule() {
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Conference Schedule
        </h1>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-blue-100 border-l-4 border-blue-600 p-6 mb-8">
            <p className="text-gray-800 font-semibold">
              📅 The detailed conference schedule will be announced soon. Please check back later for updates.
            </p>
          </div>
          
          {/* Day 1 */}
          <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6">
              <h2 className="text-2xl font-bold">Day 1 - [Date TBA]</h2>
              <p className="text-blue-200">Opening Ceremony &amp; Technical Sessions</p>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex border-l-4 border-blue-600 pl-4">
                  <div className="w-32 flex-shrink-0 font-bold text-blue-900">09:00 - 09:30</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Registration &amp; Welcome Coffee</h3>
                  </div>
                </div>
                
                <div className="flex border-l-4 border-blue-600 pl-4">
                  <div className="w-32 flex-shrink-0 font-bold text-blue-900">09:30 - 10:00</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Opening Ceremony</h3>
                    <p className="text-gray-600 text-sm">Welcome addresses by dignitaries</p>
                  </div>
                </div>
                
                <div className="flex border-l-4 border-purple-600 pl-4">
                  <div className="w-32 flex-shrink-0 font-bold text-purple-900">10:00 - 11:00</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Keynote Address 1</h3>
                    <p className="text-gray-600 text-sm">Speaker: [TBA]</p>
                  </div>
                </div>
                
                <div className="flex border-l-4 border-green-600 pl-4">
                  <div className="w-32 flex-shrink-0 font-bold text-green-900">11:00 - 11:30</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Tea Break &amp; Networking</h3>
                  </div>
                </div>
                
                <div className="flex border-l-4 border-blue-600 pl-4">
                  <div className="w-32 flex-shrink-0 font-bold text-blue-900">11:30 - 13:00</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Technical Session 1</h3>
                    <p className="text-gray-600 text-sm">Machine Vision Applications</p>
                  </div>
                </div>
                
                <div className="flex border-l-4 border-orange-600 pl-4">
                  <div className="w-32 flex-shrink-0 font-bold text-orange-900">13:00 - 14:00</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Lunch Break</h3>
                  </div>
                </div>
                
                <div className="flex border-l-4 border-blue-600 pl-4">
                  <div className="w-32 flex-shrink-0 font-bold text-blue-900">14:00 - 15:30</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Technical Session 2</h3>
                    <p className="text-gray-600 text-sm">Deep Learning &amp; AI</p>
                  </div>
                </div>
                
                <div className="flex border-l-4 border-green-600 pl-4">
                  <div className="w-32 flex-shrink-0 font-bold text-green-900">15:30 - 16:00</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Evening Tea</h3>
                  </div>
                </div>
                
                <div className="flex border-l-4 border-blue-600 pl-4">
                  <div className="w-32 flex-shrink-0 font-bold text-blue-900">16:00 - 17:30</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Poster Session</h3>
                    <p className="text-gray-600 text-sm">Interactive presentations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Day 2 */}
          <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white p-6">
              <h2 className="text-2xl font-bold">Day 2 - [Date TBA]</h2>
              <p className="text-purple-200">Technical Sessions &amp; Workshops</p>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex border-l-4 border-purple-600 pl-4">
                  <div className="w-32 flex-shrink-0 font-bold text-purple-900">09:00 - 10:00</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Keynote Address 2</h3>
                    <p className="text-gray-600 text-sm">Speaker: [TBA]</p>
                  </div>
                </div>
                
                <div className="flex border-l-4 border-green-600 pl-4">
                  <div className="w-32 flex-shrink-0 font-bold text-green-900">10:00 - 10:30</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Coffee Break</h3>
                  </div>
                </div>
                
                <div className="flex border-l-4 border-blue-600 pl-4">
                  <div className="w-32 flex-shrink-0 font-bold text-blue-900">10:30 - 12:00</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Technical Session 3</h3>
                    <p className="text-gray-600 text-sm">Augmented Intelligence</p>
                  </div>
                </div>
                
                <div className="flex border-l-4 border-orange-600 pl-4">
                  <div className="w-32 flex-shrink-0 font-bold text-orange-900">12:00 - 13:00</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Lunch</h3>
                  </div>
                </div>
                
                <div className="flex border-l-4 border-blue-600 pl-4">
                  <div className="w-32 flex-shrink-0 font-bold text-blue-900">13:00 - 14:30</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Workshop Session</h3>
                    <p className="text-gray-600 text-sm">Hands-on tutorials</p>
                  </div>
                </div>
                
                <div className="flex border-l-4 border-purple-600 pl-4">
                  <div className="w-32 flex-shrink-0 font-bold text-purple-900">14:30 - 15:30</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Panel Discussion</h3>
                    <p className="text-gray-600 text-sm">Future of AI and Machine Vision</p>
                  </div>
                </div>
                
                <div className="flex border-l-4 border-blue-600 pl-4">
                  <div className="w-32 flex-shrink-0 font-bold text-blue-900">15:30 - 16:00</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Closing Ceremony</h3>
                    <p className="text-gray-600 text-sm">Best Paper Awards &amp; Vote of Thanks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="text-gray-800">
              <strong>Note:</strong> Schedule is tentative and subject to change. Final schedule will be 
              announced closer to the conference date.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
