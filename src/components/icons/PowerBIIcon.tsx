interface PowerBIIconProps {
  height?: number;
  className?: string;
  opacity?: number;
}

export const PowerBIIcon = ({ height = 30, className = '', opacity = 1 }: PowerBIIconProps) => {
  return (
    <svg
      height={height}
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: 'auto', opacity }}
    >
      <rect x="2" y="12" width="8" height="24" rx="1.5" fill="#F2C811" />
      <rect x="12" y="8" width="8" height="28" rx="1.5" fill="#F2C811" opacity="0.8" />
      <rect x="22" y="4" width="8" height="32" rx="1.5" fill="#F2C811" opacity="0.6" />
    </svg>
  );
};
