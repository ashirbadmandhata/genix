"use client";
// import GlassSheet from "@/components/global/glass-sheet"
import GlassSheet from "@/components/global/glass-sheet";
import { Button } from "@/components/ui/button";
import { Logout } from "@/icons";
import { Brain, MenuIcon } from "lucide-react";
import Link from "next/link";
import Menu from "./menu";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type Props = {};

const LandingPageNavbar = (props: Props) => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 8) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "flex justify-between items-center py-5 sticky top-0 inset-x-0 h-14 w-full border-b border-transparent z-[99999] select-none",
        scroll && "border-background/80 bg-background/40 backdrop-blur-md"
      )}
    >
      <p className="flex items-center font-bold text-2xl">
        <Brain className="mr-2" /> GeniXAI
      </p>
      <Menu orientation="desktop" />
      <div className="flex gap-2">
        <Link href="/sign-in">
          <Button
            variant="outline"
            className="bg-themeBlack rounded-2xl flex gap-2 border-themeGray hover:bg-themeGray"
          >
            <Logout />
            Login
          </Button>
        </Link>
        <GlassSheet
          triggerClass="lg:hidden"
          trigger={
            <Button variant="ghost" className="hover:bg-transparent">
              <MenuIcon size={30} />
            </Button>
          }
        >
          <Menu orientation="mobile" />
        </GlassSheet>
      </div>
    </div>
  );
};

export default LandingPageNavbar;
