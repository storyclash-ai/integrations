import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash integrate with Triple Whale?',
    answer: 'Storyclash connects to Triple Whale via API, sending creator performance data directly to your Triple Whale dashboard. Your influencer metrics appear as a channel alongside paid ads, email, and organic traffic.'
  },
  {
    question: 'Can Storyclash data track creator touchpoints in Triple Whale?',
    answer: 'Yes - Storyclash data flows into Triple Whale\'s attribution system, enabling accurate multi-touch tracking showing how creators contribute to customer journeys alongside other marketing touchpoints.'
  },
  {
    question: 'How do I compare creator CAC with other channels?',
    answer: 'With Storyclash data in Triple Whale, you can compare creator customer acquisition cost across Facebook, Instagram, and Snapchat to optimize your influencer marketing spend allocation.'
  },
  {
    question: 'Can I get automated creator performance reports?',
    answer: 'Yes - configure automated daily or weekly reports with Storyclash creator metrics. Receive Slack notifications or email reports with influencer performance data automatically.'
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
