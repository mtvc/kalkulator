"use client";

import { useState, useTransition } from "react";

export default function Bmi() {
  const [result, setResult] = useState(null);
  const [isPending, startTransition] = useTransition();
  const [selectedGender, setSelectedGender] = useState("");

  async function calculateBMI(formData) {
    const godine = parseFloat(formData.get("input1"));
    const pol = selectedGender;
    const visinaCm = parseFloat(formData.get("input3"));
    const tezinaKg = parseFloat(formData.get("input4"));

    if (isNaN(godine) || isNaN(visinaCm) || isNaN(tezinaKg)) {
      return 0;
    }

    const visinaM = visinaCm / 100;
    const bmi = (tezinaKg / (visinaM * visinaM)).toFixed(2);

    return { bmi, godine, pol };
  }

  const handleChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    startTransition(async () => {
      const { bmi, godine, pol } = await calculateBMI(formData);
      setResult({ bmi, godine, pol });
    });
  };

  function klaseBMI(bmi, godine, pol) {
    godine = Number(godine); // Ensure godine is a number

    if (godine > 20) {
      // Adult (above 20)
      switch (true) {
        case bmi < 16.0:
          return "Nedovoljna težina (totalna mršavost)";
        case bmi >= 16.0 && bmi <= 16.9:
          return "Nedovoljna težina (umerena mršavost)";
        case bmi >= 17.0 && bmi <= 18.4:
          return "Nedovoljna težina (blaga mršavost)";
        case bmi >= 18.5 && bmi <= 24.9:
          return "Normalna težina";
        case bmi >= 25.0 && bmi <= 29.9:
          return "Prekomerna težina (pred gojaznost)";
        case bmi >= 30.0 && bmi <= 34.9:
          return "Gojazni (blaga)";
        case bmi >= 35.0 && bmi <= 39.9:
          return "Gojazni (teška)";
        case bmi >= 40.0:
          return "Gojazni (ekstremna)";
        default:
          return "Nepoznato";
      }
    } else if (godine <= 20) {
      // Child or adolescent (under 20)
      if (pol === "man") {
        // For boys under 20
        switch (true) {
          case bmi < 14.9:
            return "Nedovoljna težina (totalna mršavost)";
          case bmi >= 14.9 && bmi <= 15.4:
            return "Nedovoljna težina (umerena mršavost)";
          case bmi >= 15.5 && bmi <= 16.0:
            return "Nedovoljna težina (blaga mršavost)";
          case bmi >= 16.1 && bmi <= 18.2:
            return "Normalna težina";
          case bmi >= 18.3 && bmi <= 20.3:
            return "Prekomerna težina (pred gojaznost)";
          case bmi >= 20.4 && bmi <= 22.3:
            return "Gojazni (blaga)";
          case bmi >= 22.4 && bmi <= 24.3:
            return "Gojazni (teška)";
          case bmi >= 24.4:
            return "Gojazni (ekstremna)";
          default:
            return "Nepoznato";
        }
      } else if (pol === "woman") {
        // For girls under 20
        switch (true) {
          case bmi < 14.8:
            return "Nedovoljna težina (totalna mršavost)";
          case bmi >= 14.8 && bmi <= 15.3:
            return "Nedovoljna težina (umerena mršavost)";
          case bmi >= 15.4 && bmi <= 15.9:
            return "Nedovoljna težina (blaga mršavost)";
          case bmi >= 16.0 && bmi <= 18.1:
            return "Normalna težina";
          case bmi >= 18.2 && bmi <= 20.2:
            return "Prekomerna težina (pred gojaznost)";
          case bmi >= 20.3 && bmi <= 22.3:
            return "Gojazni (blaga)";
          case bmi >= 22.4 && bmi <= 24.4:
            return "Gojazni (teška)";
          case bmi >= 24.5:
            return "Gojazni (ekstremna)";
          default:
            return "Nepoznato";
        }
      }
    }

    return "Nepoznato";
  }

  return (
    <div className="flex items-center justify-center px-4 py-4 w-full rounded">
      <div className="p-6 rounded shadow-md w-full align-middle bg-purple-900 md:grid md:grid-rows-1 gap-4">
        <div className="w-full md:w-7/12 align-middle ml-auto mr-auto">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              {/* Inputs for age and gender */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="input1"
                    className="block text-2xl font-bold text-slate-50"
                  >
                    Godine:
                  </label>
                  <input
                    type="text"
                    name="input1"
                    id="input1"
                    className="w-full px-3 py-2 border-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Godine"
                  />
                </div>
                <div>
                  <label
                    htmlFor="input2"
                    className="block text-2xl font-bold text-slate-50 mb-3"
                  >
                    Pol:
                  </label>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-4 px-1">
                    <label className="flex items-center text-xl font-bold text-slate-50 text-opacity-80">
                      <input
                        type="radio"
                        name="input2"
                        className="mr-2 w-4 h-4"
                        value="woman"
                        checked={selectedGender === "woman"}
                        onChange={handleChange}
                      />
                      žensko
                    </label>
                    <label className="flex items-center text-xl font-bold text-slate-50 text-opacity-80">
                      <input
                        type="radio"
                        name="input2"
                        className="mr-2 w-4 h-4"
                        value="man"
                        checked={selectedGender === "man"}
                        onChange={handleChange}
                      />
                      muško
                    </label>
                  </div>
                </div>
              </div>

              {/* Inputs for height and weight */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="input3"
                    className="block text-2xl font-bold text-slate-50"
                  >
                    Visina (cm):
                  </label>
                  <input
                    type="text"
                    name="input3"
                    id="input3"
                    className="w-full px-3 py-2 border-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Visina"
                  />
                </div>
                <div>
                  <label
                    htmlFor="input4"
                    className="block text-2xl font-bold text-slate-50"
                  >
                    Težina (kg):
                  </label>
                  <input
                    type="text"
                    name="input4"
                    id="input4"
                    className="w-full px-3 py-2 border-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Težina"
                  />
                </div>
              </div>

              {/* Display BMI Result */}
              <div className="flex flex-col items-center gap-4">
                {result ? (
                  <>
                    <span className="block text-2xl font-bold text-slate-50">
                      <small>Vaš BMI je: </small>
                      {result.bmi} kg/m<sup>2</sup>
                    </span>
                    <span className="block text-2xl font-bold text-slate-50">
                      <small>Spadate u grupu:</small>{" "}
                      {klaseBMI(result.bmi, result.godine, result.pol)}
                    </span>
                    <small className="text-purple-400">
                      Podaci su informativnog karaktera i ne mogu se smatrati
                      apsoluto tačnim.
                    </small>
                  </>
                ) : (
                  <span className="block text-2xl font-bold text-slate-50">
                    Unesite podatke da biste izračunali BMI
                  </span>
                )}
                <button
                  type="submit"
                  className="w-full md:w-36 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                  disabled={isPending}
                >
                  {isPending ? "Računam..." : "Izračunaj"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
