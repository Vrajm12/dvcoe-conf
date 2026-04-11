import { getPageContent } from '@/lib/content';

interface DelegateFee {
  category: string;
  indian: string;
  foreign: string;
}

interface DelegateRegistrationContent {
  delegate_info: string;
  delegate_fees: DelegateFee[];
  note: string;
  benefits: string[];
  button_text: string;
}

const defaultContent: DelegateRegistrationContent = {
  delegate_info: 'Delegates who are not presenting papers but wish to attend the conference can register as participants. Delegate registration provides full access to all conference sessions, keynote speeches, and networking opportunities.',
  delegate_fees: [
    {
      category: 'Students (UG/PG/Ph.D Scholars)',
      indian: 'INR 1,500',
      foreign: '$18'
    },
    {
      category: 'Academicians',
      indian: 'INR 2,500',
      foreign: '$30'
    }
  ],
  note: 'Student delegates must provide valid student ID proof at the time of registration.',
  benefits: [
    'Access to all conference sessions and presentations',
    'Conference materials and proceedings (digital)',
    'Networking opportunities with researchers and industry experts',
    'Certificate of participation',
    'Conference kit and refreshments'
  ],
  button_text: 'Register as Delegate'
};

export default async function DelegateFee() {
  const cmsContent = await getPageContent<DelegateRegistrationContent>('registration-delegate');
  const data = cmsContent ?? defaultContent;

  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Delegate Registration
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Delegate Information</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">{data.delegate_info}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Delegate Fees</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-blue-800 px-6 py-3 text-left">Category</th>
                    <th className="border border-blue-800 px-6 py-3 text-left">Indian (INR)</th>
                    <th className="border border-blue-800 px-6 py-3 text-left">Foreign (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {data.delegate_fees.map((fee, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="border border-gray-300 px-6 py-4">{fee.category}</td>
                      <td className="border border-gray-300 px-6 py-4 font-semibold">{fee.indian}</td>
                      <td className="border border-gray-300 px-6 py-4 font-semibold">{fee.foreign}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> {data.note}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Registration Benefits</h2>
            <ul className="space-y-3 text-gray-700">
              {data.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">-</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                {data.button_text}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
