import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash integrate with Snowflake?',
    answer: 'Use Storyclash API to extract creator data and load it into Snowflake via Snowpipe, Python connectors, or your preferred ETL tool. The API provides structured JSON data that maps cleanly to Snowflake tables.'
  },
  {
    question: 'What influencer data can I store in Snowflake?',
    answer: 'All creator metrics including reach, engagement, conversions, campaign performance, content analytics, and ROI - stored as structured tables ready for SQL queries and joins with other datasets.'
  },
  {
    question: 'Can I combine Storyclash data with other sources?',
    answer: 'Yes - that\'s the power of Snowflake. Join influencer data with sales, CRM, web analytics, and any other data source in your warehouse for comprehensive multi-channel analysis.'
  },
  {
    question: 'How do I keep the data updated?',
    answer: 'Set up automated ETL pipelines using tools like Airflow, Fivetran, or custom Python scripts that regularly pull fresh data from Storyclash API into your Snowflake tables.'
  },
  {
    question: 'What are the performance considerations?',
    answer: 'Snowflake handles large-scale influencer datasets efficiently. Storyclash provides clean, structured data optimized for warehouse performance. Use appropriate clustering and partitioning for optimal query speed.'
  }
];

export default function SnowflakeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 text-center mb-16">
          Snowflake Integration FAQ
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
                  style={{ color: '#29B5E8' }}
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
