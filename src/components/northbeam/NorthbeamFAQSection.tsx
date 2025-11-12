import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does multi-touch attribution work for creators?',
    answer: 'Storyclash sends detailed creator engagement data via API to Northbeam, where machine learning models track creator touchpoints across the customer journey. Northbeam then attributes revenue to influencers based on their contribution at each stage, providing accurate influencer impact measurement.'
  },
  {
    question: 'What is incrementality testing for influencers?',
    answer: 'Incrementality testing measures true creator impact by comparing revenue from audiences exposed to influencer campaigns versus control groups. This reveals actual lift attributable to creators beyond what would have happened anyway.'
  },
  {
    question: 'Can I compare creator performance across social channels?',
    answer: 'Yes - with Storyclash data in Northbeam, you can compare creator performance across Facebook, Instagram, and Snapchat. Identify top performers and measure which channels drive the highest ROAS and CAC.'
  },
  {
    question: 'How accurate is creator attribution in Northbeam?',
    answer: 'Storyclash provides comprehensive creator data via API that feeds into Northbeam\'s machine learning models trained on billions of conversions. This rich influencer data enables precise attribution, tracking creator touchpoints across devices and providing more accurate measurement than last-click or platform-reported metrics.'
  }
];

export default function NorthbeamFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Northbeam Integration FAQ
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
