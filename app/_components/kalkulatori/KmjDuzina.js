"use client";
import { useState } from "react";

const opcije = [
  { id: " ", oznaka: "izaberite", vrednost: 0, jednina: "", mnozina: "" },
  {
    id: "option1",
    oznaka: "milimetar (mm)",
    vrednost: 0.001,
    jednina: "milimetar",
    mnozina: "milimetara",
  },
  {
    id: "option2",
    oznaka: "centimetar (cm)",
    vrednost: 0.1,
    jednina: "centimetar",
    mnozina: "centimetara",
  },
  {
    id: "option3",
    oznaka: "metar (m)",
    vrednost: 1,
    jednina: "metar",
    mnozina: "metara",
  },
  {
    id: "option4",
    oznaka: "kilometar (km)",
    vrednost: 1000,
    jednina: "kilometar",
    mnozina: "kilometara",
  },
  {
    id: "option5",
    oznaka: "inč (inch)",
    vrednost: 0.254,
    jednina: "inč",
    mnozina: "inča",
  },
  {
    id: "option6",
    oznaka: "col (zoll)",
    vrednost: 0.2634,
    jednina: "col",
    mnozina: "cola",
  },
  {
    id: "option7",
    oznaka: "stopa (feet)",
    vrednost: 3.048,
    jednina: "stopa",
    mnozina: "stopa",
  },
  {
    id: "option8",
    oznaka: "jard (yard)",
    vrednost: 9.144,
    jednina: "jard",
    mnozina: "jarda",
  },
  {
    id: "option9",
    oznaka: "milja (mile)",
    vrednost: 16093.44,
    jednina: "milja",
    mnozina: "milja",
  },
  {
    id: "option10",
    oznaka: "Nautička milja (NM)",
    vrednost: 1852,
    jednina: "nautička milja",
    mnozina: "nautička milja",
  },
];

export default function KmjDuzina() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState(opcije[0].id);
  const [input3, setInput3] = useState(opcije[0].id);
  const [result, setResult] = useState("0");
  const [submitted, setSubmitted] = useState(false);
  const [jedinica, setJedinica] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const vrednostIz = opcije.find((opcija) => opcija.id === input2)?.vrednost;
    const vrednostU = opcije.find((opcija) => opcija.id === input3)?.vrednost;

    if (!vrednostIz || !vrednostU || isNaN(parseFloat(input1))) {
      setResult("0");
      setJedinica("");
      return;
    }

    const input1Value = parseFloat(input1);
    const conversionResult = ((input1Value * vrednostIz) / vrednostU)
      .toFixed(10)
      .replace(/\.?0+$/, "");
    setResult(conversionResult);

    const updatedJedinica =
      parseFloat(conversionResult) === 1
        ? opcije.find((o) => o.id === input3)?.jednina
        : parseFloat(conversionResult) !== 0
        ? opcije.find((o) => o.id === input3)?.mnozina
        : "";

    setJedinica(updatedJedinica);
    setSubmitted(true);
  };

  const obrisi = () => {
    setInput1("");
    setInput2(opcije[0].id);
    setInput3(opcije[0].id);
    setJedinica("");
    setResult("0");
    setSubmitted(false);
  };

  return (
    <div className="flex items-center justify-center px-4 py-4 w-full rounded">
      <div className="p-6 rounded shadow-md w-full align-middle bg-cyan-900">
        <form onSubmit={handleSubmit}>
          <div className="flex md:flex-col flex-col items-center justify-center gap-4 md:gap:3 mx-auto my-auto">
            <div>
              <input
                type="text"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                className="w-80 px-3 py-2 border-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="dužina"
              />
            </div>
            <div className="space-x-2 w-80 flex-row flex content-center align-middle justify-center mx-auto my-auto">
              <select
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                className="w-full px-2 py-2 border-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              >
                {opcije.map((opcija) => (
                  <option key={opcija.id} value={opcija.id}>
                    {opcija.oznaka}
                  </option>
                ))}
              </select>
              <div className="text-xl font-bold text-slate-50 pt-2">
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
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
              <select
                value={input3}
                onChange={(e) => setInput3(e.target.value)}
                className="w-full px-2 py-2 border-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              >
                {opcije.map((opcija) => (
                  <option key={opcija.id} value={opcija.id}>
                    {opcija.oznaka}
                  </option>
                ))}
              </select>
            </div>

            <span className="block text-2xl font-bold text-slate-50">
              {result} {submitted && jedinica}
            </span>
            <div className="w-full space-x-4 flex items-center justify-center ">
              <button
                type="submit"
                className="w-full md:w-36 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              >
                Izračunaj
              </button>
              <button
                type="button"
                onClick={obrisi}
                className="w-full md:w-36 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
              >
                Obriši
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
