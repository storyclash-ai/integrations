import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Can I track both Lightspeed Retail and eCom with one integration?',
    answer: 'Yes - the integration supports both platforms. Track influencer impact across in-store POS sales and online orders with unified reporting.'
  },
  {
    question: 'How does in-store attribution work?',
    answer: 'We use unique promo codes, QR codes, and tracking pixels to match social media traffic to POS transactions at your retail locations.'
  },
  {
    question: 'Do I need multiple stores to use this?',
    answer: 'No - this works for single-location retailers and multi-store chains. The value is tracking both retail and online channels together.'
  },
  {
    question: 'Which Lightspeed versions are supported?',
    answer: 'We support Lightspeed Retail (POS) and Lightspeed eCom (formerly SEOshop). Contact us for specific version compatibility.'
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
