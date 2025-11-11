import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does the Storyclash + Metabase integration work?',
    answer: 'Storyclash exports creator performance data to Metabase via API. You build custom dashboards and analyses in Metabase. Insights and calculated metrics sync back to Storyclash for complete influencer attribution and ROI tracking.'
  },
  {
    question: 'Can I blend Storyclash creator data with other business data in Metabase?',
    answer: 'Yes - in Metabase you can join Storyclash creator metrics with your sales, marketing, CRM, and financial data. Build unified dashboards showing influencer ROI alongside total business metrics.'
  },
  {
    question: 'What metrics can I export from Storyclash to Metabase?',
    answer: 'All Storyclash metrics: engagement rates, reach, impressions, conversions, revenue attribution, AOV, ROI, ROAS, and custom KPIs. Analyze, transform, and blend them with other data sources.'
  },
  {
    question: 'Can insights from Metabase sync back to Storyclash?',
    answer: 'Yes - calculated metrics, segments, and insights from Metabase can be exported back to Storyclash. This creates a bi-directional workflow where both platforms enhance each other.'
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
