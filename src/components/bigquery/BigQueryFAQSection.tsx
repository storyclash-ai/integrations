import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash export influencer and campaign data to BigQuery?',
    answer: 'Storyclash exports creator, content and campaign metrics to BigQuery via a secure REST API. After authentication with your API key, Storyclash populates your BigQuery tables automatically without manual ETL work or scheduled file uploads.'
  },
  {
    question: 'Which Storyclash creator and campaign metrics are available in BigQuery?',
    answer: 'BigQuery receives impressions, reach, engagement, conversions, EMV, creator identifiers, content performance, attributed revenue, ROI, ROAS and campaign-level KPIs. All Storyclash metrics are available for SQL queries and joins.'
  },
  {
    question: 'What are the benefits of using BigQuery as a warehouse for Storyclash data?',
    answer: 'BigQuery enables large-scale analysis, automated pipelines, advanced attribution models, AI workloads and joins with sales, CRM, e-commerce and advertising datasets. Storyclash becomes a unified data source inside your marketing warehouse.'
  },
  {
    question: 'Can I build custom models and SQL analyses in BigQuery using Storyclash data?',
    answer: 'Yes. You can build custom SQL models, predictive scoring, LTV analysis, cross-channel attribution and machine-learning models using Storyclash creator data stored in BigQuery.'
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
