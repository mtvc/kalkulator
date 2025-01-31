const menuItems = [
  {
    title: "Pločasti materijal",
    url: "/optimizacija-plocastog-materijala",
  },
  {
    title: "Porez za frilensere",
    url: "/kalkulator-poreza-za-frilensere",
  },
  {
    title: "Procenti",
    url: "/procenti",
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
      {menuItems.map(({ title, url }, index) => (
        <li className="hover:underline" key={index}>
          <a href={url}>{title}</a>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
