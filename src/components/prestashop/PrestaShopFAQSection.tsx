import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How do I connect Storyclash to my PrestaShop store?',
    answer: 'Connect your PrestaShop store to Storyclash using the native module or connector. Follow the setup guide in Storyclash, install the connector in your PrestaShop back office, and influencer-related orders and revenue will start flowing into Storyclash automatically – no manual REST API configuration required.'
  },
  {
    question: 'Does the PrestaShop integration work with multi-store setups?',
    answer: 'Yes – the Storyclash PrestaShop integration supports multi-store setups. You can track creator performance across all your PrestaShop stores with unified reporting or separate analytics per store and market.'
  },
  {
    question: 'Can I track influencers across different European countries with PrestaShop?',
    answer: 'Absolutely. The PrestaShop integration handles multiple currencies, languages and markets with accurate revenue attribution per region, so you can compare influencer performance across European countries inside Storyclash.'
  },
  {
    question: 'Is the PrestaShop → Storyclash integration GDPR-compliant?',
    answer: 'Yes – the PrestaShop → Storyclash integration is fully GDPR-compliant and aligned with European data privacy standards. Data from your PrestaShop store is encrypted in transit and at rest, processed on EU infrastructure and handled with proper consent and access controls.'
  },
  {
    question: 'Which PrestaShop versions are supported by the Storyclash integration?',
    answer: 'The Storyclash integration supports PrestaShop 1.7.x and 8.x. Check our documentation for detailed compatibility notes and the latest supported versions.'
  }
];

export default function PrestaShopFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          PrestaShop Integration FAQ
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
