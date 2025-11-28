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

const CompareIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="10" width="8" height="14" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="16" y="6" width="8" height="18" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const FilterIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H24M8 14H20M12 22H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const DrillIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="10" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="10" cy="20" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="18" cy="20" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M14 16L10 18M14 16L18 18" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const useCases = [
  {
    icon: CompareIcon,
    text: 'Compare creator performance across campaigns, regions, and time periods with custom measures'
  },
  {
    icon: FilterIcon,
    text: 'Filter and slice influencer data dynamically with Power BI\'s interactive visuals'
  },
  {
    icon: DrillIcon,
    text: 'Drill down from campaign-level metrics to individual creator and post performance'
  }
];

export default function PowerBIUseCaseSection() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Create Interactive Influencer Reports
        </h2>
          <p className="max-w-2xl mx-auto" style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
            Transform raw creator metrics into interactive business intelligence that drives strategy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className="bg-gradient-to-br from-green-50/50 to-transparent p-8 lg:p-12"
            style={{
              borderRadius: '20px',
              animation: 'fadeIn 0.8s ease-out both',
            }}
          >
            <DataPipelineIllustration />
          </div>

          <div className="space-y-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={index}
                  className="flex gap-5 group"
                  style={{
                    animation: `slideIn 0.6s ease-out ${0.2 + index * 0.15}s both`,
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ color: '#19B776' }}>
                    <Icon />
                  </div>
                  <div className="pt-2">
                    <p style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '500', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                      {useCase.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
