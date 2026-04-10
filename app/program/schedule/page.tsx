import { getPageContent } from '@/lib/content';

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
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">{data.page_title}</h1>

        <div className="max-w-5xl mx-auto">
          <div className="bg-blue-100 border-l-4 border-blue-600 p-6 mb-8">
            <p className="text-gray-800 font-semibold">{data.notice}</p>
          </div>

          {data.days.map((day, dayIndex) => (
            <div key={dayIndex} className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6">
                <h2 className="text-2xl font-bold">{day.title}</h2>
                <p className="text-blue-200">{day.subtitle}</p>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {day.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex border-l-4 border-blue-600 pl-4">
                      <div className="w-32 flex-shrink-0 font-bold text-blue-900">{item.time}</div>
                      <div>
                        <h3 className="font-bold text-gray-800">{item.title}</h3>
                        {item.subtitle ? <p className="text-gray-600 text-sm">{item.subtitle}</p> : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="text-gray-800">
              <strong>Note:</strong> {data.note}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
