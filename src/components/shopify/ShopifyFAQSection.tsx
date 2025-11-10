import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash measure influencer ROI in Shopify?',
    answer: 'Storyclash connects to Shopify via REST API and tracks revenue, conversions, and AOV by matching UTM parameters and discount codes to creator campaigns. Results flow via API to your analytics dashboards showing ROI, ROAS, customer acquisition cost, and repeat purchase rates per influencer-enabling teams to compare creator performance and optimize social commerce spend.'
  },
  {
    question: 'What influencer metrics can I track in Shopify with Storyclash?',
    answer: 'Track revenue attribution, conversion rates, average order value (AOV), customer lifetime value (LTV), return on ad spend (ROAS), earned media value (EMV), engagement rates, impressions, and click-through rates. All metrics are segmented by creator, campaign, product SKU, and time period-giving you complete visibility into which influencers drive profitable sales in your Shopify store.'
  },
  {
    question: 'How does attribution work for Shopify influencer campaigns?',
    answer: 'Storyclash uses first-party tracking via UTM parameters, unique discount codes, and referral URLs to attribute Shopify orders to specific creators and campaigns. The system captures customer journey data from initial click through purchase, handling multi-touch attribution scenarios. This ensures accurate ROI measurement even when customers interact with multiple influencer posts before buying.'
  },
  {
    question: 'Can I connect Storyclash to Shopify without a developer?',
    answer: 'Yes. Marketing and ecommerce teams can connect Storyclash to Shopify using the REST API with API key authentication. Our documentation guides you through the setup process-simply generate your API key, configure the connection, and creator campaign data flows automatically via API to your analytics dashboards with configurable refresh intervals for near real-time reporting.'
  },
  {
    question: 'Is Storyclash\'s Shopify integration GDPR compliant?',
    answer: 'Yes. All Shopify customer and order data is encrypted in transit and at rest, stored in EU-based data centers, and processed under GDPR compliance. Storyclash is SOC 2 Type II certified and supports data processing agreements (DPAs), role-based access control, audit logging, and data retention policies that meet ecommerce security and privacy requirements.'
  }
];

export default function ShopifyFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Shopify Integration FAQ
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
