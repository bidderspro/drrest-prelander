import Image from 'next/image';
const logo = "/assets/images/VBG_logo.svg"
export default function Header() {
  return (
    <header className="w-full py-3 px-4 bg-white shadow-sm sticky top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src={logo}
            alt="Dr. RestRight Logo" 
            width={100} 
            height={28} 
            className="h-7 w-auto"
            priority
          />
        </div>
        <button className="bg-[#22c55e] text-white text-[11px] rounded-full px-3 py-0.5">
          Try Now
        </button>
      </div>
    </header>
  );
}
