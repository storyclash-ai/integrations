import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does Storyclash stream creator metrics into Grafana for real-time monitoring?',
    answer: 'Storyclash streams creator metrics to Grafana as data becomes available. Your dashboards update automatically with the latest influencer performance data without manual refreshes.'
  },
  {
    question: 'What types of alerts can I configure in Grafana with Storyclash data?',
    answer: 'Configure alerts for any creator metric – engagement rate drops, viral content detection, conversion spikes, or custom thresholds. Receive notifications via Slack, email, PagerDuty, or webhook.'
  },
  {
    question: 'Can I combine Storyclash creator data with other data sources in Grafana dashboards?',
    answer: 'Yes – Grafana supports multi-source dashboards. Correlate creator metrics from Storyclash with sales data, ad spend, website traffic, or any other data source your team monitors.'
  },
  {
    question: 'Can I monitor multiple influencer campaigns simultaneously in Grafana using Storyclash data?',
    answer: 'Yes – create dashboards for each campaign or view all campaigns in one unified dashboard. Filter by creator, campaign name, platform, or time period to monitor performance across your entire influencer strategy.'
  }
];

export default function GrafanaFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Grafana Integration FAQ
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
