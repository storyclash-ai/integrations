import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash export influencer data to Looker Studio via REST API?',
    answer: 'Storyclash connects to Looker Studio as a custom REST API data source. After authenticating with your API key, Storyclash exports creator and campaign metrics directly into Looker Studio so you can build live influencer performance dashboards without manual CSV uploads.'
  },
  {
    question: 'What creator and campaign metrics can I visualize in Looker Studio dashboards?',
    answer: 'You can visualize Storyclash metrics such as reach, impressions, engagement, EMV, clicks, conversions, revenue attribution, ROI, ROAS, and campaign-level KPIs. All metrics are exposed as dimensions and measures in Looker Studio charts, tables, and scorecards.'
  },
  {
    question: 'Can I combine Storyclash influencer data in Looker Studio with other marketing sources?',
    answer: 'Yes. In Looker Studio you can blend Storyclash creator data with other marketing data sources like Google Analytics, Google Ads, or your CRM for comprehensive cross-channel analysis.'
  },
  {
    question: 'Do I need technical skills to connect Storyclash to Looker Studio and build dashboards?',
    answer: 'Yes, you need some technical skills to set up the REST API connection with your API key. However, once connected, marketing teams can build dashboards using Looker Studio\'s drag-and-drop interface without coding.'
  },
  {
    question: 'How often does Storyclash data refresh in Looker Studio dashboards?',
    answer: 'Data refresh depends on your Looker Studio configuration. Storyclash exposes up-to-date creator metrics via the API, and Looker Studio pulls fresh data on your chosen schedule so stakeholders always see current influencer performance without manual updates.'
  }
];

export default function LookerStudioFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Looker Studio Integration FAQ
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
