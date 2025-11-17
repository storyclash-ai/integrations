import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash export influencer and campaign data to Snowflake?',
    answer: 'Storyclash exports creator, content and campaign metrics to Snowflake using secure REST API authentication. Your Snowflake tables are updated automatically without manual pipelines or scheduled CSV uploads.'
  },
  {
    question: 'Which Storyclash creator and campaign metrics are available in Snowflake?',
    answer: 'Snowflake receives impressions, reach, engagement rate, conversions, attributed revenue, EMV, creator identifiers, content performance and all campaign-level KPIs. Every metric is available for SQL queries, joins and modeling.'
  },
  {
    question: 'What are the benefits of using Snowflake as a warehouse for Storyclash data?',
    answer: 'Snowflake enables large-scale analytics, automated pipelines, cross-channel attribution, data modeling, AI workloads and joins with CRM, e-commerce, marketing spend and analytics datasets. Storyclash becomes a unified data source inside your modern marketing warehouse.'
  },
  {
    question: 'How secure and compliant is the Storyclash → Snowflake integration?',
    answer: 'Storyclash uses encrypted REST API endpoints, secure token authentication and GDPR-compliant EU hosting. Snowflake offers fine-grained access control, role-based permissions and enterprise-grade data governance.'
  }
];

export default function SnowflakeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Snowflake Integration FAQ
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
