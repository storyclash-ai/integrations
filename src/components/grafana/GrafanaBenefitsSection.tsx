import { ConnectIcon, ChartIcon, AutomateIcon } from '../icons/CustomIcons';

const benefits = [
  {
    icon: ConnectIcon,
    color: '#19B776',
    title: 'Real-Time Monitoring',
    description: 'Track creator performance metrics live - Grafana dashboards update automatically as influencer data streams in.'
  },
  {
    icon: ChartIcon,
    color: '#D1215D',
    title: 'Custom Alerts',
    description: 'Get notified when campaigns exceed thresholds - set alerts for engagement drops, viral content, or conversion spikes.'
  },
  {
    icon: AutomateIcon,
    color: '#F49D3B',
    title: 'Time-Series Analysis',
    description: 'Analyze creator trends over time - visualize influencer performance patterns with powerful time-series queries.'
  }
];

export default function GrafanaBenefitsSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="mb-4" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
            Observability for Creator Campaigns
          </h2>
          <p className="max-w-2xl mx-auto" style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
            Monitor influencer performance with real-time dashboards and intelligent alerting
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-white border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s`, borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
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
    </section>
  );
}
