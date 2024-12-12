"use client";

import { useState } from "react";

export default function Procenti() {
  const [result, setResult] = useState("0");

  const calculatePercentage = (input1, input2) => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
      return "0";
    }

    return ((num1 * num2) / 100).toFixed(2);
  };

  const handleClick = () => {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;

    const result = calculatePercentage(input1, input2);
    setResult(result);
  };

  return (
    <div className="flex items-center justify-center px-4 py-4 w-full rounded">
      <div className="p-6 rounded shadow-md w-full align-middle bg-green-600">
        <div className="flex md:flex-row flex-col items-center justify-center gap-2 md:gap:3 mx-auto my-auto">
          <input
            type="text"
            id="input1"
            className="md:w-28 px-3 py-2 border-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="procenat"
          />
          <label
            htmlFor="input1"
            className="block text-2xl font-bold text-slate-50 w-7"
          >
            %
          </label>
          <span className="text-slate-50 text-xl font-bold w-7">od</span>

          <input
            type="text"
            id="input2"
            className="md:w-36 px-3 py-2 border-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="broja"
          />
          <label
            htmlFor="input2"
            className="block text-2xl font-bold text-slate-50"
          >
            =
          </label>

          <span className="block text-2xl font-bold text-slate-50">
            {result}
          </span>
          <button
            type="button"
            onClick={handleClick}
            className="w-full md:w-36 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Izračunaj
          </button>
        </div>
      </div>
    </div>
  );
}
