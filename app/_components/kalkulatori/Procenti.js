"use client";

import { useState } from "react";

export default function Procenti() {
  const [result, setResult] = useState("");
  const [result2, setResult2] = useState("");
  const [result3, setResult3] = useState("");

  // Calc 1
  const calculatePercentage = (input1, input2) => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
      return "0";
    }

    return ((num1 * num2) / 100).toFixed(2);
  };

  // Calc 2
  const calculatePercentage2 = (input3, input4) => {
    const num3 = parseFloat(input3);
    const num4 = parseFloat(input4);

    if (isNaN(num3) || isNaN(num4)) {
      return "0";
    }

    return (num3 / (num4 / 100)).toFixed(2);
  };

  // Calc 3
  const calculatePercentage3 = (input5, input6) => {
    const num5 = parseFloat(input5);
    const num6 = parseFloat(input6);

    if (isNaN(num5) || isNaN(num6)) {
      return "0";
    }

    return ((num6 - num5) / (num5 / 100)).toFixed(2);
  };

  const handleClick = () => {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;

    const result = calculatePercentage(input1, input2);
    setResult("=" + result);
  };
  const handleClick2 = () => {
    const input3 = document.getElementById("input3").value;
    const input4 = document.getElementById("input4").value;

    const result2 = calculatePercentage2(input3, input4);
    setResult2("=" + result2 + "%");
  };
  const handleClick3 = () => {
    const input5 = document.getElementById("input5").value;
    const input6 = document.getElementById("input6").value;

    const result3 = calculatePercentage3(input5, input6);
    setResult3("=" + result3 + "%");
  };

  //Clear form 1
  const clearForm = () => {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    setResult("");
  };

  const clearForm2 = () => {
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
    setResult2("");
  };

  const clearForm3 = () => {
    document.getElementById("input5").value = "";
    document.getElementById("input6").value = "";
    setResult3("");
  };

  return (
    <div className="flex items-center justify-center px-4 py-4 w-full rounded">
      <div className="p-3 md:p-6 rounded shadow-md w-full align-middle bg-gradient-to-br from-emerald-500 via-green-500 to-green-400">
        <div className="flex md:flex-row flex-row flex-wrap items-center justify-start md:justify-center gap-2 md:gap:3 mx-auto my-auto">
          <label
            htmlFor="input1"
            className="block text-xl w-full md:w-auto md:text-xl font-bold text-slate-50"
          >
            Koliko je
          </label>
          <input
            type="text"
            id="input1"
            className="md:w-28 w-1/3 px-2 md:px-3 py-2 border-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="procenat"
          />

          <label
            htmlFor="input2"
            className="block text-xl md:text-xl font-bold text-slate-50"
          >
            % od
          </label>
          <input
            type="text"
            id="input2"
            className="md:w-36 w-1/2 px-2 md:px-3 py-2 border-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="broja"
          />

          <span className="block text-3xl font-bold text-slate-50">
            {result}
          </span>
          <div className="w-full md:w-1/4 space-x-2 flex justify-center">
            <button
              type="button"
              onClick={handleClick}
              className="w-1/3 md:w-36 bg-blue-700 text-white py-2 rounded hover:bg-blue-600 transition place-self-center"
            >
              Izračunaj
            </button>
            <button
              type="button"
              onClick={clearForm}
              className="w-1/3 md:w-36 bg-red-400 text-white py-2 rounded hover:bg-red-500 transition place-self-center"
            >
              Obriši
            </button>
          </div>
        </div>
        <div className="py-5 flex md:flex-row flex-row flex-wrap items-center justify-start md:justify-center gap-2 md:gap:3 mx-auto my-auto">
          <label
            htmlFor="input3"
            className="block text-xl w-full md:w-auto md:text-xl font-bold text-slate-50"
          >
            Koliko je procenata
          </label>
          <input
            type="text"
            id="input3"
            className="md:w-28 w-1/3 px-2 md:px-3 py-2 border-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="broj"
          />

          <label
            htmlFor="input4"
            className="block text-xl md:text-xl font-bold text-slate-50"
          >
            od
          </label>
          <input
            type="text"
            id="input4"
            className="md:w-36 w-1/2 px-2 md:px-3 py-2 border-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="broja"
          />

          <span className="block text-3xl font-bold text-slate-50">
            {result2}
          </span>
          <div className="w-full md:w-1/4 space-x-2 flex justify-center">
            <button
              type="button"
              onClick={handleClick2}
              className="w-1/3 md:w-36 bg-blue-700 text-white py-2 rounded hover:bg-blue-600 transition place-self-center"
            >
              Izračunaj
            </button>
            <button
              type="button"
              onClick={clearForm2}
              className="w-1/3 md:w-36 bg-red-400 text-white py-2 rounded hover:bg-red-500 transition place-self-center"
            >
              Obriši
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-row flex-wrap items-center justify-start md:justify-center gap-2 md:gap:3 mx-auto my-auto">
          <label
            htmlFor="input5"
            className="block text-xl w-full md:w-auto md:text-xl font-bold text-slate-50"
          >
            Koliko je procenata uvećanje/smanjenje sa
          </label>
          <input
            type="text"
            id="input5"
            className="md:w-28 w-1/3 px-2 md:px-3 py-2 border-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="broja"
          />

          <label
            htmlFor="input6"
            className="block text-xl md:text-xl font-bold text-slate-50"
          >
            na
          </label>
          <input
            type="text"
            id="input6"
            className="md:w-36 w-1/2 px-2 md:px-3 py-2 border-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="broj"
          />

          <span className="block text-3xl font-bold text-slate-50">
            {result3}
          </span>
          <div className="w-full md:w-1/4 space-x-2 flex justify-center">
            <button
              type="button"
              onClick={handleClick3}
              className="w-1/3 md:w-36 bg-blue-700 text-white py-2 rounded hover:bg-blue-600 transition place-self-center"
            >
              Izračunaj
            </button>
            <button
              type="button"
              onClick={clearForm3}
              className="w-1/3 md:w-36 bg-red-400 text-white py-2 rounded hover:bg-red-500 transition place-self-center"
            >
              Obriši
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
