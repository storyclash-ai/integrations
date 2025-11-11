import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash integrate with Lightspeed eCom?',
    answer: 'Storyclash connects to your Lightspeed eCom store via REST API, syncing order data, revenue, and customer information. We track which influencers drive actual sales with accurate attribution and ROI measurement.'
  },
  {
    question: 'How does Storyclash attribute Lightspeed eCom sales to influencers?',
    answer: 'We match influencer campaigns to Lightspeed eCom orders using UTM parameters, unique discount codes, and referral URLs to track which creators drive actual sales.'
  },
  {
    question: 'Can I track multiple Lightspeed eCom stores?',
    answer: 'Yes - Storyclash supports tracking creator performance across multiple Lightspeed eCom stores with unified or separate reporting per store.'
  },
  {
    question: 'Which Lightspeed eCom versions are supported?',
    answer: 'We support Lightspeed eCom (including formerly SEOshop). Contact us for specific version compatibility and setup assistance.'
  },
  {
    question: 'Can I see which products influencers promote most effectively?',
    answer: 'Absolutely. Product-level attribution shows which SKUs move fastest with each creator - perfect for inventory planning.'
  }
];

export default function LightspeedFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Lightspeed Integration FAQ
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
