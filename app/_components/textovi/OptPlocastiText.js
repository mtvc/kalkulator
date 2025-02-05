import Image from "next/image";
import Link from "next/link";

function OptPlocastiText() {
  return (
    <div className="px-5 py-14 flex-col w-full md:w-9/12">
      <h2 className="text-2xl font-bold py-2">
        Kreiranje krojne liste pločastog materijala
      </h2>
      <p className="py-2">
        Optimizacija sečenja pločastog materijala je proces koji se koristi za
        smanjenje otpada odnosno maksimalno iskorišćenje materijala. Naš
        kalkulator proračunava dimenzije ploče i delova koji se seku, kao i
        debljinu reznog alata i pravi krojnu listu.
      </p>
      <p className="py-2">
        Potrebno je uneti dimenzije u milimetrima za ploču i delove koji se seku
        kao i za debljinu reznog alata. Ukoliko imate dimenije u nekim drugim
        jedinicama, možete ih konverovati uz pomoć{" "}
        <Link
          className="underline"
          href="https://kalkulatori.online/konverter-mernih-jedinica-za-duzinu"
        >
          konvertera za dužinu
        </Link>{" "}
        .
      </p>
      <div className="w-full flex place-content-center">
        <Image
          src="/optimizacija-secenja-plocastog-materijala-krojna-lista.jpg"
          height="408"
          width="500"
          quality={80}
          className="object-cover"
          alt="Optimizacija sečenja pločastog materijala"
          priority={true}
        />
      </div>
      <div className="text-xs text-slate-300">
        <Link href="https://www.vecteezy.com/free-vector/machining">
          Length Vectors by Vecteezy
        </Link>
      </div>
      <h2 className="text-2xl font-bold py-2">
        Standardne dimenzije pločastog materijala
      </h2>
      <h3 className="text-xl font-bold py-2">Univer</h3>
      <p className="py-2">
        Standardna dimenzija univer table je 2800 x 2070 mm.
      </p>
      <h3 className="text-xl font-bold py-2">Medijapan i lesonit</h3>
      <p className="py-2">
        Dimenzija medijapan i lesonit table su 2800 x 2070 mm i 2850 x 2070 mm.
      </p>
      <h3 className="text-xl font-bold py-2">Gips-karton ploče (knauf)</h3>
      <p className="py-2">
        Gips-karton ploče se izrađuju u dimenziji 2600 x 1250 mm.
      </p>
    </div>
  );
}

export default OptPlocastiText;
