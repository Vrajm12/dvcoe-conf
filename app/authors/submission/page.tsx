import { getPageContent } from '@/lib/content';

interface ResourceLink {
  text: string;
  link: string;
}

interface AuthorsSubmissionContent {
  page_title: string;
  download_resources: ResourceLink[];
  submission_portal: string;
}

const defaultContent: AuthorsSubmissionContent = {
  page_title: 'Submission Guidelines',
  download_resources: [
    { text: 'Conference Brochure (PDF)', link: 'pdf/cfp.pdf' },
    { text: 'IET / IEEE CONFERENCE TEMPLATE', link: '/IET-IEEE-Conference-Template.doc' },
    { text: 'Reviewers Response Sheet', link: '/Reviewers Response Sheet.docx' },
    { text: 'ICCET 2026 Copyright Form', link: '/ICCET 2026 Copyright form Paper ID x........docx' },
    { text: 'Certificate of Originality', link: '/Paper ID x... Certificate of Originality.docx' },
    { text: 'Sample Template for PPT', link: '/Sample Template for PPT.pptx' },
  ],
  submission_portal: 'https://cmt3.research.microsoft.com/ICCET2026'
};

export default async function SubmissionGuidelines() {
  const cmsContent = await getPageContent<AuthorsSubmissionContent>('authors-submission');
  const submission = cmsContent ?? defaultContent;

  const guidelines = [
    {
      title: 'Review Process',
      content: 'Each submitted paper will undergo a rigorous peer-review process and will be evaluated by a minimum of two independent expert reviewers based on the technical merit, originality, relevance, and clarity of the manuscript. The review will be conducted in a single-blind manner, wherein the identities of the reviewers are kept confidential.\n\nIn case of conflicting recommendations from the reviewers, the paper will be referred to a third independent reviewer appointed by the Technical Program Committee (TPC). The decision of the third reviewer, in consultation with the TPC, shall be final and binding.'
    },
    {
      title: 'Submission Deadline',
      content: 'Authors are invited to submit their full-length papers (in English) on or before 30th June 2026. Early submissions are encouraged to facilitate a smooth review process.'
    },
    {
      title: 'Manuscript Format',
      content: 'All submissions must strictly follow the IET prescribed format/template. Papers not conforming to the formatting guidelines may be returned without review.'
    },
    {
      title: 'Submission Portal',
      content: 'All manuscripts must be submitted through the Microsoft CMT portal:\n\nSubmissions via email or any other mode will not be considered.'
    },
    {
      title: 'Presentation Requirement',
      content: 'At least one author of each accepted paper must register and present the work at the conference. Failure to present will result in exclusion of the paper from the official proceedings.'
    },
    {
      title: 'Authorship Limit',
      content: 'A maximum of four (04) authors per paper is permitted. Kindly ensure appropriate authorship representation before submission. Authorship cannot be modified once the paper is submitted for the review.'
    },
    {
      title: 'Page Limit',
      content: 'Papers must be a minimum of 3 pages and a maximum of 7 pages in length. Authors may include up to 3 additional pages, subject to an extra charge of ₹500 per page.'
    },
    {
      title: 'Plagiarism Policy',
      content: 'All submissions will be screened using the iThenticate plagiarism detection tool.\n• Overall similarity must not exceed 15%\n• Similarity from any single source must be less than 2%\n\nPapers failing to meet these criteria will be rejected without further review.'
    },
    {
      title: 'AI Usage Policy',
      content: 'AI-generated papers are strictly prohibited. Authors are fully responsible for submitting original, authentic, and human authored work. Any paper found to be AI-generated, either during review or after publication, will be immediately rejected or retracted.'
    },
    {
      title: 'Figures and Graphs',
      content: 'All figures, images, and graphs must be clear, fully legible, and of high quality (minimum 600 dpi) with proper aspect ratio. Poor-quality or unreadable visuals will require revision at the acceptance stage.'
    },
    {
      title: 'Editorial Rights',
      content: 'The Technical Program Committee (TPC) reserves the right to reorganize, rephrase, or refine the manuscript during the copyediting stage to ensure consistency and quality of the proceedings.'
    },
    {
      title: 'References',
      content: 'Authors are strongly encouraged to include recent, relevant, and high-quality references to strengthen the technical depth and credibility of the manuscript.'
    },
    {
      title: 'Camera-Ready Submission',
      content: 'Final accepted papers must be submitted in both PDF and editable Word formats for inclusion in the conference proceedings.'
    }
  ];

  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">{submission.page_title}</h1>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Complete guide for manuscript preparation and submission</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Submission Guidelines */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 mb-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Submission Guidelines</h2>
            <div className="space-y-8">
              {guidelines.map((guideline, idx) => (
                <div key={idx} className="border-b last:border-b-0 pb-8 last:pb-0">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 min-w-[40px]">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">{guideline.title}</h3>
                      <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                        {guideline.content.split('\n').map((line, lineIdx) => {
                          const urlRegex = /(https?:\/\/[^\s]+)/g;
                          const parts = line.split(urlRegex);
                          return (
                            <div key={lineIdx}>
                              {parts.map((part, partIdx) =>
                                urlRegex.test(part) ? (
                                  <a
                                    key={partIdx}
                                    href={part}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-blue-600 hover:text-blue-800 font-semibold underline"
                                  >
                                    {part}
                                  </a>
                                ) : (
                                  <span key={partIdx}>{part}</span>
                                )
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download Resources */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 mb-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Download Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {submission.download_resources.map((resource, i) => {
                const isPPT = resource.link.endsWith('.pptx') || resource.link.endsWith('.ppt');
                const isDoc = resource.link.endsWith('.doc') || resource.link.endsWith('.docx');
                const icon = isPPT ? '📊' : isDoc ? '📝' : '📄';
                return (
                  <a
                    key={i}
                    href={resource.link}
                    download
                    className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border-2 border-blue-200 hover:border-blue-600 hover:shadow-lg transition-all text-center"
                  >
                    <div className="text-3xl mb-3">{icon}</div>
                    <h3 className="text-lg font-bold text-blue-900 hover:text-blue-600">{resource.text}</h3>
                    <p className="text-sm text-gray-500 mt-2">Click to download</p>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Submission Portal CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg shadow-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>Ready to Submit?</h2>
            <p className="text-lg mb-8" style={{ color: '#ffffff' }}>Submit your research paper through our submission portal</p>
            <a
              href={submission.submission_portal}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-white text-blue-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition shadow-lg"
            >
              Go to Submission Portal
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
