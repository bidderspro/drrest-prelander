import Image from "next/image";
import Link from "next/link";
import logoImg from "@images/VBG_logo.svg";

export default function PrelandingHeader() {
  return (
    <header className="w-full px-4 sm:px-6 lg:px-14 xl:px-16 2xl:px-20 py-3 sm:py-4 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
          <Image
            src={logoImg}
            alt="Verified Buyers Guide"
            width={214}
            height={94}
            className="w-40 h-auto sm:w-52 sm:h-auto"
            sizes="(max-width: 640px) 10rem, (max-width: 768px) 12rem, (max-width: 1024px) 13rem, (max-width: 1280px) 214px, (max-width: 1536px) 214px, 214px"
            priority
          />
        </Link>
      </div>
    </header>
  );
}


