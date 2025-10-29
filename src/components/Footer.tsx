export default function Footer() {
  return (
    <footer className="text-gray-400 py-12 px-6" style={{ backgroundColor: '#0F262C' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-6 pb-8 border-b" style={{ borderColor: 'rgba(229, 234, 236, 0.2)' }}>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a
              href="#"
              className="transition-colors"
              style={{ color: '#E5EAEC' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#19B776'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#E5EAEC'}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="transition-colors"
              style={{ color: '#E5EAEC' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#19B776'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#E5EAEC'}
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="transition-colors"
              style={{ color: '#E5EAEC' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#19B776'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#E5EAEC'}
            >
              Contact
            </a>
            <a
              href="#"
              className="transition-colors"
              style={{ color: '#E5EAEC' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#19B776'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#E5EAEC'}
            >
              Support
            </a>
          </div>
        </div>
        <div className="pt-8 text-center text-sm" style={{ color: '#E5EAEC' }}>
          <p>&copy; {new Date().getFullYear()} Storyclash GmbH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
