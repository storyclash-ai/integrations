import { Check } from 'lucide-react';

const features = [
  {
    name: 'Native Snowflake Integration',
    description: 'Load creator data directly into Snowflake tables using Snowpipe, Python connectors, or REST API integration.'
  },
  {
    name: 'Scalable Data Storage',
    description: 'Store unlimited influencer metrics in Snowflake with automatic scaling and performance optimization.'
  },
  {
    name: 'SQL Query Support',
    description: 'Query creator data using standard SQL alongside all your other enterprise datasets in one place.'
  },
  {
    name: 'Automated Data Refresh',
    description: 'Set up scheduled or event-driven data pipelines that keep your Snowflake tables current with latest metrics.'
  },
  {
    name: 'Multi-Tool Compatibility',
    description: 'Connect Snowflake to BI tools, ML platforms, and custom applications for flexible data consumption.'
  }
];

export default function SnowflakeFeaturesTable() {
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
                    <Check className="w-5 h-5" style={{ color: '#29B5E8' }} />
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
