import SocialIcons from "./SocialIcons";
import FooterSection from "./FooterSection";

const footerSections = [
  {
    title: "Loja",
    links: ["Novidades", "Promoções", "Categorias", "Mais Vendidos"],
  },
  {
    title: "Suporte",
    links: [
      "Atendimento",
      "Política de Troca",
      "Entrega e Frete",
      "Perguntas Frequentes",
    ],
  },
  { title: "Sobre Nós", links: ["Nossa História", "Blog", "Contato"] },
];

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-800 text-white py-8 px-6 md:px-12">
      <div className="container mx-auto flex flex-col items-center text-center md:text-left md:flex-row md:items-start md:justify-between gap-8">
        <div className="w-full flex justify-center md:justify-start">
          <SocialIcons />
        </div>

        <div className="w-full flex flex-col sm:flex-row sm:justify-center sm:gap-8 md:gap-16">
          {footerSections.map(({ title, links }) => (
            <FooterSection key={title} title={title} links={links} />
          ))}
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} Seu E-commerce. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
