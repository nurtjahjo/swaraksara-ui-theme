import React, { type HTMLAttributes } from 'react';

export type IconStyle = 'solid' | 'regular' | 'brands' | 'light' | 'thin' | 'duotone';

export interface IconProps extends HTMLAttributes<HTMLElement> {
  /** Nama icon (tanpa prefix fa-), contoh: 'house', 'user', 'facebook' */
  name: string;
  /** Style icon, default: 'solid' */
  type?: IconStyle;
  /** Ukuran font-size atau class utility lainnya */
  className?: string;
  /** Warna atau style css custom */
  style?: React.CSSProperties;
}

/**
 * Komponen Icon Hybrid.
 * Merender tag <i> yang akan di-transformasi menjadi SVG oleh script FontAwesome Legacy.
 */
export const Icon: React.FC<IconProps> = ({ 
  name, 
  type = 'solid', 
  className = '', 
  style,
  ...props 
}) => {
  // Mapping type ke prefix class FontAwesome 6 (misal: 'solid' -> 'fa-solid')
  const faPrefix = `fa-${type}`;
  const faIcon = `fa-${name}`;
  
  // Menggabungkan class
  const finalClass = `${faPrefix} ${faIcon} ${className}`.trim();

  return (
    <i 
      className={finalClass} 
      style={style} 
      aria-hidden="true"
      {...props} 
    />
  );
};
