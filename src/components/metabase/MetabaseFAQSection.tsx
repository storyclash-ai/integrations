import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash export influencer and campaign data to Metabase?',
    answer: 'Storyclash exports creator and campaign metrics to Metabase via a secure REST API. After authenticating with your API key, Storyclash becomes a live data source inside Metabase without manual file uploads.'
  },
  {
    question: 'Which Storyclash metrics can I visualize in Metabase dashboards?',
    answer: 'You can visualize impressions, reach, engagement rate, EMV, conversions, revenue attribution, ROI, ROAS and other Storyclash creator metrics. Metabase lets you filter, aggregate and chart these metrics in fully customizable dashboards.'
  },
  {
    question: 'How often does Storyclash sync creator data with Metabase?',
    answer: 'Storyclash syncs influencer performance data to Metabase in near real time or on scheduled refresh intervals, depending on your Metabase settings.'
  },
  {
    question: 'Do I need technical skills to connect Storyclash to Metabase?',
    answer: 'Yes, you need some technical skills to set up the REST API connection with your Storyclash API key. However, once connected, marketing teams can build dashboards with drag-and-drop tools without additional technical expertise.'
  },
  {
    question: 'Is the Storyclash → Metabase integration secure and GDPR-compliant?',
    answer: 'Yes. Storyclash uses encrypted REST API endpoints, secure token authentication and GDPR-compliant EU hosting. Access can be restricted using roles and auditing inside Metabase.'
  }
];

export default function MetabaseFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Metabase Integration FAQ
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
