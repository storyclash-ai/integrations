import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash receive Adobe Commerce orders, revenue and customer data?',
    answer: 'Storyclash connects to Adobe Commerce via a secure connector or tracking snippet and automatically receives orders, revenue, line items, refunds and customer segments from your stores. This Adobe Commerce data is combined with creator content and campaign tracking in Storyclash, so you can measure influencer-driven revenue based on real purchases across all markets and store views.'
  },
  {
    question: 'Which Adobe Commerce metrics can be imported into Storyclash for influencer revenue reporting?',
    answer: 'Storyclash can ingest Adobe Commerce metrics such as orders, revenue, net sales, products sold, discount code usage, average order value, refunds, conversions, new vs. returning customers, customer acquisition cost (CAC), and return on ad spend (ROAS). These metrics are mapped into Storyclash and used to power creator revenue dashboards, cohort analysis and multi-store reporting.'
  },
  {
    question: 'How does Storyclash attribute Adobe Commerce orders to specific creators and campaigns?',
    answer: 'Storyclash attributes Adobe Commerce orders to creators using discount codes, UTM parameters, referral URLs and first-party tracking. Multi-touch journeys are supported, so complex B2B and B2C buying paths across store views, regions and channels can still be tied back to the right influencer and campaign.'
  },
  {
    question: 'Do I need a developer to connect Adobe Commerce with Storyclash?',
    answer: 'No. Marketing teams can connect Adobe Commerce with Storyclash using the connector. Simply activate the Adobe Commerce connector in Storyclash, install the tracking snippet in your Adobe Commerce environment, and e-commerce data will start flowing into Storyclash automatically. Your IT team can still review and approve the setup, but day-to-day management stays with marketing.'
  },
  {
    question: 'Is the Adobe Commerce → Storyclash connector enterprise-secure and GDPR-compliant?',
    answer: 'Yes. The Adobe Commerce → Storyclash connector is fully GDPR-compliant, hosted in the EU and encrypted to enterprise standards. Storyclash offers role-based access control, SSO and secure data handling for all Adobe Commerce and creator metrics, aligned with the security requirements of enterprise commerce teams.'
  }
];

export default function AdobeCommerceFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Adobe Commerce Integration FAQ
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
