import Image from "next/image";
import Link from "next/link";

function HomeText() {
  return (
    <section>
      <div className="md:py-5 flex-col md:flex md:flex-row align-middle">
        <div className="w-full md:w-4/12">
          <Image
            src="/kalkulator-online-kalkulator-procenata-zarada-kalorija-bmi.png"
            height="417"
            width="500"
            quality={80}
            className="object-cover"
            alt="kalkulator online kalkulator procenata, zarada, kalorija"
          />
          <div className="text-xs text-slate-300 px-4 mb-2">
            <Link href="https://www.vecteezy.com/free-vector/calculator">
              Calculator Vectors by Vecteezy
            </Link>
          </div>
        </div>
        <div className="px-5 w-full md:w-8/12">
          <div>
            <h2 className="text-2xl py-2 font-bold md:mt-10">
              Svaki naš online kalkulator je besplatan i jednostavan za
              upotrebu.
            </h2>
            <p className="py-2">
              Da li vas zanima koliki je procenat od broja? Koja je normalna
              težina na visinu? Koliko je col centimetara ili koliko je
              kilograma u jednoj toni? Naši online kalkulatori će vam pomoći pri
              svakodnevnom računanju. Neke operacije, iako su jednostavne,
              zahtevaju vreme i pažnju. Svaki naš <b>online kalkulator</b> je
              dizajniran za jednostavnu upotrebu i prilagođen svim uređajima.
            </p>
          </div>
        </div>
      </div>
      <div className="md:py-5 flex-col md:flex md:flex-row-reverse">
        <div className="w-full md:w-4/12">
          <Image
            src="/kalkulator-online-kalkulator-procenata-zarada-kalorija.png"
            height="417"
            width="500"
            quality={80}
            className="object-cover"
            alt="kalkulator online kalkulator procenata, zarada, kalorija"
          />
          <div className="text-xs text-slate-300 px-4 mb-2">
            <Link href="https://www.vecteezy.com/free-vector/calculator">
              Calculator Vectors by Vecteezy
            </Link>
          </div>
        </div>
        <div className="px-5 w-full md:w-8/12">
          <div>
            <h2 className="text-2xl py-2 font-bold md:mt-10">
              Kalulatori koji štede vreme.
            </h2>
            <p className="py-2">
              Bez obzira da li upravljate svojim ličnim finansijama, pratite
              zdravstvene ciljeve ili samo ubrzavate svakodnevne poslove, nudimo
              spektar alata za pojednostavljenje vašeg života. Od aplikacija za
              računanje <b>procenata</b>, pretvaranja jedinica za <b>masu</b> i{" "}
              <b>dužinu</b> do praćenje zdravlja i fitnesa kao što su <b>BMI</b>{" "}
              i brojača kalorija. Naši kalkulatori su dizajnirani da pruže brze
              i tačne rezultate uz minimalan napor. Dostupno u bilo koje vreme i
              potpuno besplatno, svaki naš kalkulator je tu da vam pomogne da
              uštedite vreme. Počnite da istražujete danas i otkrijte koliko
              život može biti jednostavan sa pravim alatima na dohvat ruke!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeText;
