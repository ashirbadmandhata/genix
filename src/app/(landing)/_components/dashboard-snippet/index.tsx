import AnimationContainer from "@/components/global/animation-container";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";

type Props = {};

const DashboardSnippet = (props: Props) => {
  return (
    <AnimationContainer
  delay={0.2}
  className="relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full"
>
  {/* Background gradient */}
  <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>

  {/* Container with styles */}
  <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
    <BorderBeam size={250} duration={12} delay={9} />

    {/* Image */}
    <Image
      src="/dashboard-snippet.png"
      alt="Dashboard"
      width={1200}
      height={1200}
      quality={100}
      className="rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border object-cover w-full h-full"
    />

    {/* Gradient overlays */}
    <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40"></div>
    <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div>
  </div>
</AnimationContainer>

  );
};

export default DashboardSnippet;
