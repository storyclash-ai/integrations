import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Does this work with both Magento 2 and Adobe Commerce?',
    answer: 'Yes – Storyclash integrates with both Magento Open Source 2.x and Adobe Commerce (formerly Magento Commerce) via a secure connector. Your stores send orders, revenue and customer events to Storyclash, where influencer campaigns are tracked and attributed across all store views.'
  },
  {
    question: 'Can I track multiple stores and websites?',
    answer: 'Absolutely. Track creator performance across multiple Magento websites, store views, and store codes with unified or separate reporting.'
  },
  {
    question: 'How is the Magento → Storyclash connection secured?',
    answer: 'The Magento → Storyclash connection is secured via an encrypted data connector with role-based access control. You control exactly which order, revenue and customer event data flows from your Magento instance into Storyclash, with full GDPR compliance and enterprise-grade security standards.'
  },
  {
    question: 'What Magento data gets synced?',
    answer: 'Order data, revenue, product SKUs, customer acquisition and conversion events are synced from your Magento stores into Storyclash and matched to specific influencer campaigns and creators.'
  },
  {
    question: 'Will this slow down my Magento store?',
    answer: 'No – data syncing happens via the Storyclash connector in an asynchronous way that does not impact storefront performance. Magento data is processed outside of the checkout flow, so your store remains fast and responsive.'
  }
];

export default function MagentoFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Magento Integration FAQ
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
