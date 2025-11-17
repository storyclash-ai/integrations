import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash export creator and campaign data to Triple Whale?',
    answer: 'Storyclash exports creator and campaign performance metrics to Triple Whale via a secure integration. Storyclash creator data appears in your Triple Whale dashboard as a channel alongside paid ads, email and organic traffic, so you can track influencer revenue, orders, CAC and ROAS in the same unified view as all other marketing channels.'
  },
  {
    question: 'Can Triple Whale track creator touchpoints with pixel data from influencer campaigns?',
    answer: 'Yes. Triple Whale\'s pixel captures influencer interactions across devices and sessions and combines them with creator campaign data from Storyclash. This enables accurate multi-touch attribution that shows how creators contribute to customer journeys alongside other marketing touchpoints.'
  },
  {
    question: 'How do I compare creator CAC from Storyclash with other channels in Triple Whale?',
    answer: 'Triple Whale calculates customer acquisition cost for creators alongside all other channels. By combining Storyclash creator spend and Triple Whale revenue data, you can compare influencer CAC with Facebook Ads, Google Ads, email and organic to optimize budget allocation.'
  },
  {
    question: 'Can I get automated creator performance reports in Triple Whale?',
    answer: 'Yes. You can configure automated daily or weekly reports in Triple Whale that include creator metrics sourced from Storyclash. Receive Slack notifications or email reports with influencer performance alongside other channel metrics without manual reporting work.'
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
