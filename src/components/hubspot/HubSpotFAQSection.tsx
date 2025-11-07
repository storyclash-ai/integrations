import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash integrate with HubSpot?',
    answer: 'Connect via OAuth authentication to automatically sync creator profiles as HubSpot contacts, link campaigns to deals, and map influencer metrics to custom CRM properties.'
  },
  {
    question: 'What creator data syncs to HubSpot?',
    answer: 'Influencer profiles become contacts with properties including follower count, engagement rate, niche, contact info, and campaign history. Campaign metrics sync to deal properties and custom fields.'
  },
  {
    question: 'Can I trigger HubSpot workflows with creator actions?',
    answer: 'Yes - set up workflows triggered by creator milestones like campaign completion, performance thresholds reached, or content published. Automate follow-ups and reporting.'
  },
  {
    question: 'How do I track influencer campaign ROI in HubSpot?',
    answer: 'Link campaigns to HubSpot deals with revenue attribution. Track creator-driven pipeline, closed deals, and revenue using HubSpot\'s reporting tools combined with Storyclash performance data.'
  },
  {
    question: 'Does the integration work with HubSpot\'s free tier?',
    answer: 'The integration works with all HubSpot tiers. Advanced features like custom properties, workflows, and attribution reporting require HubSpot Professional or Enterprise plans.'
  }
];

export default function HubSpotFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 text-center mb-16">
          HubSpot Integration FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 rounded-2xl overflow-hidden" style={{ borderColor: '#E5EAEC' }}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-black text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: '#FF7A59' }}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
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
