import { Check } from 'lucide-react';

const features = [
  {
    name: 'Automated Data Export',
    description: 'Schedule automatic exports of creator metrics to Google Sheets - daily, weekly, or real-time updates.'
  },
  {
    name: 'Custom Field Selection',
    description: 'Choose which metrics to export - engagement, reach, conversions, revenue, or any custom fields you track.'
  },
  {
    name: 'Team Collaboration',
    description: 'Share sheets with unlimited stakeholders - everyone sees the same real-time influencer data.'
  },
  {
    name: 'Formula-Based Analysis',
    description: 'Use Google Sheets formulas, pivot tables, and charts to analyze creator performance your way.'
  },
  {
    name: 'Historical Data Access',
    description: 'Export historical campaign data for trend analysis and year-over-year performance comparisons.'
  }
];

export default function GoogleSheetsFeaturesTable() {
  return (
    <section className="py-20" style={{ backgroundColor: '#FAFAFA', padding: '80px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Export Features
        </h2>
        <div className="bg-white border-2 border-gray-100 overflow-hidden" style={{ borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
          <div className="divide-y divide-gray-200">
            {features.map((feature, index) => (
              <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E5EAEC', borderRadius: '20px' }}>
                    <Check className="w-5 h-5" style={{ color: '#19B776' }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2" style={{ fontSize: '18px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                      {feature.name}
                    </h3>
                    <p style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
