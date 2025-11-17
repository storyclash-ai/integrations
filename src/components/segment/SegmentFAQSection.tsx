import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  { question: 'How does Storyclash send influencer and campaign data to Segment CDP?', answer: 'Storyclash sends creator and campaign metrics to Segment CDP via a secure API integration. Influencer events and performance data are streamed from Storyclash into Segment, so they can be used in customer profiles, journeys and downstream tools.' },
  { question: 'Which Storyclash creator and campaign metrics can be synced to Segment?', answer: 'Segment can receive Storyclash metrics such as impressions, reach, engagement rate, conversions, campaign IDs, creator identifiers and attributed revenue signals. These fields are mapped into Segment events and traits with standardized schemas.' },
  { question: 'How can I activate Storyclash influencer data across tools with Segment?', answer: 'Use Segment to route Storyclash influencer data to analytics, CRM, email, advertising and marketing automation tools. Creator insights from Storyclash become available across your entire stack for targeting, personalization, suppression and reporting.' },
  { question: 'Is the Storyclash → Segment integration secure and GDPR-compliant?', answer: 'Yes. Storyclash uses encrypted API connections and secure authentication when sending data to Segment. Both platforms provide GDPR-compliant data processing and support consent-based tracking and audience management.' }
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
