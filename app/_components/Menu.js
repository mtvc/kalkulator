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
        <a href="/bmi">BMI</a>
      </li>
      <li className="hover:underline">
        <a href="/konverter-mernih-jedinica-za-masu">Masa</a>
      </li>
      <li className="hover:underline">
        <a href="/konverter-mernih-jedinica-za-duzinu">Duzina</a>
      </li>
      {/* <li className="hover:underline">Kontakt</li> */}
    </ul>
  );
}

export default Menu;
