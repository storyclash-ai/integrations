import { Check } from 'lucide-react';

const features = [
  {
    name: 'Enterprise SAP Commerce connector',
    description: 'Secure connector between SAP Commerce Cloud and Storyclash with OAuth-based authentication, full audit trails and role-based access control.'
  },
  {
    name: 'Multi-Country & Multi-Currency',
    description: 'Track creator performance across all SAP storefronts, currencies, and languages with normalized reporting.'
  },
  {
    name: 'Customer Journey Mapping',
    description: 'Connect influencer touchpoints to complete SAP customer journeys from awareness to purchase.'
  },
  {
    name: 'Business Unit Segmentation',
    description: 'Separate reporting by brand, region, or business unit while maintaining centralized governance.'
  },
  {
    name: 'Compliance & Security',
    description: 'Enterprise-grade data security with GDPR compliance, data processing agreements (DPAs), audit logging, and role-based access control built-in.'
  }
];

export default function SAPCommerceFeaturesTable() {
  return (
    <section className="py-20" style={{ backgroundColor: '#FAFAFA', padding: '80px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Enterprise-Grade Features
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
