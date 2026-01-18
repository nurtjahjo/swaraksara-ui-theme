import React, { type HTMLAttributes } from 'react';

export type IconStyle = 'solid' | 'regular' | 'brands' | 'light' | 'thin' | 'duotone';

export interface IconProps extends HTMLAttributes<HTMLElement> {
  name: string;
  type?: IconStyle;
  className?: string;
  style?: React.CSSProperties;
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
