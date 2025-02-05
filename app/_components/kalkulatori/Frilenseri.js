"use client"; // For Next.js app directory

import formatNumber from "@/app/_lib/formatNumbers";
import { useState, useEffect } from "react";

//zakonske odredbe
const normiraniTroskovi2024 = 103296;
const normiraniTroskovi22024 = 62300;
const minimalnaPoreskaOsnovica = 53370;
const minimalnaPoreskaOsnovicaPIO2 = 120429;

function Frilenseri() {
  const [formData, setFormData] = useState({
    rezident: null, // Da li ste državljanin Republike Srbije
    inoPrihod: 0, // Prihod ostvaren u inostranstvu
    inoPorez: 0, //Porez plaćen na prihod u inostranstvu
    income: "", // Ostvareni (bruto) prihod u kvartalu
    zso: false, // Zdravstveno po drugom osnovu
    expenses: formatNumber(normiraniTroskovi2024), // Normirani troskovi za 2024. godinu (Model I)
    expenses2: formatNumber(normiraniTroskovi22024), // Normirani troskovi za 2024. godinu (Model II)
    expenses34: "", // Normirani troskovi 34% od prihoda (Model II)
    baseTax: "", // Osnovica za obracun poreza i doprinosa (Model I)
    baseTax2: "", // Osnovica za obracun poreza I doprinosa (Model II)
    baseTaxSum: "", // Ukupni normirani troskovi (Model II)
    tax20: "", // Porez 20% (Model I)
    tax10: "", // Porez 10% (Model II)
    contributionPIO: "", // Doprinosi za PIO 24% (Model I)
    contributionPIO2: "", // Doprinosi za PIO 24% ili 120.429 * 24% (Model II)
    contributionHealth: "", // Doprinosi za zdravstveno osiguranje 10.3% (Model I
    contributionHealth2: "", // Doprinosi za zdravstveno osiguranje 10.3% ili 53.370 * 10.3% (Model II)
    totalContributions: "", // Ukupni porezi i doprinosi (Model I)
    totalContributions2: "", // Ukupni porezi i doprinosi (Model I)
    netIncome: "", // Neto zarada (Model I)
    netIncome2: "", // Neto zarada (Model II)
  });

  useEffect(() => {
    // Ostvareni (bruto) prihod u kvartalu:
    const rawIncome = formData.income.replace(/,/g, "").trim();
    const income = parseFloat(rawIncome) || 0;
    const zso = formData.zso;
    const rezident = formData.rezident;
    const inoPrihod = formData.inoPrihod;
    const inoPorez = formData.inoPorez;

    // Osnovica za obracun poreza i doprinosa:
    let baseTax = 0;
    if (normiraniTroskovi2024 <= income && income !== 0) {
      baseTax = income - normiraniTroskovi2024;
    }

    // Porez 20%:
    let tax20 = 0;
    if (normiraniTroskovi2024 <= income) {
      tax20 = baseTax * 0.2;
    }

    // Doprinosi za PIO 24%:
    let contributionPIO = 0;
    if (normiraniTroskovi2024 <= income) {
      contributionPIO = baseTax * 0.24;
    }

    // Doprinosi za zdravstveno osiguranje 10.3%:
    let contributionHealth = 0;
    if (income === 0 || zso === true) {
      contributionHealth = 0;
      // } else if (zso === true) {
      //   contributionHealth = 0;
    } else if (normiraniTroskovi2024 <= income && income !== 0) {
      contributionHealth = baseTax * 0.103;
    } else {
      contributionHealth = minimalnaPoreskaOsnovica * 0.103;
    }

    // Ukupni porezi i doprinosi:
    const totalContributions =
      tax20 + contributionPIO + contributionHealth || 0;
    const netIncome = income - totalContributions || 0;

    //
    // Model II calculations
    //
    const expenses34 = income * 0.34;

    // Ukupni normirani troskovi:
    let baseTaxSum = 0;
    if (income > 0 && income > normiraniTroskovi22024) {
      baseTaxSum = normiraniTroskovi22024 + expenses34;
    } else if (income < normiraniTroskovi22024 && income !== 0) {
      baseTaxSum = 0;
    } else {
      baseTaxSum = 0;
    }

    // Osnovica za obracun poreza I doprinosa:
    let baseTax2 = 0;
    if (income > baseTaxSum && income !== 0) {
      baseTax2 = income - baseTaxSum;
    } else if (income < baseTaxSum && income !== 0) {
      baseTax2 = 0;
    } else {
      baseTax2 = 0;
    }

    // Porez 10%:
    let tax10 = 0;
    if (income > normiraniTroskovi22024) {
      tax10 = baseTax2 * 0.1;
    }

    // Doprinosi za PIO 24% ili 120.429 * 24%:
    let contributionPIO2 = 0;
    if (income === 0) {
      contributionPIO2 = 0;
    } else if (baseTaxSum > income && income !== 0) {
      contributionPIO2 = minimalnaPoreskaOsnovicaPIO2 * 0.24;
    } else {
      contributionPIO2 = baseTax2 * 0.24;
    }

    // Doprinosi za zdravstveno osiguranje 10.3% ili 53.370 * 10.3%:
    let contributionHealth2 = 0;
    if (income === 0 || zso === true) {
      contributionHealth2 = 0;
    } else if (baseTaxSum > income && income !== 0) {
      contributionHealth2 = minimalnaPoreskaOsnovica * 0.103;
    } else {
      contributionHealth2 = baseTax2 * 0.103;
    }

    // Ukupni porezi i doprinosi:
    const totalContributions2 =
      tax10 + contributionPIO2 + contributionHealth2 || 0;

    // Neto zarada:
    const netIncome2 = income - totalContributions2 || 0;

    setFormData((prev) => ({
      ...prev,
      baseTax: formatNumber(baseTax),
      tax20: formatNumber(tax20),
      contributionPIO: formatNumber(contributionPIO),
      contributionHealth: formatNumber(contributionHealth),
      totalContributions: formatNumber(totalContributions),
      netIncome: formatNumber(netIncome),
      expenses34: formatNumber(expenses34),
      baseTaxSum: formatNumber(baseTaxSum),
      baseTax2: formatNumber(baseTax2),
      tax10: formatNumber(tax10),
      contributionPIO2: formatNumber(contributionPIO2),
      contributionHealth2: formatNumber(contributionHealth2),
      totalContributions2: formatNumber(totalContributions2),
      netIncome2: formatNumber(netIncome2),
    }));
  }, [formData.income, formData.zso]);

  const handleInputChange = (field) => (e) => {
    let value = e.target.value.replace(/,/g, "").trim();
    if (isNaN(value) || value === "") {
      value = ""; // Reset to empty if invalid
    }
    setFormData({ ...formData, [field]: value });
  };

  const handleBlur = (field) => (e) => {
    let value = e.target.value.replace(/,/g, "").trim();
    if (value !== "" && !isNaN(value)) {
      value = formatNumber(value); // Apply formatting
    }
    setFormData({ ...formData, [field]: value });
  };

  //Državljanin ili ne
  const toggleRezident = (value) => (event) => {
    event.preventDefault();
    setFormData((prev) => ({
      ...prev,
      rezident: value,
    }));
  };

  //Osiguran po drugom osnovu
  const toggleCheckbox = () => {
    setFormData((prev) => ({
      ...prev,
      zso: !prev.zso,
    }));
  };

  const inputFields = [
    {
      label: "Normirani troskovi za 2024. godinu:",
      field: "expenses",
      placeholder: formatNumber(normiraniTroskovi2024),
      disabled: true,
    },
    {
      label: "Osnovica za obracun poreza i doprinosa:",
      field: "baseTax",
      placeholder: "0",
      disabled: true,
    },
    {
      label: "Porez 20%:",
      field: "tax20",
      placeholder: "0",
      disabled: true,
    },
    {
      label: "Doprinosi za PIO 24%:",
      field: "contributionPIO",
      placeholder: "0",
      disabled: true,
    },
    {
      label: "Doprinosi za zdravstveno osiguranje 10.3%:",
      field: "contributionHealth",
      placeholder: "0",
      disabled: true,
    },
    {
      label: "Ukupni porezi i doprinosi:",
      field: "totalContributions",
      placeholder: "0",
      disabled: true,
    },
    {
      label: "Neto zarada:",
      field: "netIncome",
      placeholder: "0",
      disabled: true,
    },
    {
      label: "Normirani troskovi za 2024. godinu:",
      field: "expenses2",
      placeholder: formatNumber(normiraniTroskovi22024),
      disabled: true,
    },
    {
      label: "Normirani troskovi 34% od prihoda:",
      field: "expenses34",
      placeholder: "0",
      disabled: true,
    },
    {
      label: "Ukupni normirani troskovi:",
      field: "baseTaxSum",
      placeholder: "0",
      disabled: true,
    },
    {
      label: "Osnovica za obracun poreza I doprinosa:",
      field: "baseTax2",
      placeholder: "0",
      disabled: true,
    },
    {
      label: "Porez 10%:",
      field: "tax10",
      placeholder: "0",
      disabled: true,
    },
    {
      label: "Doprinosi za PIO 24% ili 120.429*24%:",
      field: "contributionPIO2",
      placeholder: "0",
      disabled: true,
    },
    {
      label: "Doprinosi za zdravstveno osiguranje 10.3% ili 53.370*10.3%:",
      field: "contributionHealth2",
      placeholder: "0",
      disabled: true,
    },
    {
      label: "Ukupni porezi i doprinosi:",
      field: "totalContributions2",
      placeholder: "0",
      disabled: true,
    },
    {
      label: "Neto zarada:",
      field: "netIncome2",
      placeholder: "0",
      disabled: true,
      disabled: true,
    },
  ];

  return (
    <div className="bg-gradient-to-tr from-indigo-500 via-blue-500 to-cyan-500 p-5 w-full">
      {/* <form className="flex flex-col md:flex-row pb-5 w-full items-center justify-center">
        <label className="text-xl font-bold text-slate-50">
          Da li ste državljanin Republike Srbije?
        </label>
        <div className="space-x-5 py-3 md:pl-5">
          <button
            type="button"
            className={`px-6 py-2 border-2 rounded-lg transition ${
              formData.rezident === "jesam"
                ? "bg-blue-400 text-white border-blue-500 "
                : "bg-gray-100 text-blue-500 border-blue-500"
            }`}
            onClick={(e) => toggleRezident("jesam")(e)}
          >
            Jesam
          </button>
          <button
            type="button"
            className={`px-6 py-2 border-2 rounded-lg transition ${
              formData.rezident === "nisam"
                ? "bg-blue-400 text-white border-blue-500"
                : "bg-gray-100 text-blue-500 border-blue-500"
            }`}
            onClick={(e) => toggleRezident("nisam")(e)}
          >
            Nisam
          </button>
        </div>
      </form>

      <form
        className={`w-full px-5 mb-5 ${
          formData.rezident === "jesam" ? "" : "hidden"
        }`}
      >
        <label className="text-xl font-bold text-slate-50 px-5">
          Prihod ostvaren u inostranstvu:
        </label>
        <input
          type="text"
          value={formData.inoPrihod}
          onChange={handleInputChange("inoPrihod")}
          onBlur={handleBlur("inoPrihod")}
          className="w-auto px-3 py-1 border-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="0"
        />
        <label className="text-xl font-bold text-slate-50 px-5">
          Iznos poreza plaćenog u inostranstvu:
        </label>
        <input
          type="text"
          value={formData.inoPorez}
          onChange={handleInputChange("inoPorez")}
          onBlur={handleBlur("inoPorez")}
          className="w-auto px-3 py-1 border-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="0"
        />
      </form> */}

      <form className="px-5 flex flex-col md:flex-row gap-5 w-full items-center justify-center">
        <label className="text-xl font-bold text-slate-50">
          Ostvaren bruto prihod u kvartalu:
        </label>
        <input
          type="text"
          value={formData.income}
          onChange={handleInputChange("income")}
          onBlur={handleBlur("income")}
          className="w-auto px-3 py-2 border-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-yellow-300"
          placeholder="0"
        />
        <div className="flex flex-row items-center gap-5">
          <label className="block text-xl font-semibold text-slate-50">
            Osiguran/a sam kod ZSO po drugom osnovu:
          </label>
          <input
            type="checkbox"
            checked={formData.zso}
            onChange={toggleCheckbox}
            className="h-7 w-7 "
            placeholder="0"
          />
        </div>
      </form>

      <div className="flex flex-col md:flex-row md:p-5 w-full">
        {["Model I", "Model II"].map((model, index) => (
          <form
            key={model}
            className="px-5 flex flex-col md:gap-3 w-full md:w-6/12"
          >
            <h2 className="px-5 text-xl font-bold text-gray-700 mb-4 text-center pt-5 md:pt-0">
              {model}
            </h2>
            {inputFields
              .slice(index === 0 ? 0 : 7, index === 0 ? 7 : inputFields.length)
              .map(({ label, field, placeholder, disabled }) => (
                <div
                  key={field}
                  className="flex flex-col md:flex-row w-full justify-between border-b items-center py-1"
                >
                  <label className="block text-md font-bold text-slate-50">
                    {label}
                  </label>
                  <input
                    type="text"
                    value={formData[field]}
                    onChange={handleInputChange(field)}
                    onBlur={handleBlur(field)}
                    className="w-auto px-3 py-1 border-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder={placeholder}
                    disabled={disabled}
                  />
                </div>
              ))}
          </form>
        ))}
      </div>
    </div>
  );
}

export default Frilenseri;
