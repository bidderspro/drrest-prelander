/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import logoImg from "@images/VBG_logo.svg";

export default function PrelandingHeader() {
  return (
    <header className="w-full px-4 sm:px-6 lg:px-14 py-2.5 bg-white">
      <div className="max-w-7xl mx-auto">
        <Image
          src={logoImg}
          alt="Verified Buyers Guide"
          width={214}
          height={94}
          className="w-40 h-auto sm:w-52 sm:h-auto"
          sizes="(max-width: 640px) 13rem, 214px"
        />
      </div>
    </header>
  );
}


