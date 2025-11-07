import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash measure influencer ROI in Shopware?',
    answer: 'Storyclash connects to Shopware via REST API and attributes revenue, conversions, and AOV to creators using UTM parameters, discount codes, and referral tracking. The platform combines Shopware order data with campaign metrics to calculate ROI, ROAS, and customer acquisition cost per influencer-showing which creators drive profitable sales across sales channels, storefronts, and customer segments in your German or European ecommerce operations.'
  },
  {
    question: 'What influencer data can I sync from Shopware to Storyclash?',
    answer: 'Sync order revenue, product SKUs, conversion events, shopping experiences data, customer segments, promotional code usage, cart values, and sales channel performance from Shopware. Storyclash maps this to creator campaigns, providing revenue attribution, AOV, LTV, ROAS, EMV, engagement rates, and traffic sources-all segmented by influencer, campaign, storefront, and product line for actionable insights tailored to European ecommerce teams.'
  },
  {
    question: 'How does Storyclash attribute Shopware sales to specific creators?',
    answer: 'Attribution uses unique discount codes, UTM parameters in referral URLs, and tracking pixels to match Shopware orders to influencer content. The system captures customer journeys from creator post to checkout across multiple storefronts and sales channels, handling multi-touch attribution scenarios. This ensures accurate revenue tracking even when customers browse multiple Shopware Shopping Experiences before purchasing.'
  },
  {
    question: 'Can I connect Storyclash to Shopware without developer help?',
    answer: 'Yes. Marketing and ecommerce teams can connect Storyclash to Shopware via the REST API using API key authentication through your Shopware admin panel. Our documentation guides you through the setup-simply generate your API keys, configure the connection in Shopware settings, and creator campaign data syncs automatically. The integration works with Shopware 6, supports multi-storefront setups, and respects custom sales channel configurations for German and European market requirements.'
  },
  {
    question: 'Is Storyclash\'s Shopware integration GDPR compliant?',
    answer: 'Yes. All Shopware order and customer data is encrypted, stored in EU data centers (primarily in Germany), and processed under strict GDPR compliance. Storyclash supports data processing agreements, customer data deletion requests (DSGVO Article 17), consent management, and audit logging. The integration meets German ecommerce privacy requirements including Datenschutzgrundverordnung (DSGVO) and Telemediengesetz (TMG) standards.'
  }
];

export default function ShopwareFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Shopware Integration FAQ
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
