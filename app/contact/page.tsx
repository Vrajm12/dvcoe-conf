import { getPageContent } from '@/lib/content';

interface ContactPageContent {
  page_title?: string;
  page_intro?: string;
  contact_person?: string;
  contact_email?: string;
  contact_phone?: string;
  contact_address?: string;
  form_title?: string;
}

export default async function Contact() {
  const cmsContent = await getPageContent<ContactPageContent>('contact');
  const contactData = {
    page_title: "Contact Us",
    conference_dates: "July 30-31, 2026",
    page_intro: "Get in touch with us for any queries or further information about ICCET-2026",
    contact_details: [] as string[],
    venue_title: "Dnyanvilas College of Engineering",
    venue_address:
      "Gat No. 76, Dudulgaon, Pimpri-Chinchwad, Pune, Maharashtra 412105, India",
    google_map_link:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.236842485476!2d73.88024342552494!3d18.67019877240876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c9e0e974a4f7%3A0x6fe8fd8f59c1dd83!2sDnyanvilas%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1710955200000"
  };
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          {cmsContent?.page_title || contactData.page_title}
        </h1>
        <p className="text-center text-gray-600 mb-8">
          {cmsContent?.page_intro || contactData.page_intro}
        </p>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">
                      <strong>{contactData.venue_title}</strong>
                      <br />
                      {(cmsContent?.contact_address || contactData.venue_address).split(',').map((line, idx) => (
                        <span key={idx}>
                          {line.trim()}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Contact Details</h3>
                    <div className="text-gray-600">
                      {cmsContent?.contact_person && (
                        <div className="font-semibold text-gray-800 mb-2">{cmsContent.contact_person}</div>
                      )}
                      {[cmsContent?.contact_email, cmsContent?.contact_phone].filter(Boolean).length > 0
                        ? [cmsContent?.contact_email, cmsContent?.contact_phone].filter(Boolean).map((d, i) => {
                        const cleaned = String(d).replace(/[\[\]]/g, '').trim();
                        if (cleaned.includes('@')) {
                          return (
                            <div key={i}>
                              <a href={`mailto:${cleaned}`} className="text-blue-600 hover:underline">
                                {cleaned}
                              </a>
                            </div>
                          );
                        }
                        return <div key={i}>{cleaned}</div>;
                      })
                        : contactData.contact_details.map((d, i) => {
                        const cleaned = d.replace(/[\[\]]/g, '').trim();
                        if (cleaned.includes('@')) {
                          return (
                            <div key={i}>
                              <a href={`mailto:${cleaned}`} className="text-blue-600 hover:underline">
                                {cleaned}
                              </a>
                            </div>
                          );
                        }
                        if (cleaned.match(/\+?\d{2,}/)) {
                          return <div key={i}>{cleaned}</div>;
                        }
                        if (cleaned.includes('.')) {
                          const href = cleaned.startsWith('http') ? cleaned : `https://${cleaned}`;
                          return (
                            <div key={i}>
                              <a href={href} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                                {cleaned}
                              </a>
                            </div>
                          );
                        }
                        return <div key={i}>{cleaned}</div>;
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Conference Dates</h3>
                    <p className="text-gray-600">{contactData.conference_dates}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Location Map</h3>
                    <div className="mt-2">
                      <iframe
                        title="conference-location"
                        src={contactData.google_map_link}
                        width="100%"
                        height={240}
                        className="rounded"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">{cmsContent?.form_title || "Send a Message"}</h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
