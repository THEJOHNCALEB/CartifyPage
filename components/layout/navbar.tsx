"use client";

import { useDemoModal } from "@/components/home/demo-modal";
import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import { GithubIcon, LucideGithub, MailCheck, RocketIcon, RockingChairIcon, ShoppingCart } from "lucide-react";
import { Github } from "../shared/icons";

export default function NavBar() {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const { DemoModal, setShowDemoModal } = useDemoModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full flex justify-center py-4 ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center text-3xl">
            <p className="px-2 font-mono font-extrabold">{" "}Cartify </p>
          
          </Link>
              <DemoModal />
          <div className="flex flex-row justify-around gap-6">          
              
      <Link href="/"
        onClick={() => setShowDemoModal(true)}
        className="text-black"
      >
       <RocketIcon className="h-10 w-10" />
        </Link>
        <a href="https://github.com/thejohncaleb"><LucideGithub className="h-11 p-1 w-11" /></a>
          </div>
        </div>
      </div>
    </>
  );
}
