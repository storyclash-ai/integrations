import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Which versions of SAP Commerce Cloud are supported?',
    answer: 'We support SAP Commerce Cloud 2.x and newer versions. Our API integration works with both cloud-hosted and on-premise deployments.'
  },
  {
    question: 'How does the integration handle multi-country operations?',
    answer: 'The integration natively supports multiple storefronts, currencies, and languages. You can track creator performance per market or view unified global reporting.'
  },
  {
    question: 'Is this integration compliant with enterprise security standards?',
    answer: 'Yes - we use OAuth 2.0 authentication, encrypt all data in transit and at rest, and maintain SOC 2 Type II and GDPR compliance. Full audit logs are available.'
  },
  {
    question: 'Can we segment reporting by business unit or brand?',
    answer: 'Absolutely. You can create separate views for different brands, regions, or business units while maintaining centralized governance and data consistency.'
  },
  {
    question: 'What level of technical support do you provide for enterprise clients?',
    answer: 'Enterprise customers receive dedicated implementation support, custom API integration assistance, and 24/7 technical support with guaranteed response times.'
  }
];

export default function SAPCommerceFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          SAP Commerce Cloud Integration FAQ
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
