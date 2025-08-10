import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-x border-t baseBorder">
      <p className="max-w-3xl mx-auto border-x baseBorder p-4 sm:p-6 text-center text-sm text-gray-600 dark:text-gray-300 ">
        Built by{" "}
        <span>
          <Link
            href={"/"}
            target="_blank"
            className="underline underline-offset-2 font-semibold  dark:text-gray-300"
          >
            codewithkara
          </Link>
        </span>
        <br />
        The source code is available on
        <span className="ml-1">
          <Link
            href={"https://github.com/GauravSinghdev/portfolio-2025"}
            target="_blank"
            className="underline underline-offset-2 font-semibold  dark:text-gray-300"
          >
            GitHub
          </Link>
          .
        </span>
      </p>
    </footer>
  );
}
