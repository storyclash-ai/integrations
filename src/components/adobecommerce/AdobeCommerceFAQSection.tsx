import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash measure influencer ROI in Adobe Commerce?',
    answer: 'Storyclash connects to Adobe Commerce (Magento) via REST API with OAuth 2.0 authentication, syncing order data, revenue, and customer segments. The platform attributes sales to creators using UTM tracking, discount codes, and multi-touch attribution models-calculating ROI, ROAS, AOV, and LTV per influencer. Enterprise dashboards show which creators drive revenue across multiple store views, regions, and customer segments with full Adobe Analytics integration.'
  },
  {
    question: 'What influencer metrics can I track in Adobe Commerce with Storyclash?',
    answer: 'Track revenue attribution by creator and campaign, conversion rates, average order value, customer lifetime value, return on ad spend, earned media value, product performance by SKU, cart abandonment rates, cross-sell impact, and customer segment behavior. All metrics sync to Adobe Commerce data models and support multi-store reporting, B2B account analysis, and custom attribute mapping for enterprise merchandising and marketing teams.'
  },
  {
    question: 'How does Storyclash attribute Adobe Commerce sales to influencers?',
    answer: 'Attribution combines first-party tracking pixels, UTM parameters, unique promotional codes, and referral URLs to match Adobe Commerce orders to creator campaigns. The system supports multi-touch attribution across customer segments, store views, and sales channels-handling complex B2B scenarios, account-based purchases, and cross-border transactions. Integration with Adobe Analytics provides unified customer journey visibility from influencer touchpoint to purchase.'
  },
  {
    question: 'Can I connect Storyclash to Adobe Commerce without a developer?',
    answer: 'Adobe Commerce integrations typically require IT involvement for initial API authentication, OAuth configuration, and security policy setup. However, once connected, marketing teams manage creator tracking, campaign attribution, and reporting independently through the Storyclash dashboard. Enterprise customers receive dedicated onboarding support including API configuration, custom attribute mapping, and multi-store setup assistance for complex Adobe Commerce deployments.'
  },
  {
    question: 'Is Storyclash\'s Adobe Commerce integration enterprise-secure and GDPR compliant?',
    answer: 'Yes. Storyclash is GDPR compliant and supports data processing agreements (DPAs). The integration supports enterprise security requirements including single sign-on (SSO), role-based access control (RBAC), audit logging, data encryption at rest and in transit, and custom data retention policies. All Adobe Commerce customer data is stored in EU-based data centers with DPA support, meeting Magento Enterprise and Adobe Experience Cloud security standards.'
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
