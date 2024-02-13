import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-center pt-16 md:pt-20 xl:pt-24">
      <Image
        src="/images/expertAI.svg"
        alt="ExpertAI"
        width={256}
        height={256}
        className="text-white"
      />
    </header>
  );
}
