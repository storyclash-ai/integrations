import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash integrate with Tableau?',
    answer: 'Authenticate via your API key and connect through the Storyclash REST API. The integration provides a live data source that you can drag directly into your Tableau workbooks.'
  },
  {
    question: 'What creator metrics are available in Tableau?',
    answer: 'All core influencer KPIs including engagement rate, reach, impressions, EMV, conversions, audience demographics, sentiment analysis, and campaign performance-organized by creator, platform, and time period.'
  },
  {
    question: 'Can I combine Storyclash data with other data sources in Tableau?',
    answer: 'Absolutely. Blend Storyclash creator metrics with your CRM, ad spend, sales, or web analytics data to build comprehensive marketing performance dashboards.'
  },
  {
    question: 'How often does the data refresh?',
    answer: 'Data syncs automatically based on your Tableau refresh schedule. You can configure real-time updates or scheduled refreshes (hourly, daily, weekly).'
  },
  {
    question: 'Do I need technical expertise to set this up?',
    answer: 'No coding required. If you can use Tableau, you can connect Storyclash. Setup takes less than 10 minutes with our step-by-step guide.'
  }
];

export default function TableauFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Tableau Integration FAQ
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
