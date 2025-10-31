import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How often does creator data update in Klipfolio?',
    answer: 'Storyclash syncs influencer data to Klipfolio in real-time via API. Your dashboards update automatically as new creator performance metrics become available.'
  },
  {
    question: 'Can I combine Storyclash data with other sources?',
    answer: 'Yes - Klipfolio allows multi-source dashboards. Combine creator metrics from Storyclash with sales data, ad spend, or other marketing channels for comprehensive analysis.'
  },
  {
    question: 'What creator metrics are available?',
    answer: 'Access all Storyclash metrics including engagement rates, reach, impressions, conversions, ROI, and custom performance indicators. Build any KPI your team needs.'
  },
  {
    question: 'Can I share dashboards with my team?',
    answer: 'Yes - publish dashboards via shareable URLs, embed in websites, or schedule automated email reports. Control access permissions for different stakeholders.'
  }
];

export default function KlipfolioFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Klipfolio Integration FAQ
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
    </section>
  );
}
