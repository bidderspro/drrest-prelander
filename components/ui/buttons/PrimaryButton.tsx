import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function PrimaryButton({ children, className = '', onClick }: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-primary text-white font-medium py-3 px-8 rounded-full hover:bg-primary/90 transition-all ${className}`}
    >
      {children}
    </button>
  );
}
