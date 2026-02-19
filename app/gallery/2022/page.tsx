export default function Gallery2022() {
  const galleryData = {
    title: "Gallery 2022",
    event_images: [
      "https://mvai.in/2024/img/mai22/1.jpeg",
      "https://mvai.in/2024/img/mai22/2.jpeg",
      "https://mvai.in/2024/img/mai22/3.jpeg",
      "https://mvai.in/2024/img/mai22/4.jpeg",
      "https://mvai.in/2024/img/mai22/5.jpeg",
      "https://mvai.in/2024/img/mai22/6.jpeg",
      "https://mvai.in/2024/img/mai22/7.jpeg",
      "https://mvai.in/2024/img/mai22/8.jpeg",
      "https://mvai.in/2024/img/mai22/9.jpeg",
      "https://mvai.in/2024/img/mai22/10.jpeg",
      "https://mvai.in/2024/img/mai22/11.jpeg",
      "https://mvai.in/2024/img/mai22/12.jpeg",
      "https://mvai.in/2024/img/mai22/13.jpeg",
      "https://mvai.in/2024/img/mai22/14.jpeg",
      "https://mvai.in/2024/img/mai22/15.jpeg",
      "https://mvai.in/2024/img/mai22/16.jpeg",
      "https://mvai.in/2024/img/mai22/17.jpeg",
      "https://mvai.in/2024/img/mai22/18.jpeg",
      "https://mvai.in/2024/img/mai22/19.jpeg",
      "https://mvai.in/2024/img/mai22/20.jpeg",
      "https://mvai.in/2024/img/mai22/21.jpeg",
      "https://mvai.in/2024/img/mai22/22.jpeg",
      "https://mvai.in/2024/img/mai22/23.jpeg",
      "https://mvai.in/2024/img/mai22/24.jpeg",
      "https://mvai.in/2024/img/mai22/25.jpeg",
      "https://mvai.in/2024/img/mai22/26.jpeg",
      "https://mvai.in/2024/img/mai22/27.jpeg"
    ],
    news_images: [
      "https://mvai.in/2024/img/news22/1.jpeg",
      "https://mvai.in/2024/img/news22/2.jpeg",
      "https://mvai.in/2024/img/news22/3.jpeg",
      "https://mvai.in/2024/img/news22/4.jpeg",
      "https://mvai.in/2024/img/news22/5.jpeg",
      "https://mvai.in/2024/img/news22/6.jpeg",
      "https://mvai.in/2024/img/news22/7.jpeg"
    ]
  };
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Gallery 2022
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Highlights from MAI-2022 Conference
        </p>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-blue-100 border-l-4 border-blue-600 p-6 mb-8">
            <p className="text-gray-800">
              📸 Photo gallery from MAI-2022 will be available soon. Check back later for images from the conference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryData.event_images.map((src, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="aspect-video bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img src={src} alt={`Event ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">Event Photo {idx + 1}</h3>
                  <p className="text-sm text-gray-600">MAI-2022 Conference</p>
                </div>
              </div>
            ))}
          </div>

          {galleryData.news_images && galleryData.news_images.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">News & Highlights</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryData.news_images.map((src, i) => (
                  <div key={i} className="bg-white rounded overflow-hidden shadow-sm">
                    <div className="aspect-square">
                      <img src={src} alt={`News ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
