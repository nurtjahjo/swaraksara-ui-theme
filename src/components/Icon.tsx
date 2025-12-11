import React, { type CSSProperties } from 'react';

interface IconProps {
  /** Komponen SVG yang diimport (e.g. import { ReactComponent as Star } ...) */
  as: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: string; // Bisa hex, rgb, atau var css
  className?: string;
  style?: CSSProperties;
}

const sizeMap = {
  xs: '0.75rem',  // 12px
  sm: '0.875rem', // 14px
  md: '1rem',     // 16px
  lg: '1.25rem',  // 20px
  xl: '1.5rem',   // 24px
  '2xl': '2rem',  // 32px
};

/**
 * Komponen Wrapper untuk Icon SVG.
 * Penggunaan:
 * import UserIcon from '../../assets/icons/light/user.svg?react';
 * <Icon as={UserIcon} size="lg" className="text-primary" />
 */
export const Icon: React.FC<IconProps> = ({ 
  as: SvgComponent, 
  size = 'md', 
  color, 
  className = '', 
  style 
}) => {
  const computedStyle: CSSProperties = {
    fontSize: sizeMap[size],
    width: '1em', // Mengikuti fontSize
    height: '1em',
    color: color || 'currentColor', // Default mengikuti warna teks parent
    display: 'inline-block',
    verticalAlign: 'middle', // Agar sejajar dengan teks
    ...style,
  };

  return (
    <SvgComponent 
      className={`sw-icon ${className}`} 
      style={computedStyle} 
      aria-hidden="true" 
    />
  );
};
