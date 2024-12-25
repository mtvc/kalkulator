"use client";
import { useState, useMemo } from "react";
import { namirnice } from "@/app/_lib/namirniceApi";

function Kalorije() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [jelovnik, setJelovnik] = useState([]);
  const [kolicina, setKolicina] = useState(100);

  // Filter the list based on the search query
  const filteredNamirnice = useMemo(
    () =>
      namirnice.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery]
  );

  // Handle item selection
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setKolicina(100); // Reset 'kolicina' to default value
  };

  // Add selected item to the jelovnik
  const addToJelovnik = () => {
    if (selectedItem) {
      const itemWithQuantity = { ...selectedItem, kolicina: Number(kolicina) };
      setJelovnik((prev) => [...prev, itemWithQuantity]);
    }
  };

  // Calculate totals
  const totalValues = useMemo(() => {
    return jelovnik.reduce(
      (totals, item) => {
        const factor = item.kolicina / 100;
        return {
          calories: totals.calories + item.nutritional_values.calories * factor,
          fat: totals.fat + item.nutritional_values.fat * factor,
          carbohydrates:
            totals.carbohydrates +
            item.nutritional_values.carbohydrates * factor,
          protein: totals.protein + item.nutritional_values.protein * factor,
          fiber: totals.fiber + item.nutritional_values.fiber * factor,
          sugars: totals.sugars + item.nutritional_values.sugars * factor,
        };
      },
      {
        calories: 0,
        fat: 0,
        carbohydrates: 0,
        protein: 0,
        fiber: 0,
        sugars: 0,
      }
    );
  }, [jelovnik]);

  return (
    <div className="p-4 w-full max-w-7xl mx-auto">
      <div className="pt-5 pb-5 px-5 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-3 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500">
        {/* Column 1: Input and Filtered List */}
        <div className="rounded">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-3 mb-4 border-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200 text-gray-800"
            placeholder="Pretraži namirnice"
          />
          <div className="h-64 overflow-y-hidden border rounded-md bg-white">
            <ul className="text-gray-800 font-semibold">
              {filteredNamirnice.map((item, index) => (
                <li
                  key={index}
                  className="py-2 px-4 cursor-pointer hover:bg-teal-300"
                  onClick={() => handleItemClick(item)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 2: Selected Item Details */}
        <div className="bg-white p-6 rounded shadow-md">
          {selectedItem ? (
            <div>
              <div className="grid grid-cols-2 items-center">
                <h3 className="text-xl font-bold text-orange-600 mb-4">
                  {selectedItem.name}
                </h3>
                <div className="flex gap-3">
                  <input
                    type="number"
                    value={kolicina}
                    onChange={(e) => setKolicina(e.target.value)}
                    className="w-9/12 px-3 py-1 mb-4 border-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200 text-gray-800"
                    placeholder="gr"
                  />
                  <span className="w-3/12 pt-2">grama</span>
                </div>
              </div>
              <ul className="space-y-2">
                <li>
                  <strong>Kalorije:</strong>{" "}
                  {(
                    (selectedItem.nutritional_values.calories / 100) *
                    Number(kolicina)
                  ).toFixed(2) || 0}{" "}
                  kCal
                </li>
                <li>
                  <strong>Masti:</strong>{" "}
                  {(
                    (selectedItem.nutritional_values.fat / 100) *
                    Number(kolicina)
                  ).toFixed(2) || 0}{" "}
                  gr
                </li>
                <li>
                  <strong>Ugljenihidrati:</strong>{" "}
                  {(
                    (selectedItem.nutritional_values.carbohydrates / 100) *
                    Number(kolicina)
                  ).toFixed(2) || 0}{" "}
                  gr
                </li>
                <li>
                  <strong>Proteini:</strong>{" "}
                  {(
                    (selectedItem.nutritional_values.protein / 100) *
                    Number(kolicina)
                  ).toFixed(2) || 0}{" "}
                  gr
                </li>
                <li>
                  <strong>Vlakna:</strong>{" "}
                  {(
                    (selectedItem.nutritional_values.fiber / 100) *
                    Number(kolicina)
                  ).toFixed(2) || 0}{" "}
                  gr
                </li>
                <li>
                  <strong>Šećeri:</strong>{" "}
                  {(
                    (selectedItem.nutritional_values.sugars / 100) *
                    Number(kolicina)
                  ).toFixed(2) || 0}{" "}
                  gr
                </li>
              </ul>
              <button
                onClick={addToJelovnik}
                className="mt-4 w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Dodaj u jelovnik
              </button>
            </div>
          ) : (
            <p className="text-gray-500">Odaberi namirnicu za detalje.</p>
          )}
        </div>

        {/* Column 3: Jelovnik */}
        <div className="bg-white p-6 rounded shadow-md md:min-h-auto max-h-96 overflow-y-scroll">
          <h3 className="text-xl font-bold mb-4 text-green-400">Jelovnik</h3>

          {jelovnik.length > 0 ? (
            <ul className="space-y-2">
              {jelovnik.map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center py-2 border-b"
                >
                  <span className="text-gray-800">
                    {item.name + " " + item.kolicina + " gr"}
                  </span>
                  <span
                    onClick={() => {
                      setJelovnik((prev) =>
                        prev.filter((_, index) => index !== i)
                      );
                    }}
                    className="cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="red"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Jelovnik je prazan.</p>
          )}
        </div>

        {/* Total Section */}
        <div className="bg-white px-5 py-5">
          <h3 className="text-xl font-bold text-orange-600">Total:</h3>
          <div className="grid grid-cols-2 gap-3">
            <ul className="py-5 ">
              <li className="text-purple-400 font-semibold py-3 text-md">
                Kalorije:
              </li>
              <li> {totalValues.calories.toFixed(2)} kCal</li>
              <li className="text-orange-400 font-semibold py-3 text-md">
                Masti:
              </li>
              <li> {totalValues.fat.toFixed(2)} gr</li>
              <li className="text-yellow-400 font-semibold py-3 text-md">
                Ugljenihidrati:
              </li>
              <li> {totalValues.carbohydrates.toFixed(2)} gr</li>
            </ul>
            <ul className="py-5 ">
              <li className="text-blue-400 font-semibold py-3 text-md">
                Proteini:
              </li>
              <li> {totalValues.protein.toFixed(2)} gr</li>
              <li className="text-green-400 font-semibold py-3 text-md">
                Vlakna:
              </li>
              <li> {totalValues.fiber.toFixed(2)} gr</li>
              <li className="text-red-400 font-semibold py-3 text-md">
                Šećeri:
              </li>
              <li> {totalValues.sugars.toFixed(2)} gr</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kalorije;
