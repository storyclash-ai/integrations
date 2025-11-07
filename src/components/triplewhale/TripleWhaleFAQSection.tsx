import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does creator data appear in Triple Whale?',
    answer: 'Creator metrics appear in your main Triple Whale dashboard as a channel alongside paid ads, email, and organic traffic. View influencer revenue, orders, CAC, and ROAS in the same unified view you use for all marketing channels.'
  },
  {
    question: 'Does the Triple Whale pixel track creator touchpoints?',
    answer: 'Yes - the Triple Whale pixel captures influencer interactions across devices and sessions. This enables accurate multi-touch attribution showing how creators contribute to customer journeys alongside other marketing touchpoints.'
  },
  {
    question: 'Can I compare creator CAC with other channels?',
    answer: 'Absolutely - Triple Whale calculates customer acquisition cost for creators alongside all other channels. Compare influencer CAC with Facebook Ads, Google Ads, email, and organic to optimize marketing spend allocation.'
  },
  {
    question: 'Are automated creator reports available?',
    answer: 'Yes - configure automated daily or weekly reports that include creator metrics. Receive Slack notifications or email reports with influencer performance alongside other channel metrics automatically.'
  }
];

export default function TripleWhaleFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Triple Whale Integration FAQ
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
