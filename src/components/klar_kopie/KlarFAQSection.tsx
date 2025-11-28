import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash send influencer and campaign data to Klar?',
    answer: 'Storyclash exports creator and campaign metrics to Klar via REST API. Klar merges these signals with your shop data so you can see how influencer activity drives revenue and customer value.'
  },
  {
    question: 'How does Klar attribute sales to creators?',
    answer: 'Klar uses code-based attribution. Discount codes assigned to creators in Storyclash map orders to campaigns, giving you clear, deterministic attribution without relying on click or UTM tracking.'
  },
  {
    question: 'Can Klar compare creator customer lifetime value with other marketing channels?',
    answer: 'Klar measures customer lifetime value by source and enriches it with Storyclash creator data so you can compare LTV from influencers with all other channels.'
  },
  {
    question: 'How does Klar calculate creator ROAS using Storyclash data?',
    answer: 'Klar calculates creator ROAS by matching attributed revenue with your creator spend, giving you a clear view of influencer profitability and long-term value.'
  },
  {
    question: 'Can I attribute historical sales to creators retroactively in Klar?',
    answer: 'Once connected, Klar links historical discount code usage from your shop to Storyclash creator assignments, enabling retroactive revenue attribution for past campaigns.'
  },
  {
    question: 'Does Klar support multi-store or multi-region setups for creator data?',
    answer: 'Storyclash exports creator data to Klar, where it can be analyzed alongside your commerce data across different business setups.'
  },
  {
    question: 'How does Storyclash handle data privacy and GDPR compliance when sending data to Klar?',
    answer: 'Storyclash exports only approved creator and campaign identifiers. All data is encrypted, processed under GDPR standards and combined with your shop data directly inside Klar.'
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
