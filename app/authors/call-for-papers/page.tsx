import { getPageContent } from '@/lib/content';

interface AuthorsCallForPapersContent {
  page_title: string;
  conference_tracks: string[];
  submission_portal: string;
}

const defaultContent: AuthorsCallForPapersContent = {
  page_title: "Call for Papers",
  conference_tracks: [
    "Track 1: Signal Processing",
    "Track 2: Next-Generation Communication Networks",
    "Track 3: Intelligent Computing",
    "Track 4: Cognitive Robotics",
    "Track 5: Advanced Analytics & AI Integration",
    "Track 6: Smart Energy Technologies",
    "Track 7: Instrumentation for Smart Systems",
    "Track 8: RF Engineering",
    "Track 9: Indian Knowledge Systems (IKS)"
  ],
  submission_portal: "https://cmt3.research.microsoft.com/MVAI2026"
};

export default async function CallForPapers() {
  const cmsContent = await getPageContent<AuthorsCallForPapersContent>('authors-call-for-papers');
  const cfp = cmsContent ?? defaultContent;

  const trackDetails: { [key: string]: string } = {
    "Track 1: Signal Processing": "Speech & Audio Processing • Image & Video Processing • Remote Sensing • Multidimensional & Multirate Processing • Wavelets & Filter Banks • Nonlinear Signal Processing • Biomedical Signal Processing • Pattern Recognition • Computer Vision • Sensors & Sensing Technologies",
    "Track 2: Next-Generation Communication Networks": "Antennas & Propagation • Cognitive Radio & Networking • MIMO & Space-Time Coding • Secure Communications & Cryptography • IoT & Sensor Networks • Mobile & Wireless Networks • Optical & Satellite Communications • Smart Grid Communication • Ad Hoc Networks • Network Security • Green Communications • Resource Management & Scheduling",
    "Track 3: Intelligent Computing": "Data Mining & Databases • Distributed Systems • Search Optimization • Software Engineering & Project Management • High Performance & Parallel Computing • Big Data Analytics • Cloud & Data Center Architectures • GPU & Accelerator Computing • Scientific & Industrial Applications • Programming Environments",
    "Track 4: Cognitive Robotics": "Autonomous & Intelligent Systems • Human–Robot Interaction • Industrial Automation • Drone & Surveillance Systems • Navigation & Control • Mechatronics • Network Robotics • Virtual & Augmented Reality • Telerobotics • Robotics Design & Applications",
    "Track 5: Advanced Analytics & AI Integration": "Machine Learning & Deep Learning • Data Analytics & Big Data • NLP & Information Retrieval • Healthcare Analytics • Statistical Learning • Scalable AI Systems • Privacy & Security in Data • AI-Driven Digital Solutions",
    "Track 6: Smart Energy Technologies": "Smart Cities & Infrastructure • Sustainable Energy Systems • Intelligent Transportation • Urban Planning & Mobility • Smart Buildings & Homes • Energy Efficiency • Smart Environment & Ecosystems • Emergency Management Systems",
    "Track 7: Instrumentation for Smart Systems": "Control Systems & Automation • Aerospace & Flight Systems • Intelligent Instrumentation • Process Control • Optimization Techniques • Predictive & Nonlinear Control • Micro/Nano Instrumentation • Advanced Measurement Technologies",
    "Track 8: RF Engineering": "Semiconductor Technologies (CMOS, GaN, SiGe) • RF Modeling & Simulation • Antennas & Passive Devices • RFIC Design (VCOs, PLLs, Mixers) • Power Amplifiers • mmWave & THz Circuits",
    "Track 9: Indian Knowledge Systems (IKS)": "Astronomy and Engineering • Mathematics • Metallurgy & Chemistry • Architecture • IKS-Based Education & Scientific Traditions"
  };

  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">{cfp.page_title}</h1>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">About</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The 9th International Conference on Computing in Engineering and Technology (ICCET-2026) cordially invites the submission of high-quality original research papers, comprehensive review articles, and insightful case studies in the broad domains of Engineering, Technology and allied interdisciplinary fields.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The conference aims to provide a vibrant platform for researchers, academicians, industry professionals, and practitioners to present and exchange innovative ideas, emerging methodologies, and cutting edge applications that address real-world challenges. We particularly encourage contributions that demonstrate theoretical advancements, practical implementations, experimental validations, and cross-disciplinary approaches in these rapidly evolving and impactful areas.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Submissions highlighting novel algorithms, intelligent systems, data driven models, and transformative applications across domains such as healthcare, agriculture, smart cities, autonomous systems, and industrial automation are especially welcome. ICCET-2026 aspires to foster collaboration, promote knowledge sharing, and contribute to the advancement of next-generation technologies shaping the future.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Conference Tracks</h2>
            <div className="space-y-4">
              {cfp.conference_tracks.map((track, idx) => (
                <div key={idx} className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{track}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {trackDetails[track] || "Details coming soon"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>Ready to Submit?</h2>
            <p className="mb-6" style={{ color: '#ffffff' }}>Submit your research paper through our submission portal</p>
            <a href={cfp.submission_portal} target="_blank" rel="noreferrer" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Go to Submission Portal
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
