import { Globe, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaLaptopCode } from "react-icons/fa";

export default function BioComp() {
  return (
    <div className="w-full flex flex-col gap-3 tracking-wider font-light p-5 text-sm">
      <div className="flex items-center gap-2 p-1 rounded">
        <FaLaptopCode className="size-6 text-gray-600" />
        Freelancing, Web developement/designing
      </div>
      <div className="flex items-center gap-2 baseBorder p-1 rounded ">
        <MapPin className="size-6 text-gray-600" />
        Haldwani, Uttarakhand, India
      </div>
      <div className="flex items-center gap-2 baseBorder p-1 rounded ">
        <Phone className="size-6 text-gray-600" />
        +91 9634207614
      </div>
      <Link
        href="mailto:gauravkalakoti19@gmail.com"
        className="flex items-center gap-2 baseBorder p-1 rounded  hover:underline hover:underline-offset-2"
      >
        <Mail className="size-6 text-gray-600" />
        gauravkalakoti19@gmail.com
      </Link>
      <Link
        href={"https://supxdevs.com/"}
        className="flex items-center gap-2 baseBorder p-1 rounded  hover:underline hover:underline-offset-2"
      >
        <Globe className="size-6 text-gray-600" />
        supxdevs.com
      </Link>
    </div>
  );
}
