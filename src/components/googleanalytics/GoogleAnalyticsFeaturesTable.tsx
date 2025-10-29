import { Check } from 'lucide-react';

const features = [
  {
    name: 'GA4 Custom Dimensions',
    description: 'Send creator campaign data as custom dimensions to Google Analytics 4 for advanced segmentation.'
  },
  {
    name: 'UTM Parameter Tracking',
    description: 'Automatically track influencer campaigns with standardized UTM parameters for accurate attribution.'
  },
  {
    name: 'Event-Based Analytics',
    description: 'Track creator-specific events like content views, clicks, and conversions in Google Analytics.'
  },
  {
    name: 'Cross-Campaign Reporting',
    description: 'Consolidate data from multiple influencer campaigns into unified Google Analytics reports.'
  },
  {
    name: 'Real-Time Data Sync',
    description: 'Keep Google Analytics dashboards updated with the latest creator performance metrics automatically.'
  }
];

export default function GoogleAnalyticsFeaturesTable() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#E5EAEC' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 text-center mb-16">
          Enterprise-Grade Features
        </h2>
        <div className="bg-white rounded-2xl shadow-sm border-2 border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-200">
            {features.map((feature, index) => (
              <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E5EAEC' }}>
                    <Check className="w-5 h-5" style={{ color: '#F9AB00' }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-black text-gray-900 mb-2">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
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
