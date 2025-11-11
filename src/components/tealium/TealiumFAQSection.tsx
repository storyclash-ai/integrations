import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash integrate with Tealium?',
    answer: 'Send Storyclash influencer metrics to Tealium CDP via secure REST API. Stream creator performance data in real-time. Import calculated segments and audiences from Tealium back to Storyclash.'
  },
  {
    question: 'What Storyclash data syncs to Tealium?',
    answer: 'All creator metrics including engagement, reach, conversions, ROI, campaign performance, and audience data. Storyclash sends influencer attribution events to Tealium for unified customer profiling.'
  },
  {
    question: 'Can I activate Storyclash data across platforms?',
    answer: 'Yes - use Tealium to route Storyclash influencer metrics to analytics, CRM, marketing automation, and advertising platforms. Activate creator insights across your entire marketing stack.'
  },
  {
    question: 'Can I import Tealium segments back to Storyclash?',
    answer: 'Yes - export calculated segments and audiences from Tealium back to Storyclash via API. Use them for influencer scoring, segmentation, and ongoing attribution.'
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
