import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Is the Matomo + Storyclash integration GDPR-compliant and privacy-friendly?',
    answer: 'Yes – Matomo is privacy-focused and supports GDPR compliance. The Matomo + Storyclash integration tracks creator-driven traffic and stores data on your own infrastructure. Note: In the EU, consent banners are still required for analytics tracking to comply with GDPR and ePrivacy regulations.'
  },
  {
    question: 'Can I use self-hosted or cloud Matomo with Storyclash?',
    answer: 'Yes – you can connect both self-hosted and cloud Matomo instances. Storyclash syncs creator attribution data to your infrastructure via secure API authentication.'
  },
  {
    question: 'How does Storyclash track and attribute influencer traffic in Matomo?',
    answer: 'Storyclash automatically adds UTM parameters to influencer links. Matomo tracks these parameters to attribute traffic, conversions and revenue to specific creators and campaigns inside your analytics reports.'
  },
  {
    question: 'Which Matomo metrics are tracked for influencer campaign reporting?',
    answer: 'You can track influencer engagement rate, reach, ROAS (return on ad spend), and conversions from creator campaigns. All Storyclash influencer metrics work with UTM attribution in your Matomo reports.'
  }
];

export default function MatomoFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Matomo Integration FAQ
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
