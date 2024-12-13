import TabelaDecaci from "@/app/indeks-telesne-mase/TabelaDecaci";
import TabelaDevojcice from "@/app/indeks-telesne-mase/TabelaDevojcice";
import TabelaOdrasli from "@/app/indeks-telesne-mase/TabelaOdrasli";
import Image from "next/image";
import Link from "next/link";

function BmiText() {
  return (
    <div className="px-5 py-14 flex-col w-full md:w-9/12">
      <section>
        <h2 className="text-2xl font-bold py-2">
          Šta je Indeks telesne mase (BMI)?
        </h2>
        <p className="py-2">
          BMI je indeks telesne mase zasnovan na odnosu visine, težine, starosti
          i pola osobe. Koristi se kao opšti pokazatelj uhranjenosti. Kalkulator
          računa putem formule koja uzima u obzir visinu i težinu:
        </p>
        <div className="flex justify-center items-center py-4">
          <Image
            src="/formula-indeks-telesne-mase-bmi.png"
            height="64"
            width="195"
            quality={100}
            className="object-cover"
            alt="indeks telesne mase BMI formula"
          />
        </div>

        <p className="py-2">
          <b>Kalkulator indeksa telesne mase (BMI)</b> se razlikuje za žene i
          muškarce kao i za decu i odrasle osobe. U zavisnosti od godina i pola
          razlikuju se i kriterijumi. Neke od kriterijuma možete videti u
          tabelama ispod:
        </p>
        <div className="w-full flex place-content-center">
          <Image
            src="/bmi-indeks-telesne-mase.jpg"
            height="500"
            width="389"
            quality={80}
            className="object-cover"
            alt="bmi-indeks-telesne-mase"
          />
        </div>
        <p className="py-2">
          Podaci su zasnovani na izveštajima međunarodnih organizacija.
          Interpretacija ne mora nužno biti stoprocentno tačna. Izvor podataka
          je <b>Svetska Zdravstvena Organizacija</b> (
          <Link
            className="underline"
            href="https://www.who.int/tools/growth-reference-data-for-5to19-years"
          >
            SZO grafikoni rasta )
          </Link>
          SZO obezbeđuje globalni standard za BMI klasifikaciju.
        </p>

        <TabelaOdrasli />
        <TabelaDevojcice />
        <TabelaDecaci />
        <h2 className="text-2xl font-bold py-2">
          Posledice gojaznosti i neuhranjenosti
        </h2>
        <p className="py-2">
          Prekomerna težina kao i neuhranjenost mogu izazvati spektar oboljenje.
          Na primer, prekomerna težina je povezana sa povišenim šećerom
          (dijabetesom), povišenim krvnim pritiskom, srčanim oboljenjima i
          slično.
        </p>
        <p className="py-2">
          Sa druge strane, neuhranjenost se povezuje sa anemijom, osteroporozom
          i drugim oboljenjima.
        </p>
        <div className="px-10 py-10 bg-red-100 rounded-xl">
          <p className="text-red-500">
            Rezultati kalkulatora su samo informativnog karaktera. Pre bilo
            kakve odluke vezane za vaše zdravlje, posavetujte se sa lekarom.
          </p>
        </div>
      </section>
    </div>
  );
}

export default BmiText;
