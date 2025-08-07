"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { SiMongodb, SiShadcnui } from "react-icons/si";

export const Stack = () => {
  return (
    <div className="w-full flex flex-col gap-3 tracking-wider text-sm">
      {/* <div className="h-[250px] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:25px_25px] dark:text-green-500"></div> */}
      <div className="h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] bg-[size:25px_25px] flex items-center gap-5 flex-wrap p-5">
        <Link
          href={"https://www.javascript.com/"}
          className="flex items-center"
          target="_blank"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="icons8-javascript"></div>
            </TooltipTrigger>
            <TooltipContent>
              <p>JavaScript</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link
          href={"https://www.typescriptlang.org/"}
          className="flex items-center"
          target="_blank"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="icons8-typescript"></div>
            </TooltipTrigger>
            <TooltipContent>
              <p>TypeScript</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link
          href={"https://tailwindcss.com/"}
          className="flex items-center"
          target="_blank"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="icons8-tailwindcss"></div>
            </TooltipTrigger>
            <TooltipContent>
              <p>TailwindCss</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link
          href={"https://git-scm.com/"}
          className="flex items-center"
          target="_blank"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="icons8-git"></div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Git</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link
          href={"https://react.dev/"}
          className="flex items-center"
          target="_blank"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="icons8-react"></div>
            </TooltipTrigger>
            <TooltipContent>
              <p>React</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link
          href={"https://nextjs.org/"}
          className="flex items-center"
          target="_blank"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="icons8-nextjs"></div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Nextjs</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link
          href={"https://www.python.org/"}
          className="flex items-center"
          target="_blank"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="icons8-python"></div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Python</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link
          href={"https://www.java.com/"}
          className="flex items-center"
          target="_blank"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="icons8-java"></div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Java</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link
          href={"https://nodejs.org/"}
          className="flex items-center"
          target="_blank"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="icons8-nodejs"></div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Node.js</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link
          href={"https://expressjs.com/"}
          className="flex items-center "
          target="_blank"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="icons8-express-js"></div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Expressjs</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link
          href={"https://hono.dev/"}
          className="flex items-center"
          target="_blank"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              {/* <Image
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/express-js.png"
                alt="express-js"
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={45}
                height={45}
                fill="#F05032"
                viewBox="0 0 24 24"
              >
                <path d="M19.22 12.36c-.68-1.64-1.51-3.19-2.49-4.66a75 75 0 0 0-4.22-5.66.18.18 0 0 0-.14-.04c-1.7 2.1-3.16 4.36-4.38 6.79-.16-.14-.31-.29-.46-.44a25 25 0 0 0-1-1.29 7.2 7.2 0 0 0-1.04 1.77c-.64 1.57-1.04 3.21-1.2 4.9-.1.98 0 1.95.28 2.89 1.09 2.9 3.16 4.66 6.2 5.28 2.55.36 4.79-.28 6.75-1.93 2.23-2.16 2.8-4.69 1.71-7.61Zm-3.84 5.28c-1.54 1.08-3.22 1.4-5.06.96-1.98-.61-3.12-1.95-3.43-4-.08-.65 0-1.28.2-1.89.3-.75.66-1.48 1.08-2.17l1.2-1.77c.91-1.17 1.82-2.35 2.71-3.53 1.47 1.71 2.81 3.53 4 5.46.37.64.68 1.31.92 2.01.51 1.99-.04 3.63-1.63 4.92Z"></path>
              </svg>
            </TooltipTrigger>
            <TooltipContent>
              <p>Honojs</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link
          href={"https://redux.js.org/"}
          className="flex items-center"
          target="_blank"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="icons8-redux"></div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Redux</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link
          href={"https://redis.io"}
          className="flex items-center"
          target="_blank"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="icons8-redis"></div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Redis</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link
          href={"https://www.prisma.io/"}
          className="flex items-center"
          target="_blank"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="icons8-prisma-orm"></div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Prisma ORM</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link
          href={"https://ui.shadcn.com/"}
          className="flex items-center"
          target="_blank"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <SiShadcnui className="size-11" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Shadcn</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link
          href={"https://www.mysql.com/"}
          className="flex items-center"
          target="_blank"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="icons8-mysql"></div>
            </TooltipTrigger>
            <TooltipContent>
              <p>MySql</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link
          href={"https://www.mongodb.com/"}
          className="flex items-center"
          target="_blank"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <SiMongodb className="size-11.5 text-green-500" />
            </TooltipTrigger>
            <TooltipContent>
              <p>MongoDB</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link
          href={"https://www.postgresql.org/"}
          className="flex items-center"
          target="_blank"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="icons8-postgresql"></div>
            </TooltipTrigger>
            <TooltipContent>
              <p>PostgreSQL</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link
          href={"https://www.docker.com/"}
          className="flex items-center"
          target="_blank"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="icons8-docker"></div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Docker</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link
          href={"https://chatgpt.com/"}
          className="flex items-center"
          target="_blank"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="icons8-chatgpt"></div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Chatgpt</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link
          href={"https://grok.com/"}
          className="flex items-center"
          target="_blank"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="icons8-grok"></div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Grok</p>
            </TooltipContent>
          </Tooltip>
        </Link>
      </div>
    </div>
  );
};
