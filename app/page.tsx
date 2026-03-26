import Link from 'next/link';
import Image from 'next/image';
import { getPageContent } from '@/lib/content';

export default async function Home() {
  const pageData = await getPageContent('home');

  if (!pageData) {
    return <div>Error loading page content</div>;
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        {/* Background Image */}
        <Image
          src={pageData.hero_background || "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop"}
          alt="Conference Background"
          fill
          priority
          quality={75}
          className="object-cover mix-blend-multiply"
          sizes="100vw"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/85 to-indigo-900/85"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight !text-white drop-shadow-lg">{pageData.hero_title}</h1>
              <div className="h-1 w-32 bg-yellow-400 mx-auto mb-6"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight !text-white drop-shadow-lg">
              {pageData.hero_subtitle}
            </h2>
            <p className="text-2xl md:text-3xl mb-3 font-light text-white drop-shadow-md">
              {pageData.hero_tagline}
            </p>
            <p className="text-xl mb-8 text-blue-100 drop-shadow-md">
              ({pageData.hero_title})
            </p>
            <div className="inline-flex items-center bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold text-lg shadow-lg mb-10">
              <span className="mr-2">●</span> {pageData.hero_event_type}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link href="/authors/call-for-papers" className="inline-block bg-white text-blue-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-xl transform hover:scale-105">
                Call for Papers
              </Link>
              <Link href="/registration/author" className="inline-block bg-yellow-400 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition shadow-xl transform hover:scale-105">
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About the Conference Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide" style={{color: '#C2185B'}}>{pageData.about_title}</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* About Conference */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-yellow-600 mb-6">{pageData.about_conference_title}</h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {pageData.about_conference_content}
                </p>
              </div>
              
              {/* Objectives */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold text-teal-600 mb-6">{pageData.about_objectives_title}</h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {pageData.about_objectives_content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acknowledgement Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide" style={{color: '#C2185B'}}>{pageData.acknowledgement_title}</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Microsoft Support */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-yellow-600 mb-6">{pageData.acknowledgement_microsoft_title}</h3>
                <div className="mb-6 bg-blue-500 inline-block px-6 py-3 rounded">
                  <span className="text-white font-bold text-3xl">CMT</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {pageData.acknowledgement_microsoft_content}
                </p>
              </div>
              
              {/* Springer Publication */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold text-teal-600 mb-6">{pageData.acknowledgement_springer_title}</h3>
                <div className="mb-6">
                  <svg className="h-12" viewBox="0 0 200 50" fill="none">
                    <text x="0" y="35" fontFamily="serif" fontSize="32" fontWeight="bold" fill="#000">Springer</text>
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {pageData.acknowledgement_springer_content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Partner Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide" style={{color: '#C2185B'}}>{pageData.publication_partner_title}</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Official Publication Partner */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-yellow-500">
                <h3 className="text-3xl font-bold text-yellow-600 mb-8 underline">{pageData.publication_partner_subtitle}</h3>
                <div className="text-center mb-6">
                  <svg className="h-16 mx-auto mb-4" viewBox="0 0 200 50" fill="none">
                    <text x="20" y="35" fontFamily="serif" fontSize="32" fontWeight="bold" fill="#000">Springer</text>
                  </svg>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Springer LNEE Series</h4>
                  <p className="text-gray-600">Scopus Indexed Proceedings</p>
                </div>
              </div>
              
              {/* Indexing Badges */}
              <div className="space-y-4">
                <div className="bg-yellow-400 text-white rounded-lg px-8 py-6 text-center shadow-lg">
                  <h4 className="text-2xl font-bold">Scopus Index</h4>
                </div>
                <div className="bg-yellow-400 text-white rounded-lg px-8 py-6 text-center shadow-lg">
                  <h4 className="text-2xl font-bold">Global Research</h4>
                </div>
                <div className="bg-yellow-400 text-white rounded-lg px-8 py-6 text-center shadow-lg">
                  <h4 className="text-2xl font-bold">Quality Assured</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publication & Indexing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide" style={{color: '#C2185B'}}>{pageData.publication_indexing_title}</h2>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-yellow-500">
              <h3 className="text-2xl font-bold text-yellow-600 mb-6">{pageData.publication_indexing_subtitle}</h3>
              <p className="text-gray-700 leading-relaxed text-justify text-lg">
                {pageData.publication_indexing_content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Tracks Section - Moved from below */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide" style={{color: '#C2185B'}}>Conference Tracks</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'AI, ML & Computational Techniques',
                  color: 'yellow-500',
                  description: 'Advanced research and innovative solutions in this domain'
                },
                {
                  title: 'Signal & Image Processing',
                  color: 'blue-500',
                  description: 'Advanced research and innovative solutions in this domain'
                },
                {
                  title: 'Cyber-Physical Systems',
                  color: 'purple-500',
                  description: 'Advanced research and innovative solutions in this domain'
                },
                {
                  title: 'Communication, Networks & Cyber Security',
                  color: 'red-500',
                  description: 'Advanced research and innovative solutions in this domain'
                },
                {
                  title: 'Computer Vision and Augmented Reality & Virtual Reality',
                  color: 'orange-500',
                  description: 'Advanced research and innovative solutions in this domain'
                },
                {
                  title: 'Multidisciplinary Applications based on AI/ML and Soft Computing',
                  color: 'teal-500',
                  description: 'Healthcare & Life Sciences, Manufacturing & Industry 4.0, Transportation & Logistics, Agriculture, Energy & Environment'
                },
                {
                  title: 'Indian Knowledge Systems',
                  color: 'indigo-500',
                  description: 'Advanced research and innovative solutions in this domain'
                }
              ].map((track, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-lg p-6 border-l-4 hover:shadow-xl transition-shadow ${index === 6 ? 'lg:col-start-2' : ''}`} style={{borderLeftColor: `var(--tw-${track.color})`}}>
                  <h3 className={`text-xl font-bold mb-4 text-${track.color}`}>{track.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{track.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{pageData.dates_title}</h2>
              <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">{pageData.dates_subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-l-4 border-blue-600 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-blue-600 text-sm font-bold uppercase tracking-wide mb-2">{pageData.date_submission_label}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pageData.date_submission_title}</h3>
                    <p className="text-gray-600 text-sm">Final date for paper submission</p>
                  </div>
                  <div className="bg-blue-600 text-white rounded-xl px-4 py-2 font-bold text-lg ml-4">
                    {pageData.date_submission_date}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-l-4 border-purple-600 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-purple-600 text-sm font-bold uppercase tracking-wide mb-2">{pageData.date_notification_label}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pageData.date_notification_title}</h3>
                    <p className="text-gray-600 text-sm">Authors will be notified</p>
                  </div>
                  <div className="bg-purple-600 text-white rounded-xl px-4 py-2 font-bold text-lg ml-4">
                    {pageData.date_notification_date}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border-l-4 border-orange-600 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-orange-600 text-sm font-bold uppercase tracking-wide mb-2">{pageData.date_camera_label}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pageData.date_camera_title}</h3>
                    <p className="text-gray-600 text-sm">Submit final version</p>
                  </div>
                  <div className="bg-orange-600 text-white rounded-xl px-4 py-2 font-bold text-lg ml-4">
                    {pageData.date_camera_date}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-l-4 border-green-600 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-green-600 text-sm font-bold uppercase tracking-wide mb-2">{pageData.date_conference_label}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pageData.date_conference_title}</h3>
                    <p className="text-gray-600 text-sm">{pageData.date_conference_date} (Hybrid)</p>
                  </div>
                  <div className="bg-green-600 text-white rounded-xl px-4 py-2 font-bold text-lg ml-4">
                    {pageData.date_conference_date}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Link 
                href="/dates" 
                className="inline-flex items-center bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition shadow-xl transform hover:scale-105"
              >
                View All Dates
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight !text-white">
              {pageData.cta_title}
            </h2>
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed">
              {pageData.cta_subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                href="/authors/submission" 
                className="inline-flex items-center justify-center bg-white text-blue-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-2xl transform hover:scale-105"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                </svg>
                Submit Paper
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-transparent border-3 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition shadow-2xl transform hover:scale-105"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                Contact Us
              </Link>
            </div>
            
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">{pageData.cta_expected_papers}</div>
                <div className="text-blue-200 uppercase tracking-wide text-sm">Expected Papers</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">{pageData.cta_countries}</div>
                <div className="text-blue-200 uppercase tracking-wide text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">{pageData.cta_participants}</div>
                <div className="text-blue-200 uppercase tracking-wide text-sm">Participants</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide" style={{color: '#C2185B'}}>{pageData.join_title}</h2>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-yellow-500">
              <h3 className="text-2xl font-bold text-yellow-600 mb-6">{pageData.join_subtitle}</h3>
              <p className="text-gray-700 leading-relaxed text-justify text-lg">
                {pageData.join_content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAI Series Legacy Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide" style={{color: '#C2185B'}}>{pageData.mai_title}</h2>
            </div>
            
            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-all">
                <div className="text-5xl font-bold text-gray-800 mb-3">{pageData.mai_papers_count}</div>
                <div className="h-1 w-16 bg-pink-600 mx-auto mb-4"></div>
                <h4 className="text-xl font-bold mb-2" style={{color: '#C2185B'}}>Research Paper</h4>
                <p className="text-gray-600">Submissions</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-all">
                <div className="text-5xl font-bold text-gray-800 mb-3">{pageData.mai_talks_count}</div>
                <div className="h-1 w-16 bg-pink-600 mx-auto mb-4"></div>
                <h4 className="text-xl font-bold mb-2" style={{color: '#C2185B'}}>Research Talks</h4>
                <p className="text-gray-600">Presentations</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-all">
                <div className="text-5xl font-bold text-gray-800 mb-3">184+</div>
                <div className="h-1 w-16 bg-pink-600 mx-auto mb-4"></div>
                <h4 className="text-xl font-bold mb-2" style={{color: '#C2185B'}}>Expert Talks</h4>
                <p className="text-gray-600">Speakers</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-all">
                <div className="text-5xl font-bold text-gray-800 mb-3">423+</div>
                <div className="h-1 w-16 bg-pink-600 mx-auto mb-4"></div>
                <h4 className="text-xl font-bold mb-2" style={{color: '#C2185B'}}>Attendees</h4>
                <p className="text-gray-600">Participation</p>
              </div>
            </div>
            
            {/* Timeline */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { year: '2021', edition: 'MAI-2021', venue: 'IIITDM Jabalpur' },
                { year: '2022', edition: 'MAI-2022', venue: 'NIT Jamshedpur' },
                { year: '2023', edition: 'MAI-2023', venue: 'NIT Patna' },
                { year: '2024', edition: 'MAI-2024', venue: 'MANIT Bhopal' },
                { year: '2025', edition: 'MAI-2025', venue: 'MMMUT Gorakhpur' },
                { year: '2026', edition: 'ICCET-2026', venue: 'DVCOE, PUNE' }
              ].map((event, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all">
                  <div className="text-4xl font-bold text-gray-700 mb-3">{event.year}</div>
                  <div className="h-1 w-12 bg-pink-600 mx-auto mb-4"></div>
                  <h4 className="text-lg font-bold mb-2" style={{color: '#C2185B'}}>{event.edition}</h4>
                  <p className="text-gray-600 text-sm">{event.venue}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About the Host Institute Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Map header */}
            <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.236842485476!2d73.88024342552494!3d18.67019877240876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c9e0e974a4f7%3A0x6fe8fd8f59c1dd83!2sDnyanvilas%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1710955200000" 
                width="100%" 
                height="300" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy"
                title="Dnyanvilas College of Engineering Location Map"
              ></iframe>
            </div>
            
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide" style={{color: '#C2185B'}}>About the Host Institute</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Logo */}
              <div className="flex items-center justify-center lg:col-span-1">
                <div className="w-96 h-96 relative">
                  <Image 
                    src="/DVCOE.png"
                    alt="DVCOE Logo" 
                    width={384}
                    height={384}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Shri Gajanan Maharaj Shikshan Prasarak Mandal&rsquo;s
                  </h3>
                  <h2 className="text-4xl font-bold text-gray-900">
                    Dnyanvilas College of Engineering, Pune (DVCOE)
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Dnyanvilas College of Engineering (DVCOE), established under Shri Gajanan Maharaj Shikshan Prasarak Mandal (SGMSPM), is a forward-looking institution located in Dudulgaon, Alandi, Pune. It is committed to delivering value-based, innovation-driven technical education to students from diverse backgrounds.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  The college offers undergraduate programs in Artificial Intelligence & Machine Learning, Computer Engineering, Information Technology, and Electronics & Telecommunication Engineering. DVCOE is approved by AICTE and DTE, Government of Maharashtra, and is affiliated with Dr. Babasaheb Ambedkar Technological University (DBATU), ensuring academic credibility and a standardized curriculum.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  With modern infrastructure, advanced labs, digital learning resources, and a strong focus on research and entrepreneurship, DVCOE provides a dynamic, student-centric environment that nurtures skilled engineers and future-ready professionals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://dvcoe.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gray-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-900 transition shadow-lg"
                  >
                    Visit Official Website
                  </a>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Engineering Excellence</h4>
                  <p className="text-gray-700">
                    DVCOE is the proud host of ICCET-2026, fostering innovation and excellence in engineering education and research across all disciplines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
