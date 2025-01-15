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
      <h3 className="text-xl font-bold w-full">Ostali kalkulatori:</h3>
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
