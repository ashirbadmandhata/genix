// import GradientText from "@/components/global/gradient-text"
import GradientText from "@/components/global/gradient-text";
import { Button } from "@/components/ui/button";
import { BadgePlus } from "@/icons";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

type Props = {};

const CallToAction = (props: Props) => {
  return (
    <div className="flex flex-col items-start sm:items-center sm:justify-center md:items-center gap-y-5 md:gap-y-0">
      <button className="group relative md:items-center grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
        <span>
          <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
        </span>
        <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
        <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/20"></span>
        <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
          ✨ Learn Smarter with GeniXAI
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </span>
      </button>

      <GradientText
        className="text-[35px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px] leading-tight font-semibold"
        element="H1"
      >
        Bringing Communities <br className="md:hidden" /> Together
      </GradientText>
      <p className="text-sm md:text-center text-left text-muted-foreground">
        GeniXAI is a vibrant online community platform that empowers
        <br className="md:hidden" />
        people to connect, <br className="hidden md:block" /> collaborate, and
        cultivate meaningful
        <br className="md:hidden" />
        relationships
      </p>
      <div className="flex md:flex-row flex-col md:justify-center gap-5 md:mt-5 w-full">
        <Button
          variant="outline"
          className="rounded-xl bg-transparent text-base"
        >
          Watch Demo
        </Button>
        <Link href="/sign-in">
          <Button className="rounded-xl text-base flex gap-2 w-full">
            <BadgePlus /> Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
