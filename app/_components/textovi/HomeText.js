import Image from "next/image";
import Link from "next/link";

function HomeText() {
  return (
    <section>
      <div className="md:py-5 flex-col md:flex md:flex-row align-middle">
        <div className="w-full md:w-4/12">
          <Image
            src="/kalkulator-online-kalkulator-procenata-zarada-kalorija-bmi.png"
            height="500"
            width="417"
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
            <p>
              Dobrodošli na <b>Kalkulatori.online</b>, vaš glavni izvor za
              praktične i jednostavne kalkulatore za svakodnevne potrebe. Bez
              obzira da li upravljate svojim ličnim finansijama, pratite
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
      <div className="md:py-5 flex-col md:flex md:flex-row-reverse">
        <div className="w-full md:w-4/12">
          <Image
            src="/kalkulator-online-kalkulator-procenata-zarada-kalorija.png"
            height="500"
            width="417"
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
            <p>
              Bez obzira da li vas zanima koliki je procenat od broja, koja je
              normalna težina na visinu, koliko je col centimetara ili koliko je
              kilograma u jednoj toni, naši kalkulatori će vam pomoći pri
              svakodnevnom računanju.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeText;
