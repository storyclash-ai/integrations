import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How do I connect Storyclash with Cloudflare?',
    answer: 'Use your Storyclash API key and connect via Cloudflare Web Connector or REST API.'
  },
  {
    question: 'Which metrics are included?',
    answer: 'Revenue, conversions, ROAS, EMV, engagement rate, impressions and more - all per creator and campaign.'
  },
  {
    question: 'How often is data updated?',
    answer: 'Automatically synced in near real-time (depending on your Cloudflare refresh settings).'
  },
  {
    question: 'Do I need a developer?',
    answer: 'No - business users can connect Storyclash to Cloudflare in minutes.'
  },
  {
    question: 'Is the integration GDPR compliant?',
    answer: 'Yes - all data is securely stored in the EU and processed under GDPR compliance.'
  }
];

export default function CloudflareFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 text-center mb-16">
          Cloudflare Integration FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 rounded-2xl overflow-hidden" style={{ borderColor: '#E5EAEC' }}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-black text-gray-900 pr-4">
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
                  <p className="text-gray-600 leading-relaxed">
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
