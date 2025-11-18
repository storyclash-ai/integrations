import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Does this work with custom Spryker data models?',
    answer: 'Yes - the integration is built to adapt to your custom Spryker data structures. We map influencer attribution to your specific business logic and commerce entities.'
  },
  {
    question: 'Can I track both B2B and B2C influencer campaigns?',
    answer: 'Absolutely. The integration works across both B2B marketplaces and B2C storefronts, with unified reporting that shows creator performance for each customer type.'
  },
  {
    question: 'How does Storyclash connect to Spryker Commerce?',
    answer: 'Our Spryker connector securely links Storyclash to your Spryker Commerce OS instance, automatically receiving orders, revenue, and customer data. Your data stays in your control while Storyclash provides the influencer attribution and ROI insights you need.'
  },
  {
    question: 'How does Storyclash handle B2B and B2C attribution in Spryker?',
    answer: 'We accurately attribute influencer-driven sales to both B2B and B2C customers. The integration tracks orders from both customer types and provides clear ROI metrics per influencer across your Spryker store.'
  },
  {
    question: 'Can I track influencers across multiple Spryker environments?',
    answer: 'Each Storyclash workspace connects to one Spryker storefront. For multiple stores, you can create separate workspaces - each tracking creator performance independently with its own attribution data and reporting.'
  }
];

export default function SprykerFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Spryker Integration FAQ
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
