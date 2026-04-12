import { getPageContent } from '@/lib/content';

interface Conference {
  name: string;
  dates: string;
  publisher: string;
  link: string;
}

interface GalleryPageContent {
  page_title?: string;
  page_intro?: string;
  conferences?: Conference[];
}

export default async function Gallery() {
  const cmsContent = await getPageContent<GalleryPageContent>('gallery');
  
  const conferences = cmsContent?.conferences || [];

  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {cmsContent?.page_title || 'Earlier Proceedings'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {cmsContent?.page_intro || 'A comprehensive history of ICCET and ICCASP conference series'}
          </p>
          <div className="h-1 w-24 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-md text-center border-t-4 border-blue-600">
              <div className="text-4xl font-bold text-blue-600 mb-2">{conferences.length}</div>
              <p className="text-gray-600 font-semibold">Conferences Held</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center border-t-4 border-indigo-600">
              <div className="text-4xl font-bold text-indigo-600 mb-2">2015-2023</div>
              <p className="text-gray-600 font-semibold">Years of Excellence</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center border-t-4 border-purple-600">
              <div className="text-4xl font-bold text-purple-600 mb-2">8</div>
              <p className="text-gray-600 font-semibold">International Publishers</p>
            </div>
          </div>

          {/* Professional Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-6">
              <h2 className="text-3xl font-black" style={{color: '#ffffff'}}>Conference History</h2>
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-50 border-b-2 border-blue-200">
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Conference</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Dates</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Proceedings Publisher</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Proceedings Link</th>
                  </tr>
                </thead>
                <tbody>
                  {conferences.map((conf, idx) => (
                    <tr 
                      key={idx}
                      className={`border-b transition-colors ${
                        idx % 2 === 0 ? 'bg-white' : 'bg-blue-50'
                      } hover:bg-blue-100`}
                    >
                      <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                        {conf.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
                        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                          {conf.dates}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <div className="flex items-center">
                          <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {conf.publisher}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        {conf.link ? (
                          <a
                            href={conf.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold hover:underline"
                          >
                            View Proceedings
                            <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M11 3a1 1 0 100 2h3.586L9.293 9.293a1 1 0 000 1.414 1 1 0 001.414 0L16 6.414V10a1 1 0 102 0V4a1 1 0 00-1-1h-6z"></path>
                              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                            </svg>
                          </a>
                        ) : (
                          <span className="text-gray-500 italic">--</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">Note:</span> Explore the proceedings from all previous conferences using the links above. Each conference has contributed to advancing research in Computing, Engineering, and Technology.
              </p>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Evolution of the Series</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {conferences.map((conf, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 shadow-md border-l-4 border-blue-600">
                  <div className="flex items-start mb-3">
                    <span className="flex-shrink-0 flex items-center justify-center bg-blue-600 text-white rounded-full w-8 h-8 text-sm font-bold">
                      {idx + 1}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm mb-1">
                    {conf.name.split('(')[1]?.replace(')', '') || conf.name}
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">{conf.dates}</p>
                  <p className="text-xs text-blue-600 font-semibold">{conf.publisher}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
