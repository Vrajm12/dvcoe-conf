export default function Gallery2023() {
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Gallery 2023
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Highlights from MAI-2023 Conference
        </p>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-blue-100 border-l-4 border-blue-600 p-6 mb-8">
            <p className="text-gray-800">
              📸 Photo gallery from MAI-2023 will be available soon. Check back later for images from the conference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <span className="text-6xl">📷</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">Event Photo {item}</h3>
                  <p className="text-sm text-gray-600">MAI-2023 Conference</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
