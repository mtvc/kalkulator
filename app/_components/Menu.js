const menuItems = [
  {
    title: "procenti",
    url: "/Procenti",
  },
  {
    title: "BMI",
    url: "/indeks-telesne-mase",
  },
  {
    title: "Masa",
    url: "/konverter-mernih-jedinica-za-masu",
  },
  {
    title: "Dužina",
    url: "/konverter-mernih-jedinica-za-duzinu",
  },
];

function Menu({ style }) {
  return (
    <ul className={`${style}`}>
      <li className="hover:underline">
        <a href="/kalkulator-poreza-za-frilensere">Porez za frilensere</a>
      </li>
      <li className="hover:underline">
        <a href="/procenti">Procenti</a>
      </li>
      <li className="hover:underline">
        <a href="/indeks-telesne-mase">BMI</a>
      </li>
      <li className="hover:underline">
        <a href="/konverter-mernih-jedinica-za-masu">Masa</a>
      </li>
      <li className="hover:underline">
        <a href="/konverter-mernih-jedinica-za-duzinu">Dužina</a>
      </li>
    </ul>
  );
}

export default Menu;
