import BioComp from "@/components/shared/BioComp";
import ProfileComp from "@/components/shared/ProfileComp";
import { Stack } from "@/components/shared/Stack";
import { Socials } from "@/components/shared/Socials";
import { ProjectComp } from "@/components/shared/ProjectComp";
import ExperienceComp from "@/components/shared/ExperienceComp";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="mt-13 max-w-3xl mx-auto border-x baseBorder w-full">
        <div className="hidden sm:h-[200px] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] bg-[size:25px_25px] sm:flex items-center justify-center">
          <div className="flex items-center space-x-4 cursor-default">
            <span className="text-6xl font-extrabold text-black dark:text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(0,0,0,0.7)] dark:hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] hover:scale-110">
              G
            </span>
            <span className="text-6xl font-extrabold text-black dark:text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(0,0,0,0.7)] dark:hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] hover:scale-110">
              S
            </span>
          </div>
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
        <div className="max-w-3xl mx-auto border-x baseBorder h-10">
        </div>
      </div>
    </div>
  );
}
