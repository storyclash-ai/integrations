import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does creator data flow to Tealium?',
    answer: 'Storyclash sends influencer interaction events to Tealium EventStream in real-time. These events are processed alongside all other customer touchpoints for unified attribution.'
  },
  {
    question: 'Can I enrich customer profiles with creator data?',
    answer: 'Yes - use AudienceStream to add creator attribution attributes to customer profiles. Track which influencers drove acquisition, build segments based on creator exposure, and personalize experiences.'
  },
  {
    question: 'What destinations can receive creator data?',
    answer: 'All 1300+ Tealium connectors support creator data. Send influencer insights to Google Analytics, advertising platforms, personalization engines, data warehouses, or any connected tool.'
  },
  {
    question: 'How does privacy compliance work?',
    answer: 'Tealium handles consent management and privacy controls automatically. Creator attribution data respects existing privacy settings and compliance rules configured in your Tealium implementation.'
  }
];

export default function TealiumFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Tealium Integration FAQ
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
