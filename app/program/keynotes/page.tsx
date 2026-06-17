import Image from 'next/image';
import { getPageContent } from '@/lib/content';

interface Speaker {
  name: string;
  institution: string;
  country: string;
  talk_title: string;
  bio: string;
  abstract: string;
  image?: string;
}

interface ProgramKeynotesContent {
  page_title: string;
  page_intro: string;
  keynote_speakers: Speaker[];
  invited_speakers: Speaker[];
}

const defaultContent: ProgramKeynotesContent = {
  page_title: 'Invited Speakers',
  page_intro: 'Invited speakers from leading technical universities and research institutions',
  keynote_speakers: [
    {
      name: 'Prof. (Dr.) Rajanish Kamalakar Kamat',
      institution: 'Dr. Babasaheb Ambedkar Technological University (DBATU), Lonere, Maharashtra',
      country: 'India',
      talk_title: 'To be announced',
      bio: "Hon'ble Vice-Chancellor, Dr. Babasaheb Ambedkar Technological University, Lonere.",
      abstract: 'Keynote details will be announced soon.',
      image: '/chief-patron.jpeg'
    },
    {
      name: 'Prof. (Dr.) Sunil G. Bhirud',
      institution: 'COEP Technological University, Pune',
      country: 'India',
      talk_title: 'To be announced',
      bio: "Hon'ble Vice-Chancellor, COEP Technological University, Pune.",
      abstract: 'Keynote details will be announced soon.',
      image: '/bhirud-sir.jpg'
    },
    {
      name: 'Dr. R. (Venki) Venkateswaran',
      institution: 'PhD in Computer Science from Washington State University',
      country: 'India',
      talk_title: 'To be announced',
      bio: 'Professor of Practice; Former Senior Vice President of Engineering, Persistent Systems.',
      abstract: 'Keynote details will be announced soon.',
      image: '/venkateswaran-sir.jpg'
    }
  ],
  invited_speakers: []
};

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const imageSrc = speaker.image || '/file.svg';

  return (
    <article className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6">
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:text-left">
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border-4 border-white bg-slate-100 shadow-lg">
            <Image
              src={imageSrc}
              alt={speaker.name}
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Invited Speaker
            </p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">{speaker.name}</h3>
            <p className="mt-2 text-base font-medium text-slate-700">{speaker.institution}</p>
            <p className="mt-1 text-sm text-slate-500">{speaker.country}</p>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Talk Title</p>
          <p className="mt-2 text-lg font-semibold text-blue-900">{speaker.talk_title}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Profile</p>
          <p className="mt-2 leading-7 text-slate-700">{speaker.bio}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Abstract</p>
          <p className="mt-2 leading-7 text-slate-700">{speaker.abstract}</p>
        </div>
      </div>
    </article>
  );
}

export default async function Keynotes() {
  const cmsContent = await getPageContent<ProgramKeynotesContent>('program-keynotes');
  const data = cmsContent ?? defaultContent;
  const invitedSpeakers = data.invited_speakers ?? [];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_38%),linear-gradient(180deg,#f8fbff_0%,#f3f7ff_100%)] py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Program</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            {data.page_title}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">{data.page_intro}</p>
        </div>

        <div className="mx-auto mt-14 max-w-6xl space-y-12">
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Invited Speakers</h2>
              <p className="mt-2 text-slate-600">
                Invited speakers for ICCET-2026. Confirmation is pending.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {data.keynote_speakers.map((speaker) => (
                <SpeakerCard key={speaker.name} speaker={speaker} />
              ))}
            </div>
          </section>

          {invitedSpeakers.length > 0 && (
            <section>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Invited Talks</h2>
                <p className="mt-2 text-slate-600">
                  Additional speakers and sessions will appear here as they are confirmed.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                {invitedSpeakers.map((speaker) => (
                  <SpeakerCard key={speaker.name} speaker={speaker} />
                ))}
              </div>
            </section>
          )}

          <div className="rounded-3xl border border-blue-100 bg-white/80 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <h3 className="text-lg font-bold text-blue-900">Stay Updated</h3>
            <p className="mt-3 max-w-4xl leading-7 text-slate-700">
              We will continue updating this page as the invited speaker lineup is finalized.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
