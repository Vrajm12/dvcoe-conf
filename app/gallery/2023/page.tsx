export default function Gallery2023() {
  const galleryData = {
    title: "Gallery 2023Home>Gallery>2023",
    google_drive_link: "https://drive.google.com/drive/folders/1TOCZiRINsince3XzJ4rB5-yZZO76MWVL",
    event_images: [
      "https://mvai.in/2024/img/img23/1.jpg",
      "https://mvai.in/2024/img/img23/2.jpg",
      "https://mvai.in/2024/img/img23/3.jpg",
      "https://mvai.in/2024/img/img23/4.jpg",
      "https://mvai.in/2024/img/img23/5.jpg",
      "https://mvai.in/2024/img/img23/6.jpg",
      "https://mvai.in/2024/img/img23/7.jpg",
      "https://mvai.in/2024/img/img23/8.jpg"
    ]
  };
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
            {galleryData.event_images.map((src, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="aspect-video bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img src={src} alt={`Event ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">Event Photo {idx + 1}</h3>
                  <p className="text-sm text-gray-600">MAI-2023 Conference</p>
                </div>
              </div>
            ))}
          </div>

          {galleryData.google_drive_link && (
            <div className="mt-8 text-center">
              <a
                href={galleryData.google_drive_link}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                View Full Album on Google Drive
              </a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
