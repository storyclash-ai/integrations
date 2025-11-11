import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash integrate with commercetools?',
    answer: 'Storyclash connects to commercetools via secure API authentication, syncing order data, customer information, and product details. We track which influencers drive actual sales with accurate attribution and ROI measurement.'
  },
  {
    question: 'Can I track both B2B and B2C sales attribution?',
    answer: 'Yes - the integration works for both B2B and B2C storefronts. You get separate ROI reporting for each customer type so you can see which creators drive value in each segment.'
  },
  {
    question: 'How does influencer attribution work?',
    answer: 'We match influencer campaigns to commercetools orders using UTM parameters, unique discount codes, and referral URLs. This gives you clear attribution showing which creators drive conversions and revenue.'
  },
  {
    question: 'Can I see real-time influencer performance?',
    answer: 'Yes - influencer metrics update automatically as orders complete in commercetools. See live performance data on revenue, conversions, AOV, and ROI per creator without delays.'
  },
  {
    question: 'Can I track multiple commercetools storefronts?',
    answer: 'Each Storyclash workspace connects to one commercetools instance. For multiple stores, you can create separate workspaces to track each storefront\'s creator performance independently.'
  }
];

export default function CommercetoolsFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          commercetools Integration FAQ
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
