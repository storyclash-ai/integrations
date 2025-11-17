import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash send influencer and campaign data to Klar?',
    answer: 'Storyclash exports influencer and campaign performance metrics to Klar via a secure API integration. Klar combines these creator signals with your ecommerce order data so you can see how influencer content impacts revenue, conversions and customer lifetime value.'
  },
  {
    question: 'Can Klar compare creator customer lifetime value with other marketing channels?',
    answer: 'Yes. Klar tracks customer lifetime value by acquisition source and merges Storyclash creator data with your purchase behaviour. You can compare LTV of customers acquired through influencers against paid ads, email, SEO or direct traffic to understand the true long-term impact of creator campaigns.'
  },
  {
    question: 'Which attribution models does Klar use for creator campaigns?',
    answer: 'Klar supports creator-specific attribution including discount code tracking, UTM parameter mapping, and influencer link attribution. You can choose the method that best captures how each creator\'s content drives conversions and apply it to Storyclash campaign data for precise creator revenue attribution.'
  },
  {
    question: 'How does Klar calculate creator ROAS using Storyclash data?',
    answer: 'Klar calculates creator ROAS by dividing revenue attributed to each creator by the corresponding creator costs from Storyclash or your finance systems. This lets you measure the profitability of influencer campaigns based on real orders, repeat purchases and long-term customer value.'
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
