import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash integrate with Google Analytics?',
    answer: 'Use your Storyclash API credentials to connect with Google Analytics 4 via custom dimensions, UTM parameters, and the Measurement Protocol. The integration syncs creator campaign data directly with your GA4 property.'
  },
  {
    question: 'What creator data can I track in Google Analytics?',
    answer: 'Traffic attribution, conversion paths, engagement metrics, campaign performance, UTM-tagged sessions, and custom events - all segmented by creator and campaign. Track which influencers drive the most valuable website visitors.'
  },
  {
    question: 'How often does data sync with Google Analytics?',
    answer: 'Data syncs in near real-time, keeping your Google Analytics dashboards updated with the latest creator performance and attribution data.'
  },
  {
    question: 'Do I need technical expertise to set this up?',
    answer: 'No - marketing teams can connect Storyclash to Google Analytics in minutes without developer support or complex configurations.'
  },
  {
    question: 'Is the integration compliant with privacy regulations?',
    answer: 'Yes - all data is processed in compliance with GDPR and Google Analytics privacy standards, respecting user consent and data protection requirements.'
  }
];

export default function GoogleAnalyticsFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Google Analytics Integration FAQ
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
