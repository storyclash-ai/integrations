import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash export influencer and campaign data to Google Sheets?',
    answer: 'Storyclash exports creator and campaign metrics to Google Sheets via a secure REST API. After authenticating with your API key, your Sheets document will receive live influencer data from Storyclash without manual exports.'
  },
  {
    question: 'Which Storyclash metrics can I use inside Google Sheets dashboards?',
    answer: 'You can sync impressions, reach, engagement, engagement rate, conversions, revenue attribution, EMV, ROI, ROAS and creator-level KPIs directly into Google Sheets. All Storyclash metrics can be used in formulas, pivot tables and charts.'
  },
  {
    question: 'How often does Storyclash sync creator data with Google Sheets?',
    answer: 'Storyclash can sync influencer data to Google Sheets in near real time or on scheduled intervals. Your spreadsheets always stay updated without manual imports or copy-paste work.'
  },
  {
    question: 'Do I need technical skills to connect Storyclash to Google Sheets?',
    answer: 'Yes, you need some technical skills to set up the API connection with your Storyclash API key. However, once connected, marketing teams can use Google Sheets built-in formulas and charts without additional technical expertise.'
  },
  {
    question: 'Is the Storyclash → Google Sheets integration secure and GDPR-compliant?',
    answer: 'Yes. The Storyclash → Google Sheets integration uses secure, encrypted API endpoints and token-based authentication. Storyclash is fully GDPR-compliant and processes influencer and campaign data on EU-hosted infrastructure.'
  }
];

export default function GoogleSheetsFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Google Sheets Integration FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 overflow-hidden" style={{ borderColor: '#E5EAEC', borderRadius: '20px' }}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="pr-4" style={{ fontSize: '18px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: '#19B776' }}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
