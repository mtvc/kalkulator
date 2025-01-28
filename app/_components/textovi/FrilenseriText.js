import Image from "next/image";
import Link from "next/link";

function FrilenseriText() {
  return (
    <div className="px-5 py-14 flex-col w-full md:w-9/12">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold py-2">
          Kako izračunati porez za frilensere
        </h2>
        <p className="py-2">
          Upišite ostvaren bruto prihod za kvartal za koji hoćete da obračunate
          porez. Kalkulator će izračunati porez po dva modela.
        </p>
        <h2 className="text-2xl font-bold py-2">
          Do kog iznosa frilenseri ne placaju porez?
        </h2>
        <p className="py-2">
          <b>Frilenseri porez</b> ne plaćaju do visine normiranih troškova.
          Normirane troškove propisuje država. Za 2024. godinu po modelu I
          iznose 103,296.00 dinara a po modelu II 62,300.00 dinara. To znači da
          ste dužni da platite samo doprinos za zdravstveno osiguranje ukoliko
          vaši prihodi ne prelaze ovaj iznos.
        </p>
        <div className="w-full flex place-content-center">
          <Image
            src="/kalkulator-poreza-za-frilensere.jpg"
            height="361"
            width="500"
            quality={80}
            className="object-cover"
            alt="kalkulator-poreza-za-frilensere"
          />
        </div>
        <div className="text-xs text-slate-300">
          <Link href="https://www.vecteezy.com/free-vector/tax">
            Length Vectors by Vecteezy
          </Link>
        </div>
        <h2 className="text-2xl font-bold py-2">
          Zdravstveno osiguranje kod ZSO
        </h2>
        <p className="py-2">
          Ako ste osigurani kod ZSO po drugom osnovu, na primer zaposleni ste u
          nekom preduzeću koje vam uplaćuje socijalno i zdravstveno, tada ne
          plaćate doprinose za zdravstveno osiguranje. To važi i kada kvartalni
          bruto prihod prevazilazi normirane troškove kao i kad je prihod manji
          od toga.
        </p>
        <h2 className="text-2xl font-bold py-2">Dvostruko oporezivanje</h2>
        <p className="py-2">
          Da bi se odbili porezi koje ste platili u drugoj državi,
          RepublikaSrbija mora da ima potpisan ugovor o izbegavanju dvostrukog
          oporezivanja sa tom državom.
        </p>
      </section>
    </div>
  );
}

export default FrilenseriText;
