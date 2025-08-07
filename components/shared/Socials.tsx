import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { RiArrowRightUpLine } from "react-icons/ri";

export const Socials = () => {
  return (
    <div className="w-full flex flex-col gap-3 tracking-wider font-light p-2 sm:p-3 text-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-center">
        <Link
          href={"https://www.linkedin.com/in/gaurav-singh-898072176/"}
          target="_blank"
          className="p-2 border baseBorder rounded  flex items-center justify-between group"
        >
          <div className="flex items-center gap-2">
            <div className="icons8-linkedin"></div>
            <div className="flex flex-col gap-1 items-left">
              <h1 className="font-semibold group-hover:underline group-hover:underline-offset-4">
                LinkedIn
              </h1>
              <p>gaurav-singh-898072176</p>
            </div>
          </div>
          <div>
            <RiArrowRightUpLine className="size-5 text-gray-500" />
          </div>
        </Link>

        <Link
          href={"https://x.com/codewithkara"}
          target="_blank"
          className="p-2 border baseBorder rounded flex items-center justify-between group"
        >
          <div className="flex items-center gap-2">
            <div className="icons8-twitter"></div>
            <div className="flex flex-col gap-1 items-left">
              <h1 className="font-semibold group-hover:underline group-hover:underline-offset-4">
                X
              </h1>
              <p>codewithkara</p>
            </div>
          </div>
          <div>
            <RiArrowRightUpLine className="size-5 text-gray-500" />
          </div>
        </Link>

        <Link
          href={"https://github.com/GauravSinghdev"}
          target="_blank"
          className="p-2 border baseBorder rounded flex items-center justify-between group"
        >
          <div className="flex items-center gap-2">
            <IoLogoGithub className="size-12" />
            <div className="flex flex-col gap-1 items-left">
              <h1 className="font-semibold group-hover:underline group-hover:underline-offset-4">
                Github
              </h1>
              <p>GauravSinghdev</p>
            </div>
          </div>
          <div>
            <RiArrowRightUpLine className="size-5 text-gray-500" />
          </div>
        </Link>

        <Link
          href={"https://www.instagram.com/gaurav_kalakoti_"}
          target="_blank"
          className="p-2 border baseBorder rounded flex items-center justify-between group"
        >
          <div className="flex items-center gap-2">
            <div className="icons8-instagram"></div>
            <div className="flex flex-col gap-1 items-left">
              <h1 className="font-semibold group-hover:underline group-hover:underline-offset-4">
                Instagram
              </h1>
              <p>gaurav_kalakoti_</p>
            </div>
          </div>
          <div>
            <RiArrowRightUpLine className="size-5 text-gray-500" />
          </div>
        </Link>
      </div>
    </div>
  );
};
