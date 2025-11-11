import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash integrate with BigQuery?',
    answer: 'Extract creator data via Storyclash API and load it into BigQuery tables using Cloud Functions, scheduled queries, or ETL tools like Dataflow. Data is structured for optimal query performance.'
  },
  {
    question: 'What creator data can I analyze in BigQuery?',
    answer: 'All influencer metrics including reach, engagement, conversions, content performance, and campaign ROI - structured as BigQuery tables ready for SQL analysis.'
  },
  {
    question: 'Can I join creator data with other datasets?',
    answer: 'Yes - that\'s BigQuery\'s strength. Join influencer data with Google Analytics, Ads, CRM, sales, and any other data source loaded into BigQuery for complete analysis.'
  },
  {
    question: 'Can I import insights from BigQuery back to Storyclash?',
    answer: 'Yes - export calculated metrics, segments, and insights from BigQuery back to Storyclash via API. Use them for influencer scoring, segmentation, and ongoing attribution in the platform.'
  }
];

export default function BigQueryFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          BigQuery Integration FAQ
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
