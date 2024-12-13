import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full py-10 px-5 text-slate-50 bg-zinc-700">
      <div className="md:w-8/12 mx-auto flex flex-col md:flex-row w-full gap-4 leading-8 ">
        <div className="w-full md:w-4/12 text-center md:text-start">
          <ul>
            <li>
              -{" "}
              <Link className="hover:underline" href="/procenti">
                Odredi procenat
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                className="hover:underline"
                href="/konverter-mernih-jedinica-za-masu"
              >
                Konvertuj mase
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                className="hover:underline"
                href="/konverter-mernih-jedinica-za-duzinu"
              >
                Pretvori dužine
              </Link>
            </li>
            <li>
              -{" "}
              <Link className="hover:underline" href="/indeks-telesne-mase">
                Izračunaj BMI
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-4/12 text-center">
          <ul>
            <li>
              -{" "}
              <Link
                className="hover:underline"
                href="/general/terms
              "
              >
                Uslovi korišćenja
              </Link>{" "}
            </li>
            <li>
              -{" "}
              <Link className="hover:underline" href="/general/privacy-policy">
                Politika privatnosti
              </Link>
            </li>
            <li>
              -{" "}
              <Link className="hover:underline" href="/general/contact">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-4/12 text-center md:text-right md:pr-5">
          <ul>
            <li>© Kalkulatori.online, 2024</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
