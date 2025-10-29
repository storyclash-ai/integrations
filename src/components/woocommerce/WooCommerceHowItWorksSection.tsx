const FlowIllustration = () => (
  <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <rect x="40" y="40" width="100" height="70" rx="8" stroke="#19B776" strokeWidth="2.5" fill="rgba(25, 183, 118, 0.06)" />
    <text x="90" y="72" fontSize="13" fontWeight="700" fill="#19B776" textAnchor="middle">Storyclash</text>
    <text x="90" y="88" fontSize="11" fontWeight="500" fill="#233C42" textAnchor="middle">Connect</text>

    <rect x="150" y="140" width="100" height="70" rx="8" stroke="#19B776" strokeWidth="2.5" fill="rgba(25, 183, 118, 0.06)" />
    <text x="200" y="172" fontSize="13" fontWeight="700" fill="#19B776" textAnchor="middle">Data Sync</text>
    <text x="200" y="188" fontSize="11" fontWeight="500" fill="#233C42" textAnchor="middle">Auto-update</text>

    <rect x="260" y="40" width="100" height="70" rx="8" stroke="#19B776" strokeWidth="2.5" fill="rgba(25, 183, 118, 0.06)" />

    <g transform="translate(275, 55)" opacity="0">
      <animate attributeName="opacity" from="0" to="1" dur="0.8s" begin="0.5s" fill="freeze" />
      <path d="M0 5C0 3 1 2 3 2H10C12 2 13 3 13 5V10C13 12 12 13 10 13H3C1 13 0 12 0 10V5Z" stroke="#96588A" strokeWidth="1.5" fill="rgba(150, 88, 138, 0.1)" />
      <path d="M4 6L5.5 9L7 6" stroke="#96588A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 6L9 9L10.5 6" stroke="#96588A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

      <text x="18" y="11" fontSize="11" fontWeight="700" fill="#19B776" textAnchor="start">WooCommerce</text>
    </g>
    <text x="310" y="88" fontSize="11" fontWeight="500" fill="#233C42" textAnchor="middle">Dashboard</text>

    <path d="M145 75 L195 145" stroke="#19B776" strokeWidth="2" markerEnd="url(#arrowhead1)" />
    <path d="M205 145 L265 80" stroke="#19B776" strokeWidth="2" markerEnd="url(#arrowhead2)" />

    <circle cx="90" cy="240" r="5" fill="#19B776">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="200" cy="240" r="5" fill="#19B776">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.7s" repeatCount="indefinite" />
    </circle>
    <circle cx="310" cy="240" r="5" fill="#19B776">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1.4s" repeatCount="indefinite" />
    </circle>

    <defs>
      <marker id="arrowhead1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#19B776" />
      </marker>
      <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#19B776" />
      </marker>
    </defs>
  </svg>
);

const steps = [
  {
    number: '01',
    title: 'Connect your Storyclash account',
    description: 'Secure API authentication in minutes.'
  },
  {
    number: '02',
    title: 'Sync your creator campaign data',
    description: 'All metrics (revenue, conversions, EMV, engagement) flow automatically into WooCommerce datasets.'
  },
  {
    number: '03',
    title: 'Build dashboards & measure ROI',
    description: 'Visualize campaign performance, compare creators, and monitor ROI over time.'
  }
];

export default function WooCommerceHowItWorksSection() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#E5EAEC' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black text-center mb-16 tracking-tight" style={{ color: '#233C42' }}>
          How the WooCommerce Integration Works
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className="order-2 lg:order-1"
            style={{
              animation: 'slideInLeft 0.8s ease-out both',
            }}
          >
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
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
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.3 + index * 0.15}s both`,
                }}
              >
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center font-black text-lg text-white" style={{ backgroundColor: '#19B776' }}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 tracking-tight" style={{ color: '#233C42' }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
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
