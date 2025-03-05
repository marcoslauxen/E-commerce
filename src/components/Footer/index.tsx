import { useState } from 'react';
import FooterSection from './FooterSection';
import SocialIcons from './SocialIcons';
import TermsAndConditionsModal from '../Modal/TermsAndConditionsModal';
import TermsAndConditions from '../TermsAndConditions';

const footerSections = [
  {
    title: 'Descubra Lauxen',
    links: ['Sobre Nós', 'Atendimento', 'FAQ'],
  },
  {
    title: 'Serviços',
    links: [
      'Entrega Rápida',
      'Programa de Fidelidade',
      'Cartão Presente',
      'Marketplace',
    ],
  },
  {
    title: 'Políticas',
    links: [
      'Política de Privacidade',
      'Termos e Condições',
      'Política de Reembolso',
    ],
  },
];

export default function Footer() {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const handleLinkClick = (link: string) => {
    if (link === 'Termos e Condições') {
      setIsTermsModalOpen(true);
    }
  };

  return (
    <footer className="w-full bg-zinc-900 text-white py-10 px-6 text-sm">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-lg font-bold">Lauxen Store</h2>
          <p className="text-gray-400 mt-3 max-w-sm mx-auto md:mx-0">
            Oferecemos os melhores produtos com segurança e qualidade. Compre
            com confiança e aproveite ofertas exclusivas!
          </p>
          <SocialIcons />
        </div>

        {footerSections.map((section) => (
          <FooterSection
            key={section.title}
            title={section.title}
            links={section.links}
            onLinkClick={handleLinkClick}
          />
        ))}
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Lauxen Store. Todos os direitos
        reservados.
      </div>

      {isTermsModalOpen && (
        <TermsAndConditionsModal onClose={() => setIsTermsModalOpen(false)}>
          <TermsAndConditions />
        </TermsAndConditionsModal>
      )}
    </footer>
  );
}
