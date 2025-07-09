"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonVariants } from "../../components/ui/button.jsx";

export default function Page() {
  return (
    <main className="py-5 flex sm:items-center h-full text-gray-800">
      <div className="container max-w-screen-lg mx-auto px-5 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Assalomu alaykum 👋
        </h1>
        <p className="text-lg max-w-xl text-center">
          Men <strong>Ibrohimjon Baxtiyorov</strong>, frontend dasturchiman.
          Yoshim 19 da. Dasturlashni <strong>Najot Ta’lim</strong> o‘quv
          markazida o‘rganganman.
        </p>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger
              className={`${buttonVariants({
                variant: "default",
                size: "icon",
              })} scale-[80%]`}
              onClick={() => {
                window?.open("https://t.me/Ibrohim19_uz", "_blank");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
              </svg>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Telegram sahifamga o'ting, atiga bir click</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </main>
  );
}
