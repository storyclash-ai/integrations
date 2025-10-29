interface PowerBILogoProps {
  height?: number;
  className?: string;
  variant?: 'color' | 'white';
}

export const PowerBILogo = ({ height = 28, className = '', variant = 'color' }: PowerBILogoProps) => {
  const colors = variant === 'white'
    ? {
        yellow: '#E5EAEC',
        text: '#E5EAEC'
      }
    : {
        yellow: '#F2C811',
        text: '#231F20'
      };

  return (
    <svg
      height={height}
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: 'auto' }}
    >
      <g>
        <rect x="2" y="12" width="8" height="24" rx="1.5" fill={colors.yellow} />
        <rect x="12" y="8" width="8" height="28" rx="1.5" fill={colors.yellow} opacity="0.8" />
        <rect x="22" y="4" width="8" height="32" rx="1.5" fill={colors.yellow} opacity="0.6" />
      </g>

      <g transform="translate(40, 0)">
        <path d="M0 12.5V28.5H4.5C6.5 28.5 8 27 8 25V16C8 14 6.5 12.5 4.5 12.5H0ZM3 15.5H4.5C4.8 15.5 5 15.7 5 16V25C5 25.3 4.8 25.5 4.5 25.5H3V15.5Z" fill={colors.text} />

        <path d="M12 12.5C10 12.5 9 13.5 9 15.5V25.5C9 27.5 10 28.5 12 28.5C14 28.5 15 27.5 15 25.5V15.5C15 13.5 14 12.5 12 12.5ZM12 15.5C12.3 15.5 12.5 15.7 12.5 16V25C12.5 25.3 12.3 25.5 12 25.5C11.7 25.5 11.5 25.3 11.5 25V16C11.5 15.7 11.7 15.5 12 15.5Z" fill={colors.text} />

        <path d="M19 12.5L16 28.5H19L19.5 25.5H22L22.5 28.5H25.5L22.5 12.5H19ZM20 22.5L20.75 17L21.5 22.5H20Z" fill={colors.text} />

        <path d="M26 12.5V28.5H29V22.5H30L31.5 28.5H34.5L32.8 22C33.8 21.5 34.5 20.5 34.5 19C34.5 17 33 15.5 31 15.5H29V12.5H26ZM29 18.5H31C31.3 18.5 31.5 18.7 31.5 19C31.5 19.3 31.3 19.5 31 19.5H29V18.5Z" fill={colors.text} />

        <path d="M35 12.5V28.5H42V25.5H38V22H41.5V19H38V15.5H42V12.5H35Z" fill={colors.text} />

        <path d="M43 12.5V28.5H46V22.5H47.5C49.5 22.5 51 21 51 19V16C51 14 49.5 12.5 47.5 12.5H43ZM46 15.5H47.5C47.8 15.5 48 15.7 48 16V19C48 19.3 47.8 19.5 47.5 19.5H46V15.5Z" fill={colors.text} />
      </g>

      <g transform="translate(96, 0)">
        <rect x="0" y="12.5" width="3" height="16" fill={colors.text} />

        <path d="M5 12.5V28.5H10.5C12.5 28.5 14 27 14 25V16C14 14 12.5 12.5 10.5 12.5H5ZM8 15.5H10.5C10.8 15.5 11 15.7 11 16V25C11 25.3 10.8 25.5 10.5 25.5H8V15.5Z" fill={colors.text} />
      </g>
    </svg>
  );
};
