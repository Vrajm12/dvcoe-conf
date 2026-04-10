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
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">{data.page_title}</h1>

        <div className="max-w-5xl mx-auto">
          <p className="text-center text-gray-600 mb-12 text-lg">{data.page_intro}</p>

          {data.keynote_speakers.map((speaker, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg aspect-square flex items-center justify-center">
                    <span className="text-6xl text-blue-600">K</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{speaker.name}</h2>
                  <p className="text-blue-600 font-semibold mb-2">{speaker.institution}</p>
                  <p className="text-gray-600 mb-4">{speaker.country}</p>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">
                    Talk Title: <span className="font-normal text-gray-700">&quot;{speaker.talk_title}&quot;</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{speaker.bio}</p>
                  <div className="bg-blue-50 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Abstract:</strong> {speaker.abstract}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Invited Speakers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.invited_speakers.map((speaker, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4 py-3">
                  <h3 className="font-bold text-lg text-gray-800">{speaker.name}</h3>
                  <p className="text-gray-600">{speaker.institution}</p>
                  <p className="text-sm text-gray-500 mt-1">{speaker.country}</p>
                  <p className="text-sm text-blue-600 mt-2 italic">&quot;{speaker.talk_title}&quot;</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
