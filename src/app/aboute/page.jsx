"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonVariants } from "../../components/ui/button.jsx";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiDaisyui,
  SiStrapi,
} from "react-icons/si";
import { MdOutlineViewCompact } from "react-icons/md";

export default function Page() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white" />,
    },
    { name: "StrApi", icon: <SiStrapi className="text-purple-800" /> },
    { name: "Zustand", icon: <SiRedux className="text-purple-500" /> },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    {
      name: "Flowbite",
      icon: <MdOutlineViewCompact className="text-sky-500" />,
    },
    { name: "DaisyUI", icon: <SiDaisyui className="text-pink-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-800 dark:text-white" />,
    },
  ];

  return (
    <main className="py-5 flex sm:items-center h-full text-gray-800">
      <div className="container max-w-screen-lg mx-auto px-5 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Assalomu alaykum 👋
        </h1>
        <div className="text-center">

        <p className="text-lg max-w-xl text-center">
          Men <strong>Ibrohimjon Baxtiyorov</strong>,  Frontend
          Dasturchiman.
        </p>
        <p className=" mb-6">
          <strong>Education </strong> Tashkent Chemical Technological Institute 
          <strong> Bachelor Degree :  Artifical Inteligence 4/1</strong>
        </p>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-2xl">
          {skills.map((skill, i) => (
            <li
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-xl shadow hover:shadow-lg transition bg-white dark:bg-gray-800"
            >
              {skill.icon}
              <span className="font-medium">{skill.name}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
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
      </div>
    </main>
  );
}
