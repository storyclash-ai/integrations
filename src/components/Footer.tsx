export default function Footer() {
  return (
    <footer className="text-gray-400 py-8 sm:py-12 px-4 sm:px-6 text-xs sm:text-sm leading-tight sm:leading-normal" style={{ backgroundColor: '#0F262C' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 pb-6 sm:pb-8 border-b" style={{ borderColor: 'rgba(229, 234, 236, 0.2)' }}>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://www.storyclash.com/privacy"
              className="transition-colors"
              style={{ color: '#E5EAEC' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#19B776'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#E5EAEC'}
            >
              Privacy Policy
            </a>
            <a
              href="https://www.storyclash.com/imprint"
              className="transition-colors"
              style={{ color: '#E5EAEC' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#19B776'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#E5EAEC'}
            >
              Imprint
            </a>
            <a
              href="https://www.storyclash.com/contact"
              className="transition-colors"
              style={{ color: '#E5EAEC' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#19B776'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#E5EAEC'}
            >
              Contact
            </a>
          </div>
        </div>
        <div className="pt-6 sm:pt-8 text-center" style={{ color: '#E5EAEC' }}>
          <p>&copy; {new Date().getFullYear()} Storyclash GmbH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
