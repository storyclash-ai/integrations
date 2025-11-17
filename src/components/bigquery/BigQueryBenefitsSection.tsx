import { ConnectIcon, ChartIcon, AutomateIcon } from '../icons/CustomIcons';

const benefits = [
  {
    icon: ConnectIcon,
    title: 'SQL-powered creator analytics',
    description: 'Storyclash automatically exports creator and campaign metrics to BigQuery, keeping your warehouse updated without manual pipelines.'
  },
  {
    icon: ChartIcon,
    title: 'Scalable data processing',
    description: 'Store unlimited creator metrics in BigQuery with serverless infrastructure that scales automatically for petabyte-level analysis.'
  },
  {
    icon: AutomateIcon,
    title: 'Real-time data pipelines',
    description: 'Stream influencer performance data into BigQuery for real-time dashboards and automated reporting workflows.'
  }
];

export default function BigQueryBenefitsSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="mb-4" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Store Creator Performance Data in BigQuery
        </h2>
          <p className="max-w-2xl mx-auto" style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
            Connect BigQuery with influencer intelligence for enterprise-scale analytics
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const colors = ['#19B776', '#D1215D', '#F49D3B'];
            return (
              <div
                key={index}
                className="group relative p-8 bg-white border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:-translate-y-1"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`, borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: '20px' }}></div>
                <div className="relative">
                  <div className="w-12 h-12 flex items-center justify-center mb-6 transition-colors duration-300" style={{ color: colors[index] }}>
                    <Icon />
                  </div>
                  <h3 className="mb-3" style={{ fontSize: '20px', lineHeight: '1.1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                    {benefit.title}
                  </h3>
                  <p style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
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
