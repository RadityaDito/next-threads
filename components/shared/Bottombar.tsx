"use client";

import { sidebarLinks } from "@/constants";
import React, { FC } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface BottombarProps {}

const Bottombar: FC<BottombarProps> = ({}) => {
  const pathname = usePathname();

  return (
    <section className="sticky z-10 bottom-0 w-full rounded-t-3xl bg-glassmorphism p-4 backdrop-blur-lg xs:px-7  md:hidden">
      <div className="flex items-center justify-between gap-3 xs:gap-5 ">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`relative flex flex-col items-center justify-center gap-3 rounded-lg p-2 sm:px-2 sm:py-2.5 sm:flex-1 ${
                isActive && "bg-primary-500"
              }`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-subtle-medium text-light-1 max-sm:hidden">
                {link.label.split(/\s+/)[0]}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Bottombar;
