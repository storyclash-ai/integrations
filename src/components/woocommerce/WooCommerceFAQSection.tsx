import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash integrate with WooCommerce?',
    answer: 'Use your Storyclash API key and connect via WooCommerce Web Connector or REST API. The integration syncs creator campaign data directly into your WooCommerce analytics and reporting tools.'
  },
  {
    question: 'What data can I sync between Storyclash and WooCommerce?',
    answer: 'Revenue, conversions, ROAS, EMV, engagement rate, impressions and more - all per creator and campaign. Track which influencers drive actual sales in your WooCommerce store and connect creator performance with order data.'
  },
  {
    question: 'How often is data updated?',
    answer: 'Automatically synced in near real-time (depending on your WooCommerce refresh settings).'
  },
  {
    question: 'Do I need a developer?',
    answer: 'No - business users can connect Storyclash to WooCommerce in minutes.'
  },
  {
    question: 'Is the integration GDPR compliant?',
    answer: 'Yes - all data is securely stored in the EU and processed under GDPR compliance.'
  }
];

export default function WooCommerceFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 text-center mb-16">
          WooCommerce Integration FAQ
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
    </section>
  );
}
