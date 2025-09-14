interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function PrimaryButton({ 
  children, 
  onClick, 
  className = '', 
  size = 'md' 
}: PrimaryButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      onClick={onClick}
      className={`bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-colors duration-200 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}