import { useState } from "react";

const AreaConverter = () => {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("square meters");
  const [toUnit, setToUnit] = useState("square feet");
  const [result, setResult] = useState(null);

  const conversionRates = {
    "square meters": {
      "square feet": 10.7639,
      "square yards": 1.19599,
      acres: 0.000247105,
    },
    "square feet": {
      "square meters": 0.092903,
      "square yards": 0.111111,
      acres: 0.0000229568,
    },
    // Add more conversions as needed
  };

  const convertArea = () => {
    if (value && fromUnit && toUnit) {
      const rate = conversionRates[fromUnit][toUnit];
      setResult(value * rate);
    }
  };

  return (
    <div>
      <h1>Area Converter</h1>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter value"
      />
      <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
        <option value="square meters">Square Meters</option>
        <option value="square feet">Square Feet</option>
        <option value="square yards">Square Yards</option>
        <option value="acres">Acres</option>
      </select>
      <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
        <option value="square meters">Square Meters</option>
        <option value="square feet">Square Feet</option>
        <option value="square yards">Square Yards</option>
        <option value="acres">Acres</option>
      </select>
      <button onClick={convertArea}>Convert</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default AreaConverter;
