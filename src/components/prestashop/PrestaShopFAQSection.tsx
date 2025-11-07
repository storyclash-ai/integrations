import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How do I connect Storyclash to my PrestaShop store?',
    answer: 'Authenticate via your API key to connect your PrestaShop store through the Storyclash REST API. Our documentation guides you through the setup process.'
  },
  {
    question: 'Does this work with multi-store PrestaShop setups?',
    answer: 'Yes - track creator performance across all your PrestaShop stores with unified reporting or separate analytics per store.'
  },
  {
    question: 'Can I track influencers across different European countries?',
    answer: 'Absolutely. The integration handles multiple currencies, languages, and markets with accurate revenue attribution per region.'
  },
  {
    question: 'Is this GDPR compliant?',
    answer: 'Yes - fully GDPR compliant with European data privacy standards. All data is encrypted and stored securely with proper consent handling.'
  },
  {
    question: 'Which PrestaShop versions are supported?',
    answer: 'The module supports PrestaShop 1.7.x and 8.x versions. Check our documentation for specific version compatibility.'
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
