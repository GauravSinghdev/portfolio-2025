import Image from "next/image";
import { MdVerified } from "react-icons/md";
import Designation from "../motion/Designation";
import ghiblipp from "@/public/port_ghibli.png";

export default function ProfileComp() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 h-auto min-h-[11rem] sm:h-52 border-t baseBorder">
      <div className="col-span-1 sm:col-span-3 flex justify-center items-center py-4 sm:py-0">
        <Image
          src={ghiblipp}
          alt="pp"
          width={200}
          height={200}
          className="object-cover rounded-full w-40 h-40 sm:w-48 sm:h-48 aspect-square border p-0.5 baseBorder shadow-lg"
          priority
        />
      </div>
      <div className="col-span-1 sm:col-span-9 border-t sm:border-t-0 sm:border-l baseBorder">
        <h1 className="h-auto sm:h-[25%] border-b baseBorder font-semibold text-2xl sm:text-3xl flex items-center px-4 py-2 sm:py-0 tracking-wide">
          Gaurav Singh
          <span className="ml-1">
            <MdVerified className="size-4 sm:size-5 text-blue-400" />
          </span>
        </h1>
        <Designation />
        <div className="h-auto min-h-[60%] px-4 py-1 flex items-center justify-center text-sm sm:text-base text-gray-700 dark:text-gray-300 font-light sm:leading-6 tracing-wide">
          Software Engineer with 2.5+ years of experience in building and
          deploying modern web apps. Open to roles in full-stack development and
          DevOps, with a focus on scalable systems and automation.
        </div>
      </div>
    </div>
  );
}
