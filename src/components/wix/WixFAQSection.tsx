import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash receive Wix orders, revenue and customer data?',
    answer: 'Storyclash receives orders, revenue, products and customer events from your Wix store via a secure connector. All ecommerce data is unified inside Storyclash and linked with creator activity for full-funnel reporting.'
  },
  {
    question: 'Which Wix ecommerce metrics can be imported into Storyclash for influencer revenue attribution?',
    answer: 'Storyclash ingests Wix metrics such as orders, revenue, products sold, discount code usage, AOV, refunds, new vs. returning customers and timestamps for accurate revenue attribution.'
  },
  {
    question: 'How does Storyclash attribute Wix orders to specific creators and campaigns?',
    answer: 'Storyclash uses unique discount codes to connect Wix orders to specific creators and campaigns. When a customer uses a creator\'s discount code at checkout, the sale is automatically attributed to that influencer, enabling accurate ROI measurement and performance tracking.'
  },
  {
    question: 'Do I need a developer to connect Wix with Storyclash?',
    answer: 'No. Wix can be connected to Storyclash without any backend development. Activate the Wix connector in Storyclash, add the snippet to your store and data will start syncing automatically.'
  },
  {
    question: 'Is the Wix → Storyclash connector GDPR-compliant and secure?',
    answer: 'Yes. The Wix → Storyclash connector is fully GDPR-compliant, encrypted and EU-hosted, with SSO and role-based access for enterprise-grade security.'
  }
];

export default function WixFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Wix Integration FAQ
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
