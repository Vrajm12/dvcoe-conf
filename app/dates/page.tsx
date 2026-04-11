import { getPageContent } from '@/lib/content';
import { FaUpload, FaClipboard, FaCheckCircle, FaFileAlt, FaCreditCard, FaCamera, FaBullseye, FaBook, FaBell, FaHeadset } from 'react-icons/fa';

interface DatesPageContent {
  page_title?: string;
  page_intro?: string;
  submission_opens?: string;
  submission_deadline?: string;
  acceptance_notification?: string;
  final_submission?: string;
  registration_accepted_papers?: string;
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
      { 
        event: "Paper Submission Opens", 
        date: cmsContent?.submission_opens ? formatDate(cmsContent.submission_opens) : "April 10, 2026",
        description: "Start submitting your research papers",
        icon: FaUpload
      },
      { 
        event: "Paper Submission Deadline", 
        date: cmsContent?.submission_deadline ? formatDate(cmsContent.submission_deadline) : "June 30, 2026",
        description: "Last day to submit your papers",
        icon: FaClipboard
      },
      { 
        event: "Acceptance Notification", 
        date: cmsContent?.acceptance_notification ? formatDate(cmsContent.acceptance_notification) : "July 15, 2026",
        description: "Authors notified of acceptance decisions",
        icon: FaCheckCircle
      },
      { 
        event: "Final Submission", 
        date: cmsContent?.final_submission ? formatDate(cmsContent.final_submission) : "July 20, 2026",
        description: "Submit final version of your paper",
        icon: FaFileAlt
      },
      { 
        event: "Registration of Accepted Papers", 
        date: cmsContent?.registration_accepted_papers ? formatDate(cmsContent.registration_accepted_papers) : "July 22, 2026",
        description: "Authors register for conference",
        icon: FaCreditCard
      },
      { 
        event: "Camera-Ready Submission", 
        date: cmsContent?.camera_ready_date ? formatDate(cmsContent.camera_ready_date) : "July 22, 2026",
        description: "Submit camera-ready version",
        icon: FaCamera
      },
      { 
        event: "Conference Dates", 
        date: cmsContent?.conference_date ? formatDate(cmsContent.conference_date) : "July 30-31, 2026",
        description: "Main conference event (Hybrid Mode)",
        icon: FaBullseye,
        highlight: true
      }
    ]
  };

  return (
    <main className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {dates.page_title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            {dates.page_intro}
          </p>
          <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
        </div>

        {/* Clean Grid Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {dates.important_dates.map((item, i) => (
              <div 
                key={i} 
                className={`${
                  item.highlight 
                    ? 'lg:col-span-3 md:col-span-2' 
                    : ''
                }`}
              >
                <div className={`${
                  item.highlight 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-xl p-8 rounded-xl text-center' 
                    : 'bg-blue-50 border-2 border-blue-200 p-6 rounded-xl hover:shadow-lg transition-shadow h-full'
                }`}>
                  <div className={`text-4xl mb-3 ${item.highlight ? '' : 'text-blue-600'}`}>
                    <item.icon />
                  </div>
                  <h3 className={`font-bold text-lg mb-2 ${item.highlight ? 'text-white text-3xl' : 'text-gray-900'}`}>
                    {item.event}
                  </h3>
                  <p className={`font-semibold mb-2 ${item.highlight ? 'text-blue-100 text-2xl' : 'text-base text-blue-600'}`}>
                    {item.date}
                  </p>
                  <p className={`${item.highlight ? 'text-blue-100 text-lg' : 'text-sm text-gray-600'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Info Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2"><FaBook /> Submission Guidelines</h3>
              <p className="text-sm text-gray-700">
                Check our guidelines and template before submitting your research paper.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2"><FaBell /> Stay Informed</h3>
              <p className="text-sm text-gray-700">
                Dates are subject to change. Subscribe for email notifications.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2"><FaHeadset /> Questions?</h3>
              <p className="text-sm text-gray-700">
                Contact us for any questions about important dates or process.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <a 
              href="/authors/submission" 
              className="inline-block bg-blue-900 text-white px-12 py-4 rounded-lg font-semibold hover:bg-blue-800 shadow-lg transition-all"
              style={{ backgroundColor: '#1e3a8a', color: '#ffffff' }}
            >
              Submit Your Paper
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
