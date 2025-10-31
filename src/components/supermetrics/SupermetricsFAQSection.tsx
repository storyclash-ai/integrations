import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What destinations does Supermetrics support?',
    answer: 'Supermetrics connects to 50+ destinations including Google Sheets, Excel, BigQuery, Snowflake, Looker, Tableau, Power BI, Data Studio, and more. Transfer creator data to any platform Supermetrics supports.'
  },
  {
    question: 'How often does creator data refresh?',
    answer: 'Configure custom refresh schedules for creator data - from hourly updates to weekly batches. Supermetrics automatically pulls the latest influencer metrics based on your schedule.'
  },
  {
    question: 'Can I combine creator data with other marketing channels?',
    answer: 'Yes - Supermetrics excels at data blending. Combine Storyclash creator metrics with Google Ads, Facebook Ads, Instagram, LinkedIn, and 150+ other marketing data sources in unified reports.'
  },
  {
    question: 'Is historical creator data available?',
    answer: 'Yes - pull historical influencer performance for trend analysis and year-over-year comparisons. Access past creator metrics dating back to when your Storyclash account started tracking.'
  }
];

export default function SupermetricsFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Supermetrics Integration FAQ
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
    </section>
  );
}
