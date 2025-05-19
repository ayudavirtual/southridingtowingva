import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ href, children, className = '' }) => {
  return (
    <a 
      href={href} 
      className={`text-primary-700 hover:text-secondary-500 font-medium transition-colors duration-300 ${className}`}
    >
      {children}
    </a>
  );
};