const DataPipelineIllustration = () => (
  <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <rect x="30" y="60" width="110" height="80" rx="8" stroke="#E5EAEC" strokeWidth="2" fill="white" />
    <text x="85" y="95" fontSize="12" fontWeight="600" fill="#233C42" textAnchor="middle">Creator Data</text>
    <circle cx="60" cy="115" r="3" fill="#FF7A59" />
    <circle cx="85" cy="115" r="3" fill="#FF7A59" />
    <circle cx="110" cy="115" r="3" fill="#FF7A59" />

    <rect x="145" y="100" width="110" height="80" rx="8" stroke="#FF7A59" strokeWidth="2.5" fill="rgba(255, 122, 89, 0.06)" />
    <text x="200" y="135" fontSize="13" fontWeight="700" fill="#FF7A59" textAnchor="middle">HubSpot</text>
    <rect x="165" y="150" width="70" height="8" rx="4" fill="#FF7A59" opacity="0.3" />
    <rect x="165" y="162" width="55" height="8" rx="4" fill="#FF7A59" opacity="0.5" />

    <rect x="260" y="60" width="110" height="80" rx="8" stroke="#E5EAEC" strokeWidth="2" fill="white" />
    <text x="315" y="95" fontSize="12" fontWeight="600" fill="#233C42" textAnchor="middle">Revenue</text>
    <path d="M280 115 L290 125 L300 110 L310 120 L320 105 L330 115 L340 108" stroke="#19B776" strokeWidth="2" fill="none" />

    <path d="M145 100 L200 80" stroke="#FF7A59" strokeWidth="2" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" from="0" to="8" dur="0.5s" repeatCount="indefinite" />
    </path>
    <path d="M255 140 L315 140" stroke="#FF7A59" strokeWidth="2" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" from="0" to="8" dur="0.5s" repeatCount="indefinite" />
    </path>

    <circle cx="85" cy="220" r="35" stroke="#FF7A59" strokeWidth="2" fill="rgba(255, 122, 89, 0.05)" />
    <text x="85" y="225" fontSize="11" fontWeight="600" fill="#FF7A59" textAnchor="middle">CRM</text>

    <circle cx="200" cy="260" r="35" stroke="#FF7A59" strokeWidth="2" fill="rgba(255, 122, 89, 0.05)" />
    <text x="200" y="265" fontSize="11" fontWeight="600" fill="#FF7A59" textAnchor="middle">Deals</text>

    <circle cx="315" cy="220" r="35" stroke="#FF7A59" strokeWidth="2" fill="rgba(255, 122, 89, 0.05)" />
    <text x="315" y="225" fontSize="11" fontWeight="600" fill="#FF7A59" textAnchor="middle">ROI</text>
  </svg>
);

const ROIIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M14 8L14 14L18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 18L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const TrendsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 20L10 14L14 18L24 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 8H24V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShareIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="14" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="20" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M11 12L17 9" stroke="currentColor" strokeWidth="2" />
    <path d="M11 16L17 19" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const useCases = [
  {
    icon: ROIIcon,
    text: 'Sync creator profiles as HubSpot contacts enriched with audience metrics and engagement data'
  },
  {
    icon: TrendsIcon,
    text: 'Track influencer campaigns as deals in your pipeline with custom stages and revenue attribution'
  },
  {
    icon: ShareIcon,
    text: 'Trigger automated workflows based on creator performance milestones and campaign KPIs'
  }
];

export default function HubSpotUseCaseSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4 tracking-tight" style={{ color: '#233C42' }}>
            From Creator Discovery to Revenue Tracking
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Integrate Storyclash with HubSpot to manage influencer relationships like your best customers.
            Track creator partnerships through your pipeline and measure their impact on revenue with complete CRM visibility.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className="order-2 lg:order-1"
            style={{
              animation: 'slideInLeft 0.8s ease-out both',
            }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-transparent rounded-2xl p-8 lg:p-12">
              <DataPipelineIllustration />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-xl font-bold mb-6 tracking-tight" style={{ color: '#233C42' }}>
              Key Use Cases:
            </h3>
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={index}
                  className="flex gap-5 group"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110" style={{ color: '#FF7A59' }}>
                    <Icon />
                  </div>

                  <div>
                    <p className="text-gray-700 leading-relaxed text-[15px] pt-2">
                      {useCase.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
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
