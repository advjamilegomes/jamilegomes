"use client";

export default function Faq() {
  const faqList = [
    {
      title:
        "Preciso ir pessoalmente para Portugal para pedir a nacionalidade?",
      subtitle: "Não, nós protocolamos o pedido para você na Conservatória.",
    },
    {
      title: "Meu bisavô é Português, tenho direito a nacionalidade?",
      subtitle:
        "Sim, a lei prevê que o bisneto de um português pode pedir a nacionalidade, para isso precisa de residir legalmente em Portugal por, pelo menos, 5 anos. Entre em contacto para avaliarmos o seu caso.",
    },
    {
      title:
        "Minha família não tem informações sobre o meu parente português, o que fazer?",
      subtitle:
        "O processo de nacionalidade é mais rápido quando temos todas as informações, mas a falta de informação não impede que você localize o seu parente português. Nós também prestamos serviços de buscas, desejando contratar, basta entrar em contato pelo WhatsApp.",
    },
    {
      title:
        "Faltam alguns meses para completar os 5 anos de residência, já posso solicitar a nacionalidade?",
      subtitle:
        "Não, a nacionalidade só deve ser solicitada após cumprido o prazo mínimo de residência legal, que passou a ser de 7 anos para cidadãos da CPLP e da União Europeia, e de 10 anos para os demais países. Esse prazo passou a contar a partir da emissão do título de residência, e não da data em que o pedido de residência foi feito. Caso protocole o pedido de nacionalidade antes de cumprir o prazo, este poderá ser negado e você precisará iniciar todo o processo novamente, incluindo o pagamento de nova taxa. Recomendamos aguardar o prazo correto para não arriscar tempo e dinheiro.",
    },
  ];

  return (
    <>
      <div className="mx-auto px-4 pb-8 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-16">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
            <div className="mx-auto text-center">
              <div className="mx-auto max-w-4xl space-y-5 px-4 py-2 text-center">
                <h1 className="font-sans text-3xl font-medium uppercase tracking-wide text-brandSecondary sm:text-4xl sm:leading-none">
                  FAQ - {""}
                  <span className="bg-brandSecondary bg-clip-text font-sans font-black text-transparent">
                    Dúvidas Frequentes
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-1">
          <div className="mt-1 space-y-2">
            {faqList.map((item, idx) => (
              <div
                key={idx}
                tabIndex={0}
                className="collapse collapse-arrow rounded-lg bg-brandSecondary"
              >
                <input type="checkbox" className="peer" aria-label="checkbox" />
                <div className="collapse-title font-sans font-bold text-brandBase1-100">
                  {item.title}
                </div>
                <div className="collapse-content font-sans text-sm font-semibold text-brandBase2-200">
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
