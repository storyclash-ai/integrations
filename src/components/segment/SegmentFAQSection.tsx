import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  { question: 'How does Storyclash integrate with Segment?', answer: 'Send Storyclash influencer metrics to Segment CDP via secure API. Import calculated segments and audiences from Segment back to Storyclash for influencer scoring and segmentation.' },
  { question: 'What Storyclash data syncs to Segment?', answer: 'All creator metrics including engagement, reach, conversions, ROI, campaign performance, and audience data. Data syncs to Segment with standardized schemas for consistency.' },
  { question: 'Can I activate Storyclash data across tools?', answer: 'Yes - use Segment to route Storyclash influencer data to analytics, CRM, email, and advertising platforms. Activate creator insights across your entire marketing stack.' },
  { question: 'Can I import Segment insights back to Storyclash?', answer: 'Yes - export calculated segments and audiences from Segment back to Storyclash via API. Use them for influencer scoring, segmentation, and ongoing attribution.' }
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
