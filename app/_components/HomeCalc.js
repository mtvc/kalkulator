import ButtonCalc from "./ButtonCalc";

const buttons = [
  {
    id: "procenti",
    path: "/procenti",
    className: "bg-green-600 px-7 py-2 text-white",
    label: "Procenti",
    category: ["matematika", "fizika"],
  },
  {
    id: "indeks-telesne-mase",
    path: "/indeks-telesne-mase",
    className: "bg-purple-900 px-7 py-2 text-white",
    label: "BMI",
    category: ["sport", "zdravlje"],
  },
  {
    id: "konverter-mernih-jedinica-za-masu",
    path: "/konverter-mernih-jedinica-za-masu",
    className: "bg-orange-400 px-7 py-2 text-white",
    label: "Masa",
    category: ["matematika", "fizika"],
  },
  {
    id: "konverter-mernih-jedinica-za-duzinu",
    path: "/konverter-mernih-jedinica-za-duzinu",
    className: "bg-cyan-900 px-7 py-2 text-white",
    label: "Dužine",
    category: ["matematika", "fizika"],
  },
  {
    id: "kalkulator-poreza-za-frilensere",
    path: "/kalkulator-poreza-za-frilensere",
    className: "bg-cyan-600 px-7 py-2 text-white",
    label: "Frilenseri porez",
    category: "finansije",
  },
];

export default function HomeCalc({ category }) {
  return (
    <div className="px-5 py-5 flex-row flex-wrap md:flex-row flex gap-5">
      {buttons
        ?.filter((button) => button.category?.includes(category))
        .map((button) => (
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
