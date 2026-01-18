import React from 'react';

// Definisikan tipe props dengan jelas
export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  type?: 'solid' | 'regular' | 'brands' | 'light' | 'thin' | 'duotone';
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ 
  name, 
  type = 'solid', 
  className = '', 
  style,
  ...props 
}) => {
  const faPrefix = `fa-${type}`;
  const faIcon = `fa-${name}`;
  // Gabungkan class bawaan FontAwesome dengan className tambahan user
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
