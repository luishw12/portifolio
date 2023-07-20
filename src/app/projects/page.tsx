import Image from "next/image";

import AppMovies from "@/images/AppMovies banner.png";
import Cobranca from "@/images/Cobranca banner.png";
import DsTosha from "@/images/DesignSystem banner.png";
import { ProjectContainer } from "@/component/ProjectContainer";

export default function Projects() {
  return (
    <div className="flex flex-col gap-20">
      <h1 className="text-4xl text-center font-bold">Projetos recentes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        <ProjectContainer
          image={AppMovies}
          link="https://github.com/luishw12/AppMovies/tree/main"
          text="Aplicativo em React-Native + Expo feito usando a api do tmdb para buscar por filmes e informações dos filmes."
        />
        <ProjectContainer
          image={Cobranca}
          link="https://portal-api.dynaduo.com.br"
          text="Website desenvolvido na empresa em que pestava serviço."
        />
        <ProjectContainer
          image={DsTosha}
          link="https://ds-toshyro-deploy-luishw12.vercel.app/"
          text="Design System desenvolvido também na empresa que eu prestei serviço, feito com o intúito de padronizar e facilitar a criação de CRUDs."
        />
      </div>
    </div>
  );
}
