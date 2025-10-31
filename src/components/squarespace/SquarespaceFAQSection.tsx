import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How do I connect Storyclash to Squarespace Commerce?',
    answer: 'Use the Squarespace API key from your account settings. Our guided setup takes about 5 minutes with clear step-by-step instructions.'
  },
  {
    question: 'Does this work with Squarespace memberships and digital products?',
    answer: 'Yes - track creator performance for physical products, digital downloads, memberships, and courses sold through Squarespace.'
  },
  {
    question: 'Which Squarespace data gets synced?',
    answer: 'Order data, revenue, product SKUs, customer acquisition, and conversion events - all matched to specific influencer campaigns.'
  },
  {
    question: 'Can I track creators promoting my portfolio or services?',
    answer: 'Absolutely. Whether you sell products, services, bookings, or digital goods on Squarespace, Storyclash tracks creator-driven conversions.'
  },
  {
    question: 'Is this suitable for creative entrepreneurs and small businesses?',
    answer: 'Yes - designed specifically for creative professionals, photographers, designers, and small business owners using Squarespace.'
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
    </section>
  );
}
