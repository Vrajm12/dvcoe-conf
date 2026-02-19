const cfp = {
  page_title: "Call for Papers",
  conference_tracks: [
    "AI, ML & Computational Techniques",
    "Signal & Image Processing",
    "Cyber-Physical Systems",
    "Multidisciplinary Applications based on AI/ML and Soft Computing",
    "Communication, Networks & Cyber Security",
    "Computer Vision and Augmented Reality & Virtual Reality"
  ],
  topics_covered: [
    "Robotics & Artificial Intelligence",
    "Human–Robot Interaction",
    "Internet of Things (IoT)",
    "Image Processing & Computer Vision",
    "Augmented Intelligence: Theory & Applications",
    "Soft Computing: Theory & Applications",
    "Deep Learning: Theory & Applications",
    "AR/VR in Industry, Education, and Healthcare",
    "AI in Healthcare, Smart Cities, and Agriculture",
    "Image Recognition & Disease Modeling",
    "Epidemic Forecasting",
    "Brain–Computer Interfaces & Human–Machine Interaction",
    "Cyber Security & Social Network Analysis",
    "Natural Language Processing (NLP)",
    "Cryptography & Image Security",
    "Cyber-Physical Systems"
  ],
  submission_guidelines: [
    "Authors are invited to submit the papers (in English) by 30th May 2026. The abstract should not be more than 400 words (including spaces) and can include a maximum of 6 relevant keywords. The templates and instructions for abstract and paper submission are available on the conference website. The technical program will include oral and poster presentations and the form of presentation for each paper will be decided by the committee upon receipt of the final version.",
    "Kindly follow the Springer LNEE prescribed format before submission. Author Instructions: The authors are requested to submit full papers according to Springer LNEE format available on the Springer site. Authors are kindly invited to submit their formatted full papers including results, tables, figures and references.",
    "All submissions are handled through: https://cmt3.research.microsoft.com/MVAI2026",
    "Accepted papers are to be registered and presented; otherwise, the paper will be removed from the proceedings. Abstracts/extended abstracts and short papers (less than 4 pages) are not considered for publication."
  ],
  download_resources: [
    { text: "Call for Papers (PDF)", link: "pdf/cfp.pdf" },
    { text: "Paper Submission Portal", link: "https://cmt3.research.microsoft.com/MVAI2026" },
    { text: "Springer Template", link: "pdf/MAI-2026_Template.doc" },
    { text: "Consent Form for Publication", link: "pdf/Consent form for publication.docx" },
    { text: "LNEE Documentation", link: "https://link.springer.com/series/7818" },
    { text: "Quick Start Guide", link: "pdf/Quick Start.pdf" }
  ],
  submission_portal: "https://cmt3.research.microsoft.com/MVAI2026"
};

export default function CallForPapers() {
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">{cfp.page_title}</h1>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">About</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The International Conference on Machine Vision and Augmented Intelligence (MAI-2026)
              invites original research papers, review papers, and case studies in all areas of
              machine vision, computer vision, artificial intelligence, and related fields.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We welcome contributions that present novel ideas, methodologies, and applications
              in these rapidly evolving domains.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Conference Tracks</h2>
            <div className="flex flex-wrap gap-2">
              {cfp.conference_tracks.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-sm">{t}</span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Topics of Interest</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cfp.topics_covered.map((topic, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span className="text-gray-700">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Submission Guidelines</h2>
            <ul className="space-y-4 text-gray-700">
              {cfp.submission_guidelines.map((g, i) => (
                <li key={i} className="flex items-start">
                  <span className="font-semibold text-blue-900 mr-3 min-w-[30px]">{i + 1}.</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Download Resources</h2>
            <ul className="space-y-2">
              {cfp.download_resources.map((r, i) => (
                <li key={i}>
                  <a href={r.link} className="text-blue-600 hover:underline" target={r.link.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">
                    {r.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Submit?</h2>
            <p className="mb-6">Submit your research paper through our submission portal</p>
            <a href={cfp.submission_portal} target="_blank" rel="noreferrer" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Go to Submission Portal
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
