import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section
      className="relative text-center"
      style={{
        backgroundColor: '#0F262C',
        paddingTop: '100px',
        paddingBottom: 'clamp(80px, 12vw, 100px)',
        paddingLeft: '24px',
        paddingRight: '24px'
      }}
    >
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: '1px',
          backgroundColor: 'rgba(229, 234, 236, 0.3)'
        }}
      />

      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <h2
          className="text-white opacity-0"
          style={{
            fontSize: '56px',
            lineHeight: '1',
            fontWeight: '600',
            letterSpacing: '-0.3px',
            marginBottom: '16px',
            animation: 'fadeInUp 0.6s ease-out 0.1s forwards',
            fontFamily: 'Roboto, sans-serif'
          }}
        >
          Bring creator performance and ROI insights into your stack.
        </h2>

        <p
          className="text-white/80 text-xs leading-snug sm:text-sm sm:leading-relaxed max-w-[560px] mx-auto mt-4 sm:mt-6 text-center opacity-0"
          style={{
            marginBottom: '32px',
            animation: 'fadeInUp 0.6s ease-out 0.2s forwards',
            fontFamily: 'Roboto, sans-serif'
          }}
        >
          Get a tailored walkthrough of Storyclash — see how creator data, campaign reporting, and revenue attribution can plug into your systems.
        </p>

        <div
          className="opacity-0"
          style={{
            animation: 'fadeInUp 0.6s ease-out 0.3s forwards'
          }}
        >
          <a
            href="https://www.storyclash.com/request-demo"
            className="inline-flex items-center gap-2 transition-all duration-300"
            style={{
              padding: '16px 32px',
              fontSize: '18px',
              fontWeight: '500',
              lineHeight: '1.5',
              backgroundColor: '#FFFFFF',
              color: '#19B776',
              border: '2px solid transparent',
              borderRadius: '9999px',
              fontFamily: 'Roboto, sans-serif'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.borderColor = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#19B776';
              e.currentTarget.style.borderColor = 'transparent';
            }}
          >
            Book a Demo
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(16px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
