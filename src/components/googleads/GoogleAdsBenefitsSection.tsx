import { ConnectIcon, ChartIcon, AutomateIcon } from '../icons/CustomIcons';

const benefits = [
  {
    icon: ConnectIcon,
    title: 'Track creator conversions',
    description: 'Link influencer content to Google Ads conversion tracking. Measure which creators drive purchases, signups, and revenue through paid campaigns.'
  },
  {
    icon: ChartIcon,
    title: 'Optimize campaign budgets',
    description: 'Identify top-performing creator campaigns and reallocate ad spend to maximize ROI. Stop wasting budget on underperforming influencer content.'
  },
  {
    icon: AutomateIcon,
    title: 'Audience targeting insights',
    description: 'Use creator audience data to build high-performing Google Ads audiences. Target users similar to influencer followers for better conversion rates.'
  }
];

export default function GoogleAdsBenefitsSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Optimize Influencer Ad Performance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect Google Ads with creator intelligence for performance-driven campaigns
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-white rounded-xl border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-12 h-12 flex items-center justify-center mb-6 text-gray-700 group-hover:text-[#4285F4] transition-colors duration-300">
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
