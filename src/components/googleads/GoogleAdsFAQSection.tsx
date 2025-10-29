import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash integrate with Google Ads?',
    answer: 'Connect via Google Ads API to sync conversion tracking, audience segments, and campaign performance data. Storyclash automatically tags influencer content with UTM parameters for attribution.'
  },
  {
    question: 'Can I track influencer conversions in Google Ads?',
    answer: 'Yes - Storyclash links creator content to Google Ads conversion pixels and UTM parameters. Track which influencers drive purchases, signups, and revenue directly in Google Ads dashboards.'
  },
  {
    question: 'How do I build audiences from creator data?',
    answer: 'Export high-performing creator audience segments to Google Ads as customer match lists or lookalike audiences. Target users similar to engaged influencer followers for better conversion rates.'
  },
  {
    question: 'Can I optimize ad budgets based on creator performance?',
    answer: 'Yes - analyze creator campaign ROI in Google Ads and adjust budgets accordingly. Storyclash shows which influencers deliver the best ROAS so you can scale winning campaigns and pause underperformers.'
  }
];

export default function GoogleAdsFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 text-center mb-16">
          Google Ads Integration FAQ
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
                  style={{ color: '#4285F4' }}
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
    </section>
  );
}
