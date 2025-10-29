import { ArrowRight, PieChart } from 'lucide-react';

const LookerStudioIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="24" height="24" rx="4" fill="#4285F4" opacity="0.2" />
    <circle cx="12" cy="12" r="4" fill="#4285F4" />
    <rect x="18" y="8" width="8" height="16" rx="2" fill="#34A853" />
  </svg>
);

export default function LookerStudioHeroSection() {
  return (
    <section className="px-6" style={{ backgroundColor: '#FAFAFA', paddingTop: '156px', paddingBottom: '80px' }}>
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6">
          <div className="text-sm text-gray-500">
            <a href="/integrations" className="hover:text-gray-700 transition-colors">
              Integrations
            </a>
            <span className="mx-2">/</span>
            <span className="font-semibold">Looker Studio Marketing Integration</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="leading-tight mb-6" style={{ fontSize: '56px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
              Looker Studio + Influencer Marketing Integration
            </h1>
            <p className="mb-8" style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
              Connect Storyclash with Looker Studio to build interactive dashboards, visualize creator performance, and turn influencer data into actionable insights with Google's powerful BI platform.
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
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 opacity-20 blur-3xl" style={{ backgroundColor: '#19B776', borderRadius: '20px' }}></div>
              <div className="relative bg-white p-8 border border-gray-100" style={{ borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <PieChart className="w-full h-64 text-gray-300" strokeWidth={1} />
                <div className="absolute top-12 left-12 right-12 flex justify-between items-start">
                  <div className="bg-white px-4 py-3 border border-gray-100" style={{ borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                    <div className="text-xs mb-1" style={{ color: '#333333', fontFamily: 'Roboto, sans-serif' }}>Reach</div>
                    <div className="text-xl font-black" style={{ color: '#4285F4', fontFamily: 'Roboto, sans-serif' }}>2.4M</div>
                  </div>
                  <div className="bg-white px-4 py-3 border border-gray-100" style={{ borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                    <div className="text-xs mb-1" style={{ color: '#333333', fontFamily: 'Roboto, sans-serif' }}>EMV</div>
                    <div className="text-xl font-black" style={{ color: '#34A853', fontFamily: 'Roboto, sans-serif' }}>€186K</div>
                  </div>
                </div>
                <div
                  className="absolute bottom-8 left-8 opacity-0 transition-opacity duration-300"
                  style={{
                    animation: 'logoFadeIn 0.6s ease-out 0.6s forwards'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
                >
                  <LookerStudioIcon />
                </div>
              </div>
            </div>
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
        @keyframes logoFadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }
      `}</style>
    </section>
  );
}
