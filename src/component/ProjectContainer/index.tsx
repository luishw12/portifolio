import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  image: StaticImageData;
  alt?: string;
  text: string;
  link: string;
}

export function ProjectContainer({ image, alt = "Banner", text, link }: Props) {
  return (
    <div className="relative group overflow-hidden rounded-2xl">
      <Image
        src={image}
        alt={alt}
        className="group-hover:scale-125 duration-300 ease-in-out"
      />
      <div className="flex flex-col justify-center absolute top-0 h-full w-full p-10 text-white text-center font-medium gap-10 opacity-0 group-hover:opacity-100 duration-200 group-hover:bg-[#141c3a] ease-in">
        <p>{text}</p>
        <div>
          <Link
            href={link}
            className="px-5 py-1.5 border-2 border-purple-700 text-white hover:bg-purple-700 rounded-full"
            target="_blank"
          >
            Ver mais
          </Link>
        </div>
      </div>
    </div>
  );
}
