import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash receive SAP Commerce Cloud orders, revenue and discount code data?',
    answer: 'Storyclash connects to SAP Commerce Cloud via a secure connector and automatically receives orders, revenue, discount code usage and customer events from your store. These e-commerce signals are matched with creator content to measure real sales impact and calculate influencer ROI inside Storyclash.'
  },
  {
    question: 'Which SAP Commerce Cloud metrics can be imported into Storyclash for influencer revenue attribution?',
    answer: 'Storyclash imports SAP Commerce Cloud metrics such as orders, revenue, net sales, products sold, discount code usage, cart values, refunds, conversions, first-time vs. returning customers, customer acquisition cost (CAC), and return on ad spend (ROAS). These shop metrics are combined with creator engagement data to deliver accurate revenue attribution for every influencer campaign.'
  },
  {
    question: 'How does Storyclash attribute SAP Commerce Cloud orders to specific creators and campaigns?',
    answer: 'Storyclash uses unique discount codes to connect SAP Commerce Cloud orders to specific creators and campaigns. When a customer uses a creator\'s discount code at checkout, the sale is automatically attributed to that influencer, enabling accurate ROI measurement and performance tracking.'
  },
  {
    question: 'Do I need a developer to integrate SAP Commerce Cloud with Storyclash?',
    answer: 'No. SAP Commerce Cloud can be connected to Storyclash without any developer support. Simply activate the connector in Storyclash, add the tracking snippet to your SAP Commerce Cloud store and e-commerce data starts flowing into Storyclash automatically.'
  },
  {
    question: 'Is the SAP Commerce Cloud → Storyclash connector GDPR-compliant and secure?',
    answer: 'Yes. The SAP Commerce Cloud connector is fully GDPR-compliant, EU-hosted and encrypted to enterprise standards. Storyclash offers role-based access, SSO and secure data handling for all e-commerce and creator metrics.'
  }
];

export default function SAPCommerceFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          SAP Commerce Cloud Integration FAQ
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
