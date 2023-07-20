"use client";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

import profilePhoto from "@/images/Foto minha.jpg";
import Link from "next/link";

export default function Start() {
  return (
    <section className="flex-col flex align-center gap-10">
      <Image
        src={profilePhoto}
        alt="Foto de perfil"
        className="w-[300px] h-[300px] object-cover rounded-full mx-auto border-4 border-purple-700 hover:scale-105 duration-150"
      />
      <h1 className="text-zinc-800 font-semibold text-[25px]">
        Oi, eu sou
        <br />
        <span className="text-[50px]">Luís Henrique Wendt.</span>
        <br />
        Desenvolvedor{" "}
        <TypeAnimation
          sequence={["Front-end", 3000, "React-Native", 3000]}
          speed={1}
          repeat={Infinity}
        />
      </h1>
      <Link
        href="https://www.linkedin.com/in/lu%C3%ADs-henrique-wendt-2a23a6269/"
        className="w-full flex align-center justify-center p-3 rounded-full border-2 border-purple-700 font-semibold text-purple-700 hover:text-white hover:bg-purple-700 duration-200 text-lg"
        target="_blank"
      >
        LinkedIn
      </Link>
    </section>
  );
}
