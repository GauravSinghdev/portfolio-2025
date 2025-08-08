"use client";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Button } from "../ui/button";
import { ChevronsUpDown } from "lucide-react";
import Image from "next/image";
import { FaCode } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";
import { GoDot } from "react-icons/go";
import { SiFreelancermap } from "react-icons/si";
import { IoInfinite } from "react-icons/io5";
import Link from "next/link";

export default function ExperienceComp() {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="flex flex-col gap-5 divide-y divide-gray-200 dark:divide-white/10">

      <div className="p-5 group">
        <div className="flex gap-2 items-center">
          <Image
            width={50}
            height={50}
            src={"https://www.metacube.com/assets/images/logo.svg"}
            alt="metacubesoft"
            className="p-2 border baseBorder dark:bg-gray-300"
          />
          <div className="text-lg my-1 group-hover:underline group-hover:underline-offset-2">Metacube Software</div>
        </div>

        <Collapsible
        open={isOpen1}
        onOpenChange={setIsOpen1}
        className="flex w-full flex-col gap-2"
          >
        {" "}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center mt-2">
              <FaCode className="ml-5 md:ml-15 size-5" />
              <h4 className="font-semibold italic">Software Engineer</h4>
            </div>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon" className="size-5">
                <ChevronsUpDown />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="flex text-sm ml-9 md:ml-15 font-light text-gray-500 dark:text-gray-400">
            <h2>Full-time</h2>
            <TbMinusVertical className="size-5" />
            <h2>07.2021-01.2024</h2>
          </div>
        </div>
        <CollapsibleContent className="flex flex-col gap-2 items-center font-light text-[15px] md:ml-15 m-2 text-black/70 dark:text-white/60">
          <div className="flex gap-2">
            <GoDot className="size-8" />
            Developed and maintained responsive web applications using React,
            improving user experience and performance by 30%.
          </div>
          <div className="flex gap-2">
            {" "}
            <GoDot className="size-8" />
            Implemented reusable React components and optimized code, enhancing
            maintainability and reducing bugs by 15%.
          </div>
          <div className="flex gap-2">
            <GoDot className="size-8" />
            Configured and customized Salesforce dashboards, reports, and
            workflows to support sales and customer support teams.
          </div>
          <div className="flex gap-2">
            <GoDot className="size-8" />
            Collaborated with cross-functional teams to deliver scalable
            solutions under tight deadlines, reducing deployment time by 20%.
          </div>
          <div className="flex gap-2">
            <GoDot className="size-8" />
            Integrated Salesforce APIs into frontend systems, streamlining data
            flow between customer-facing apps and CRM.
          </div>
        </CollapsibleContent>
        </Collapsible>
      </div>

      <div className="p-5 sm:p-3 group">
        <div className="flex gap-2 items-center">
          <SiFreelancermap className="size-5 p-1 mx-4 border baseBorder dark:bg-gray-300 dark:text-black" />
          <h1 className="text-lg my-1 group-hover:underline group-hover:underline-offset-2">Freelancing Work</h1>
        </div>

        <Collapsible
          open={isOpen2}
          onOpenChange={setIsOpen2}
          className="flex w-full flex-col gap-2"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center mt-2">
                <FaCode className="ml-5 md:ml-15 size-5" />
                <h4 className="font-semibold italic">FrontEnd Developer</h4>
              </div>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" className="size-5">
                  <ChevronsUpDown />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <div className="flex text-sm ml-9 md:ml-15 font-light text-gray-500 dark:text-gray-400">
              <h2>Part-time</h2>
              <TbMinusVertical className="size-5" />
              <h2 className="flex gap-2">
                01.2025 -
                <IoInfinite className="size-5"/>{" "}
              </h2>
            </div>
          </div>
          <CollapsibleContent className="flex flex-col gap-2 font-light text-[15px] md:ml-15 m-2 text-black/70 dark:text-white/60">
            <div className="flex gap-2 items-start md:items-center">
              <GoDot className="size-6" />
              <div>Developed website for CA/CS management and here is the demo of the  <Link href={"tawanjo.codewithkara.com"}>site</Link></div>
            </div>

            <div className="flex gap-2 items-start">
              <GoDot className="size-6" />
              <div>Developed website for holiday package providing company and here is the demo of the  <Link href={"tripwhirl.codewithkara.com"}>site</Link></div>
            </div>
          
          </CollapsibleContent>
        </Collapsible>
      </div>

    </div>
  );
}
