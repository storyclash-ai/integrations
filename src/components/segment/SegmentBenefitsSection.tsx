import { ConnectIcon, ChartIcon, AutomateIcon } from '../icons/CustomIcons';

const benefits = [
  { icon: ConnectIcon, title: 'Unified customer data platform', description: 'Send creator engagement events to Segment as a data source. Unify influencer interactions with web, mobile, and offline customer data.' },
  { icon: ChartIcon, title: 'Power downstream tools', description: 'Route creator data from Segment to analytics, CRM, email, and advertising tools automatically without custom integrations.' },
  { icon: AutomateIcon, title: 'Build complete profiles', description: 'Enrich customer profiles with influencer engagement data. Track which creators drive conversions across your entire funnel.' }
];

export default function SegmentBenefitsSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">Unify Creator Data Across Your Stack</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Connect Segment with influencer intelligence for unified customer data</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="group relative p-8 bg-white rounded-xl border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-12 h-12 flex items-center justify-center mb-6 text-gray-700 group-hover:text-[#52BD94] transition-colors duration-300"><Icon /></div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-[15px]">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
