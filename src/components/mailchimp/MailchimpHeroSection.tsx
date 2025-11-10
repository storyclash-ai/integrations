import { ArrowRight } from 'lucide-react';

export default function MailchimpHeroSection() {
  return (
    <section className="pt-32 pb-20 px-6" style={{ backgroundColor: '#233C42' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Mailchimp + Influencer Marketing Integration
            </h1>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: '#E5EAEC' }}>
              Connect Mailchimp with Storyclash to sync creator audiences, build targeted campaigns with influencer insights, and track email performance by creator source.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.storyclash.com/request-demo#request-demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all duration-200 hover:shadow-lg"
                style={{ backgroundColor: '#19B776' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#159963')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#19B776')}
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/integrations"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-lg border-2 transition-all duration-200"
                style={{ borderColor: '#19B776' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#19B776')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                Explore all integrations
              </a>
            </div>
          </div>
          <div className="animate-fade-in">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl opacity-20 blur-3xl"
                style={{ backgroundColor: '#FFE01B' }}
              ></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <img
                  src="/logos/Mailchimp.svg"
                  alt="Mailchimp"
                  style={{ height: '256px', width: '100%', objectFit: 'contain' }}
                />
                <div className="absolute top-12 left-12 right-12 flex justify-between items-start">
                  <div className="bg-white rounded-lg shadow-lg px-4 py-3 border border-gray-100">
                    <div className="text-xs text-gray-500 mb-1">Subscribers</div>
                    <div className="text-xl font-black" style={{ color: '#FFE01B' }}>
                      24K
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg px-4 py-3 border border-gray-100">
                    <div className="text-xs text-gray-500 mb-1">Clicks</div>
                    <div className="text-xl font-black" style={{ color: '#19B776' }}>
                      3.2K
                    </div>
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
