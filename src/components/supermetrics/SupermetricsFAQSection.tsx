import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash export creator data to Supermetrics?',
    answer: 'Storyclash connects to Supermetrics via a secure REST API. You add Storyclash as a data source in Supermetrics, authenticate once with your API key, and Supermetrics can then fetch creator metrics such as impressions, clicks, conversions and revenue for use in any supported destination.'
  },
  {
    question: 'How often can Storyclash creator data be refreshed in Supermetrics?',
    answer: 'You control the refresh schedule in Supermetrics – from hourly updates to daily or weekly batches. Supermetrics regularly pulls the latest Storyclash creator metrics via API so your reports and dashboards stay up to date automatically.'
  },
  {
    question: 'Can I blend Storyclash creator metrics with other marketing channels in Supermetrics?',
    answer: 'Yes. Supermetrics lets you combine Storyclash creator and influencer metrics with data from Google Ads, Meta Ads, TikTok, email platforms and 150+ other sources. You can build unified reports that show creator-driven performance alongside the rest of your marketing mix.'
  },
  {
    question: 'Is historical Storyclash creator data available in Supermetrics?',
    answer: 'Yes. Supermetrics can query historical Storyclash data for trend analysis and year-over-year comparisons. You can access past creator metrics from the moment Storyclash started tracking your campaigns, subject to your account\'s data retention.'
  }
];

export default function SupermetricsFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Supermetrics Integration FAQ
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
