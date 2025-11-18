const DataPipelineIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <img
      src="/illustrations/powerful-influencer-analytics.png"
      alt="Influencer analytics dashboard showing engagement metrics and KPIs"
      className="w-full h-auto object-contain"
      style={{ maxHeight: '400px' }}
    />
  </div>
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

const ScheduleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M4 12H24" stroke="currentColor" strokeWidth="2" />
    <path d="M10 6V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M18 6V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const UnifyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2L18 10L26 11.5L20 17L21 26L14 22.5L7 26L8 17L2 11.5L10 10L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const useCases = [
  {
    icon: IntegrationIcon,
    text: 'Connect Storyclash API with Supermetrics for seamless influencer data integration into your marketing reporting system'
  },
  {
    icon: ScheduleIcon,
    text: 'Schedule automated transfers - hourly, daily, or weekly updates keep creator metrics synchronized across platforms'
  },
  {
    icon: UnifyIcon,
    text: 'Create unified marketing dashboards combining creator performance with other channel metrics'
  }
];

export default function SupermetricsUseCaseSection() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
            Unify Social Media Metrics with Marketing Data
          </h2>
          <p className="max-w-3xl mx-auto" style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
            Connect Storyclash to Supermetrics for automated influencer data transfers across your marketing stack. Schedule regular exports to Google Sheets for reporting, push creator metrics to data warehouses for analysis, or feed influencer performance into BI dashboards alongside other marketing channels.
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
