import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash integrate with Looker Studio?',
    answer: 'Use the Storyclash data connector for Looker Studio to connect via API. The connector appears as a data source in Looker Studio, allowing you to build dashboards with creator campaign data.'
  },
  {
    question: 'What influencer data can I visualize in Looker Studio?',
    answer: 'All key creator metrics including reach, engagement, EMV, conversions, campaign performance, and ROI - all available as dimensions and metrics in Looker Studio charts and tables.'
  },
  {
    question: 'Can I combine Storyclash data with other sources?',
    answer: 'Yes - blend Storyclash data with Google Analytics, Google Ads, BigQuery, and other Looker Studio data sources for comprehensive cross-channel analysis.'
  },
  {
    question: 'Do I need technical skills to build dashboards?',
    answer: 'No - Looker Studio\'s drag-and-drop interface makes it easy for marketers to create professional dashboards without coding or technical expertise.'
  },
  {
    question: 'How often does data refresh in Looker Studio?',
    answer: 'Dashboards refresh automatically based on your configured schedule, ensuring stakeholders always see the latest creator performance data.'
  }
];

export default function LookerStudioFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 text-center mb-16">
          Looker Studio Integration FAQ
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
                  style={{ color: '#4285F4' }}
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
    </section>
  );
}
