export default function AboutMe() {
  return (
    <section className="flex flex-col">
      <div className="w-[850px] border-2 border-purple-700 p-8 rounded-3xl hover:scale-105 duration-150 bg-gradient hover:bg-purple-700 group">
        <h1 className="text-5xl font-bold pb-3 border-b border-purple-700 text-purple-800 group-hover:text-white group-hover:border-white duration-150">
          Sobre mim
        </h1>
        <div className="w-full text-justify p-4 flex flex-col gap-4 text-purple-900 group-hover:text-gray-200 font-medium duration-150">
          <p>
            Olá! Meu nome é Luís Henrique Wendt, sou um jovem de 17 anos
            apaixonado por programação. Iniciei minha jornada tecnológica aos 16
            anos e venho me dedicando a aprimorar minhas habilidades desde
            então.
          </p>
          <p>
            Atualmente, estou prestes a concluir o ensino fundamental. Desde
            cedo, mergulhei no mundo da programação e tive a oportunidade de
            colaborar com uma empresa por mais de um ano, buscando soluções
            criativas para problemas reais.
          </p>
          <p>
            Minha especialização é em front-end, onde adoro trabalhar com HTML,
            CSS e JavaScript para criar interfaces atraentes e interativas.
            Estou constantemente buscando aprender e acompanhar as últimas
            tendências do desenvolvimento web.
          </p>
          <p>
            Sou movido pelo constante aprendizado e busco contribuir para
            projetos inovadores que possam impactar positivamente a vida das
            pessoas. Se você procura um profissional dedicado e comprometido com
            a excelência, estou aqui para ajudar.
          </p>
          <p>
            Agradeço pela visita ao meu portfólio e estou ansioso para trabalhar
            em projetos empolgantes e desafiadores no futuro!
          </p>
        </div>
      </div>
    </section>
  );
}
