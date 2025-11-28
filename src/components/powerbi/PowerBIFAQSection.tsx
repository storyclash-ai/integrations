import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How do I connect Storyclash influencer data to Power BI?',
    answer: 'Storyclash exports data to Power BI via REST API. After authenticating with your API token, Storyclash sends creator metrics, campaign performance, and influencer ROI data directly to Power BI for custom dashboard creation.'
  },
  {
    question: 'Which influencer marketing metrics can I analyze in Power BI?',
    answer: 'You can analyze comprehensive influencer metrics including impressions, reach, engagement, engagement rate, EMV (Earned Media Value), conversions, attributed revenue, ROI, ROAS, and creator-level KPIs. Power BI enables you to blend these with sales, CRM, or web analytics data for complete attribution analysis.'
  },
  {
    question: 'How often does Storyclash send influencer campaign data to Power BI?',
    answer: 'Storyclash exports data to Power BI via REST API based on your configured schedule. Power BI can automatically refresh dashboards so your team always sees current influencer performance, campaign ROI, and creator analytics.'
  },
  {
    question: 'Can I combine Storyclash influencer data with other business data in Power BI?',
    answer: 'Yes. Power BI\'s data modeling lets you combine Storyclash creator metrics with CRM data, e-commerce sales, web analytics, and other business intelligence sources to build complete influencer attribution models and ROI dashboards.'
  },
  {
    question: 'Is the Storyclash → Power BI integration secure and GDPR-compliant?',
    answer: 'Yes. Storyclash uses encrypted REST API endpoints, secure token-based authentication, and GDPR-compliant EU data hosting. Power BI integrations support enterprise security standards with role-based access control and audit logging.'
  }
];

export default function PowerBIFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Power BI Integration FAQ
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
