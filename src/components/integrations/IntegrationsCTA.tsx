import { ArrowRight } from 'lucide-react';

export default function IntegrationsCTA() {
  return (
    <section
      className="relative text-center"
      style={{
        backgroundColor: '#0F262C',
        paddingTop: 'clamp(80px, 12vw, 100px)',
        paddingBottom: 'clamp(80px, 12vw, 100px)',
        paddingLeft: '24px',
        paddingRight: '24px'
      }}
    >
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <h2
          className="font-black text-white mb-4"
          style={{
            fontSize: 'clamp(32px, 5vw, 44px)',
            lineHeight: '1.1',
            letterSpacing: '-0.3px'
          }}
        >
          Didn't find your tool?
        </h2>

        <p
          className="mx-auto mb-8"
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.85)',
            fontWeight: '500'
          }}
        >
          Get in touch - we'll help you connect Storyclash to your stack.
        </p>

        <a
          href="https://www.storyclash.com/request-demo"
          className="inline-flex items-center gap-2 transition-all duration-300"
          style={{
            padding: '16px 28px',
            fontSize: '16px',
            fontWeight: '600',
            backgroundColor: '#FFFFFF',
            color: '#0F262C',
            border: '2px solid transparent',
            borderRadius: '9999px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#FFFFFF';
            e.currentTarget.style.borderColor = '#FFFFFF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FFFFFF';
            e.currentTarget.style.color = '#0F262C';
            e.currentTarget.style.borderColor = 'transparent';
          }}
        >
          Book a Demo
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
