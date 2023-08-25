"use client";

import React, { FC } from "react";

interface RightSidebarProps {}

const RightSidebar: FC<RightSidebarProps> = ({}) => {
  return (
    <section className="custom-scrollbar bg-dark-2 sticky z-10 w-fit h-screen top-0 right-0 overflow-auto border-l border-l-dark-4 flex flex-col gap-12 justify-between pt-28 px-10 pb-6 max-xl:hidden">
      <div className="flex flex-col flex-1 justify-start">
        <h3 className="text-heading4-medium text-light-1">
          Suggested Communities
        </h3>
      </div>
      <div className="flex flex-col flex-1 justify-start">
        <h3 className="text-heading4-medium text-light-1">Suggested Users</h3>
      </div>
    </section>
  );
};

export default RightSidebar;
