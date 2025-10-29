import { Check } from 'lucide-react';

const features = [
  { name: 'Event Tracking', description: 'Send creator engagement events to Segment with standard event schemas for consistent data across all tools.' },
  { name: 'Customer Profiles', description: 'Enrich Segment customer profiles with influencer interaction data for complete behavioral insights.' },
  { name: 'Multi-Destination Routing', description: 'Route creator data to 300+ destinations including analytics, CRM, email, and advertising platforms automatically.' },
  { name: 'Real-Time Sync', description: 'Stream influencer events to Segment in real-time for immediate downstream processing and activation.' }
];

export default function SegmentFeaturesTable() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#E5EAEC' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 text-center mb-16">Enterprise-Grade Features</h2>
        <div className="bg-white rounded-2xl shadow-sm border-2 border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-200">
            {features.map((feature, index) => (
              <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E5EAEC' }}>
                    <Check className="w-5 h-5" style={{ color: '#52BD94' }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-black text-gray-900 mb-2">{feature.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
