import { ConnectIcon, ChartIcon, AutomateIcon } from '../icons/CustomIcons';

export default function SalesforceBenefitsSection() {
  const benefits = [
    { icon: ConnectIcon, title: 'Sync creators as accounts', description: 'Import influencer profiles into Salesforce as accounts with custom fields for audience metrics, engagement, and campaign history.' },
    { icon: ChartIcon, title: 'Track campaigns as opportunities', description: 'Convert creator partnerships into Salesforce opportunities with deal stages, revenue forecasts, and ROI tracking.' },
    { icon: AutomateIcon, title: 'Automate workflows', description: 'Trigger Salesforce workflows based on creator milestones, performance thresholds, and campaign completion events.' }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
          Import Creator Campaign Data into Salesforce Commerce
        </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Connect Salesforce with influencer intelligence for enterprise CRM</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return <div key={idx} className="group relative p-8 bg-white rounded-xl border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1"><div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div><div className="relative"><div className="w-12 h-12 flex items-center justify-center mb-6 text-gray-700 group-hover:text-[#00A1E0] transition-colors duration-300"><Icon /></div><h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">{benefit.title}</h3><p className="text-gray-600 leading-relaxed text-[15px]">{benefit.description}</p></div></div>;
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
