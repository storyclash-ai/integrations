const DataFlowIllustration = () => (
  <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <rect x="40" y="40" width="120" height="80" rx="8" stroke="#19B776" strokeWidth="2" fill="rgba(25, 183, 118, 0.05)" />
    <text x="100" y="85" fontSize="14" fontWeight="600" fill="#233C42" textAnchor="middle">Storyclash</text>

    <rect x="240" y="40" width="120" height="80" rx="8" stroke="#19B776" strokeWidth="2" fill="rgba(25, 183, 118, 0.05)" />
    <text x="300" y="85" fontSize="14" fontWeight="600" fill="#233C42" textAnchor="middle">Metabase</text>

    <path d="M165 80 L235 80" stroke="#19B776" strokeWidth="2" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" from="0" to="8" dur="0.5s" repeatCount="indefinite" />
    </path>
    <path d="M230 75 L240 80 L230 85" fill="#19B776" />

    <circle cx="100" cy="180" r="30" stroke="#19B776" strokeWidth="2" fill="rgba(25, 183, 118, 0.08)" />
    <text x="100" y="185" fontSize="12" fontWeight="500" fill="#19B776" textAnchor="middle">Creators</text>

    <circle cx="200" cy="240" r="30" stroke="#19B776" strokeWidth="2" fill="rgba(25, 183, 118, 0.08)" />
    <text x="200" y="245" fontSize="12" fontWeight="500" fill="#19B776" textAnchor="middle">Query</text>

    <circle cx="300" cy="180" r="30" stroke="#19B776" strokeWidth="2" fill="rgba(25, 183, 118, 0.08)" />
    <text x="300" y="185" fontSize="12" fontWeight="500" fill="#19B776" textAnchor="middle">Insights</text>

    <path d="M100 150 L100 130" stroke="#E5EAEC" strokeWidth="2" />
    <path d="M180 220 L130 190" stroke="#E5EAEC" strokeWidth="2" />
    <path d="M220 220 L270 190" stroke="#E5EAEC" strokeWidth="2" />
    <path d="M300 150 L300 130" stroke="#E5EAEC" strokeWidth="2" />
  </svg>
);

const StructuredDataIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 14L10 20L24 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
  </svg>
);

const SelfServiceIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2L18 10L26 11.5L20 17L21 26L14 22.5L7 26L8 17L2 11.5L10 10L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const OpenSourceIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2L6 6V12C6 18.5 14 26 14 26S22 18.5 22 12V6L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="14" cy="14" r="2" fill="currentColor" />
  </svg>
);

const benefits = [
  {
    icon: StructuredDataIcon,
    title: 'Bi-Directional Data Sync',
    description: 'Export Storyclash creator data to Metabase for analysis, then sync Metabase insights (sales, conversions, ROI calculations) back to Storyclash for complete attribution.'
  },
  {
    icon: SelfServiceIcon,
    title: 'Combined Analytics & Insights',
    description: 'Query creator performance data from Storyclash in Metabase, blend it with your business metrics, and build unified dashboards showing influencer ROI impact.'
  },
  {
    icon: OpenSourceIcon,
    title: 'Own Your Data Stack',
    description: 'Keep Storyclash creator data and Metabase insights in your own infrastructure with open-source Metabase - complete control and no vendor lock-in.'
  }
];

export default function MetabaseWhyStoryclashSection() {
  return (
    <section className="py-20 px-6 border-t border-b" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5EAEC' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-16 text-center" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#19B776', fontFamily: 'Roboto, sans-serif' }}>
          Why Storyclash for Metabase?
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
