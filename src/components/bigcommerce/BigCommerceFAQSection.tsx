import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash receive BigCommerce orders, revenue and customer data?',
    answer: 'Storyclash connects to BigCommerce via a secure connector and automatically receives orders, revenue, line items, refunds and customer segments. This BigCommerce data is combined with creator content and campaign tracking to measure influencer-driven revenue based on real purchases.'
  },
  {
    question: 'Which BigCommerce metrics can be imported into Storyclash for influencer revenue attribution?',
    answer: 'Storyclash ingests BigCommerce metrics such as orders, revenue, products sold, discount code usage, average order value, refunds, customer segments and timestamps for accurate revenue attribution and ecommerce reporting.'
  },
  {
    question: 'How does Storyclash attribute BigCommerce orders to specific creators and campaigns?',
    answer: 'Storyclash attributes BigCommerce orders to creators using discount codes, UTM parameters, referral URLs and first-party tracking. Multi-touch journeys are supported for accurate attribution across channels.'
  },
  {
    question: 'Do I need a developer to connect BigCommerce with Storyclash?',
    answer: 'No. BigCommerce can be connected to Storyclash without building a custom API integration. Activate the BigCommerce connector in Storyclash, add the tracking snippet to your store, and ecommerce data will start flowing automatically.'
  },
  {
    question: 'Is the BigCommerce → Storyclash connector GDPR-compliant and secure?',
    answer: 'Yes. The BigCommerce → Storyclash connector is fully GDPR-compliant, EU-hosted and encrypted to enterprise standards. Storyclash offers SSO, role-based access and secure data handling for all ecommerce and creator metrics.'
  }
];

export default function BigCommerceFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          BigCommerce Integration FAQ
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
