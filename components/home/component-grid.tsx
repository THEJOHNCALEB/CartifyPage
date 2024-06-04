"use client";

import { useState } from "react";
import { useDemoModal } from "@/components/home/demo-modal";
import Popover from "@/components/shared/popover";
import { DownloadIcon, MailOpen } from "lucide-react";
import { useSignInModal } from "../layout/sign-in-modal";

export default function ComponentGrid() {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const { DemoModal, setShowDemoModal } = useDemoModal();
  const [openPopover, setOpenPopover] = useState(false);
  return (
    <>
    
      <Popover
        content={
          <div className="w-full rounded-md bg-white p-2 sm:w-40">
            <button className="flex w-full items-center justify-start space-x-2 rounded-md p-4 text-left text-sm transition-all duration-75 underline hover:bg-gray-100 active:bg-gray-200">
              Get on Google Play
            </button>
            <button className="flex w-full items-center justify-start space-x-2 underline rounded-md p-4 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
            Download on App Store 
            </button>
            <button className="flex w-full items-center justify-start space-x-2 underline rounded-md p-4 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
              Download Apk
            </button>
          </div>
        }
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >
        <button
          onClick={() => setOpenPopover(!openPopover)}
          className="flex w-46 items-center justify-between border border-gray-300 px-5 py-3 transition-all duration-75 hover:border-gray-800 rounded-3xl focus:outline-none active:bg-gray-100"
        >
          <p className="text-gray-600 mx-2">Download App {" "}</p>
          <DownloadIcon
            className={`h-4 w-4 text-gray-600 transition-all ${openPopover ? "rotate-180" : ""
              }`}
          />
        </button>
      </Popover>
      <DemoModal />
        <button     
          onClick={() => setShowDemoModal(true)}     
          className="flex w-46 items-center justify-between border text-slate-200 border-gray-300 px-5 py-3 transition-all duration-75 bg-black opacity-80 rounded-full focus:outline-none active:bg-gray-100"
        >
          <MailOpen
            className={`h-4 w-4 text-slate-50 transition-all`}
          />
          <p className=" mx-2">Mailing List {" "}</p>
        </button>
    </>
  );
}
