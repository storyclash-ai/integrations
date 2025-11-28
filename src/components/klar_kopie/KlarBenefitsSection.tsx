import { ConnectIcon, ChartIcon, AutomateIcon } from '../icons/CustomIcons';

const benefits = [
  {
    icon: ConnectIcon,
    color: '#19B776',
    title: 'Direct Klar Integration',
    description: 'Storyclash exports creator metrics and campaign data to Klar via REST API, enabling fully customized influencer analytics within your commerce platform.'
  },
  {
    icon: ChartIcon,
    color: '#D1215D',
    title: 'Code-Based Revenue Attribution',
    description: 'Connect creator activity to sales, revenue, and customer lifetime value using Klar\'s discount code attribution. Track which creators drive actual purchases.'
  },
  {
    icon: AutomateIcon,
    color: '#F49D3B',
    title: 'Automated Influencer Reporting',
    description: 'Keep your Klar analytics current with automatic data export from active creator campaigns and continuous performance tracking.'
  }
];

export default function KlarBenefitsSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="mb-4" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Build Commerce-Driven Influencer Analytics in Klar
        </h2>
          <p className="max-w-2xl mx-auto" style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
            Leverage Klar's analytics platform to measure creator ROI and attribute revenue to influencer campaigns
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-white border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:-translate-y-1"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`, borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: '20px' }}></div>
                <div className="relative">
                  <div className="w-12 h-12 flex items-center justify-center mb-6 transition-colors duration-300" style={{ color: benefit.color }}>
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
