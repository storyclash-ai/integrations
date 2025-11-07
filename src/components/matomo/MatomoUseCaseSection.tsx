const DataPipelineIllustration = () => (
  <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <rect x="30" y="60" width="110" height="80" rx="8" stroke="#E5EAEC" strokeWidth="2" fill="white" />
    <text x="85" y="95" fontSize="12" fontWeight="600" fill="#233C42" textAnchor="middle">Creator</text>
    <text x="85" y="110" fontSize="12" fontWeight="600" fill="#233C42" textAnchor="middle">Links</text>
    <circle cx="60" cy="125" r="3" fill="#19B776" />
    <circle cx="85" cy="125" r="3" fill="#19B776" />
    <circle cx="110" cy="125" r="3" fill="#19B776" />

    <rect x="145" y="100" width="110" height="80" rx="8" stroke="#19B776" strokeWidth="2.5" fill="rgba(25, 183, 118, 0.06)" />
    <text x="200" y="135" fontSize="13" fontWeight="700" fill="#19B776" textAnchor="middle">UTM Tracking</text>
    <rect x="165" y="150" width="70" height="8" rx="4" fill="#19B776" opacity="0.3" />
    <rect x="165" y="162" width="55" height="8" rx="4" fill="#19B776" opacity="0.5" />

    <rect x="260" y="60" width="110" height="80" rx="8" stroke="#E5EAEC" strokeWidth="2" fill="white" />
    <text x="315" y="95" fontSize="12" fontWeight="600" fill="#233C42" textAnchor="middle">Matomo</text>
    <text x="315" y="110" fontSize="12" fontWeight="600" fill="#233C42" textAnchor="middle">Analytics</text>
    <path d="M280 125 L290 135 L300 120 L310 130 L320 115 L330 125 L340 118" stroke="#19B776" strokeWidth="2" fill="none" />

    <path d="M145 100 L200 80" stroke="#19B776" strokeWidth="2" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" from="0" to="8" dur="0.5s" repeatCount="indefinite" />
    </path>
    <path d="M255 140 L315 140" stroke="#19B776" strokeWidth="2" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" from="0" to="8" dur="0.5s" repeatCount="indefinite" />
    </path>

    <circle cx="85" cy="220" r="35" stroke="#19B776" strokeWidth="2" fill="rgba(25, 183, 118, 0.05)" />
    <text x="85" y="225" fontSize="11" fontWeight="600" fill="#19B776" textAnchor="middle">Traffic</text>

    <circle cx="200" cy="260" r="35" stroke="#19B776" strokeWidth="2" fill="rgba(25, 183, 118, 0.05)" />
    <text x="200" y="265" fontSize="11" fontWeight="600" fill="#19B776" textAnchor="middle">Conversions</text>

    <circle cx="315" cy="220" r="35" stroke="#19B776" strokeWidth="2" fill="rgba(25, 183, 118, 0.05)" />
    <text x="315" y="225" fontSize="11" fontWeight="600" fill="#19B776" textAnchor="middle">Reports</text>
  </svg>
);

const TrafficIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 20L10 14L14 18L24 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 8H24V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GDPRIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M9 8V6C9 4.89543 9.89543 4 11 4H17C18.1046 4 19 4.89543 19 6V8" stroke="currentColor" strokeWidth="2" />
    <path d="M4 13H24" stroke="currentColor" strokeWidth="2" />
    <circle cx="14" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const PrivacyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2L6 6V12C6 18.5 14 26 14 26S22 18.5 22 12V6L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="14" cy="14" r="2" fill="currentColor" />
  </svg>
);

const useCases = [
  {
    icon: TrafficIcon,
    text: 'Track which creator campaigns drive website traffic and conversions with UTM-tagged links in Matomo'
  },
  {
    icon: GDPRIcon,
    text: 'Maintain complete data ownership with self-hosted Matomo infrastructure and GDPR-compliant analytics'
  },
  {
    icon: PrivacyIcon,
    text: 'Run cookieless tracking for influencer attribution while respecting user privacy and regional regulations'
  }
];

export default function MatomoUseCaseSection() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
            Connect Influencer Data to Matomo
          </h2>
          <p className="max-w-3xl mx-auto" style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
            Stream creator performance data to Matomo with automatic UTM tracking. Track influencer-driven traffic and conversions while maintaining complete data ownership and GDPR compliance through self-hosted analytics infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className="order-2 lg:order-1"
            style={{
              animation: 'slideInLeft 0.8s ease-out both',
            }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-transparent p-8 lg:p-12" style={{ borderRadius: '20px' }}>
              <DataPipelineIllustration />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="mb-6" style={{ fontSize: '24px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
              Key Use Cases:
            </h3>
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 group"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                  }}
                >
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ color: '#19B776' }}>
                    <Icon />
                  </div>
                  <p style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                    {useCase.text}
                  </p>
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
