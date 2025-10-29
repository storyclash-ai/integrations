import { ArrowRight, Mail } from 'lucide-react';

export default function KlaviyoHeroSection() {
  return (
    <section className="px-6" style={{ backgroundColor: '#FAFAFA', paddingTop: '156px', paddingBottom: '80px' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="leading-tight mb-6" style={{ fontSize: '56px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
              Klaviyo + Influencer Marketing Integration
            </h1>
            <p className="mb-8" style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
              Connect Klaviyo with Storyclash to segment audiences by creator engagement, personalize emails with influencer content, and track campaign conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.storyclash.com/request-demo#request-demo"
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
              <a
                href="/integrations"
                className="inline-flex items-center justify-center gap-2 border-2 transition-all duration-300"
                style={{
                  borderColor: '#19B776',
                  backgroundColor: 'transparent',
                  borderRadius: '9999px',
                  padding: '8px 18px',
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#19B776'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#19B776';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#19B776';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Explore all integrations
              </a>
            </div>
          </div>
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 opacity-20 blur-3xl" style={{ backgroundColor: '#1C9DEB', borderRadius: '20px' }}></div>
              <div className="relative bg-white p-8 border border-gray-100" style={{ borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <Mail className="w-full h-64 text-gray-300" strokeWidth={1} />
                <div className="absolute top-12 left-12 right-12 flex justify-between items-start">
                  <div className="bg-white px-4 py-3 border border-gray-100" style={{ borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                    <div className="text-xs mb-1" style={{ color: '#333333', fontFamily: 'Roboto, sans-serif' }}>Open Rate</div>
                    <div className="text-xl font-black" style={{ color: '#1C9DEB', fontFamily: 'Roboto, sans-serif' }}>42%</div>
                  </div>
                  <div className="bg-white px-4 py-3 border border-gray-100" style={{ borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                    <div className="text-xs mb-1" style={{ color: '#333333', fontFamily: 'Roboto, sans-serif' }}>Conversions</div>
                    <div className="text-xl font-black" style={{ color: '#19B776', fontFamily: 'Roboto, sans-serif' }}>847</div>
                  </div>
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
