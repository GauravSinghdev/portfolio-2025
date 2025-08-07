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

export default function ExperienceComp() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2 items-center">
        <Image
          width={50}
          height={50}
          src={"https://www.metacube.com/assets/images/logo.svg"}
          alt="metacubesoft"
          className="p-2 border baseBorder dark:bg-gray-300"
        />
        <h1 className="text-lg">Metacube Software</h1>
      </div>

      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="flex w-full flex-col gap-2"
      >
        {" "}
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex gap-5 items-center">
              <FaCode className="ml-5 size-5" />
              <h4 className="font-semibold">Software Engineer</h4>
            </div>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon" className="size-5">
                <ChevronsUpDown />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="flex text-sm ml-15 font-light text-gray-500 dark:text-gray-400">
            <h2>Full-time</h2>
            <TbMinusVertical className="size-5" />
            <h2>07.2021-01.2024</h2>
          </div>
        </div>
        <CollapsibleContent className="flex flex-col gap-2 items-center font-light text-[15px] ml-15 m-2 text-black/70 dark:text-white/60">
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
  );
}
