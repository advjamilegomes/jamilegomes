import Image from "next/image";
import bg1 from "../../../../../public/assets/images/bandeiraportugal.jpg";
import bg2 from "../../../../../public/assets/images/bandeirabrasileira.jpeg";
import bg3 from "../../../../../public/assets/images/portugalmagick.webp";

export default function Advantages() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M125.66,165.66l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L64,204.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM208,32H48A16,16,0,0,0,32,48V156.23a4,4,0,0,0,4.41,4,32,32,0,0,1,26.22,9.16,1.93,1.93,0,0,0,2.74,0l32-32a32,32,0,0,1,45.26,45.26l-34.55,34.54a4,4,0,0,0,2.83,6.83H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
        </svg>
      ),
      title:
        "Com o passaporte português você poderá morar em qualquer dos 27 países da Europa sem necessidade de visto;",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M125.66,165.66l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L64,204.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM208,32H48A16,16,0,0,0,32,48V156.23a4,4,0,0,0,4.41,4,32,32,0,0,1,26.22,9.16,1.93,1.93,0,0,0,2.74,0l32-32a32,32,0,0,1,45.26,45.26l-34.55,34.54a4,4,0,0,0,2.83,6.83H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
        </svg>
      ),
      title:
        "Não precisa de visto para turistar em países como Canadá, EUA, Emirados Árabes e Japão;",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M125.66,165.66l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L64,204.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM208,32H48A16,16,0,0,0,32,48V156.23a4,4,0,0,0,4.41,4,32,32,0,0,1,26.22,9.16,1.93,1.93,0,0,0,2.74,0l32-32a32,32,0,0,1,45.26,45.26l-34.55,34.54a4,4,0,0,0,2.83,6.83H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
        </svg>
      ),
      title: "Agilidade na imigração;",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M125.66,165.66l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L64,204.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM208,32H48A16,16,0,0,0,32,48V156.23a4,4,0,0,0,4.41,4,32,32,0,0,1,26.22,9.16,1.93,1.93,0,0,0,2.74,0l32-32a32,32,0,0,1,45.26,45.26l-34.55,34.54a4,4,0,0,0,2.83,6.83H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
        </svg>
      ),
      title: "Acesso mais fácil a instituições de ensino;",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M125.66,165.66l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L64,204.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM208,32H48A16,16,0,0,0,32,48V156.23a4,4,0,0,0,4.41,4,32,32,0,0,1,26.22,9.16,1.93,1.93,0,0,0,2.74,0l32-32a32,32,0,0,1,45.26,45.26l-34.55,34.54a4,4,0,0,0,2.83,6.83H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
        </svg>
      ),
      title: "Passar a nacionalidade para os seus filhos, netos e seguintes",
    },
  ];

  return (
    <>
      <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 lg:max-w-lg xl:pr-0">
            <div className="mb-6 max-w-xl">
              <h1 className="font-sans text-3xl font-medium uppercase tracking-wide text-brandSecondary sm:text-4xl sm:leading-none">
                Você sabe as Vantagens de ser um {""}
                <span className="bg-brandSecondary bg-clip-text font-sans font-black text-transparent">
                  Cidadão Português?
                </span>
              </h1>
            </div>
            <div className="max-w-lg pt-2 lg:max-w-none">
              <ul className="space-y-4">
                {features.map((item, idx) => (
                  <li key={idx} className="flex gap-x-4">
                    <div className="flex h-7 w-7 flex-none items-center justify-center rounded-lg text-brandSecondary">
                      {item.icon}
                    </div>
                    <div>
                      <h1 className="text-sm font-semibold text-brandRed-900">
                        {item.title}
                      </h1>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="-mx-4 flex items-center justify-center lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <Image
                src={bg1}
                alt="Image 1"
                className="mb-6 h-28 w-28 rounded-lg object-cover shadow-lg shadow-black/50 sm:h-48 sm:w-48 xl:h-56 xl:w-56"
                width={300}
                height={300}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />
              <Image
                src={bg2}
                alt="Image 2"
                className="h-20 w-20 rounded-lg object-cover shadow-lg shadow-black/50 sm:h-32 sm:w-32 xl:h-40 xl:w-40"
                width={300}
                height={300}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />
            </div>
            <div className="px-3">
              <Image
                src={bg3}
                alt="Image 3"
                className="h-40 w-40 rounded-lg object-cover shadow-lg shadow-black/50 sm:h-64 sm:w-64 xl:h-80 xl:w-80"
                width={300}
                height={300}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
