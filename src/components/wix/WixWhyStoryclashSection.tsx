const DataFlowIllustration = () => (
  <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <rect x="40" y="40" width="120" height="80" rx="8" stroke="#19B776" strokeWidth="2" fill="rgba(25, 183, 118, 0.05)" />
    <text x="100" y="85" fontSize="14" fontWeight="600" fill="#233C42" textAnchor="middle">Storyclash</text>

    <rect x="240" y="40" width="120" height="80" rx="8" stroke="#19B776" strokeWidth="2" fill="rgba(25, 183, 118, 0.05)" />
    <text x="300" y="85" fontSize="14" fontWeight="600" fill="#233C42" textAnchor="middle">Wix Store</text>

    <path d="M165 80 L235 80" stroke="#19B776" strokeWidth="2" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" from="0" to="8" dur="0.5s" repeatCount="indefinite" />
    </path>

    <circle cx="100" cy="180" r="30" stroke="#19B776" strokeWidth="2" fill="rgba(25, 183, 118, 0.08)" />
    <text x="100" y="185" fontSize="12" fontWeight="500" fill="#19B776" textAnchor="middle">Simple</text>

    <circle cx="200" cy="240" r="30" stroke="#19B776" strokeWidth="2" fill="rgba(25, 183, 118, 0.08)" />
    <text x="200" y="245" fontSize="12" fontWeight="500" fill="#19B776" textAnchor="middle">Fast</text>

    <circle cx="300" cy="180" r="30" stroke="#19B776" strokeWidth="2" fill="rgba(25, 183, 118, 0.08)" />
    <text x="300" y="185" fontSize="12" fontWeight="500" fill="#19B776" textAnchor="middle">Grow</text>

    <path d="M100 150 L100 130" stroke="#E5EAEC" strokeWidth="2" />
    <path d="M180 220 L130 190" stroke="#E5EAEC" strokeWidth="2" />
    <path d="M220 220 L270 190" stroke="#E5EAEC" strokeWidth="2" />
    <path d="M300 150 L300 130" stroke="#E5EAEC" strokeWidth="2" />
  </svg>
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

const ROIIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z" stroke="currentColor" strokeWidth="2" />
    <path d="M14 9V14L18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="14" cy="14" r="2" fill="currentColor" />
  </svg>
);

const benefits = [
  {
    icon: SimplifyIcon,
    title: 'Simple API Integration',
    description: 'Connect your Wix store via our REST API with clear authentication and documentation. Get your API key and integrate in minutes with our detailed guide.'
  },
  {
    icon: EnterpriseIcon,
    title: 'Designed for Small Businesses',
    description: 'Affordable pricing and intuitive dashboards made for entrepreneurs and small teams. Get enterprise-level influencer analytics without enterprise-level complexity or cost.'
  },
  {
    icon: ROIIcon,
    title: 'Focus on What Matters',
    description: 'Stop wasting time on spreadsheets and manual tracking. See which creators actually drive sales, identify your best partnerships, and grow your Wix store with confidence.'
  }
];

export default function WixWhyStoryclashSection() {
  return (
    <section className="py-20 px-6 border-t border-b" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5EAEC' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-16 text-center" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#19B776', fontFamily: 'Roboto, sans-serif' }}>
          Measure Social Commerce ROI in Wix Analytics
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
