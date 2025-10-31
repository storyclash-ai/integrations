import { Check } from 'lucide-react';

const features = [
  {
    name: 'Glue API Integration',
    description: 'Native connection to Spryker Glue API - flexible access to your custom commerce data structures and logic.'
  },
  {
    name: 'Custom Data Model Support',
    description: 'Map influencer attribution to your unique Spryker data model - not constrained by rigid templates.'
  },
  {
    name: 'B2B & B2C Unified Tracking',
    description: 'Track creator performance across both B2B marketplaces and B2C storefronts with one integration.'
  },
  {
    name: 'Modular Architecture',
    description: 'Add new storefronts, markets, and attribution models without rebuilding - true composable commerce.'
  },
  {
    name: 'Multi-Tenant Support',
    description: 'Separate reporting per brand or business unit while maintaining centralized governance and data consistency.'
  }
];

export default function SprykerFeaturesTable() {
  return (
    <section className="py-20" style={{ backgroundColor: '#FAFAFA', padding: '80px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Composable Features
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
    </section>
  );
}
