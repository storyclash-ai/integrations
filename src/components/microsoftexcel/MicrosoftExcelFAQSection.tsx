import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What file formats does the Storyclash Excel export support?',
    answer: 'Storyclash exports influencer and creator data as XLSX or CSV (universal format). Both export types are fully compatible with Microsoft Excel, Google Sheets and other spreadsheet tools.'
  },
  {
    question: 'Can I customize which Storyclash creator and campaign data is exported to Excel?',
    answer: 'Yes. You can choose exactly which Storyclash metrics to export to Excel – for example engagement, reach, impressions, clicks, conversions, revenue, discount code usage or custom fields. Filter by date range, campaign or creator segments and only download the influencer data you need.'
  },
  {
    question: 'Is historical influencer performance data available when exporting from Storyclash to Excel?',
    answer: 'Yes. Storyclash lets you export historical influencer performance data for any date range into Excel. This makes it easy to run trend analyses, compare campaign periods and build year-over-year reports in your spreadsheets.'
  },
  {
    question: 'Can I use my existing Excel templates and dashboards with Storyclash exports?',
    answer: 'Yes. Storyclash exports come in a structured, tabular format that works seamlessly with your existing Excel templates, formulas, pivot tables and dashboards. Simply connect the exported data to your current models and reporting logic.'
  }
];

export default function MicrosoftExcelFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Excel Export FAQ
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
