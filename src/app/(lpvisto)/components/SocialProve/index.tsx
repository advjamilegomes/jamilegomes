import { Star, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from "../Buttons/ButtonCta";

export function SocialProve() {
  const features = [
    {
      imgURL:
        "https://lh3.googleusercontent.com/a-/ALV-UjUCFRGenn_ryAiKmIQzC6QIpfW5uCXyaMQGxRCHrwv9qJ0Q5Vg=w75-h75-p-rp-mo-br100",
      clientName: "Karine Dias",
      clientProve:
        "A Dra. Jamile é uma excelente profissional. Agradeço por todo o suporte maravilhoso que ela me deu! Meu visto foi rapidamente aprovado, e me senti totalmente grata por ter tomado a decisão de não solicitá-lo sozinha, mas sim com a ajuda da Dra. Jamile! Podem confiar sem medo!",
    },
    {
      imgURL:
        "https://lh3.googleusercontent.com/a/ACg8ocLt7v8tCDGYVosa16pnJiKwkB6f0LmCpUCdgck8cjGCv6zWSA=w75-h75-p-rp-mo-br100",
      clientName: "Augusto Aupero",
      clientProve:
        "Dra Jamile Gomes , excelente ser humano e profissional,fez um trabalho implacável,desde a orientação sobre quais documentos precisaria pra tirar o visto até a imigração.",
    },
    {
      imgURL:
        "https://lh3.googleusercontent.com/a-/ALV-UjVBf9C2YOwEYC-CTqVq6O4FJbNhLtmYItcG5_TlhRjPYMqLy_Ocxw=w75-h75-p-rp-mo-ba3-br100",
      clientName: "Matheus Mesquita",
      clientProve:
        "Foi uma ótima consulta, com muito profissionalismo e empenho em apresentar soluções. Indico a todos o trabalho da Dr. Jamile, pois ela cumpre com excelência o seu trabalho.",
    },
    {
      imgURL:
        "https://lh3.googleusercontent.com/a-/ALV-UjUzoxEKNnfAp2vmrcqJGseEkLOIh3phGoY5PVtBCFZyZGxlU4Ez=w75-h75-p-rp-mo-br100",
      clientName: "Valessa Martins",
      clientProve:
        "Profissional super atenciosa, precisei renovar meu passaporte e ela tratou de tudo, recomendo.",
    },
    {
      imgURL:
        "https://lh3.googleusercontent.com/a-/ALV-UjVdFgd7Ixu8UWcFq8Jp30HNA7YLN7TBRlvEIeZDUB19NY-p_Aq6LQ=w75-h75-p-rp-mo-br100",
      clientName: "Zito Mendes",
      clientProve:
        "Recomendo os serviços da Dra.Jamile, muito profissionalismo,em pouco tempo tive resultado dos pedidos feito, muito atenciosa e simpática ótima profissional 😊",
    },
    {
      imgURL:
        "https://lh3.googleusercontent.com/a/ACg8ocIOyB9Lyq_Qe-3pLXnzEZz4idvLj7jQS62c-sN1gZUiEzW-mw=w75-h75-p-rp-mo-br100",
      clientName: "Thiago Machado",
      clientProve:
        "Profissional excelente. Não conseguiria ter sucesso com o meu processo se não fosse pelo seu suporte. Me ajudou desde o primeiro dia, me aconselhou quanto aos melhores caminhos que deveria seguir em relação a cada documento, respondeu minhas mensagens e minhas dúvidas com toda atenção e esteve comigo até eu ter meu visto em mãos. Recomendo totalmente.",
    },
    {
      imgURL:
        "https://lh3.googleusercontent.com/a/ACg8ocKa39_5ZiBdKkRRvQHMD02cr76WzNxjqLxJZRDAr7gWUI78aw=w75-h75-p-rp-mo-br100",
      clientName: "Luciano Reis da Silva",
      clientProve:
        "No meu caso, Jamile Gomes foi excelente! me auxiliando na busca dos documentos com 1 mês já deu entrada na minha cidadania. ( obs: eu não tinha nenhum documento tive que pedir no Brasil)",
    },
    {
      imgURL:
        "https://lh3.googleusercontent.com/a-/ALV-UjVtElt4_tgn7pSfnNK0zmmxhV7XIcO-kxc8FuuykP1E-TIiwu0=w75-h75-p-rp-mo-br100",
      clientName: "Cristiane Retamero",
      clientProve:
        "Atendimento 5 estrelas. Super atenciosa e me ajudou com todos os documentos. Recomendo 100%. Obrigada Dra. Jamile!",
    },
    {
      imgURL:
        "https://lh3.googleusercontent.com/a-/ALV-UjWRZuDhFKiEeVeZAQl1uVgr4_j2DJXIUJVyMnyBJtiaeekOcTKL=w75-h75-p-rp-mo-br100",
      clientName: "Tassia Mota",
      clientProve:
        "Sou grata por ter te encontrado, sem você meu processo de imigração não seria tão rápido. Obrigada por tudo 🙏🏼",
    },
    {
      imgURL:
        "https://lh3.googleusercontent.com/a-/ALV-UjUGenaZiAXUfKqJLy_gCtT1NzbDCtO0DbSoLvwd1mfye2RQCK_E=w75-h75-p-rp-mo-br100",
      clientName: "Dhiego Violino",
      clientProve:
        "Atendimento super rápido, prático e eficaz. Recomendo vivamente. Obrigado uma vez mais Dr. Jamile",
    },
    {
      imgURL:
        "https://lh3.googleusercontent.com/a-/ALV-UjWPsy-yLj4tJlx0D7pTGtquxcMRqQtBkSCmpXyU9N81UHF5jMYQ8g=w75-h75-p-rp-mo-br100",
      clientName: "Joao Lopes",
      clientProve:
        "Fiquei muito satisfeito com o excelente atendimento e a eficiência do serviço prestado pela advogada Jamile . O serviço superou minhas expectativas, a eficiência e a comunicação clara facilitaram todo o processo, tornando-o sem complicações. Super recomendo.",
    },
    {
      imgURL:
        "https://lh3.googleusercontent.com/a/ACg8ocLsffSXlsJNJl9MmVJmHT73Vbc9AsP33sYxzwqByB8l8ZiToF0=w75-h75-p-rp-mo-br100",
      clientName: "Angelica Silva",
      clientProve:
        "Trabalho impecável, profissionalismo e dedicação, vale cada centavo pago, as melhores recomendações de minha parte, rapidez e segurança a cada passo do processo. Recomendo muito.Dra Jamile Gomes faz exatamente o que promete com atenção e cuidado do cliente.",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-transparent to-brandAccent/30 shadow-brandSecondary/20 shadow-l-xl">
        <div className="mx-auto max-w-6xl px-9 py-12 lg:py-16">
          <div className="mx-auto text-center">
            <div className="mx-auto max-w-4xl space-y-5 px-4 py-8 text-center">
              <h1 className="text-3xl font-medium uppercase tracking-wide text-brandSecondary sm:text-4xl sm:leading-none">
                Client{" "}
                <span className="bg-brandPrimary bg-clip-text font-black text-transparent">
                  Testimonials
                </span>
              </h1>
              <p className="font-medium text-brandPrimary">
                Discover the stories of families and professionals who have made
                Portugal their home with our help
              </p>
            </div>
          </div>
          <div className="mt-8 max-w-6xl [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
            {features.map((item, idx) => (
              <div className="mb-8 sm:break-inside-avoid" key={idx}>
                <blockquote className="rounded-lg bg-brandBase3-300/5 p-6 shadow-brandSecondary/20 shadow-l-lg sm:p-8">
                  <div className="flex items-center gap-4">
                    <Image
                      width={45}
                      height={45}
                      loading="lazy"
                      alt="Lead"
                      src={item.imgURL}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex justify-start gap-0.5 text-brandPrimary">
                        <Star weight="fill" size={20} />
                        <Star weight="fill" size={20} />
                        <Star weight="fill" size={20} />
                        <Star weight="fill" size={20} />
                        <Star weight="fill" size={20} />
                      </div>
                      <p className="mt-0.5 text-lg font-medium text-brandSecondary">
                        {item.clientName}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 font-medium text-brandSecondary">
                    {item.clientProve}
                  </p>
                </blockquote>
              </div>
            ))}
          </div>
          <div className="mx-auto max-w-fit px-4 pt-4 text-center sm:pt-12">
            <ButtonHome href="https://api.whatsapp.com/send?phone=351933965256&text=Olá%20Dra.%20Jamile,%20vim%20pelo%20site%20e%20preciso%20de%20ajuda%20com%20o%20meu%20Visto.%20Podemos%20conversar%3F%20">
              <ButtonHomeText>
                Join our growing list of satisfied clients
              </ButtonHomeText>
              <ButtonHomeFlex>
                <WhatsappLogo className="h-5 w-5 sm:h-6 sm:w-6" weight="fill" />
              </ButtonHomeFlex>
            </ButtonHome>
          </div>
        </div>
      </section>
    </>
  );
}
