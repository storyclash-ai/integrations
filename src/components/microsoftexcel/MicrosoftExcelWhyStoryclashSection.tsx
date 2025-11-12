const DataFlowIllustration = () => (
  <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <rect x="40" y="40" width="120" height="80" rx="8" stroke="#19B776" strokeWidth="2" fill="rgba(25, 183, 118, 0.05)" />
    <text x="100" y="85" fontSize="14" fontWeight="600" fill="#233C42" textAnchor="middle">Storyclash</text>

    <rect x="240" y="40" width="120" height="80" rx="8" stroke="#19B776" strokeWidth="2" fill="rgba(25, 183, 118, 0.05)" />
    <text x="300" y="85" fontSize="14" fontWeight="600" fill="#233C42" textAnchor="middle">Excel</text>

    <path d="M165 80 L235 80" stroke="#19B776" strokeWidth="2" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" from="0" to="8" dur="0.5s" repeatCount="indefinite" />
    </path>

    <circle cx="100" cy="180" r="30" stroke="#19B776" strokeWidth="2" fill="rgba(25, 183, 118, 0.08)" />
    <text x="100" y="185" fontSize="12" fontWeight="500" fill="#19B776" textAnchor="middle">Creators</text>

    <circle cx="200" cy="240" r="30" stroke="#19B776" strokeWidth="2" fill="rgba(25, 183, 118, 0.08)" />
    <text x="200" y="245" fontSize="12" fontWeight="500" fill="#19B776" textAnchor="middle">Data</text>

    <circle cx="300" cy="180" r="30" stroke="#19B776" strokeWidth="2" fill="rgba(25, 183, 118, 0.08)" />
    <text x="300" y="185" fontSize="12" fontWeight="500" fill="#19B776" textAnchor="middle">Reports</text>

    <path d="M100 150 L100 130" stroke="#E5EAEC" strokeWidth="2" />
    <path d="M180 220 L130 190" stroke="#E5EAEC" strokeWidth="2" />
    <path d="M220 220 L270 190" stroke="#E5EAEC" strokeWidth="2" />
    <path d="M300 150 L300 130" stroke="#E5EAEC" strokeWidth="2" />
  </svg>
);

const CleanDataIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 14L10 20L24 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
  </svg>
);

const FlexibilityIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2L18 10L26 11.5L20 17L21 26L14 22.5L7 26L8 17L2 11.5L10 10L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IntegrationIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="14" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="20" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M11 12L17 9" stroke="currentColor" strokeWidth="2" />
    <path d="M11 16L17 19" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const benefits = [
  {
    icon: CleanDataIcon,
    title: 'Clean, Structured Data',
    description: 'Storyclash exports are optimized for Excel analysis - properly formatted columns, consistent data types, and no missing values.'
  },
  {
    icon: FlexibilityIcon,
    title: 'Complete Flexibility',
    description: 'Work offline without platform dependencies. Build custom financial models, formulas, and analyses using all Excel features.'
  },
  {
    icon: IntegrationIcon,
    title: 'Seamless Integration',
    description: 'Integrate creator data into your existing reporting workflows. Support XLSX, CSV, and all standard spreadsheet formats.'
  }
];

export default function MicrosoftExcelWhyStoryclashSection() {
  return (
    <section className="py-20 px-6 border-t border-b" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5EAEC' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-16 text-center" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#19B776', fontFamily: 'Roboto, sans-serif' }}>
          Why Storyclash for Excel?
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
