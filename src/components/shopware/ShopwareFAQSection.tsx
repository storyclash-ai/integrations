import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash integrate with Shopware?',
    answer: 'Use your Storyclash API credentials to connect via REST API or data connector. The integration syncs creator campaign data directly with your Shopware analytics and reporting tools.'
  },
  {
    question: 'What influencer data can I sync with Shopware?',
    answer: 'Revenue attribution, conversion rates, ROAS, EMV, engagement metrics, impressions, and more - all segmented by creator and campaign. Track which influencers drive real ecommerce results in your Shopware store.'
  },
  {
    question: 'How often does data sync?',
    answer: 'Data syncs automatically in near real-time, keeping your Shopware dashboards up-to-date with the latest creator performance metrics.'
  },
  {
    question: 'Do I need technical expertise to set this up?',
    answer: 'No - marketing and ecommerce teams can connect Storyclash to Shopware in minutes without developer support.'
  },
  {
    question: 'Is the integration GDPR compliant?',
    answer: 'Yes - all data is securely stored in the EU and processed under strict GDPR compliance standards for ecommerce and marketing data.'
  }
];

export default function ShopwareFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 text-center mb-16">
          Shopware Integration FAQ
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
                  style={{ color: '#189EFF' }}
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
