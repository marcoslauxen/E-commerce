export default function Footer() {
  return (
    <footer className="w-full bg-zinc-900 text-white py-10 px-6 text-sm">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center ">
        <div>
          <h2 className="text-lg font-bold">Lauxen Store</h2>
          <p className="text-gray-400 mt-2 max-w-sm mx-auto md:mx-0">
            Oferecemos os melhores produtos com segurança e qualidade. Compre
            com confiança e aproveite ofertas exclusivas!
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Descubra Lauxen</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Atendimento
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Serviços</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Entrega Rápida
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Programa de Fidelidade
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Cartão Presente
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Marketplace
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Políticas</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Termos e Condições
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Política de Reembolso
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Lauxen Store. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
