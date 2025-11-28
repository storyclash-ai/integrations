import { Check } from 'lucide-react';

const features = [
  { name: 'Storyclash Exports to Klar', description: 'Storyclash sends creator metrics to Klar via REST API. Access engagement, reach, conversions, and campaign data for commerce analytics.' },
  { name: 'Discount Code Attribution', description: 'Track influencer revenue through discount code attribution. Map sales to specific creators using codes assigned in Storyclash and analyzed in Klar.' },
  { name: 'Creator Performance Dashboards', description: 'Analyze creator performance with Klar dashboards showing code-based revenue attribution, conversions, and campaign ROI.' },
  { name: 'Cross-Platform Creator Metrics', description: 'View influencer performance across Instagram, TikTok, YouTube, and other platforms with unified reporting in Klar.' },
  { name: 'Automated Data Export', description: 'Storyclash exports creator and campaign data to Klar automatically, keeping your analytics current without manual updates.' }
];

export default function KlarFeaturesTable() {
  return (
    <section className="py-20" style={{ backgroundColor: '#FAFAFA', padding: '80px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Influencer Analytics in Klar
        </h2>
        <div className="bg-white border-2 border-gray-100 overflow-hidden" style={{ borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
          <div className="divide-y divide-gray-200">
            {features.map((feature, index) => (
              <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-200" style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}>
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
