import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash receive Squarespace Commerce orders, revenue and customer data?',
    answer: 'Storyclash receives orders, revenue, products and customer events from your Squarespace Commerce store via a secure connector. All ecommerce data is unified in Storyclash and linked with creator activity for accurate attribution.'
  },
  {
    question: 'Which Squarespace Commerce metrics can be imported into Storyclash for influencer revenue attribution?',
    answer: 'Storyclash ingests Squarespace metrics such as orders, revenue, products sold, discount code usage, AOV, refunds, new vs. returning customers and timestamps for influencer revenue reporting.'
  },
  {
    question: 'How does Storyclash attribute Squarespace orders to specific creators and campaigns?',
    answer: 'Storyclash attributes Squarespace orders to creators using discount codes, UTM parameters and first-party tracking. Multi-touch journeys are fully supported.'
  },
  {
    question: 'Do I need a developer to connect Squarespace Commerce with Storyclash?',
    answer: 'No. Squarespace Commerce can be connected to Storyclash without backend development. Activate the connector in Storyclash, add the snippet to your store and data begins syncing automatically.'
  },
  {
    question: 'Is the Squarespace → Storyclash connector GDPR-compliant and secure?',
    answer: 'Yes. The Squarespace → Storyclash connector is fully GDPR-compliant, encrypted and EU-hosted, with role-based permissions and SSO for enterprise-grade security.'
  }
];

export default function SquarespaceFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Squarespace Integration FAQ
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
