import { ConnectIcon, ChartIcon, AutomateIcon } from '../icons/CustomIcons';

const benefits = [
  {
    icon: ConnectIcon,
    title: 'Sync creator contacts to CRM',
    description: 'Automatically sync influencer profiles from Storyclash to HubSpot contacts with enriched data including audience size, engagement, and performance metrics.'
  },
  {
    icon: ChartIcon,
    title: 'Track campaigns in your pipeline',
    description: 'Create HubSpot deals linked to influencer campaigns and track creator partnerships through your sales pipeline with custom properties.'
  },
  {
    icon: AutomateIcon,
    title: 'Measure creator ROI',
    description: 'Connect influencer performance data to revenue attribution, tracking how creator partnerships impact your pipeline and closed deals.'
  }
];

export default function HubSpotBenefitsSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Manage Creators Like Your Best Customers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect HubSpot with influencer intelligence for seamless CRM integration
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-white rounded-xl border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-12 h-12 flex items-center justify-center mb-6 text-gray-700 group-hover:text-[#FF7A59] transition-colors duration-300">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px]">
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
