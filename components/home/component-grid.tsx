"use client";

import { useState } from "react";
import { useDemoModal } from "@/components/home/demo-modal";
import Popover from "@/components/shared/popover";
import { DownloadIcon, MailOpen } from "lucide-react";

export default function ComponentGrid() {
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
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-stone-900 text-primary-foreground hover:bg-stone-900/90 h-10 px-4 py-2"
        >
          <p className="text-white mx-2">Download App {" "}</p>
          <DownloadIcon
            className={`h-4 w-4 text-white transition-all ${openPopover ? "rotate-180" : ""
              }`}
          />
        </button>
      </Popover>
      <DemoModal />
        <button     
          onClick={() => setShowDemoModal(true)}     
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-stone-400 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-3"
        >
          <MailOpen
            className={`h-4 w-4 text-stone-700 transition-all`}
          />
          <p className="mx-2">Mailing List {" "}</p>
        </button>
    </>
  );
}
