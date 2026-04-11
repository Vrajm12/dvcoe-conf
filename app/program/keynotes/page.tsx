import { getPageContent } from '@/lib/content';

interface Speaker {
  name: string;
  institution: string;
  country: string;
  talk_title: string;
  bio: string;
  abstract: string;
}

interface ProgramKeynotesContent {
  page_title: string;
  page_intro: string;
  keynote_speakers: Speaker[];
  invited_speakers: Speaker[];
}

const defaultContent: ProgramKeynotesContent = {
  page_title: 'Keynote Speakers & Invited Talks',
  page_intro: 'Distinguished speakers from leading institutions worldwide',
  keynote_speakers: [
    {
      name: 'Prof. [Keynote Speaker Name]',
      institution: '[University/Institution]',
      country: '[Country]',
      talk_title: '[Talk Title]',
      bio: '[Brief bio and research interests of the speaker. Include notable achievements, research areas, and contributions to the field.]',
      abstract: '[Brief description of the keynote talk topic and what attendees can expect to learn.]'
    },
    {
      name: 'Dr. [Keynote Speaker Name]',
      institution: '[University/Institution]',
      country: '[Country]',
      talk_title: '[Talk Title]',
      bio: '[Brief bio and research interests of the speaker. Include notable achievements, research areas, and contributions to the field.]',
      abstract: '[Brief description of the keynote talk topic and what attendees can expect to learn.]'
    }
  ],
  invited_speakers: [
    {
      name: 'Prof. [Name]',
      institution: '[University/Institution]',
      country: '[Country]',
      talk_title: '[Talk Title]',
      bio: '',
      abstract: ''
    },
    {
      name: 'Dr. [Name]',
      institution: '[University/Institution]',
      country: '[Country]',
      talk_title: '[Talk Title]',
      bio: '',
      abstract: ''
    }
  ]
};

export default async function Keynotes() {
  const cmsContent = await getPageContent<ProgramKeynotesContent>('program-keynotes');
  const data = cmsContent ?? defaultContent;

  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-8 text-gray-800">{data.page_title}</h1>
        <p className="text-center text-gray-600 mb-16 text-lg">{data.page_intro}</p>

        <div className="max-w-4xl mx-auto">
          {/* TBA Section */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-2xl p-16 text-center border-2 border-blue-200">
            <div className="mb-6">
              <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full p-8">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <h2 className="text-5xl font-bold text-blue-900 mb-4">TBA</h2>
            <p className="text-2xl text-blue-800 font-semibold mb-6">To Be Announced</p>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              The keynote speakers and invited talks for ICCET-2026 will be announced soon. 
              We are currently finalizing the lineup of distinguished speakers from leading institutions worldwide.
            </p>
            
            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
              <p className="text-gray-600">
                Please check back soon or subscribe to our newsletter to receive updates about the keynote speakers and their presentations.
              </p>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-blue-100 border-l-4 border-blue-600 p-8 rounded-lg">
            <h3 className="text-lg font-bold text-blue-900 mb-3">📢 Stay Updated</h3>
            <p className="text-gray-700">
              Keynote speakers from renowned universities and research institutions will deliver cutting-edge talks covering 
              AI, Machine Learning, Cybersecurity, IoT, and related technologies.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
