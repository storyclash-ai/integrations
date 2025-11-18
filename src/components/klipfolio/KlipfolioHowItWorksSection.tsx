const FlowIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center" style={{ minHeight: '250px', maxHeight: '350px' }}>
    <img
      src="/illustrations/sync-illustration.png"
      alt="Data synchronization illustration showing two people with sync symbol"
      className="w-full h-auto object-cover"
      style={{ maxHeight: '350px', objectPosition: 'center', opacity: '0.85' }}
    />
  </div>
);

const steps = [
  {
    number: '01',
    title: 'Connect data sources',
    description: 'Link Storyclash to Klipfolio via API - authenticate once for automatic creator data synchronization.'
  },
  {
    number: '02',
    title: 'Sync Storyclash creator data into Klipfolio',
    description: 'Storyclash automatically exports all creator, content and campaign metrics into your Klipfolio datasets for automated reporting.'
  },
  {
    number: '03',
    title: 'Share and monitor',
    description: 'Publish dashboards to stakeholders - embed in websites, share via URL, or schedule automated reports.'
  }
];

export default function KlipfolioHowItWorksSection() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Visualize Influencer Campaign Metrics
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
