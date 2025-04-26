import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="relative w-[100px] h-[40px] sm:w-[120px] sm:h-[50px] md:w-[150px] md:h-[60px]">
      <Link href={"/"}>
        <Image
          src="/logowhite.svg"
          alt="Logo"
          fill
          priority
          className="object-contain"
        />
      </Link>
    </div>
  );
};

export default Logo;
