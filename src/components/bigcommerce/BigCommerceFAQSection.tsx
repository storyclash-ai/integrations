import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash measure influencer ROI in BigCommerce?',
    answer: 'Storyclash connects to BigCommerce via OAuth API and tracks revenue, conversions, and AOV by matching UTM parameters, discount codes, and referral URLs to creator campaigns. The platform syncs BigCommerce order data in real-time, calculating ROI, ROAS, customer acquisition cost, and LTV per influencer. Dashboards show which creators drive sales across channels, product categories, and customer segments-optimizing social commerce spend for growing brands.'
  },
  {
    question: 'What influencer metrics can I track in BigCommerce with Storyclash?',
    answer: 'Track revenue attribution by creator and campaign, conversion rates, average order value, customer lifetime value, return on ad spend, earned media value, product performance by SKU, cart metrics, checkout behavior, and multi-channel attribution. All data syncs from BigCommerce APIs and supports multi-store reporting, B2B wholesale tracking, and custom field mapping-giving ecommerce teams complete visibility into creator-driven sales performance.'
  },
  {
    question: 'How does Storyclash attribute BigCommerce sales to specific influencers?',
    answer: 'Attribution uses UTM parameters, tracking pixels, unique promotional codes, and referral URLs to match BigCommerce orders to influencer content. The system captures the full customer journey from creator touchpoint through checkout, handling multi-touch scenarios where customers interact with multiple creators. First-click, last-click, and linear attribution models ensure accurate revenue tracking across complex BigCommerce sales funnels.'
  },
  {
    question: 'Can I track multiple BigCommerce stores with one Storyclash account?',
    answer: 'Yes. Connect multiple BigCommerce stores to a single Storyclash account for consolidated cross-store reporting and unified creator performance tracking. The platform supports multi-store setups including separate brands, regional stores, B2B wholesale portals, and test environments-with store-level segmentation in dashboards. Perfect for brands managing multiple BigCommerce storefronts or operating international ecommerce operations with centralized influencer marketing teams.'
  },
  {
    question: 'Is Storyclash\'s BigCommerce integration secure and GDPR compliant?',
    answer: 'Yes. All BigCommerce customer and order data is encrypted in transit and at rest, stored in EU-based data centers, and processed under GDPR compliance. Storyclash uses OAuth 2.0 authentication with scoped permissions, supports data processing agreements, audit logging, and role-based access control. The integration meets BigCommerce security standards and ecommerce privacy requirements including PCI DSS Level 1 for payment data handling.'
  }
];

export default function BigCommerceFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          BigCommerce Integration FAQ
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
