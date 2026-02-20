const submission = {
  page_title: "Paper Submission",
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
    { text: "Quick Start Guide", link: "pdf/Quick Start.pdf" },
    { text: "SPLNPROC Technical Instructions (Word 2010-2016)", link: "pdf/SPLNPROC Word 2010-2016 Technical Instructions.pdf" }
  ],
  submission_portal: "https://cmt3.research.microsoft.com/MVAI2026"
};

export default function PaperSubmission() {
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">{submission.page_title}</h1>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Submission Guidelines</h2>
            <div className="space-y-6">
              {submission.submission_guidelines.map((guideline, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="text-gray-700">{guideline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Download Resources</h2>
            <ul className="space-y-3">
              {submission.download_resources.map((resource, i) => (
                <li key={i}>
                  <a
                    href={resource.link}
                    className="text-blue-600 hover:underline"
                    target={resource.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noreferrer"
                  >
                    {resource.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <h3 className="font-bold text-lg mb-2 text-blue-900">Important Notes</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Ensure your paper does not contain author information for blind review</li>
              <li>• Check for plagiarism before submission</li>
              <li>• Keep a copy of your submission ID for future reference</li>
              <li>• Monitor your email for review updates and decisions</li>
            </ul>
          </div>

          <div className="text-center">
            <a
              href={submission.submission_portal}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-black-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg"
            >
              Submit Your Paper
            </a>
            <p className="mt-4 text-gray-600">
              Need help? <a href="/contact" className="text-blue-600 hover:underline">Contact us</a>
            </p>
          </div>
        </div>
      </div> 
    </main>
  );
}
