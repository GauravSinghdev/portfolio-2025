import BioComp from "@/components/shared/BioComp";
import ProfileComp from "@/components/shared/ProfileComp";
import { Stack } from "@/components/shared/Stack";
import { Socials } from "@/components/shared/Socials";
import { ProjectComp } from "@/components/shared/ProjectComp";
import ExperienceComp from "@/components/shared/ExperienceComp";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import lBan from "@/public/gs_light_banner.png";
import dBan from "@/public/gs_dark_banner.png";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="mt-13 max-w-3xl mx-auto border-x baseBorder w-full">
        <div className="w-full">
          {/* Visible only in light mode */}
          <Image
            src={lBan}
            alt="Light banner"
            className="block w-full h-auto dark:hidden"
            priority
          />

          {/* Visible only in dark mode */}
          <Image
            src={dBan}
            alt="Dark banner"
            className="hidden w-full h-auto dark:block"
            priority
          />
        </div>
        <ProfileComp />
      </div>

      <div className="lineDiv" />

      <div className="max-w-3xl mx-auto border-x baseBorder w-full">
        <BioComp />
      </div>

      <div className="lineDiv" />

      <div className="max-w-3xl mx-auto border-x baseBorder w-full">
        <Socials />
      </div>

      <div className="lineDiv" />

      <div className="border-x border-b baseBorder">
        <h1 className="max-w-3xl mx-auto border-x baseBorder h1Css pt-2 px-5">
          Stack
        </h1>
      </div>

      <div className="max-w-3xl mx-auto border-x baseBorder w-full">
        <Stack />
      </div>

      <div className="lineDiv" />

      <div id="projects" className="border-x border-b baseBorder">
        <h1 className="max-w-3xl mx-auto border-x baseBorder h1Css pt-2 px-5">
          Projects
        </h1>
      </div>

      <div className="max-w-3xl mx-auto border-x baseBorder w-full p-5 space-y-5">
        <ProjectComp />
      </div>

      <div className="border-x border-t baseBorder">
        <h1 className="max-w-3xl mx-auto border-x baseBorder text-xl py-1 px-5">
          <Link
            href={"/projects"}
            className="flex items-center justify-center gap-1 hover:opacity-90"
          >
            See all Projects
            <ArrowRight className="size-5" />
          </Link>
        </h1>
      </div>

      <div className="lineDiv" />

      <div className="border-x border-b baseBorder">
        <h1 className="max-w-3xl mx-auto border-x baseBorder h1Css pt-2 px-5">
          Experience
        </h1>
      </div>

      <div className="max-w-3xl mx-auto border-x baseBorder w-full space-y-5 text-gray-600 dark:text-gray-300 ">
        <ExperienceComp />
      </div>

      <div className="border-t baseBorder">
        <div className="max-w-3xl mx-auto border-x baseBorder h-10"></div>
      </div>
    </div>
  );
}
