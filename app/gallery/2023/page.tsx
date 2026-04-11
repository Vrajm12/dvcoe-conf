import { getPageContent } from '@/lib/content';

interface GalleryPageContent {
  page_title?: string;
  page_intro?: string;
  google_drive_link?: string;
  event_images?: string[];
}

export default async function Gallery2023() {
  const cmsContent = await getPageContent<GalleryPageContent>('gallery-2023');
  
  const hasImages = (cmsContent?.event_images?.length ?? 0) > 0;

  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          {cmsContent?.page_title || 'Gallery 2023'}
        </h1>
        <p className="text-center text-gray-600 mb-12">
          {cmsContent?.page_intro || 'Highlights from ICCET-2023 Conference'}
        </p>
        
        <div className="max-w-6xl mx-auto">
          {!hasImages ? (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-lg p-12 text-center">
              <div className="text-5xl mb-4">🖼️</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Gallery Coming Soon</h2>
              <p className="text-gray-600 mb-4">
                We&apos;re curating the best moments from ICCET-2023. Gallery images will be uploaded soon.
              </p>
              <p className="text-sm text-gray-500">
                Check back later for highlights, keynotes, and memorable moments from the conference.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cmsContent?.event_images?.map((src, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={src} alt={`Event ${idx + 1}`} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800">Event Photo {idx + 1}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {cmsContent?.google_drive_link && (
            <div className="mt-8 text-center">
              <a
                href={cmsContent.google_drive_link}
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

