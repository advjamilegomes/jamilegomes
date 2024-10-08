import { ComponentProps } from "react";

export interface HeroComponents {
  className: string;
}

type HeroRootProps = ComponentProps<"section">;

export function HeroRoot(props: HeroRootProps) {
  return <section className="relative h-svh overflow-hidden" {...props} />;
}

type HeroGradientProps = ComponentProps<"div">;

export function HeroGradient(props: HeroGradientProps) {
  return (
    <div
      className="absolute h-full w-full bg-gradient-to-t from-brandBase1-100 from-30% to-transparent to-70% sm:bg-gradient-to-r sm:from-transparent"
      {...props}
    />
  );
}

type HeroPropertyProps = ComponentProps<"div">;

export function HeroProperty(props: HeroPropertyProps) {
  return (
    <div className="z-50 mt-48 pt-8 sm:my-20 sm:py-0">
      <div className="mx-auto max-w-6xl justify-between gap-x-6 px-4 md:flex">
        <div className="max-w-xl space-y-4" {...props} />
      </div>
    </div>
  );
}

type HeroCardProps = ComponentProps<"div">;

export function HeroCard(props: HeroCardProps) {
  return (
    <div className="card-compact h-auto w-full min-w-full">
      <div className="card-body" {...props} />
    </div>
  );
}

type HeroCardTextProps = ComponentProps<"div">;

export function HeroCardText(props: HeroCardTextProps) {
  return <div className="z-50 text-center sm:text-left" {...props} />;
}

type HeroCardH1Props = ComponentProps<"h1">;

export function HeroCardH1(props: HeroCardH1Props) {
  return (
    <h1
      className="mt-4 pb-4 text-2xl font-semibold uppercase text-brandSecondary md:text-4xl"
      {...props}
    />
  );
}

type HeroCardP1Props = ComponentProps<"p">;

export function HeroCardP1(props: HeroCardP1Props) {
  return (
    <p
      className="z-50 mt-4 pb-4 text-sm font-medium leading-relaxed text-brandSecondary md:text-xl"
      {...props}
    />
  );
}

type HeroCardP2Props = ComponentProps<"p">;

export function HeroCardP2(props: HeroCardP2Props) {
  return (
    <p
      className="pb-1 pt-1 text-sm leading-relaxed text-white md:text-xl"
      {...props}
    />
  );
}

type HeroImgPropertyProps = ComponentProps<"div">;

export function HeroImgProperty(props: HeroImgPropertyProps) {
  return (
    <>
      <div
        className="flex justify-center sm:flex-none sm:justify-start"
        {...props}
      />
    </>
  );
}
