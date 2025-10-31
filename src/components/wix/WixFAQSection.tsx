import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How do I connect Storyclash to my Wix store?',
    answer: 'Simply authorize Storyclash through your Wix dashboard - the integration takes less than 5 minutes and requires no technical knowledge.'
  },
  {
    question: 'Do I need coding skills to set this up?',
    answer: 'No - the integration is completely no-code. If you can use Wix, you can use Storyclash.'
  },
  {
    question: 'Which data gets synced from my Wix store?',
    answer: 'Order data, revenue, product information, and customer acquisition metrics - all matched to specific influencer campaigns.'
  },
  {
    question: 'How do I track which creator drove which sale?',
    answer: 'Storyclash uses UTM parameters, tracking pixels, and unique discount codes to match Wix orders to influencer content.'
  },
  {
    question: 'Is my Wix store data secure?',
    answer: 'Yes - all data is encrypted, GDPR-compliant, and stored securely with enterprise-grade security measures.'
  }
];

export default function WixFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Wix Integration FAQ
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
    </section>
  );
}
