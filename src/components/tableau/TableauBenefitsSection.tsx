import { ConnectIcon, ChartIcon, AutomateIcon } from '../icons/CustomIcons';

const benefits = [
  {
    icon: ConnectIcon,
    title: 'Connect Storyclash to Tableau in minutes',
    description: 'Sync creator metrics and campaign data seamlessly through our Tableau connector or API integration.'
  },
  {
    icon: ChartIcon,
    title: 'Build interactive visual narratives',
    description: 'Create stunning, interactive dashboards that tell the complete story of your influencer marketing performance.'
  },
  {
    icon: AutomateIcon,
    title: 'Real-time data refresh',
    description: 'Keep your Tableau dashboards always current with automatic data updates from your creator campaigns.'
  }
];

export default function TableauBenefitsSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Transform Influencer Metrics into Visual Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Harness Tableau's visualization power to showcase creator ROI like never before
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-white rounded-xl border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-12 h-12 flex items-center justify-center mb-6 text-gray-700 group-hover:text-[#E97627] transition-colors duration-300">
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
    </section>
  );
}
