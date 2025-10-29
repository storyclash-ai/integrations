const DataFlowIllustration = () => (
  <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <rect x="40" y="40" width="120" height="80" rx="8" stroke="#E97627" strokeWidth="2" fill="rgba(233, 118, 39, 0.05)" />
    <text x="100" y="85" fontSize="14" fontWeight="600" fill="#233C42" textAnchor="middle">Storyclash</text>

    <rect x="240" y="40" width="120" height="80" rx="8" stroke="#E97627" strokeWidth="2" fill="rgba(233, 118, 39, 0.05)" />
    <text x="300" y="85" fontSize="14" fontWeight="600" fill="#233C42" textAnchor="middle">Tableau</text>

    <path d="M165 80 L235 80" stroke="#E97627" strokeWidth="2" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" from="0" to="8" dur="0.5s" repeatCount="indefinite" />
    </path>
    <path d="M230 75 L240 80 L230 85" fill="#E97627" />

    <circle cx="100" cy="180" r="30" stroke="#E97627" strokeWidth="2" fill="rgba(233, 118, 39, 0.08)" />
    <text x="100" y="185" fontSize="12" fontWeight="500" fill="#E97627" textAnchor="middle">Insights</text>

    <circle cx="200" cy="240" r="30" stroke="#E97627" strokeWidth="2" fill="rgba(233, 118, 39, 0.08)" />
    <text x="200" y="245" fontSize="12" fontWeight="500" fill="#E97627" textAnchor="middle">Visual</text>

    <circle cx="300" cy="180" r="30" stroke="#E97627" strokeWidth="2" fill="rgba(233, 118, 39, 0.08)" />
    <text x="300" y="185" fontSize="12" fontWeight="500" fill="#E97627" textAnchor="middle">Stories</text>

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
    title: 'Purpose-Built for Analytics',
    description: 'Storyclash delivers standardized, analysis-ready creator data that integrates seamlessly with Tableau. No data wrangling, no complex transformations—just clean metrics ready to visualize.'
  },
  {
    icon: EnterpriseIcon,
    title: 'Trusted by Data Teams',
    description: 'Built for enterprise analytics with GDPR compliance, consistent KPIs, and reliable data refresh. Storyclash provides the foundation for accurate, defensible influencer ROI reporting.'
  },
  {
    icon: VisualIcon,
    title: 'Unlock Visual Storytelling',
    description: 'Transform complex creator campaigns into compelling visual narratives. Combine Storyclash data with Tableau\'s interactive dashboards to communicate influencer impact to any stakeholder.'
  }
];

export default function TableauWhyStoryclashSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black text-center mb-20 tracking-tight" style={{ color: '#233C42' }}>
          Why Storyclash + Tableau?
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div
            className="order-2 lg:order-1"
            style={{
              animation: 'fadeInScale 0.8s ease-out both',
            }}
          >
            <div className="bg-gradient-to-br from-orange-50/30 to-transparent p-8 rounded-2xl">
              <DataFlowIllustration />
            </div>
          </div>

          <div
            className="order-1 lg:order-2 space-y-8"
            style={{
              animation: 'fadeInRight 0.8s ease-out 0.2s both',
            }}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex gap-5 items-start group"
                  style={{
                    animation: `slideUp 0.6s ease-out ${0.3 + index * 0.15}s both`,
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'rgba(233, 118, 39, 0.1)', color: '#E97627' }}>
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 tracking-tight" style={{ color: '#233C42' }}>
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
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideUp {
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
