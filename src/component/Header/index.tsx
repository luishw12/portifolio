import Image from "next/image";

import logo from "@/images/Logo.png";
import Link from "next/link";

export function Header() {
  return (
    <header className="p-3 flex justify-between py-4 px-44 fixed top-0 w-screen border-b-2 backdrop-blur-lg z-10">
      <Link href={"./"}>
        <Image src={logo} alt={"Logo"} width={60} />
      </Link>
      <div className="h-[60px] flex items-center gap-7">
        <Link
          href={"./"}
          className="font-medium text-zinc-800 border-transparent border-b-2 hover:border-zinc-800"
        >
          Início
        </Link>
        <Link
          href={"./aboutMe"}
          className="font-medium text-zinc-800 border-transparent border-b-2 hover:border-zinc-800"
        >
          Sobre mim
        </Link>
        <Link
          href={"./projects"}
          className="font-medium text-zinc-800 border-transparent border-b-2 hover:border-zinc-800"
        >
          Projetos
        </Link>
        <Link
          href={"./skills"}
          className="font-medium text-zinc-800 border-transparent border-b-2 hover:border-zinc-800"
        >
          Habilidades
        </Link>
      </div>
    </header>
  );
}
