import { Check } from 'lucide-react';

const features = [
  {
    name: 'Conversion Tracking',
    description: 'Track influencer-driven conversions in Google Ads with UTM parameters and conversion pixels. Measure which creators deliver real business results.'
  },
  {
    name: 'Audience Building',
    description: 'Export creator audience segments to Google Ads for lookalike targeting. Reach users similar to high-performing influencer followers.'
  },
  {
    name: 'Campaign Optimization',
    description: 'Analyze creator content performance in Google Ads dashboards. Identify top-performing influencers and reallocate budgets for maximum ROI.'
  },
  {
    name: 'Budget Management',
    description: 'Set automated budget rules based on creator campaign performance. Scale winning influencer content and pause underperforming ads.'
  }
];

export default function GoogleAdsFeaturesTable() {
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
                    <Check className="w-5 h-5" style={{ color: '#4285F4' }} />
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
