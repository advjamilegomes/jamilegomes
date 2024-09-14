"use client";

import HowWeHelp from "../HowWeHelp";
import Advantages from "../Advantages";
import ButtonHero from "../Buttons/buttonhero";
import ButtonFloat from "../Buttons/buttonfloat";
import Image from "next/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "./youtubelite.css";
import AboutJamile from "../AboutJamile";
import Faq from "../Faq";
import Footer from "../Footer";
import LogoJam from "../../../../../public/assets/images/jamilelogo1.svg";
import { GoogleReviews } from "../GoogleReviews";
import { HowItWorks } from "../HowItWorks";
import { GoogleBusiness } from "../GoogleBusiness";

export function HeroVideo() {
  return (
    <section className="bg-gradient-to-b from-brandBase1-100 to-brandBase2-200">
      <div className="mx-auto max-w-7xl overflow-hidden sm:grid sm:grid-cols-2 sm:items-center">
        <div className="mt-4 p-8 sm:mb-16 lg:py-12">
          <div className="text-center sm:text-left">
            <div className="-pt-0 sm:-pt-16 mx-auto max-w-fit pb-8 sm:mx-0 sm:max-w-lg">
              <Image
                src={LogoJam}
                width={150}
                height={50}
                alt="Logo Jamile"
                loading="lazy"
              />
            </div>
            <h1 className="font-sans text-2xl font-medium uppercase tracking-wide text-brandSecondary sm:text-4xl sm:leading-none">
              Precisa regulamentar sua cidadania {""}
              <span className="bg-brandSecondary bg-clip-text font-sans font-black text-transparent">
                ou nacionalidade portuguesa?
              </span>
            </h1>
            <p className="mb-5 hidden text-base font-bold text-brandSecondary md:mt-4 md:block md:text-lg">
              Veja o vídeo e saiba o que é necessário
            </p>
            <div className="mt-4 md:mt-8">
              <ButtonHero />
            </div>
          </div>
          <div className="max-w-md text-center sm:text-left">
            <GoogleReviews />
          </div>
        </div>
        <div className="h-auto w-full items-center object-cover p-4 pt-0 sm:pt-0">
          <LiteYouTubeEmbed
            noCookie={true}
            id="JkLLb8Vs3zk"
            playlist={false}
            params="autoplay=1&rel=0"
            rel="preload"
            title="POR QUE TER UMA ADVOGADA NO PROCESSO DE NACIONALIDADE PORTUGUESA?"
          />
        </div>
      </div>
      <HowWeHelp />
      <Advantages />
      <HowItWorks />
      <AboutJamile />
      <GoogleBusiness />
      <Faq />
      <ButtonFloat />
      <Footer />
    </section>
  );
}
