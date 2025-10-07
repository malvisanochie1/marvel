"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RiHome7Fill } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";
import { RiSteering2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname() || "/";

  return (
    <div>
      <section className=" text-gray-400 w-full px-3 py-4 bg-white flex items-start fixed bottom-0">
        <ul className="w-full flex justify-between">
          <li className={pathname === "/" ? "text_orange" : ""}>
            <Link href={"/"}>
              <RiHome7Fill className="text-center mx-auto text-xl" />
              <h6 className="text-xs text-center mx-auto">Home</h6>
            </Link>
          </li>
          <li className={pathname.startsWith("/theory") ? "text_orange" : ""}>
            <Link href="/theory">
              <FaBook className="text-center mx-auto text-xl" />
              <h6 className="text-xs text-center mx-auto">Theory</h6>
            </Link>
          </li>
          <li className={pathname.startsWith("/practical") ? "text_orange" : ""}>
            <Link href={"/practical"}>
              <RiSteering2Line className="text-center mx-auto text-xl" />
              <h6 className="text-xs text-center mx-auto">Practical</h6>
            </Link>
          </li>
          <li className={pathname.startsWith("/exam") ? "text_orange" : ""}>
            <Link href={"/exam"}>
              <IoBookOutline className="text-center mx-auto text-xl" />
              <h6 className="text-xs text-center mx-auto">Exam</h6>
            </Link>
          </li>
          <li className={pathname.startsWith("/account") ? "text_orange" : ""}>
            <Link href={"/account"}>
              <FaRegUser className="text-center mx-auto text-xl" />
              <h6 className="text-xs text-center mx-auto">Account</h6>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
