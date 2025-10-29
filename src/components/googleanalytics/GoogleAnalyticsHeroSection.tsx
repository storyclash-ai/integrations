import { ArrowRight, BarChart3 } from 'lucide-react';

const GoogleAnalyticsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="18" width="6" height="10" rx="2" fill="#F9AB00" />
    <rect x="13" y="12" width="6" height="16" rx="2" fill="#E37400" />
    <rect x="22" y="4" width="6" height="24" rx="2" fill="#E37400" />
  </svg>
);

export default function GoogleAnalyticsHeroSection() {
  return (
    <section className="pt-32 pb-20 px-6" style={{ backgroundColor: '#233C42' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Google Analytics + Influencer Marketing Integration
            </h1>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: '#E5EAEC' }}>
              Connect Storyclash with Google Analytics to track influencer-driven traffic, measure content attribution, and analyze how creator campaigns impact your website performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.storyclash.com/request-demo#request-demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all duration-200 hover:shadow-lg"
                style={{ backgroundColor: '#19B776' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#159963'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#19B776'}
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/integrations"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-lg border-2 transition-all duration-200"
                style={{ borderColor: '#19B776' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#19B776';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Explore all integrations
              </a>
            </div>
          </div>
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl opacity-20 blur-3xl" style={{ backgroundColor: '#F9AB00' }}></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <BarChart3 className="w-full h-64 text-gray-300" strokeWidth={1} />
                <div className="absolute top-12 left-12 right-12 flex justify-between items-start">
                  <div className="bg-white rounded-lg shadow-lg px-4 py-3 border border-gray-100">
                    <div className="text-xs text-gray-500 mb-1">Sessions</div>
                    <div className="text-xl font-black" style={{ color: '#F9AB00' }}>124K</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg px-4 py-3 border border-gray-100">
                    <div className="text-xs text-gray-500 mb-1">Conv. Rate</div>
                    <div className="text-xl font-black" style={{ color: '#19B776' }}>6.2%</div>
                  </div>
                </div>
                <div
                  className="absolute bottom-8 left-8 opacity-0 transition-opacity duration-300"
                  style={{
                    animation: 'logoFadeIn 0.6s ease-out 0.6s forwards'
                  }}
                >
                  <GoogleAnalyticsIcon />
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
