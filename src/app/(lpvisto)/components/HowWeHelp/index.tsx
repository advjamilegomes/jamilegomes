import {
  ArrowCircleUpRight,
  Briefcase,
  Certificate,
  Crosshair,
  DesktopTower,
  Laptop,
  PiggyBank,
  ReadCvLogo,
  Student,
  Swap,
  UsersFour,
} from "@phosphor-icons/react/dist/ssr";
import {
  ButtonServices,
  ButtonServicesFlex,
  ButtonServicesText,
} from "../Buttons/ButtonCta";
import Link from "next/link";

export function HowWeHelp() {
  const features = [
    {
      icon: <ReadCvLogo weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "V.D1 for work",
      desc: "Foreigners with a formal job offer or a work contract of at least 12 months with any company based in Portugal",
    },
    {
      icon: <ReadCvLogo weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Job Seeker Visa",
      desc: "Any foreigner interested in going to Portugal to look for work",
    },
    {
      icon: <UsersFour weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Family Reunion Visa",
      desc: "For family members of a residence permit applicant - this visa is requested simultaneously with one of the other available residence visas, except for the job seeker visa",
    },
    {
      icon: <UsersFour weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "V.D6 Family Reunification Visa",
      desc: "For family members of a legal resident in Portugal",
    },
    {
      icon: <Laptop weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Nomad/Remote Worker Visa",
      desc: "Foreigner who works remotely and has a monthly income of at least 4 Portuguese minimum wages",
    },
    {
      icon: <PiggyBank weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "V.D7 Self-Sufficient Residence Permit",
      desc: "For retirees or individuals who receive a monthly income of at least 1 Portuguese minimum wage",
    },
    {
      icon: <Briefcase weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "V.D2 Entrepreneur/Startup Visa",
      desc: "For investors or entrepreneurs in Portugal who have a business that is economically relevant to Portugal",
    },
    {
      icon: (
        <DesktopTower weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />
      ),
      title: "Tech Visa",
      desc: "For highly qualified professionals in information technology, software engineering, programming, etc. Also registered in the Tech Visa Program",
    },
    {
      icon: <Student weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "V.D4 Student Visa",
      desc: "For foreigners with an enrollment or acceptance letter from a Portuguese educational institution who want to broaden their horizons and improve their resume",
    },
    {
      icon: <Certificate weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "V.D3 Highly Qualified Worker Visa",
      desc: "Intended for foreigners who will carry out highly qualified activities such as executive positions in large corporations or cultural activities for a period of more than 9 months with a monthly salary of at least 1.5 times the gross Portuguese minimum wage",
    },
    {
      icon: <Crosshair weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "V.D4 Research Visa",
      desc: "For those who will carry out research or study activities in Portugal",
    },
    {
      icon: <Swap weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "V.D4 Exchange Visa",
      desc: "For those who will carry out research or study activities in Portugal",
    },
    {
      icon: <Student weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "V.D4 Internship Visa",
      desc: "For a student accepted for an internship in a Portuguese institution",
    },
    {
      icon: <Student weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "V.D4 Volunteer Visa",
      desc: "For a person invited by a Portuguese entity for volunteer work",
    },
    {
      icon: <Student weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "V.D3 Teacher or Cultural Worker Visa",
      desc: "For a person who has a work contract with a Portuguese company or a job offer with a value of 1.5 times the gross Portuguese minimum wage",
    },
  ];

  return (
    <>
      <section className="mx-auto max-w-6xl px-9 py-8 md:px-8">
        <div className="mx-auto text-center">
          <div className="mx-auto max-w-4xl space-y-5 px-4 py-8 text-center">
            <h1 className="text-3xl font-medium uppercase tracking-wide text-brandSecondary sm:text-4xl sm:leading-none">
              Legal Specialties in {""}
              <span className="bg-brandPrimary bg-clip-text font-black text-transparent">
                Visas for Portugal
              </span>
            </h1>
            <p className="font-medium text-brandPrimary">
              I'll handle your visa process from start to finish
            </p>
          </div>
        </div>
        <div className="relative mx-auto pt-4 sm:pt-2">
          <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="group space-y-3 rounded-lg bg-brandBase3-300/10 p-4 shadow-brandSecondary/20 shadow-r-lg hover:scale-100 hover:border-l-4 hover:border-brandAccent hover:bg-gradient-to-r hover:from-brandAccent/40 hover:to-transparent hover:shadow-brandAccent hover:transition-shadow"
              >
                <Link
                  passHref
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=351933965256&text=Olá%20Dra.%20Jamile,%20vim%20pelo%20site%20e%20preciso%20de%20ajuda%20com%20o%20meu%20Visto.%20Podemos%20conversar%3F%20"
                >
                  <div className="flex items-center justify-center">
                    <div className="pb-1 text-brandSecondary group-hover:text-brandAccent">
                      {item.icon}
                    </div>
                  </div>
                  <h1 className="text-center text-lg font-bold text-brandSecondary group-hover:text-brandAccent">
                    {item.title}
                  </h1>
                  <p className="text-center text-sm text-brandSecondary group-hover:text-brandAccent">
                    {item.desc}
                  </p>
                  <ButtonServices>
                    <ButtonServicesText>Find out more</ButtonServicesText>
                    <ButtonServicesFlex>
                      <ArrowCircleUpRight
                        className="h-5 w-5 sm:h-5 sm:w-5"
                        weight="fill"
                      />
                    </ButtonServicesFlex>
                  </ButtonServices>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
