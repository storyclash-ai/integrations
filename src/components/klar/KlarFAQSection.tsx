import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does creator attribution work in Klar?',
    answer: 'Klar uses UTM parameters, discount codes, and link tracking to attribute revenue to creators. When customers from influencer campaigns make purchases, Klar connects the sale back to the specific creator and campaign.'
  },
  {
    question: 'Can I compare creator LTV with other channels?',
    answer: 'Yes - Klar tracks customer lifetime value by acquisition channel. Compare LTV of customers acquired through creators versus paid ads, email, SEO, or direct traffic to understand true influencer value.'
  },
  {
    question: 'What attribution models does Klar support?',
    answer: 'Klar offers multiple attribution models including first-click, last-click, and linear attribution. Choose the model that best reflects how creators contribute to your customer journeys and purchasing decisions.'
  },
  {
    question: 'How is creator ROAS calculated?',
    answer: 'Klar calculates ROAS by dividing attributed revenue by creator costs. Track profitability of influencer campaigns with automatic cost tracking from Storyclash and revenue attribution from your e-commerce platform.'
  }
];

export default function KlarFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Klar Integration FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 overflow-hidden" style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`, borderColor: '#E5EAEC', borderRadius: '20px' }}>
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
