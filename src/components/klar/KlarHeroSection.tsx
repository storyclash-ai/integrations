

export default function KlarHeroSection() {
  return (
    <section className="px-6" style={{ backgroundColor: '#FAFAFA', paddingTop: '156px', paddingBottom: '80px' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-sm text-gray-500">
            <a href="/integrations" className="hover:text-gray-700 transition-colors">
              Integrations
            </a>
            <span className="mx-2">/</span>
            <span className="font-semibold">Klar Influencer Marketing Integration</span>
          </div>
        </div>

        <div className="text-center">
          <div style={{ animation: 'fadeInUp 0.8s ease-out both' }}>
            <h1 className="leading-tight mb-6" style={{ fontSize: '56px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
              Klar + Influencer Marketing Integration
            </h1>
            <p
              className="hero-txt"
              style={{
                color: '#919191',
                fontSize: '21px',
                fontFamily: 'Roboto, sans-serif',
                padding: '0 0 30px 0'
              }}
            >
              E-commerce analytics platform for creator attribution - connect influencer campaigns with sales, revenue, and customer lifetime value.
            </p>
            <a
              href="https://www.storyclash.com/request-demo"
              className="inline-flex items-center justify-center gap-2 text-white transition-all duration-300"
              style={{
                backgroundColor: '#19B776',
                borderRadius: '9999px',
                padding: '10px 20px',
                fontSize: '15px',
                fontWeight: '600',
                color: '#FFFFFF'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#159963';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#19B776';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes logoFadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
