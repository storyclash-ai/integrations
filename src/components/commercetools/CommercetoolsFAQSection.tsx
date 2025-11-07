import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Does this work with any frontend framework?',
    answer: 'Yes - because commercetools is headless, our integration connects to the API layer. Track influencer performance from React, Vue, iOS, Android, or any other frontend without changes to our integration.'
  },
  {
    question: 'Can I use GraphQL or REST API?',
    answer: 'Both are supported. We integrate with commercetools GraphQL and REST APIs, giving you flexibility to use whichever fits your architecture best.'
  },
  {
    question: 'How does this handle custom customer journeys?',
    answer: 'Our attribution logic adapts to your unique commercetools setup. We map influencer touchpoints to your custom journey stages, not rigid predefined funnels.'
  },
  {
    question: 'What about real-time attribution?',
    answer: 'We support GraphQL subscriptions for real-time order events, enabling near-instant influencer attribution when orders complete in commercetools.'
  },
  {
    question: 'Can I add new channels without reintegration?',
    answer: 'Yes - because we connect at the API layer, you can launch new storefronts, mobile apps, or IoT experiences without touching the influencer integration.'
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
