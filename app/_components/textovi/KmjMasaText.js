import Image from "next/image";
import Link from "next/link";

function KmjMasaText() {
  return (
    <div className="px-5 py-14 flex-col w-full md:w-9/12">
      <section className="space-y-4">
        <p className="py-2">
          <b>Konverter mernih jedinica za masu (težinu)</b> služi za pretvaranje
          nekih od mernih jedinica za masu u međunarodnom sistemu jedinica.
          Obuhvaćene su veličine iz metričkog i imperijalnog sistema.
        </p>
        <p className="py-2">
          Iako se masa i težina često poistovećuju to nije isto. Težina uzima u
          obzir masu tela ali i ubrzanje.
        </p>
        <h2 className="text-2xl">
          <b>Kalkulator konvertuje:</b>
        </h2>
        <div className="flex flex-row ">
          <div className="w-6/12">
            <h3 className="text-xl font-bold py-4">Metričke veličine:</h3>
            <ol className="list-disc list-inside">
              <li>Miligrami (mg)</li>
              <li>Grami (gr)</li>
              <li>Dekagrami(dg)</li>
              <li>Kilogrami (kg)</li>
              <li>Metričke tone (mt)</li>
            </ol>
          </div>
          <div className="w-6/12">
            <h3 className="text-xl font-bold py-4">Imperijalne veličine:</h3>
            <ol className="list-disc list-inside">
              <li>Unce (oz)</li>
              <li>Funte (lb)</li>
              <li>Stene (st)</li>
              <li>Kvoteri (qt)</li>
            </ol>
          </div>
        </div>
        <div className="w-full flex place-content-center">
          <Image
            src="/konverter-jedinica-mase.jpg"
            height="336"
            width="500"
            quality={80}
            className="object-cover"
            alt="konverter-jedinica-mase"
          />
        </div>
        <div className="text-xs text-slate-300">
          <Link href="https://www.vecteezy.com/free-vector/balance">
            Balance Vectors by Vecteezy
          </Link>
        </div>
        <h2 className="text-2xl font-bold">Primena konvertera mase</h2>
        <p className="py-2">
          Verovatno je svima jasna primena konverzije jedinica za masu ali čemo
          ipak navesti nekoliko primera.
        </p>{" "}
        <h3 className="text-xl font-bold ">
          Koliko ima proizvoda u ovom pakovanju?
        </h3>
        <p className="py-2">
          Proivodi široke potrošnje su sigurno nešto sa čim se svakodnevno
          srećemo. Na pakovanjima su obeležene mase (težine). Te oznake nisu
          uvek u jedinicama koje su nam poznate. Ovaj kalkulator može da vam
          pomogne da nbrzo utvrdite koliko je neke robe zapakovano i prema tome
          i razjasnite cenu po kilogramu. Mora se priznati da je to po nekad
          vrlo komplikovano i zahteva vreme.
        </p>
        <h3 className="text-xl font-bold">Teretana</h3>
        <p className="py-2">
          Na tegovima za bodibilding su po nekad težine označene u funtama.
          Možete jednostavno utvrditi koliko je to u kilogramima i izbeći da se
          povredite usled podizanja prekomerne težine ili da posle možete da se
          hvalite koliko ste kilograma podigli na benču. 🏋🏾‍♀️
        </p>
      </section>
    </div>
  );
}

export default KmjMasaText;
