import { Check } from 'lucide-react';

const features = [
  {
    name: 'Native Tableau Connector',
    description: 'Seamless integration with Tableau Desktop, Server, and Online.'
  },
  {
    name: 'Live Data Connection',
    description: 'Real-time updates ensure your dashboards always reflect current performance.'
  },
  {
    name: 'Complete Metric Coverage',
    description: 'Access all creator KPIs: engagement, reach, EMV, conversions, audience demographics.'
  },
  {
    name: 'Cross-Platform Analysis',
    description: 'Unify data from Instagram, TikTok, YouTube, and more in a single view.'
  },
  {
    name: 'Secure & Scalable',
    description: 'Enterprise-grade security with role-based access control and encrypted connections.'
  }
];

export default function TableauFeaturesTable() {
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
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(233, 118, 39, 0.1)' }}>
                    <Check className="w-5 h-5" style={{ color: '#E97627' }} />
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
