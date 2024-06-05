import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { AlignRight, ArrowRight, ArrowRightIcon, CarrotIcon, ChevronRight, MailOpen } from "lucide-react";
import Faq from "@/components/home/faq";


export default async function Home() {

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <a
          href="https://twitter.com/thejohncaleb"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-6 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-stone-900 px-7 py-2 transition-colors hover:bg-stone-700"
        >
          <Twitter className="h-5 w-5 text-stone-200" />
          <p className="text-xs font-semibold underline text-stone-200">
            Introducing Cartify
          </p>
        </a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          AI Powered Shopping List App
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Experience the future of shopping with <strong>Cartify</strong>, the ultimate app for managing your shopping lists. 
        </p>
        <div
          className="mx-auto mt-6 flex items-center justify-center space-x-5"
         
        >          
          <ComponentGrid />
         
        </div>
      </div>
      <div className="container my-10 opacity-95 w-full max-w-screen-xl flex-1 justify-center gap-5 px-5 xl:px-0">
        <div className=''>
      <div className='flex justify-center items-center'>
        <div className='p-10 bg-slate-50 border border-stone-300 rounded-3xl max-w-5xl flex items-center self-center'>
          <div className='flex sm:flex-row-reverse flex-col justify-around w-full'>
          <Image src="/cartifyhero.png" alt="Cartify" height={500} width={500} />
        <div className="sm:border-t-0 sm:mt-0 border-t-2 mt-8"></div>
            <div className='sm:w-1/2 w-full sm:pt-0 pt-7'>
              <h2 className='sm:text-6xl sm:text-left text-center text-3xl font-light text-stone-900'>
                Effortlessly manage your shopping lists, stay organized, and
                save time with <span className='font-bold'> Cartify.</span> 
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
      <Faq />
    
    </>
  );
}

