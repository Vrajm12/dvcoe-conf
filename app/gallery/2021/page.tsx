export default function Gallery2021() {
  const galleryData = {
    page_title: "Gallery 2021Home>Gallery>2021",
    event_images: [
      "https://mvai.in/2024/img/event/1.jpeg",
      "https://mvai.in/2024/img/event/2.jpeg",
      "https://mvai.in/2024/img/event/3.jpeg",
      "https://mvai.in/2024/img/event/4.jpeg",
      "https://mvai.in/2024/img/event/5.jpeg",
      "https://mvai.in/2024/img/event/6.jpeg",
      "https://mvai.in/2024/img/event/7.jpeg",
      "https://mvai.in/2024/img/event/8.jpeg",
      "https://mvai.in/2024/img/event/9.jpeg",
      "https://mvai.in/2024/img/event/10.jpeg",
      "https://mvai.in/2024/img/event/11.jpeg",
      "https://mvai.in/2024/img/event/12.jpeg",
      "https://mvai.in/2024/img/event/13.jpeg",
      "https://mvai.in/2024/img/event/14.jpeg",
      "https://mvai.in/2024/img/event/15.jpeg",
      "https://mvai.in/2024/img/event/16.jpeg",
      "https://mvai.in/2024/img/event/17.jpeg",
      "https://mvai.in/2024/img/event/18.jpeg",
      "https://mvai.in/2024/img/event/19.jpeg",
      "https://mvai.in/2024/img/event/20.jpeg",
      "https://mvai.in/2024/img/event/21.jpeg",
      "https://mvai.in/2024/img/event/22.jpeg",
      "https://mvai.in/2024/img/event/23.jpeg",
      "https://mvai.in/2024/img/event/24.jpeg",
      "https://mvai.in/2024/img/event/25.jpeg",
      "https://mvai.in/2024/img/event/26.jpeg",
      "https://mvai.in/2024/img/event/27.jpeg",
      "https://mvai.in/2024/img/event/28.jpeg",
      "https://mvai.in/2024/img/event/29.jpeg",
      "https://mvai.in/2024/img/event/30.jpeg",
      "https://mvai.in/2024/img/event/31.jpeg",
      "https://mvai.in/2024/img/event/32.jpeg",
      "https://mvai.in/2024/img/event/33.jpeg",
      "https://mvai.in/2024/img/event/34.jpeg",
      "https://mvai.in/2024/img/event/35.jpeg",
      "https://mvai.in/2024/img/event/36.jpeg",
      "https://mvai.in/2024/img/event/37.jpeg",
      "https://mvai.in/2024/img/event/38.jpeg",
      "https://mvai.in/2024/img/event/39.jpeg",
      "https://mvai.in/2024/img/event/40.jpeg",
      "https://mvai.in/2024/img/event/41.jpeg",
      "https://mvai.in/2024/img/event/42.jpeg",
      "https://mvai.in/2024/img/event/43.jpeg",
      "https://mvai.in/2024/img/event/44.jpeg",
      "https://mvai.in/2024/img/event/45.jpeg",
      "https://mvai.in/2024/img/event/46.jpeg",
      "https://mvai.in/2024/img/event/47.jpeg",
      "https://mvai.in/2024/img/event/48.jpeg",
      "https://mvai.in/2024/img/event/49.jpeg",
      "https://mvai.in/2024/img/event/50.jpeg",
      "https://mvai.in/2024/img/event/51.jpeg",
      "https://mvai.in/2024/img/event/52.jpeg",
      "https://mvai.in/2024/img/event/53.jpeg"
    ],
    hosting_campus_images: [
      "https://mvai.in/2024/img/gallery/1.jpg",
      "https://mvai.in/2024/img/gallery/2.jpg",
      "https://mvai.in/2024/img/gallery/3.jpg",
      "https://mvai.in/2024/img/gallery/4.jpg",
      "https://mvai.in/2024/img/gallery/5.jpg",
      "https://mvai.in/2024/img/gallery/6.jpg",
      "https://mvai.in/2024/img/gallery/7.jpg",
      "https://mvai.in/2024/img/gallery/8.jpg",
      "https://mvai.in/2024/img/gallery/9.jpg"
    ]
  };

  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Gallery 2021
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Highlights from MAI-2021 Conference
        </p>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-blue-100 border-l-4 border-blue-600 p-6 mb-8">
            <p className="text-gray-800">
              📸 Photo gallery from MAI-2021 will be available soon. Check back later for images from the conference.
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
                  <p className="text-sm text-gray-600">MAI-2021 Conference</p>
                </div>
              </div>
            ))}
          </div>

          {galleryData.hosting_campus_images && galleryData.hosting_campus_images.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Hosting Campus</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {galleryData.hosting_campus_images.map((src, i) => (
                  <div key={i} className="bg-white rounded overflow-hidden shadow-sm">
                    <div className="aspect-square">
                      <img src={src} alt={`Campus ${i + 1}`} className="w-full h-full object-cover" />
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
