import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash integrate creator data with Northbeam for multi-touch attribution?',
    answer: 'Attribution works through Northbeam\'s tracking pixel on your website. When influencer traffic arrives via creator links, Northbeam captures these touchpoints and attributes conversions. Storyclash provides campaign context (creator names, content types, spend) which enriches Northbeam\'s attribution model so you understand how influencer campaigns contribute across the full customer journey.'
  },
  {
    question: 'Which creator metrics can I analyze in Northbeam with Storyclash?',
    answer: 'You can analyze creator performance metrics like clicks, engagement, reach, and EMV from Storyclash. Attribution for conversions and revenue happens through Northbeam\'s pixel tracking. Together, this provides complete influencer funnel visibility from awareness (Storyclash) to conversion (Northbeam\'s tracking).'
  },
  {
    question: 'How does Northbeam measure incrementality and true influencer ROI with Storyclash data?',
    answer: 'Northbeam uses Storyclash creator data together with conversion events to run incrementality tests and advanced attribution models. By comparing exposed versus control audiences, you can quantify true incremental revenue, ROI and customer acquisition driven by influencer campaigns.'
  },
  {
    question: 'Can I compare creator performance and CAC against other channels in Northbeam?',
    answer: 'Yes. In Northbeam, creators appear as a measurable channel next to paid social, search, email and other sources. With Storyclash data, you can compare creator CAC, ROAS and contribution to revenue against all other marketing channels to optimize budget allocation.'
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
