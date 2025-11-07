const DataPipelineIllustration = () => (
  <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <rect x="30" y="60" width="110" height="80" rx="8" stroke="#E5EAEC" strokeWidth="2" fill="white" />
    <text x="85" y="95" fontSize="12" fontWeight="600" fill="#233C42" textAnchor="middle">Creator Data</text>
    <circle cx="60" cy="115" r="3" fill="#19B776" />
    <circle cx="85" cy="115" r="3" fill="#19B776" />
    <circle cx="110" cy="115" r="3" fill="#19B776" />

    <rect x="145" y="100" width="110" height="80" rx="8" stroke="#19B776" strokeWidth="2.5" fill="rgba(25, 183, 118, 0.06)" />
    <text x="200" y="135" fontSize="13" fontWeight="700" fill="#19B776" textAnchor="middle">Tableau</text>
    <rect x="165" y="150" width="70" height="8" rx="4" fill="#19B776" opacity="0.3" />
    <rect x="165" y="162" width="55" height="8" rx="4" fill="#19B776" opacity="0.5" />

    <rect x="260" y="60" width="110" height="80" rx="8" stroke="#E5EAEC" strokeWidth="2" fill="white" />
    <text x="315" y="95" fontSize="12" fontWeight="600" fill="#233C42" textAnchor="middle">Visual Stories</text>
    <path d="M280 115 L290 125 L300 110 L310 120 L320 105 L330 115 L340 108" stroke="#19B776" strokeWidth="2" fill="none" />

    <path d="M145 100 L200 80" stroke="#19B776" strokeWidth="2" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" from="0" to="8" dur="0.5s" repeatCount="indefinite" />
    </path>
    <path d="M255 140 L315 140" stroke="#19B776" strokeWidth="2" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" from="0" to="8" dur="0.5s" repeatCount="indefinite" />
    </path>

    <circle cx="85" cy="220" r="35" stroke="#19B776" strokeWidth="2" fill="rgba(25, 183, 118, 0.05)" />
    <text x="85" y="225" fontSize="11" fontWeight="600" fill="#19B776" textAnchor="middle">Compare</text>

    <circle cx="200" cy="260" r="35" stroke="#19B776" strokeWidth="2" fill="rgba(25, 183, 118, 0.05)" />
    <text x="200" y="265" fontSize="11" fontWeight="600" fill="#19B776" textAnchor="middle">Filter</text>

    <circle cx="315" cy="220" r="35" stroke="#19B776" strokeWidth="2" fill="rgba(25, 183, 118, 0.05)" />
    <text x="315" y="225" fontSize="11" fontWeight="600" fill="#19B776" textAnchor="middle">Drill</text>
  </svg>
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
    text: 'Compare creator performance across platforms, campaigns, and time periods'
  },
  {
    icon: FilterIcon,
    text: 'Filter and segment data dynamically to uncover hidden insights'
  },
  {
    icon: DrillIcon,
    text: 'Drill down from campaign-level to individual post performance'
  }
];

export default function TableauUseCaseSection() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Create Interactive Social Commerce Reports
        </h2>
          <p className="max-w-2xl mx-auto" style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
            Turn raw creator metrics into interactive visual narratives that drive decisions
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
