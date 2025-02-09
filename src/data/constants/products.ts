import Product from '../model/Product';

import MacBook from '../../../public/images/macbook.png';
import IPhone from '../../../public/images/iphone.png';
import Airpods from '../../../public/images/airpods.png';
import AppleWatch from '../../../public/images/apple_watch.png';
import Cadeira from '../../../public/images/cadeira.png';
import Playstation from '../../../public/images/playstation.png';

const products: Product[] = [
  {
    id: 1,
    name: 'iPhone 16 Pro Max',
    description: 'iPhone 16 Pro Max com câmera tripla e tela Super Retina XDR.',
    fullDescription:
      'O iPhone 16 Pro Max combina tecnologia de ponta e design sofisticado. Equipado com uma tela Super Retina XDR de 6,7 polegadas, proporciona cores vibrantes e alta taxa de atualização para uma experiência visual imersiva. Sua câmera tripla de 108MP permite capturar fotos incríveis com alta definição, enquanto o processador A16 Bionic garante desempenho rápido e eficiente. Além disso, conta com bateria de longa duração, carregamento ultrarrápido e conectividade 5G para máxima velocidade de internet.',
    price: 7999.99,
    image: IPhone,
  },
  {
    id: 2,
    name: 'MacBook Pro M3',
    description: 'MacBook Pro com processador Apple M3 e SSD de 512GB.',
    fullDescription:
      'O MacBook Pro M3 é a escolha perfeita para quem busca desempenho e mobilidade. Com um design ultrafino e leve, ele possui tela Retina de 13 polegadas com tecnologia True Tone, proporcionando conforto visual. Seu processador Apple M3 de última geração aliado ao SSD de 512GB e 16GB de RAM garantem velocidade e eficiência em qualquer tarefa. A bateria de longa duração e a conectividade Wi-Fi 6 tornam este notebook ideal para trabalho, estudos e entretenimento.',
    price: 10999.9,
    image: MacBook,
  },
  {
    id: 3,
    name: 'AirPods Max',
    description:
      'Fone de ouvido sem fio com cancelamento de ruído e alta qualidade.',
    fullDescription:
      'Desfrute de uma experiência sonora imersiva com os AirPods Max. Equipado com tecnologia de cancelamento de ruído ativo, ele bloqueia sons externos para que você aproveite suas músicas, podcasts e chamadas com total clareza. Seu design ergonômico proporciona conforto durante horas de uso, e sua bateria de longa duração permite até 20 horas de reprodução contínua. Além disso, possui conectividade Bluetooth 5.2, garantindo emparelhamento rápido e estável com qualquer dispositivo.',
    price: 4844.99,
    image: Airpods,
  },
  {
    id: 4,
    name: 'Apple Watch 9 Ultra',
    description:
      'Relógio inteligente com monitoramento cardíaco e GPS integrado.',
    fullDescription:
      'O Apple Watch 9 Ultra é o parceiro ideal para quem busca um estilo de vida mais saudável e conectado. Com sensor de monitoramento cardíaco em tempo real, oxigenação do sangue (SpO2) e análise do sono, ele acompanha sua saúde ao longo do dia. Além disso, conta com GPS integrado para rastreamento preciso de atividades físicas, resistência à água para uso em diversas condições e notificações inteligentes para mantê-lo sempre atualizado. Sua bateria de longa duração permite uso contínuo por até 10 dias.',
    price: 1299.99,
    image: AppleWatch,
  },
  {
    id: 5,
    name: 'Cadeira Gamer',
    description:
      'Cadeira ergonômica com ajuste de altura e apoio para os braços.',
    fullDescription:
      'A Cadeira Gamer oferece conforto e suporte ideais para longas sessões de jogo. Com design ergonômico, possui ajuste de altura, inclinação e apoio para os braços, proporcionando uma postura correta e confortável. O estofamento em espuma de alta densidade e o revestimento em couro sintético garantem durabilidade e fácil limpeza. Além disso, conta com rodas de nylon que permitem movimentação suave e silenciosa.',
    price: 999.99,
    image: Cadeira,
  },
  {
    id: 6,
    name: 'PlayStation 5',
    description:
      'Console de última geração com suporte a jogos em 4K e Ray Tracing.',
    fullDescription:
      'O PlayStation 5 leva a experiência dos videogames para outro nível. Com suporte a gráficos em 4K, Ray Tracing e alta taxa de quadros, proporciona realismo e fluidez incomparáveis. Equipado com um SSD ultrarrápido, reduz drasticamente os tempos de carregamento, enquanto o processador de última geração garante máximo desempenho. Além disso, conta com um sistema de resfriamento otimizado para manter a performance em longas sessões de jogo e compatibilidade com jogos da geração anterior.',
    price: 4499.99,
    image: Playstation,
  },
];

export default products;
