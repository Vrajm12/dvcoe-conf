import { getPageContent } from '@/lib/content';
import { FaCalendar, FaMapPin } from 'react-icons/fa';

interface ScheduleItem {
  time: string;
  title: string;
  subtitle?: string;
  color?: string;
}

interface ScheduleDay {
  title: string;
  subtitle: string;
  items: ScheduleItem[];
}

interface ProgramScheduleContent {
  page_title: string;
  notice: string;
  days: ScheduleDay[];
  note: string;
}

const defaultContent: ProgramScheduleContent = {
  page_title: 'Conference Schedule',
  notice: 'The detailed conference schedule will be announced soon. Please check back later for updates.',
  days: [
    {
      title: 'Day 1 - [Date TBA]',
      subtitle: 'Opening Ceremony & Technical Sessions',
      items: [
        { time: '09:00 - 09:30', title: 'Registration & Welcome Coffee' },
        { time: '09:30 - 10:00', title: 'Opening Ceremony', subtitle: 'Welcome addresses by dignitaries' },
        { time: '10:00 - 11:00', title: 'Keynote Address 1', subtitle: 'Speaker: [TBA]' },
        { time: '11:00 - 11:30', title: 'Tea Break & Networking' },
        { time: '11:30 - 13:00', title: 'Technical Session 1', subtitle: 'Machine Vision Applications' },
        { time: '13:00 - 14:00', title: 'Lunch Break' },
        { time: '14:00 - 15:30', title: 'Technical Session 2', subtitle: 'Deep Learning & AI' },
        { time: '15:30 - 16:00', title: 'Evening Tea' },
        { time: '16:00 - 17:30', title: 'Poster Session', subtitle: 'Interactive presentations' }
      ]
    },
    {
      title: 'Day 2 - [Date TBA]',
      subtitle: 'Technical Sessions & Workshops',
      items: [
        { time: '09:00 - 10:00', title: 'Keynote Address 2', subtitle: 'Speaker: [TBA]' },
        { time: '10:00 - 10:30', title: 'Coffee Break' },
        { time: '10:30 - 12:00', title: 'Technical Session 3', subtitle: 'Augmented Intelligence' },
        { time: '12:00 - 13:00', title: 'Lunch' },
        { time: '13:00 - 14:30', title: 'Workshop Session', subtitle: 'Hands-on tutorials' },
        { time: '14:30 - 15:30', title: 'Panel Discussion', subtitle: 'Future of AI and Machine Vision' },
        { time: '15:30 - 16:00', title: 'Closing Ceremony', subtitle: 'Best Paper Awards & Vote of Thanks' }
      ]
    }
  ],
  note: 'Schedule is tentative and subject to change. Final schedule will be announced closer to the conference date.'
};

export default async function ConferenceSchedule() {
  const cmsContent = await getPageContent<ProgramScheduleContent>('program-schedule');
  const data = cmsContent ?? defaultContent;

  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-8 text-gray-800">{data.page_title}</h1>

        <div className="max-w-4xl mx-auto">
          {/* TBA Section */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl shadow-2xl p-16 text-center border-2 border-emerald-200">
            <div className="mb-6">
              <div className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 rounded-full p-8">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            
            <h2 className="text-5xl font-bold text-emerald-900 mb-4">TBA</h2>
            <p className="text-2xl text-emerald-800 font-semibold mb-6">To Be Announced</p>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              The detailed conference schedule including keynote sessions, technical tracks, workshops, 
              and networking events will be announced soon.
            </p>
            
            <div className="bg-white rounded-lg p-6 border-l-4 border-emerald-600">
              <p className="text-gray-600">
                The final schedule will be released closer to the conference date. 
                Please check back regularly for updates on the ICCET-2026 program.
              </p>
            </div>
          </div>

          {/* Info Boxes */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-100 border-l-4 border-blue-600 p-8 rounded-lg">
              <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2"><FaCalendar /> Conference Dates</h3>
              <p className="text-gray-700">
                30-31 July 2026
              </p>
            </div>
            
            <div className="bg-purple-100 border-l-4 border-purple-600 p-8 rounded-lg">
              <h3 className="text-lg font-bold text-purple-900 mb-3 flex items-center gap-2"><FaMapPin /> Venue</h3>
              <p className="text-gray-700">
                Dnyanvilas College of Engineering, Pune
              </p>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-lg">
            <p className="text-gray-800">
              <strong>Note:</strong> {data.note}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
