export default function TermsAndConditions() {
  const date = new Date();

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">TERMOS E CONDIÇÕES DE USO</h2>
      <p className="text-sm text-gray-600">
        Última atualização: {date.toLocaleDateString()}
      </p>

      <p className="mt-4">
        Bem-vindo(a) ao <strong>Lauxen Store</strong>! Estes Termos e Condições
        regem o uso do nosso site e a compra de produtos por meio da nossa
        plataforma. Ao acessar ou utilizar nossos serviços, você concorda com os
        termos abaixo.
      </p>

      <h3 className="mt-4 font-semibold">1. OBJETO</h3>
      <p>
        Estes Termos e Condições regulam o uso do site{' '}
        <strong>www.lauxenstore.com</strong> e todas as transações comerciais
        realizadas por meio dele.
      </p>

      <h3 className="mt-4 font-semibold">2. CADASTRO DO USUÁRIO</h3>
      <p>
        <strong>2.1.</strong> Para efetuar compras em nosso site, o usuário
        poderá ser solicitado a criar uma conta, fornecendo informações pessoais
        verdadeiras e atualizadas.
      </p>
      <p>
        <strong>2.2.</strong> O usuário é responsável pela segurança de sua
        conta e senha. Não nos responsabilizamos por acessos não autorizados
        causados por negligência no armazenamento dessas informações.
      </p>

      <h3 className="mt-4 font-semibold">3. PRODUTOS E DISPONIBILIDADE</h3>
      <p>
        <strong>3.1.</strong> Nos esforçamos para manter todas as informações
        sobre nossos produtos corretas e atualizadas, incluindo preços,
        descrições e disponibilidade.
      </p>
      <p>
        <strong>3.2.</strong> Caso um produto adquirido esteja indisponível após
        a compra, entraremos em contato para oferecer um reembolso ou uma
        alternativa.
      </p>

      <h3 className="mt-4 font-semibold">4. PAGAMENTOS</h3>
      <p>
        <strong>4.1.</strong> Aceitamos os seguintes métodos de pagamento:
        [cartões de crédito, boleto, Pix, transferência bancária, etc.].
      </p>

      <h3 className="mt-4 font-semibold">5. ENTREGA E FRETE</h3>
      <p>
        <strong>5.1.</strong> O prazo de entrega pode variar de acordo com a
        região e o método de envio escolhido pelo cliente.
      </p>

      <h3 className="mt-4 font-semibold">6. TROCAS E DEVOLUÇÕES</h3>
      <p>
        <strong>6.1.</strong> O cliente tem o direito de desistir da compra
        dentro do prazo de 7 dias corridos após o recebimento do produto,
        conforme o Código de Defesa do Consumidor (Art. 49).
      </p>

      <p className="mt-4">
        Caso tenha dúvidas, entre em contato conosco pelo e-mail{' '}
        <strong>contato@lauxenstore.com</strong> ou pelo telefone{' '}
        <strong>+55 (11) 98765-4321</strong>.
      </p>
    </div>
  );
}
