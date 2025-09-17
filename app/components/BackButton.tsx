'use client';

import { useRouter } from 'next/navigation';

type BackButtonProps = {
  label?: string;
  className?: string;
};

export default function BackButton({ label = 'Back', className = '' }: BackButtonProps) {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={`inline-flex items-center gap-2 text-sm sm:text-base text-zinc-700 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded transition-colors ${className}`}
      aria-label={label}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 sm:h-6 sm:w-6"
        aria-hidden="true"
      >
        <path d="M10.828 11.9999L15.778 7.04994C16.168 6.65994 16.168 6.02994 15.778 5.63994C15.388 5.24994 14.758 5.24994 14.368 5.63994L8.99805 10.9999C8.60805 11.3899 8.60805 12.0199 8.99805 12.4099L14.368 17.7799C14.758 18.1699 15.388 18.1699 15.778 17.7799C16.168 17.3899 16.168 16.7599 15.778 16.3699L10.828 11.9999Z" />
      </svg>
      {label}
    </button>
  );
}


