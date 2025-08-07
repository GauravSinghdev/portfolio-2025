import Image from "next/image";
import Link from "next/link";
import React from "react";
import uiforge from "@/public/forgeUI.jpg";
import rabbitType from "@/public/rabbitype.jpg";
import karazon from "@/public/karazon.jpg";
import justLinks from "@/public/justlinks.jpg";

export const ProjectComp = () => {
  const projArr = [
    {
      name: "ForgeUI",
      description: "Take your fav components with one click.",
      pic: uiforge,
      link: "https://ui.forge.codewithkara.com/",
    },
    {
      name: "RabbitType",
      description:
        "Test your typing speed, compete and get ranked with others.",
      pic: rabbitType,
      link: "https://rabbitype.codewithkara.com/",
    },
    {
      name: "Karazon",
      description: "Ecommerce Website for buying home appliances.",
      pic: karazon,
      link: "https://karazon.supxdevs.com/",
    },
    {
      name: "JustLinks",
      description: "Store your important links here.",
      pic: justLinks,
      link: "https://justlinks.codewithkara.com/",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
      {projArr.map((proj) => (
        <Link
          href={proj.link}
          key={proj.name}
          target="_blank"
          className="border baseBorder space-y-2 p-1 group"
        >
          <Image
            height={200}
            width={200}
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
  );
};
