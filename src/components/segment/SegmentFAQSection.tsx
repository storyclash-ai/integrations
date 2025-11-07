import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  { question: 'How does Storyclash integrate with Segment?', answer: 'Configure Storyclash as a Segment source to send creator engagement events. Events flow into Segment with standard schemas and route to your configured destinations automatically.' },
  { question: 'What creator data syncs to Segment?', answer: 'Influencer engagement events including content views, clicks, conversions, and campaign interactions. Data follows Segment\'s event schema standards for consistency.' },
  { question: 'Can I route creator data to multiple tools?', answer: 'Yes - that\'s Segment\'s core value. Route Storyclash data to analytics, CRM, email, advertising, and 300+ other tools from one integration.' },
  { question: 'How do I build segments with creator data?', answer: 'Use Segment Personas to create customer segments based on creator interactions. Trigger campaigns when users engage with specific influencers or content types.' }
];

export default function SegmentFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Segment Integration FAQ
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
