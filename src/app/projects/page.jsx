import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const projectList = [
  {
    title: "E-Commerce",
    href: "https://e-commerce-three-coral-20.vercel.app/",
    description: "Strapi va React yordamida chiroyli e-commerce loyiha ui",
  },
  {
    title: "Audiophile",
    href: "https://audiophilemarket.vercel.app/",
    description: "Audiophile market kichik texno tovarlar do'koni",
  },
  {
    title: "Rock-Papaer-Scissors",
    href: "https://rock-paper-scissors-j86m.vercel.app",
    description: "Tosh Qaychi Qog'oz ko'ngilochar o'yini ",
  },
  {
    title: "Password Genereter",
    href: "https://password-genereter.vercel.app",
    description: "Random parol generatsiya qiluvchi web ilova",
  },
];

export default function page() {
  return (
    <div className="py-10">
      <div className="container max-w-screen-lg mx-auto px-5">
        <ul className="flex flex-col gap-10">
          {projectList.map(({ description, href, title }) => {
            return (
              <li key={title}>
                <h3 className="font-medium text-xl mb-3">{title}</h3>
                <p className="mb-4">{description}</p>
                <a
                  className={buttonVariants({ variant: "secondary" })}
                  href={href}
                  target="_blank"
                >
                  Ko'rish
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

{
  <Link
    className={`${buttonVariants({
      variant: "default",
    })} animate-slide-top delay-900`}
    href="/projects/"
  >
    Yechimlar
  </Link>;
}
