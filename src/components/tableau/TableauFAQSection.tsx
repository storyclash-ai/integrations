import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How do I connect Storyclash influencer data to Tableau via REST API?',
    answer: 'Storyclash connects to Tableau as a REST API data source. After authenticating with your API token, Storyclash exports creator and campaign metrics directly to Tableau so you can build interactive influencer dashboards without manual file uploads.'
  },
  {
    question: 'Which Storyclash metrics can I visualize in Tableau dashboards?',
    answer: 'You can visualize Storyclash metrics such as impressions, reach, engagement, engagement rate, EMV, conversions, attributed revenue, ROI, ROAS and creator-level KPIs. Tableau can blend these metrics with your BI or sales data.'
  },
  {
    question: 'How often does Storyclash sync creator and campaign data to Tableau?',
    answer: 'Storyclash updates data via API on the schedule you configure. Tableau refreshes your dashboards automatically so stakeholders always see up-to-date influencer performance.'
  },
  {
    question: 'Do I need technical skills to connect Storyclash to Tableau?',
    answer: 'Yes, you need some technical skills to set up the REST API connection with your API key. However, once connected, any Tableau user can build dashboards without additional technical expertise.'
  },
  {
    question: 'Is the Storyclash → Tableau integration secure and GDPR-compliant?',
    answer: 'Yes. Storyclash uses encrypted REST API endpoints, secure token-based authentication, and GDPR-compliant EU hosting. Access can be restricted via roles and audit logs.'
  }
];

export default function TableauFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Tableau Integration FAQ
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
