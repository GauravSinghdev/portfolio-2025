import Image from "next/image";
import Link from "next/link";
import React from "react";
import uiforge from "@/public/forgeUI.jpg";
import rabbitType from "@/public/rabbitype.jpg";
import karazon from "@/public/karazon.jpg";
import justLinks from "@/public/justlinks.jpg";
import chitchat from "@/public/chitchat.jpg";
import bytelog from "@/public/bytelog.jpg";
import hanami from "@/public/hanami.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
  };

const projArr = [
  {
    name: "ForgeUI",
    description: "Take your fav components with one click.",
    pic: uiforge,
    link: "https://ui.forge.codewithkara.com",
  },
  {
    name: "Bytelog",
    description: "Blogging hub for memers and devs.",
    pic: bytelog,
    link: "https://bytelog.codewithkara.com",
  },
  {
    name: "RabbitType",
    description: "Test your typing speed, compete and get ranked with others.",
    pic: rabbitType,
    link: "https://rabbitype.codewithkara.com",
  },
  {
    name: "Karazon",
    description: "Ecommerce Website for buying home appliances.",
    pic: karazon,
    link: "https://karazon.supxdevs.com",
  },
  {
    name: "JustLinks",
    description: "Store your important links here.",
    pic: justLinks,
    link: "https://justlinks.codewithkara.com",
  },
  {
    name: "ChitChat",
    description: "Chatting app using socket.io",
    pic: chitchat,
    link: "https://chitchat.supxdevs.com",
  },
  {
    name: "Hanami",
    description: "Your fav intro app to japanese and the culture.",
    pic: hanami,
    link: "https://hanami.supxdevs.com",
  }
];

export default function ProjectPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-3xl mx-auto min-h-screen border-x baseBorder pt-20 sm:pt-20 w-full">
        <h1 className="max-w-3xl mx-auto border-y h1Css baseBorder py-1 px-5">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-2">
          {projArr.map((proj) => (
            <Link
              href={proj.link}
              key={proj.name}
              target="_blank"
              className="border baseBorder space-y-2 p-1 group"
            >
              <Image
                height={500}
                width={500}
                src={proj.pic}
                alt={proj.name}
                className="object-cover h-48 w-full"
                priority
              />
              <div className="flex flex-col gap-1 px-1">
                <h1 className="text-lg group-hover:underline group-hover:underline-offset-4">
                  {proj.name}
                </h1>
                <p className="text-sm tracking-wide text-gray-600 dark:text-gray-300">
                  {proj.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
