import { LineChart } from 'lucide-react';


export default function SAPCommerceHeroSection() {
  return (
    <section className="px-6" style={{ backgroundColor: '#FAFAFA', paddingTop: '156px', paddingBottom: '80px' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <div className="text-sm text-gray-500">
            <a href="/integrations" className="hover:text-gray-700 transition-colors">
              Integrations
            </a>
            <span className="mx-2">/</span>
            <span className="font-semibold">SAP Commerce Cloud Influencer Marketing Integration</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="leading-tight mb-6" style={{ fontSize: '56px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
              SAP Commerce Cloud + Influencer Marketing Integration
            </h1>
            <p className="mb-8" style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
              Connect creator campaigns to your SAP Commerce Cloud platform for enterprise-grade influencer attribution and revenue tracking at scale.
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
                <LineChart className="w-full h-64 text-gray-300" strokeWidth={1} />
                <div className="absolute top-12 left-12 right-12 flex justify-between items-start">
                  <div className="bg-white px-4 py-3 border border-gray-100" style={{ borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                    <div className="text-xs mb-1" style={{ color: '#333333', fontFamily: 'Roboto, sans-serif' }}>Revenue</div>
                    <div className="text-xl font-black" style={{ color: '#19B776', fontFamily: 'Roboto, sans-serif' }}>$2.4M</div>
                  </div>
                  <div className="bg-white px-4 py-3 border border-gray-100" style={{ borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                    <div className="text-xs mb-1" style={{ color: '#333333', fontFamily: 'Roboto, sans-serif' }}>Orders</div>
                    <div className="text-xl font-black" style={{ color: '#F49D3B', fontFamily: 'Roboto, sans-serif' }}>18.5K</div>
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
                  <img src="/logos/SAP.png" alt="sapcommerce" style={{ height: '30px' }} />
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
