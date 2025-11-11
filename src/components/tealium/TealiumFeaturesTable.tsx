import { Check } from 'lucide-react';

const features = [
  { name: 'Storyclash to Tealium Connection', description: 'Send Storyclash influencer metrics to Tealium CDP via secure API. Stream creator performance data for real-time processing and activation.' },
  { name: 'Influencer Data Enrichment', description: 'Enrich customer profiles with Storyclash creator attribution data. Connect influencer impact with individual customer journeys and segments in Tealium.' },
  { name: 'Activate Influencer Insights', description: 'Route Storyclash creator metrics through Tealium to analytics, marketing, CRM, and advertising platforms for unified activation.' },
  { name: 'Real-Time Creator Events', description: 'Stream Storyclash influencer events instantly to Tealium CDP. Enrich customer data with creator context as interactions happen.' },
  { name: 'Import Segments Back to Storyclash', description: 'Export calculated segments and audiences from Tealium back to Storyclash via API. Use them for influencer scoring and segmentation.' }
];

export default function TealiumFeaturesTable() {
  return (
    <section className="py-20" style={{ backgroundColor: '#FAFAFA', padding: '80px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Influencer Data Integration with Tealium
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
