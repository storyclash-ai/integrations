import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash measure influencer ROI in WooCommerce?',
    answer: 'Storyclash connects to WooCommerce via REST API and attributes revenue, conversions, and AOV to influencers using discount code tracking, UTM parameters, and referral URLs. The platform combines WooCommerce order data with campaign metrics to calculate ROI, ROAS, and customer acquisition cost per creator-showing which influencers drive profitable sales and repeat purchases in your WordPress store.'
  },
  {
    question: 'What influencer data can I sync from WooCommerce to Storyclash?',
    answer: 'Sync order revenue, product SKUs, conversion events, customer segments, discount code usage, cart values, refund rates, and purchase timestamps from WooCommerce. Storyclash matches this data to creator campaigns, providing metrics like revenue attribution, AOV, LTV, ROAS, EMV, engagement rates, and traffic sources-all segmented by influencer, campaign, and product category for actionable WordPress ecommerce insights.'
  },
  {
    question: 'How does Storyclash attribute WooCommerce sales to specific influencers?',
    answer: 'Attribution uses unique discount codes, UTM parameters in referral URLs, and tracking pixels to match WooCommerce orders to creator content. The system captures the customer journey from influencer post click to checkout, handling multi-touch scenarios where customers engage with multiple creators. This ensures accurate revenue attribution even in complex WordPress sales funnels.'
  },
  {
    question: 'Can I connect Storyclash to WooCommerce without developer help?',
    answer: 'Yes. Marketing teams can connect Storyclash to WooCommerce using the REST API with API key authentication through your WordPress admin panel. Our documentation guides you through the setup-simply enter your API credentials in WooCommerce settings, and creator campaign data syncs automatically. The integration works with any WooCommerce setup, including multi-site WordPress installations and custom themes.'
  },
  {
    question: 'Is Storyclash\'s WooCommerce integration GDPR compliant?',
    answer: 'Yes. All WooCommerce order and customer data is encrypted, stored in EU data centers, and processed under GDPR compliance. Storyclash supports data processing agreements, customer data deletion requests, consent management, and audit logging-meeting WordPress and WooCommerce privacy requirements. The integration respects WooCommerce privacy settings and customer opt-out preferences automatically.'
  }
];

export default function WooCommerceFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          WooCommerce Integration FAQ
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
