import { ConnectIcon, ChartIcon, AutomateIcon } from '../icons/CustomIcons';

const benefits = [
  {
    icon: ConnectIcon,
    color: '#19B776',
    title: 'Unified Commerce Dashboard',
    description: 'View creator metrics alongside Shopify data - track influencer revenue, orders, and CAC in Triple Whale\'s unified analytics dashboard.'
  },
  {
    icon: ChartIcon,
    color: '#D1215D',
    title: 'Pixel-Perfect Attribution',
    description: 'Track creator touchpoints with pixel data - Triple Whale\'s pixel captures influencer interactions for accurate multi-touch attribution.'
  },
  {
    icon: AutomateIcon,
    color: '#F49D3B',
    title: 'Automated Reporting',
    description: 'Daily creator performance updates - receive automated Slack or email reports with influencer metrics alongside other marketing channels.'
  }
];

export default function TripleWhaleBenefitsSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="mb-4" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
            E-commerce Analytics for Influencers
          </h2>
          <p className="max-w-2xl mx-auto" style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
            Unify creator performance with Shopify sales, ad spend, and revenue metrics
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
