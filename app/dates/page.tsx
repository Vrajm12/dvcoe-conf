import { getPageContent } from '@/lib/content';

interface DatesPageContent {
  page_title?: string;
  page_intro?: string;
  submission_deadline?: string;
  notification_date?: string;
  camera_ready_date?: string;
  conference_date?: string;
}

function formatDate(dateValue: string): string {
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) {
    return dateValue;
  }
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default async function Dates() {
  const cmsContent = await getPageContent<DatesPageContent>('dates');
  const dates = {
    page_title: cmsContent?.page_title || "Important Dates",
    page_intro: cmsContent?.page_intro || "Mark your calendars for these important deadlines",
    important_dates: [
      { event: "Paper Submission Opens", date: "February 5, 2026" },
      { event: "Paper Submission Deadline", date: cmsContent?.submission_deadline ? formatDate(cmsContent.submission_deadline) : "May 30, 2026" },
      { event: "Acceptance Notification", date: cmsContent?.notification_date ? formatDate(cmsContent.notification_date) : "June 30, 2026" },
      { event: "Final Submission", date: cmsContent?.camera_ready_date ? formatDate(cmsContent.camera_ready_date) : "July 15, 2026" },
      { event: "Registration of Accepted Papers", date: "July 25, 2026" },
      { event: "Camera-Ready Submission", date: cmsContent?.camera_ready_date ? formatDate(cmsContent.camera_ready_date) : "August 10, 2026" },
      { event: "Conference Dates", date: cmsContent?.conference_date ? formatDate(cmsContent.conference_date) : "June 27-28, 2026" }
    ]
  };

  const borderClasses = [
    'border-blue-600',
    'border-red-600',
    'border-purple-600',
    'border-orange-600',
    'border-yellow-600',
    'border-green-600',
    'border-indigo-600'
  ];
  const bgClasses = [
    'bg-blue-50',
    'bg-red-50',
    'bg-purple-50',
    'bg-orange-50',
    'bg-yellow-50',
    'bg-green-50',
    'bg-indigo-50'
  ];
  const badgeClasses = [
    'bg-blue-900 text-white',
    'bg-red-600 text-white',
    'bg-purple-600 text-white',
    'bg-orange-600 text-white',
    'bg-yellow-600 text-white',
    'bg-green-600 text-white',
    'bg-indigo-600 text-white'
  ];
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          {dates.page_title}
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 text-center">
              <h2 className="text-3xl font-bold mb-2">ICCET-2026</h2>
              <p className="text-blue-200">{dates.page_intro}</p>
            </div>
            
            <div className="p-8">
              <div className="space-y-6">
                {dates.important_dates.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-start border-l-4 ${borderClasses[i % borderClasses.length]} pl-6 py-4 ${bgClasses[i % bgClasses.length]} rounded-r-lg`}
                  >
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg text-gray-800 mb-1">{item.event}</h3>
                      <p className="text-gray-600 text-sm">{item.event === 'Conference Dates' ? 'Main conference event (Hybrid Mode)' : ''}</p>
                    </div>
                    <div className="text-right">
                      <div className={`${badgeClasses[i % badgeClasses.length]} px-4 py-2 rounded font-bold`}>
                        {item.date}
                      </div>
                    </div>
                  </div>
                ))}
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
