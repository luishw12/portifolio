import { ProjectContainer } from "@/component/ProjectContainer";

import Next from "@/images/Next.js banner.png";
import Css from "@/images/Css banner.png";
import Expo from "@/images/Expo.js banner.png";
import Html from "@/images/Html banner.png";
import ReactNative from "@/images/React-Native banner.png";
import TailwindCss from "@/images/TailwindCss banner.png";

export default function Skills() {
  return (
    <div className="flex flex-col gap-20">
      <h1 className="text-4xl text-center font-bold">Habilidades</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        <ProjectContainer
          image={Next}
          link="https://www.linkedin.com/in/lu%C3%ADs-henrique-wendt-2a23a6269/"
          text="Trabalhei a maior parte da minha carreira com Next.js, tenho mais de 1 ano de experiência neste framework."
        />
        <ProjectContainer
          image={Expo}
          link="https://www.linkedin.com/in/lu%C3%ADs-henrique-wendt-2a23a6269/"
          text="Ultimamente venho desenvolvendo aplicativos mobile usando React-Native jutamente do Expo."
        />
        <ProjectContainer
          image={TailwindCss}
          link="https://www.linkedin.com/in/lu%C3%ADs-henrique-wendt-2a23a6269/"
          text="Juntamente do Next.js, usava o TailwindCss, também tenho mais de 1 ano de experência com esse framework."
        />
        <ProjectContainer
          image={ReactNative}
          link="https://www.linkedin.com/in/lu%C3%ADs-henrique-wendt-2a23a6269/"
          text="Logo após entender melhor como funcionava o HTML, CSS e Js, parti para o React-Native"
        />
        <ProjectContainer
          image={Html}
          link="https://www.linkedin.com/in/lu%C3%ADs-henrique-wendt-2a23a6269/"
          text="O HTML jutamente do CSS e do JavaScript foram minha porta de entrada para o mundo da programação"
        />
        <ProjectContainer
          image={Css}
          link="https://www.linkedin.com/in/lu%C3%ADs-henrique-wendt-2a23a6269/"
          text="O HTML jutamente do CSS e do JavaScript foram minha porta de entrada para o mundo da programação"
        />
      </div>
    </div>
  );
}
