"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ButtonCalc from "./ButtonCalc";

const buttons = [
  {
    id: "procenti",
    path: "/procenti",
    className: "bg-green-600 px-7 py-2 text-white",
    label: "Procenti",
  },
  {
    id: "indeks-telesne-mase",
    path: "/indeks-telesne-mase",
    className: "bg-purple-900 px-7 py-2 text-white",
    label: "BMI",
  },
  {
    id: "konverter-mernih-jedinica-za-masu",
    path: "/konverter-mernih-jedinica-za-masu",
    className: "bg-orange-400 px-7 py-2 text-white",
    label: "Masa",
  },
  {
    id: "konverter-mernih-jedinica-za-duzinu",
    path: "/konverter-mernih-jedinica-za-duzinu",
    className: "bg-cyan-900 px-7 py-2 text-white",
    label: "Dužine",
  },
];

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
      console.log(element.id, slug);
    });
  }, [pathname]);

  return (
    <div className="px-5 py-5 flex-row flex-wrap md:flex-row flex gap-5">
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
