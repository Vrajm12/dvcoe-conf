import Link from 'next/link';
import Image from 'next/image';
import { getPageContent } from '@/lib/content';
import { FaMapPin, FaCalendar, FaBuilding, FaGlobe, FaBook, FaMicrophone, FaHandshake } from 'react-icons/fa';

interface HomePageContent {
  [key: string]: string | undefined;
  hero_title?: string;
  hero_subtitle?: string;
  hero_tagline?: string;
  hero_event_type?: string;
  hero_background?: string;
  hero_hosted_by?: string;
}

export default async function Home() {
  const pageData = await getPageContent<HomePageContent>('home');

  if (!pageData) {
    return <div>Error loading page content</div>;
  }

  return (
    <main className="min-h-screen">
      {/* PROFESSIONAL HERO SECTION - Clean & Minimal */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Subtle background particles/tech pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
              
              {/* LEFT SECTION - Content & Logos & CTAs */}
              <div className="space-y-6 md:space-y-8">
                {/* Headline - Large, Bold, High Contrast */}
                <div>
                <p className="text-sm md:text-lg font-semibold text-yellow-400 mb-3 md:mb-4 uppercase tracking-wider">
                  9th International Conference
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 md:mb-6" style={{color: '#ffffff'}}>
                  International Conference on Computing in Engineering & Technology
                </h1>
                <p className="text-base md:text-xl text-blue-100 font-medium leading-relaxed">
                  Join 1,000+ researchers, academics, and innovators from 50+ countries for the 9th International Conference on Computing & Technology.
                </p>
              </div>

                {/* Host Organization Logos */}
                <div className="space-y-3 md:space-y-4">
                  <p className="text-blue-300 text-xs md:text-sm font-semibold uppercase tracking-wider">Affiliated With</p>
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="h-20 w-20 md:h-26 md:w-26 relative bg-white rounded-full p-2 md:p-3 flex items-center justify-center shadow-lg">
                      <Image 
                        src="/dbatu-logo.png"
                        alt="DBATU Logo"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="h-20 w-20 md:h-26 md:w-26 relative bg-white rounded-full p-2 md:p-3 flex items-center justify-center shadow-lg">
                      <Image 
                        src="/DVCOE.png"
                        alt="DVCOE Logo"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </div>
                </div>

                {/* CTA Buttons - Consistent, Professional */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
                  <Link 
                    href="/authors/submission" 
                    className="bg-yellow-500 text-slate-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-sm md:text-lg hover:bg-yellow-400 transition-all duration-200 transform hover:shadow-lg text-center"
                  >
                    Submit Paper
                  </Link>
                  <Link 
                    href="/registration/delegate" 
                    className="bg-white text-slate-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-sm md:text-lg hover:bg-blue-100 transition-all duration-200 transform hover:shadow-lg text-center"
                  >
                    Register Now
                  </Link>
                </div>
              </div>

              {/* RIGHT SECTION - Event Details Block */}
              <div className="mt-8 lg:mt-0 lg:flex items-center justify-center">
                <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-700/40 rounded-lg p-6 md:p-8 w-full space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <FaMapPin className="text-yellow-400 text-lg md:text-xl mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-xs md:text-sm text-blue-300 font-semibold uppercase tracking-wide">Location</div>
                      <div className="text-base md:text-lg text-white font-semibold">Pune, Maharashtra, India</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <FaCalendar className="text-yellow-400 text-lg md:text-xl mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-xs md:text-sm text-blue-300 font-semibold uppercase tracking-wide">Dates</div>
                      <div className="text-base md:text-lg text-white font-semibold">July 30–31, 2026</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <FaBuilding className="text-yellow-400 text-lg md:text-xl mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-xs md:text-sm text-blue-300 font-semibold uppercase tracking-wide">Organized By</div>
                      <div className="text-base md:text-lg text-white font-semibold">Dr. Babsaheb Ambedkar Technological University, Lonere</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <FaBuilding className="text-yellow-400 text-lg md:text-xl mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-xs md:text-sm text-blue-300 font-semibold uppercase tracking-wide">Hosted By</div>
                      <div className="text-base md:text-lg text-white font-semibold">{pageData.hero_hosted_by || 'Dnyanvilas College of Engineering (DVCOE), Pune'}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <FaGlobe className="text-yellow-400 text-lg md:text-xl mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-xs md:text-sm text-blue-300 font-semibold uppercase tracking-wide">Conference Mode</div>
                      <div className="text-base md:text-lg text-white font-semibold">HYBRID</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* WHY ICCET 2026 SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 md:mb-6">
                Why ICCET 2026?
              </h2>
              <div className="h-1 w-24 md:w-32 bg-yellow-400 mx-auto"></div>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Card 1 - Global Exposure */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl md:rounded-2xl p-6 md:p-8 border border-blue-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl md:text-5xl mb-4 md:mb-6 text-blue-600"><FaGlobe /></div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Global Exposure</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Reach an international audience of 1,000+ researchers, academics, and industry professionals from across the globe.
                </p>
              </div>

              {/* Card 2 - Indexed Publications */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl md:rounded-2xl p-6 md:p-8 border border-yellow-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl md:text-5xl mb-4 md:mb-6 text-yellow-600"><FaBook /></div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Indexed Publications</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Your research published in IEEE and Scopus indexed proceedings, ensuring maximum visibility and impact.
                </p>
              </div>

              {/* Card 3 - Expert Speakers */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl md:rounded-2xl p-6 md:p-8 border border-purple-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl md:text-5xl mb-4 md:mb-6 text-purple-600"><FaMicrophone /></div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Expert Speakers</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Learn from keynote speakers and invited experts leading innovation in computing and technology fields.
                </p>
              </div>

              {/* Card 4 - Networking Opportunities */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl md:rounded-2xl p-6 md:p-8 border border-teal-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl md:text-5xl mb-4 md:mb-6 text-teal-600"><FaHandshake /></div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Networking Opportunities</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Build lasting professional connections and collaborations with peers, mentors, and potential research partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* About the Conference Section */}


      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 uppercase tracking-wide" style={{color: '#C2185B'}}>{pageData.about_title}</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* About Conference */}
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-l-4 border-yellow-500">
                <h3 className="text-xl md:text-2xl font-bold text-yellow-600 mb-4 md:mb-6">{pageData.about_conference_title}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                  {pageData.about_conference_content}
                </p>
              </div>
              
              {/* Objectives */}
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-l-4 border-teal-500">
                <h3 className="text-xl md:text-2xl font-bold text-teal-600 mb-4 md:mb-6">{pageData.about_objectives_title}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                  {pageData.about_objectives_content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acknowledgement Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 uppercase tracking-wide" style={{color: '#C2185B'}}>{pageData.acknowledgement_title}</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Microsoft CMT Support */}
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-l-4 border-yellow-500">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6">{pageData.acknowledgement_microsoft_title}</h3>
                <div className="mb-4 md:mb-6 bg-blue-500 inline-block px-4 md:px-6 py-2 md:py-3 rounded">
                  <span className="text-white font-bold text-2xl md:text-3xl">CMT</span>
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                  {pageData.acknowledgement_microsoft_content}
                </p>
              </div>
              
              {/* IET/IEEE Publication */}
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-l-4 border-teal-500">
                <h3 className="text-xl md:text-2xl font-bold text-teal-600 mb-4 md:mb-6">{pageData.acknowledgement_springer_title}</h3>
                <div className="mb-4 md:mb-6 h-16 md:h-20 flex items-center justify-center gap-4 md:gap-6">
                  <Image 
                    src="/iet-logo.png"
                    alt="IET Logo" 
                    width={120}
                    height={80}
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                  <Image 
                    src="/ieee-logo.png"
                    alt="IEEE Logo" 
                    width={120}
                    height={80}
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
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
                <div className="text-center mb-6 space-y-4">
                  <div className="flex items-center justify-center gap-4">
                    <Image 
                      src="/iet-logo.png"
                      alt="IET Logo" 
                      width={100}
                      height={80}
                      className="h-20 w-auto object-contain"
                    />
                    <Image 
                      src="/ieee-logo.png"
                      alt="IEEE Logo" 
                      width={100}
                      height={80}
                      className="h-20 w-auto object-contain"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">IET/IEEE Publication</h4>
                  <p className="text-gray-600">Professional Engineering Community</p>
                </div>
              </div>
              
              {/* Indexing Badges */}
              <div className="space-y-4">
                <div className="bg-blue-500 text-white rounded-lg px-8 py-6 text-center shadow-lg">
                  <h4 className="text-2xl font-bold">Professional Indexed</h4>
                </div>
                <div className="bg-blue-500 text-white rounded-lg px-8 py-6 text-center shadow-lg">
                  <h4 className="text-2xl font-bold">Engineering Recognized</h4>
                </div>
                <div className="bg-blue-500 text-white rounded-lg px-8 py-6 text-center shadow-lg">
                  <h4 className="text-2xl font-bold">Quality Assured</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publication & Indexing Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 uppercase tracking-wide" style={{color: '#C2185B'}}>{pageData.publication_indexing_title}</h2>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-l-4 border-yellow-500">
              <h3 className="text-xl md:text-2xl font-bold text-yellow-600 mb-4 md:mb-6">{pageData.publication_indexing_subtitle}</h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                {pageData.publication_indexing_content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Tracks Section - Moved from below */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 uppercase tracking-wide" style={{color: '#C2185B'}}>Conference Tracks</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  title: 'Track 1: Signal Processing',
                  color: 'blue-500',
                  description: 'Speech & Audio Processing • Image & Video Processing • Remote Sensing • Multidimensional & Multirate Processing • Wavelets & Filter Banks • Nonlinear Signal Processing • Biomedical Signal Processing • Pattern Recognition • Computer Vision • Sensors & Sensing Technologies'
                },
                {
                  title: 'Track 2: Next-Generation Communication Networks',
                  color: 'blue-600',
                  description: 'Antennas & Propagation • Cognitive Radio & Networking • MIMO & Space-Time Coding • Secure Communications & Cryptography • IoT & Sensor Networks • Mobile & Wireless Networks • Optical & Satellite Communications • Smart Grid Communication • Ad Hoc Networks • Network Security • Green Communications • Resource Management & Scheduling'
                },
                {
                  title: 'Track 3: Intelligent Computing',
                  color: 'indigo-500',
                  description: 'Data Mining & Databases • Distributed Systems • Search Optimization • Software Engineering & Project Management • High Performance & Parallel Computing • Big Data Analytics • Cloud & Data Center Architectures • GPU & Accelerator Computing • Scientific & Industrial Applications • Programming Environments'
                },
                {
                  title: 'Track 4: Cognitive Robotics',
                  color: 'purple-500',
                  description: 'Autonomous & Intelligent Systems • Human–Robot Interaction • Industrial Automation • Drone & Surveillance Systems • Navigation & Control • Mechatronics • Network Robotics • Virtual & Augmented Reality • Telerobotics • Robotics Design & Applications'
                },
                {
                  title: 'Track 5: Advanced Analytics & AI Integration',
                  color: 'cyan-500',
                  description: 'Machine Learning & Deep Learning • Data Analytics & Big Data • NLP & Information Retrieval • Healthcare Analytics • Statistical Learning • Scalable AI Systems • Privacy & Security in Data • AI-Driven Digital Solutions'
                },
                {
                  title: 'Track 6: Smart Energy Technologies',
                  color: 'green-500',
                  description: 'Smart Cities & Infrastructure • Sustainable Energy Systems • Intelligent Transportation • Urban Planning & Mobility • Smart Buildings & Homes • Energy Efficiency • Smart Environment & Ecosystems • Emergency Management Systems'
                },
                {
                  title: 'Track 7: Instrumentation for Smart Systems',
                  color: 'yellow-500',
                  description: 'Control Systems & Automation • Aerospace & Flight Systems • Intelligent Instrumentation • Process Control • Optimization Techniques • Predictive & Nonlinear Control • Micro/Nano Instrumentation • Advanced Measurement Technologies'
                },
                {
                  title: 'Track 8: RF Engineering',
                  color: 'orange-500',
                  description: 'Semiconductor Technologies (CMOS, GaN, SiGe) • RF Modeling & Simulation • Antennas & Passive Devices • RFIC Design (VCOs, PLLs, Mixers) • Power Amplifiers • mmWave & THz Circuits'
                },
                {
                  title: 'Track 9: Indian Knowledge Systems (IKS)',
                  color: 'red-500',
                  description: 'Astronomy and Engineering • Mathematics • Metallurgy & Chemistry • Architecture • IKS-Based Education & Scientific Traditions'
                }
              ].map((track, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-4 md:p-6 border-l-4 hover:shadow-xl transition-shadow" style={{borderLeftColor: `var(--tw-${track.color})`}}>
                  <h3 className={`text-base md:text-lg font-bold mb-3 md:mb-4 text-${track.color}`}>{track.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{track.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">{pageData.dates_title}</h2>
              <div className="h-1 w-20 md:w-24 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
              <p className="text-base md:text-xl text-gray-600">{pageData.dates_subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg md:rounded-2xl p-4 md:p-8 border-l-4 border-blue-600 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="text-blue-600 text-xs md:text-sm font-bold uppercase tracking-wide mb-2">{pageData.date_submission_label}</div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{pageData.date_submission_title}</h3>
                    <p className="text-black text-xs md:text-sm">Final date for paper submission</p>
                  </div>
                  <div className="bg-blue-600 text-white rounded-lg px-3 md:px-4 py-2 font-bold text-base md:text-lg mt-3 md:mt-0 md:ml-4 text-center">
                    {pageData.date_submission_date}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg md:rounded-2xl p-4 md:p-8 border-l-4 border-purple-600 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="text-purple-600 text-xs md:text-sm font-bold uppercase tracking-wide mb-2">{pageData.date_notification_label}</div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{pageData.date_notification_title}</h3>
                    <p className="text-gray-600 text-xs md:text-sm">Authors will be notified</p>
                  </div>
                  <div className="bg-purple-600 text-white rounded-lg px-3 md:px-4 py-2 font-bold text-base md:text-lg mt-3 md:mt-0 md:ml-4 text-center">
                    {pageData.date_notification_date}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg md:rounded-2xl p-4 md:p-8 border-l-4 border-orange-600 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="text-orange-600 text-xs md:text-sm font-bold uppercase tracking-wide mb-2">{pageData.date_camera_label}</div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{pageData.date_camera_title}</h3>
                    <p className="text-gray-600 text-xs md:text-sm">Submit final version</p>
                  </div>
                  <div className="bg-orange-600 text-white rounded-lg px-3 md:px-4 py-2 font-bold text-base md:text-lg mt-3 md:mt-0 md:ml-4 text-center">
                    {pageData.date_camera_date}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg md:rounded-2xl p-4 md:p-8 border-l-4 border-green-600 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="text-green-600 text-xs md:text-sm font-bold uppercase tracking-wide mb-2">{pageData.date_conference_label}</div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{pageData.date_conference_title}</h3>
                    <p className="text-gray-600 text-xs md:text-sm">{pageData.date_conference_date} (Hybrid)</p>
                  </div>
                  <div className="bg-green-600 text-white rounded-lg px-3 md:px-4 py-2 font-bold text-base md:text-lg mt-3 md:mt-0 md:ml-4 text-center">
                    {pageData.date_conference_date}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 md:mt-10 text-center">
              <Link 
                href="/dates" 
                className="inline-flex items-center bg-yellow-400 text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-sm md:text-lg hover:bg-yellow-300 transition shadow-lg md:shadow-xl transform hover:scale-105"
              >
                View All Dates
                <svg className="w-4 md:w-5 h-4 md:h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-48 md:w-72 h-48 md:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-4 w-48 md:w-72 h-48 md:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-48 md:w-72 h-48 md:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight !text-white">
              {pageData.cta_title}
            </h2>
            <div className="h-1 w-20 md:w-24 bg-yellow-400 mx-auto mb-6 md:mb-8"></div>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-blue-100 leading-relaxed">
              {pageData.cta_subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <Link 
                href="/authors/submission" 
                className="inline-flex items-center justify-center bg-white text-blue-900 px-6 md:px-10 py-3 md:py-5 rounded-lg md:rounded-xl font-bold text-sm md:text-lg hover:bg-gray-100 transition shadow-lg md:shadow-2xl transform hover:scale-105"
              >
                <svg className="w-5 md:w-6 h-5 md:h-6 mr-2 md:mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                </svg>
                Submit Paper
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-transparent border-2 md:border-3 border-white text-white px-6 md:px-10 py-3 md:py-5 rounded-lg md:rounded-xl font-bold text-sm md:text-lg hover:bg-white hover:text-blue-900 transition shadow-lg md:shadow-2xl transform hover:scale-105"
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
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 uppercase tracking-wide" style={{color: '#C2185B'}}>{pageData.join_title}</h2>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-l-4 border-yellow-500">
              <h3 className="text-xl md:text-2xl font-bold text-yellow-600 mb-4 md:mb-6">{pageData.join_subtitle}</h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                {pageData.join_content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historical & Tourist Places Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4 uppercase tracking-wide" style={{color: '#C2185B'}}>Explore Pune & Raigad</h2>
              <p className="text-base md:text-xl text-gray-600">Historical and Tourist Attractions</p>
            </div>
            
            {/* Tourist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { name: 'Shaniwar Wada', location: 'Pune', gmapLink: 'https://maps.google.com/?q=Shaniwar+Wada+Pune', description: 'Historic fortified palace and seat of the Peshwas', image: '/shaniwar-wada.jpg' },
                { name: 'Aga Khan Palace', location: 'Pune', gmapLink: 'https://maps.google.com/?q=Aga+Khan+Palace+Pune', description: 'Architectural marvel and historical prison', image: '/aga-khan-palace.jpg' },
                { name: 'Chaturshringi Temple', location: 'Pune', gmapLink: 'https://maps.google.com/?q=Chaturshringi+Temple+Pune', description: 'Ancient mountaintop temple with panoramic views', image: '/chaturshingi-temple.jpg' },
                { name: 'Pataleshwar Cave Temple', location: 'Pune', gmapLink: 'https://maps.google.com/?q=Pataleshwar+Cave+Temple+Pune', description: 'Ancient rock-cut cave temple', image: '/pataleshwar-cave-temple.jpg' },
                { name: 'Raigad Fort', location: 'Raigad', gmapLink: 'https://maps.google.com/?q=Raigad+Fort+Raigad', description: 'Historic hill fortress and capital of Shivaji', image: '/raigad-fort.jpg' },
                { name: 'Kondana Caves', location: 'Raigad', gmapLink: 'https://maps.google.com/?q=Kondana+Caves+Raigad', description: 'Ancient Buddhist caves with stunning carvings', image: '/kondana-caves.jpg' },
                { name: 'Torna Fort', location: 'Raigad', gmapLink: 'https://maps.google.com/?q=Torna+Fort+Raigad', description: 'Scenic hilltop fortress with historical significance', image: '/torna-fort.jpg' },
                { name: 'Khandoba Temple', location: 'Raigad', gmapLink: 'https://maps.google.com/?q=Khandoba+Temple+Raigad', description: 'Ancient deity shrine with cultural importance', image: '/khandoba-temple.jpg' }
              ].map((place, index) => (
                <div key={index} className="bg-white rounded-lg md:rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-40 md:h-48 bg-gradient-to-br from-pink-400 to-pink-600 flex-shrink-0 overflow-hidden group-hover:from-pink-500 group-hover:to-pink-700 transition-all">
                    <Image 
                      src={place.image}
                      alt={place.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      priority={false}
                    />
                    {/* Fallback Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  </div>
                  
                  {/* Content Container */}
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2 md:mb-3">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 flex-grow">{place.name}</h3>
                      <span className="text-xs font-bold text-white bg-pink-600 px-2 md:px-2.5 py-1 rounded-full flex-shrink-0 ml-2">{place.location}</span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-xs md:text-sm mb-4 md:mb-6 flex-grow">{place.description}</p>
                    
                    {/* Button (always at bottom) */}
                    <a 
                      href={place.gmapLink}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full bg-blue-900 px-3 md:px-4 py-2 md:py-2.5 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-700 transition transform hover:scale-105"
                      style={{ color: '#ffffff' }}
                    >
                      <FaMapPin className="mr-1 md:mr-2" style={{ color: '#ffffff' }} /> View on Google Maps
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* About Host University Section (cloned style) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide" style={{color: '#C2185B'}}>About the Host University</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Logo */}
              <div className="flex items-center justify-center lg:col-span-1">
                <div className="w-64 h-64 relative">
                  <Image 
                    src="/dbatu-logo.jpeg"
                    alt="DBATU Logo" 
                    width={256}
                    height={256}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </div>
              {/* Content */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900">
                    Dr. Babasaheb Ambedkar Technological University, Lonere-Raigad
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Dr. Babasaheb Ambedkar Technological University was established by the Government of Maharashtra vide Dr. Babasaheb Ambedkar Technological University Act. No. XXII of 1989 as a Unitary University. Later, the Government of Maharashtra converted this University to the Affiliating Technological University since 2016 vide Dr. Babasaheb Ambedkar Technological University Act No. XXIX of 2014 with the jurisdiction of the University as the entire state of Maharashtra. Presently 416 institutes are affiliated with the University and the total student strength is 2.5 Lakh+.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  The sprawling 468 acres of the campus of this University provides as a sanctum seat of learning across the state. The University attracts meritorious students from the entire state and molds them into employable engineers and competent technocrats. This University provides well-equipped laboratories with testing and analysis facilities that can be extended for the benefit of the industries. In addition, the University offers facilities like conference hall, auditorium, playground, workshop, and computing facilities. The University has spacious and good hostels with all basic amenities.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  The University is blessed with highly qualified faculty members who are committed to impart the best kind of knowledge through an effective teaching-learning process. The faculty and staff of the University believe that achieving excellence is a challenging task and they continuously strive for it. University also provides a conducive environment and opportunities to the students for research and innovation which leads to creating entrepreneurs. The University is empowered to affiliate Institutions that offer UG, PG, and Ph.D. level programs in the disciplines of Engineering, Pharmacy, Architecture, and Hotel Management & Catering Technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://dbatu.ac.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition shadow-lg"
                    style={{ color: '#ffffff' }}
                  >
                    Visit Official Website
                  </a>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">University Excellence</h4>
                  <p className="text-gray-700">
                    DBATU is the proud affiliating university for ICCET-2026, fostering innovation and excellence in engineering education and research across all disciplines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Host Institute Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide" style={{color: '#C2185B'}}>About the Conference</h2>
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
                    className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition shadow-lg"
                    style={{ color: '#ffffff' }}
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
