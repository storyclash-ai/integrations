import { Check } from 'lucide-react';

const features = [
  { name: 'Event Tracking', description: 'Send creator engagement events to Segment with standard event schemas for consistent data across all tools.' },
  { name: 'Customer Profiles', description: 'Enrich Segment customer profiles with influencer interaction data for complete behavioral insights.' },
  { name: 'Multi-Destination Routing', description: 'Route creator data to 300+ destinations including analytics, CRM, email, and advertising platforms automatically.' },
  { name: 'Real-Time Sync', description: 'Stream influencer events to Segment in real-time for immediate downstream processing and activation.' }
];

export default function SegmentFeaturesTable() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Enterprise-Grade Features
        </h2>
        <div className="bg-white border-2 overflow-hidden" style={{ borderRadius: '20px', borderColor: '#E5EAEC', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
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
