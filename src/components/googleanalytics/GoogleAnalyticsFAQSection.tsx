import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash send influencer and campaign data to Google Analytics 4?',
    answer: 'Storyclash uses its API and the Google Analytics 4 Measurement Protocol to send creator and campaign events into your GA4 property. UTM parameters, custom dimensions and event parameters ensure that every click, session and conversion is tied back to the right creator and campaign in Google Analytics.'
  },
  {
    question: 'Which influencer metrics can I see in Google Analytics with Storyclash?',
    answer: 'With Storyclash you can see sessions, engagement metrics, conversions, revenue, new vs. returning users, assisted conversions and other GA4 metrics segmented by creator and campaign. Creator IDs and campaign tags are passed as custom dimensions so you can build detailed influencer reports directly in Google Analytics.'
  },
  {
    question: 'How often does Storyclash sync creator data with Google Analytics dashboards?',
    answer: 'Storyclash syncs influencer events with Google Analytics in near real time. As soon as creator traffic and conversions are tracked in Storyclash, corresponding GA4 events are triggered so your dashboards always reflect the latest campaign performance.'
  },
  {
    question: 'Do I need developers to connect Storyclash and Google Analytics 4?',
    answer: 'Yes, you need some technical skills to set up the API connection with your Storyclash credentials. However, once connected, marketing teams can use Google Analytics dashboards and reports without additional technical expertise.'
  },
  {
    question: 'Is the Google Analytics 4 influencer integration with Storyclash GDPR-compliant?',
    answer: 'Yes. The Google Analytics 4 integration with Storyclash is fully GDPR-compliant. Events are sent in line with consent settings, IP addresses are not stored by Storyclash, and all creator and campaign data is processed according to EU data protection standards.'
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
