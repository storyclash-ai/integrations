const steps = [
  {
    number: '01',
    title: 'Connect database',
    description: 'Link Storyclash data to Metabase via direct database connection - sync creator metrics automatically.'
  },
  {
    number: '02',
    title: 'Build questions',
    description: 'Use visual query builder to explore influencer data - ask questions naturally, get instant visualizations.'
  },
  {
    number: '03',
    title: 'Share insights',
    description: 'Create dashboards and share with teams - embed reports or schedule automated email delivery.'
  }
];

export default function MetabaseHowItWorksSection() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          How the Metabase Integration Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 border border-gray-200 transition-shadow duration-300"
              style={{
                borderRadius: '20px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
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
    </section>
  );
}
