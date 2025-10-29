import { ArrowRight, LineChart } from 'lucide-react';

const WooCommerceIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 10C5 8 6 7 8 7H22C24 7 25 8 25 10V20C25 22 24 23 22 23H8C6 23 5 22 5 20V10Z" stroke="#96588A" strokeWidth="2" fill="rgba(150, 88, 138, 0.1)" />
    <path d="M10 13L12 17L14 13" stroke="#96588A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 13L18 17L20 13" stroke="#96588A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function WooCommerceHeroSection() {
  return (
    <section className="pt-32 pb-20 px-6" style={{ backgroundColor: '#233C42' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              WooCommerce + Influencer Marketing Integration
            </h1>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: '#E5EAEC' }}>
              Bring creator performance and ROI insights directly into your WooCommerce dashboards.
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
              <div className="absolute inset-0 rounded-2xl opacity-20 blur-3xl" style={{ backgroundColor: '#19B776' }}></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <LineChart className="w-full h-64 text-gray-300" strokeWidth={1} />
                <div className="absolute top-12 left-12 right-12 flex justify-between items-start">
                  <div className="bg-white rounded-lg shadow-lg px-4 py-3 border border-gray-100">
                    <div className="text-xs text-gray-500 mb-1">EMV</div>
                    <div className="text-xl font-black" style={{ color: '#19B776' }}>$124K</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg px-4 py-3 border border-gray-100">
                    <div className="text-xs text-gray-500 mb-1">ROAS</div>
                    <div className="text-xl font-black" style={{ color: '#F49D3B' }}>4.8x</div>
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
                  <WooCommerceIcon />
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
      `}</style>
    </section>
  );
}
