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

const SimplifyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 14L10 20L24 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
  </svg>
);

const EnterpriseIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M9 8V6C9 4.89543 9.89543 4 11 4H17C18.1046 4 19 4.89543 19 6V8" stroke="currentColor" strokeWidth="2" />
    <path d="M4 13H24" stroke="currentColor" strokeWidth="2" />
    <circle cx="14" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const VisualIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
    <rect x="15" y="4" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
    <rect x="4" y="15" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
    <rect x="15" y="15" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const benefits = [
  {
    icon: SimplifyIcon,
    title: 'Purpose-Built for BI Teams',
    description: 'Storyclash delivers standardized, analysis-ready creator data that integrates seamlessly with Power BI. No data wrangling, no complex transformations—just clean influencer metrics ready to model.'
  },
  {
    icon: EnterpriseIcon,
    title: 'Enterprise-Grade Influencer Data',
    description: 'Built for enterprise BI workflows with GDPR compliance, consistent KPIs, and reliable data refresh schedules. Storyclash provides the foundation for accurate, defensible influencer ROI reporting at scale.'
  },
  {
    icon: VisualIcon,
    title: 'Unlock Advanced Analytics',
    description: 'Transform complex creator campaigns into actionable insights. Combine Storyclash data with Power BI\'s DAX formulas and data modeling to build sophisticated influencer attribution and ROI dashboards.'
  }
];

export default function PowerBIWhyStoryclashSection() {
  return (
    <section className="py-20 px-6 border-t border-b" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5EAEC' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-16 text-center" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#19B776', fontFamily: 'Roboto, sans-serif' }}>
          Why Storyclash + Power BI?
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
