import BackdropGradient from "@/components/global/backdrop-gradient";
import GradientText from "@/components/global/gradient-text";
// import { Button } from "@/components/ui/button"
// import { Card, CardDescription, CardTitle } from "@/components/ui/card"
// import { Check } from "@/icons"
// import Link from "next/link"

// type Props = {}

// export const PricingSection = (props: Props) => {
//   return (
//     <div className="w-full pt-10 flex flex-col items-center gap-3" id="pricing">
//       <BackdropGradient className="w-8/12 h-full opacity-40 flex flex-col items-center">
//         <GradientText
//           className="text-4xl font-semibold text-center"
//           element="H2"
//         >
//           Pricing Plans That Fit Your Right
//         </GradientText>
//         <p className="text-sm md:text-center text-left text-muted-foreground">
//           GenXAI is a vibrant online community platform that empowers people to
//           connect, <br className="hidden md:block" />
//           collaborate, and cultivate meaningful relationships
//         </p>
//       </BackdropGradient>
//       <Card className="p-7 mt-10 md:w-auto w-full bg-themeBlack border-themeGray">
//         <div className="flex flex-col gap-2">
//           <CardTitle className="text-center justify-center">₹99/m</CardTitle>
//           <CardDescription className="text-[#B4B0AE]">
//             Great if you’re just getting started
//           </CardDescription>
//           <Link href="#" className="w-full mt-3">
//             <Button
//               variant="default"
//               className="bg-[#333337] w-full rounded-2xl text-white hover:text-[#333337]"
//             >
//               Start for free
//             </Button>
//           </Link>
//         </div>
//         <div className="flex flex-col gap-2 text-[#B4B0AE] mt-5">
//           <p className="text-center">Features</p>
//           <span className="flex gap-2 mt-3 items-center">
//             <Check />
//             Personalized Domain
//           </span>
//           <span className="flex gap-2 items-center">
//             <Check />
//             Group collab
//           </span>
//           <span className="flex gap-2 items-center">
//             <Check />
//             Custom Hosting
//           </span>
//           <span className="flex gap-2 items-center">
//             <Check />
//             Unlimited Domains
//           </span>
//           <span className="flex gap-2 items-center">
//             <Check />
//             Unlimited Band Width
//           </span>
//         </div>
//       </Card>
//     </div>
//   )
// }

// import { AnimationContainer, MaxWidthWrapper } from "@/components";
import AnimationContainer from "@/components/global/animation-container";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import PricingCards from "@/components/global/pricing-card";
import { CreditCardIcon } from "lucide-react";

type Props = {};

export const PricingSection = (props: Props) => {
  return (
    <MaxWidthWrapper className="mb-40">
      <div className="w-full" id="pricing">
        <AnimationContainer delay={0.1}>
          <BackdropGradient className="w-8/12 h-full opacity-40 flex flex-col items-center">
            <GradientText
              className="text-4xl font-semibold text-center"
              element="H2"
            >
              Pricing Plans That Fit Your Right
            </GradientText>
            <p
              className="text-sm md:text-center text-left text-muted-foreground"
              id="pricing"
            >
              GenXAI is a vibrant online community platform that empowers people
              to connect, <br className="hidden md:block" />
              collaborate, and cultivate meaningful relationships
            </p>
          </BackdropGradient>
        </AnimationContainer>

        <AnimationContainer delay={0.2}>
          <PricingCards />
        </AnimationContainer>

        <AnimationContainer delay={0.3}>
          <div className="flex flex-wrap items-start md:items-center justify-center lg:justify-evenly gap-6 mt-12 max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-2">
              <CreditCardIcon className="w-5 h-5 text-foreground" />
              <span className="text-muted-foreground">
                Credit Not card required
              </span>
            </div>
          </div>
        </AnimationContainer>
      </div>
    </MaxWidthWrapper>
  );
};
