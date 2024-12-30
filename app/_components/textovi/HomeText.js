import Image from "next/image";
import Link from "next/link";

function HomeText() {
  return (
    <section>
      <div className="py-5 flex-col md:flex md:flex-row align-middle">
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
              Aplikacije koje pospešuju produktivnost.
            </h2>
            <div className="py-2">
              <ol className="list">
                <li className="flex flex-row py-2 gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8 bg-green-300 rounded-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold ">
                    Pojednostavljuje procese
                  </h3>
                </li>
                <li className="flex flex-row py-2 gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8 bg-green-300 rounded-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold ">Ubrzava zadatke</h3>
                </li>
                <li className="flex flex-row py-2 gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8 bg-green-300 rounded-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold ">Štedi vreme</h3>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex-col md:flex md:flex-row-reverse">
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
              Kalkulatori i konverteri za matematiku, fiziku, finansije,
              sport...
            </h2>
            <p className="py-2">
              Aplikacija za računanje <b>procenata</b>, pretvaranje jedinica za{" "}
              <b>masu</b> i <b>dužinu</b>, pomoć oko kalkulisanja <b>poreza</b>{" "}
              za frilensere i ugovora o delu, praćenje zdravlja i fitnesa.{" "}
              <b>BMI</b> i <b>brojač kalorija</b>. Naši kalkulatori su
              dizajnirani da pruže brze i tačne rezultate uz minimalan napor.
              Dostupno u bilo koje vreme i potpuno besplatno, svaki naš{" "}
              <b>kalkulator</b> je tu da vam pomogne da uštedite vreme. Počnite
              da istražujete danas i otkrijte koliko život može biti jednostavan
              sa pravim alatima na dohvat ruke!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeText;
