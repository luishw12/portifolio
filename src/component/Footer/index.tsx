import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-purple-700 flex p-20 justify-center gap-6 text-white">
      <Link
        href="https://www.linkedin.com/in/lu%C3%ADs-henrique-wendt-2a23a6269/"
        className="p-2 border-2 rounded-full hover:bg-white hover:text-purple-700 duration-200"
      >
        <FaLinkedinIn size={18} />
      </Link>
      <Link
        href="https://github.com/luishw12"
        className="p-2 border-2 rounded-full hover:bg-white hover:text-purple-700 duration-200"
      >
        <FaGithub size={18} />
      </Link>
      <Link
        href="./contact"
        className="p-2 border-2 rounded-full hover:bg-white hover:text-purple-700 duration-200"
      >
        <HiOutlineMail size={18} />
      </Link>
    </footer>
  );
}
