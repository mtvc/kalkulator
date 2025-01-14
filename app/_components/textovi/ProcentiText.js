import Image from "next/image";
import Link from "next/link";

function ProcentiText() {
  return (
    <div className="px-5 py-14 flex-col w-full md:w-9/12">
      <section>
        <h2 className="text-2xl font-bold py-2">
          Formula za izracunavanje procenta
        </h2>
        <p className="py-2">
          <b>Procentni kalkulator</b> izračunava procenat, odnosno, broj stotih
          delova nekog broja (postotak).
        </p>
        <p className="py-2">
          <b>Kalkulator</b> izračunava <b>procenat</b> tako što zadati broj deli
          sa sto (100), odnosno određuje njegov stoti deo, a zatim, traženi broj
          procenata množi sa tim brojem.
        </p>
        <p className="py-2">
          Procenat (postotak) je jedna od osnovnih i najčešće korišćenih
          matematičkih operacija. Koristi se svakodnevno u različitim
          situacijam. Neke od primera iz svakodnevnog života ćemo predstaviti
          ovde.
        </p>
        <div className="w-full flex place-content-center">
          <Image
            src="/kalkulator-procenat-pita-grafikon.jpg"
            height="421"
            width="500"
            quality={80}
            className="object-cover"
            alt="kalkulator procenta pita grafikon"
          />
        </div>
        <div className="text-xs text-slate-300">
          <Link href="https://www.vecteezy.com/free-vector/percent">
            Percent Vectors by Vecteezy
          </Link>
        </div>
        <h2 className="text-2xl font-bold py-2">
          Nekoliko izmišljenih primera gde možete da primenite procentni račun:
        </h2>
        <h3 className="pt-6 text-xl font-bold">Koliko ulja ide u mešavinu?</h3>
        <p className="py-2">
          Trimer za travu radi na mešavinu benzina i 2% ulja. Koliko ulja treba
          da dodam u 0.7 litara benzina?{" "}
        </p>
        <p className="py-2">0.7 / 100 * 2 = 0.007 * 2 = 0.014 </p>
        <p className="py-2">
          U 0.7 litara benzina treba dodati 0.014 litara (l) ulja, što je 14
          mililitara (ml) ulja.{" "}
        </p>
        <h3 className="pt-6 text-xl font-bold">Umanjena penzija</h3>
        <p className="py-2">
          Ako dobijate penziju, na primer, 25000 dinara, i smanje vam je za 10%
          a posle je povećaju za 10%, da li je vaša penzija ista?{" "}
        </p>
        <p className="py-2">
          25000 - (25000 / 100) * 10 = 25000 - 250 * 10 = 25000 - 2500 = 22500
          dinara
        </p>
        <p className="py-2">
          22500 + (22500 / 100) * 10 = 22500 + 225 * 10 = 22500 + 2250 = 24750
          dinara
        </p>
        <p className="py-2">Vaša penzija je manja za 250 dinara</p>
        <h3 className="pt-6 text-xl font-bold">
          Kako se računa procenat sniženja?
        </h3>
        <p className="py-2">
          Ako je redovna cena nekog proizvoda u prodavnici 11265.99 dinara a u
          akcijskom letku piše da je sniženje do 25%, minimalna cena tog
          proizvoda, pod uslovom da je popust 25%, će iznositi:
        </p>
        <p className="py-2">
          11265.99 - (11265.99 / 100) * 25 = 11265.99 - 112.65 * 25 = 11265.99 -
          2816.49 = 8449.49 dinara
        </p>
        <p className="py-2">Minimalna cena proizvoda će biti 8449.49 dinara</p>
        <h3 className="pt-6 text-xl font-bold">Rezultat izbora</h3>
        <p className="py-2">
          Ako neka država ima, recimo, 5 000 000 glasača a na izbore izađe svega
          51%, onda možemo da kažemo:
        </p>
        <p className="py-2">5000000 / 100 * 51 = 2550000</p>
        <p className="py-2">Na izbore je izašlo 2550000 glasača.</p>
        <p className="py-2">
          Ako od ukupnog broja izašlih glasača pobednička partija dobije 51%
          glasova, tada:
        </p>{" "}
        <p className="py-2">2550000 / 100 * 51 = 1300500</p>
        <p className="py-2">Pobednička partija je dobila 1300500 glasova</p>
        <p className="py-2">
          1300500 / (5000000 / 100) = 1300500 / 50000 = 26.01
        </p>
        <p className="py-2">
          Pobednička partija je osvojila vlast sa svega 26.01% glasova od
          ukupnog broja upisanih birača.
        </p>
        <h2 className="text-2xl font-bold py-2">Rezime</h2>
        <p className="py-2">
          Procentni račun je generalno jednostavan ali ponekad je mnogo brže
          kada za to koristite specijalni alat, pogotovo kad se radi o brojevima
          koji nisu okrugli. Sigurni smo da će ovaj jednostavan kalkulator
          pomoći mnogima da uštede svoje vreme.
        </p>
      </section>
    </div>
  );
}

export default ProcentiText;
