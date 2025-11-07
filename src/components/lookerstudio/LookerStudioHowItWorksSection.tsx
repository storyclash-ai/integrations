const FlowIllustration = () => (
  <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <rect x="40" y="40" width="100" height="70" rx="8" stroke="#19B776" strokeWidth="2.5" fill="rgba(25, 183, 118, 0.06)" />
    <text x="90" y="72" fontSize="13" fontWeight="700" fill="#19B776" textAnchor="middle">Storyclash</text>
    <text x="90" y="88" fontSize="11" fontWeight="500" fill="#233C42" textAnchor="middle">API</text>

    <rect x="150" y="140" width="100" height="70" rx="8" stroke="#4285F4" strokeWidth="2.5" fill="rgba(66, 133, 244, 0.06)" />
    <text x="200" y="172" fontSize="13" fontWeight="700" fill="#4285F4" textAnchor="middle">REST API</text>
    <text x="200" y="188" fontSize="11" fontWeight="500" fill="#233C42" textAnchor="middle">Data Source</text>

    <rect x="260" y="40" width="100" height="70" rx="8" stroke="#4285F4" strokeWidth="2.5" fill="rgba(66, 133, 244, 0.06)" />
    <text x="310" y="72" fontSize="13" fontWeight="700" fill="#4285F4" textAnchor="middle">Looker Studio</text>
    <text x="310" y="88" fontSize="11" fontWeight="500" fill="#233C42" textAnchor="middle">Dashboards</text>

    <path d="M145 75 L195 145" stroke="#19B776" strokeWidth="2" markerEnd="url(#arrowhead1)" />
    <path d="M205 145 L265 80" stroke="#4285F4" strokeWidth="2" markerEnd="url(#arrowhead2)" />

    <circle cx="90" cy="240" r="5" fill="#19B776">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="200" cy="240" r="5" fill="#4285F4">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.7s" repeatCount="indefinite" />
    </circle>
    <circle cx="310" cy="240" r="5" fill="#4285F4">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1.4s" repeatCount="indefinite" />
    </circle>

    <defs>
      <marker id="arrowhead1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#19B776" />
      </marker>
      <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#4285F4" />
      </marker>
    </defs>
  </svg>
);

const steps = [
  {
    number: '01',
    title: 'Authenticate Storyclash API',
    description: 'Quick and secure API connection that integrates seamlessly with Looker Studio as a custom data source.'
  },
  {
    number: '02',
    title: 'Configure your REST API data source',
    description: 'Select which creator metrics, campaign KPIs, and dimensions you want to visualize in your Looker Studio dashboards.'
  },
  {
    number: '03',
    title: 'Build interactive reports',
    description: 'Create stunning visualizations with drag-and-drop simplicity. Combine influencer data with other sources for comprehensive analytics.'
  }
];

export default function LookerStudioHowItWorksSection() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Visualize Influencer Campaign ROI and Engagement
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className="order-2 lg:order-1"
            style={{
              animation: 'slideInLeft 0.8s ease-out both',
            }}
          >
            <div className="bg-white p-8 lg:p-12" style={{ borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
              <FlowIllustration />
            </div>
          </div>

          <div
            className="order-1 lg:order-2 space-y-6"
            style={{
              animation: 'slideInBottom 0.8s ease-out 0.2s both',
            }}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 border border-gray-200 transition-shadow duration-300"
                style={{
                  borderRadius: '20px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  animation: `fadeInUp 0.6s ease-out ${0.3 + index * 0.15}s both`,
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.12)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'}
              >
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center font-black text-lg text-white" style={{ backgroundColor: '#19B776', borderRadius: '20px' }}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className="mb-2" style={{ fontSize: '20px', lineHeight: '1.1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
        @keyframes slideInBottom {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
