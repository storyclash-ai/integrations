import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Do I need SQL skills to use Metabase?',
    answer: 'No - Metabase provides a visual query builder for exploring creator data. Ask questions naturally and Metabase generates the queries automatically. SQL expertise is optional for advanced use cases.'
  },
  {
    question: 'Can I self-host Metabase?',
    answer: 'Yes - Metabase is open-source and can be self-hosted on your infrastructure. Alternatively, use Metabase Cloud for managed hosting. Both options connect to Storyclash data.'
  },
  {
    question: 'What creator metrics are available?',
    answer: 'All Storyclash metrics are available in Metabase including engagement rates, reach, conversions, ROI, and custom performance indicators. Build any analysis your team needs.'
  },
  {
    question: 'Can multiple teams use Metabase?',
    answer: 'Yes - Metabase supports multi-user access with permission controls. Enable self-service analytics across your organization while maintaining appropriate data access boundaries.'
  }
];

export default function MetabaseFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Metabase Integration FAQ
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
