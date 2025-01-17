"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ButtonCalc from "./ButtonCalc";
import { calculators as buttons } from "../_lib/Api";

function AllCalc() {
  const pathname = usePathname();

  useEffect(() => {
    const slug = pathname.split("/").pop();
    if (!slug) return;

    const allElements = document.querySelectorAll("[id]");

    allElements.forEach((element) => {
      if (element.id === slug) {
        element.remove();
      }
    });
  }, [pathname]);

  return (
    <div className="px-5 py-5 flex-row flex-wrap md:flex-row flex gap-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
        />
      </svg>

      <h3 className="text-xl font-bold">Ostali kalkulatori:</h3>
      {buttons.map((button) => (
        <ButtonCalc
          key={button.id}
          id={button.id}
          path={button.path}
          className={button.className}
        >
          {button.label}
        </ButtonCalc>
      ))}
    </div>
  );
}

export default AllCalc;
