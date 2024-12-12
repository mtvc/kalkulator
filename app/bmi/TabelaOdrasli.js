export default function TabelaOdrasli() {
  return (
    <div>
      <h3 className="pt-6 text-xl font-bold">
        BMI-za odrasle osobe (iznad 20 godina)
      </h3>
      <div className="flex justify-center items-center py-4 ">
        <table className="min-w-max max-w-full border-separate border-spacing-1.5">
          <thead className="bg-gray-300 mx-4 ">
            <tr className="px-4">
              <th>Indeks</th>
              <th>Klasifikacija</th>
            </tr>
          </thead>
          <tbody className="text-center px-4">
            <tr>
              <td>&lt; 18.5</td>
              <td>Neuhranjenost</td>
            </tr>
            <tr>
              <td>18.5 - 24.9</td>
              <td>Idealna masa</td>
            </tr>
            <tr>
              <td>25 - 29.9</td>
              <td>Prekomerna masa</td>
            </tr>
            <tr>
              <td>30 - 34.9</td>
              <td>Blaga gojaznost</td>
            </tr>
            <tr>
              <td>35 - 39.9 </td>
              <td>Teška gojaznost</td>
            </tr>
            <tr>
              <td>&gt; 40</td>
              <td>Patološka gojaznost</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
