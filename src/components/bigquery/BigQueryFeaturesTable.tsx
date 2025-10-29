import { Check } from 'lucide-react';

const features = [
  {
    name: 'SQL Query Interface',
    description: 'Run standard SQL queries on creator metrics stored in BigQuery tables with full JOIN, aggregate, and window function support.'
  },
  {
    name: 'Data Export & Import',
    description: 'Load influencer data into BigQuery via API, Cloud Storage, or scheduled transfers with automatic schema detection.'
  },
  {
    name: 'Integration with GCP',
    description: 'Connect BigQuery to Looker Studio, Data Studio, Vertex AI, and other Google Cloud services for extended analytics.'
  },
  {
    name: 'Cost-Effective Storage',
    description: 'Store historical creator data affordably with BigQuery\'s columnar storage and pay only for queries you run.'
  }
];

export default function BigQueryFeaturesTable() {
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
    </section>
  );
}
