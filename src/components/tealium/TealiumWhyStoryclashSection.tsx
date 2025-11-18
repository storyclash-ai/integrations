const DataFlowIllustration = () => (
  <div className="relative w-full h-full flex items-start justify-start pl-8" style={{ paddingTop: '10px' }}>
    <img
      src="/illustrations/why Storyclash.png"
      alt="Storyclash Dashboard"
      className="w-full h-auto object-contain"
      style={{ maxHeight: '500px', transform: 'scale(1.0)', opacity: '0.9' }}
    />
  </div>
);

const UnificationIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 14L10 20L24 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
  </svg>
);

const EnterpriseIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2L18 10L26 11.5L20 17L21 26L14 22.5L7 26L8 17L2 11.5L10 10L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GovernanceIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M14 8L14 14L18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 18L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const benefits = [
  {
    icon: UnificationIcon,
    title: 'Unified Attribution Across Journeys',
    description: 'Stream creator events to EventStream and automatically enrich customer profiles with influencer attribution in AudienceStream, creating a single source of truth.'
  },
  {
    icon: EnterpriseIcon,
    title: 'Enterprise-Grade Activation',
    description: 'Activate influencer insights across all marketing channels - analytics, personalization, ads, and marketing automation - all within your Tealium infrastructure.'
  },
  {
    icon: GovernanceIcon,
    title: 'Built-In Privacy & Governance',
    description: 'Leverage Tealium\'s privacy controls and data governance frameworks - maintain compliance while unlocking complete visibility into creator impact.'
  }
];

export default function TealiumWhyStoryclashSection() {
  return (
    <section className="py-20 px-6 border-t border-b" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5EAEC' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-16 text-center" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#19B776', fontFamily: 'Roboto, sans-serif' }}>
          Why Storyclash for Tealium?
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-green-50/50 to-transparent p-8 lg:p-12" style={{ borderRadius: '20px' }}>
              <DataFlowIllustration />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex gap-5 group"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110" style={{ color: '#19B776' }}>
                    <Icon />
                  </div>

                  <div>
                    <h3 className="mb-2" style={{ fontSize: '20px', lineHeight: '1.1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
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
