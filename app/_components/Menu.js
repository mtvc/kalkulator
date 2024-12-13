function Menu({ style }) {
  return (
    <ul className={`${style}`}>
      {/* <li className="hover:underline">
        {" "}
        <a href="/konverter-mernih-jedinica">Merne jedinice</a>
      </li> */}
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
      {/* <li className="hover:underline">Kontakt</li> */}
    </ul>
  );
}

export default Menu;
