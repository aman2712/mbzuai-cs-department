import Image from "next/image";
import Logo from "../public/mbzuai-logo.svg";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="bg-transparent flex justify-between items-center py-9 mx-32 border-b border-white/40">
      <Image src={Logo} width={250} height={200} alt="Logo | MBZUAI" />
      <div className="flex items-center gap-10 text-white font-semibold text-[18px]">
        <Link href="#" className="hover:text-[#0EB8FF] transition duration-200">
          Home
        </Link>
        <Link href="#" className="hover:text-[#0EB8FF] transition duration-200">
          About
        </Link>
        <Link href="#" className="hover:text-[#0EB8FF] transition duration-200">
          Programs
        </Link>
        <Link href="#" className="hover:text-[#0EB8FF] transition duration-200">
          Faculty
        </Link>
        <Link href="#" className="hover:text-[#0EB8FF] transition duration-200">
          Research
        </Link>
        <Link href="#" className="hover:text-[#0EB8FF] transition duration-200">
          Contact
        </Link>
        <Link href="https://mbzuai.ac.ae" target="_blank">
          <button className="px-4 py-2 border-2 bg-transparent border-white text-white font-semibold group flex items-center gap-3 hover:bg-[#ffffff] hover:text-[#3A348A] transition duration-300 cursor-pointer text-sm">
            Visit MBZUAI <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </div>
  );
}
