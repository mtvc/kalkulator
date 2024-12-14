import Image from "next/image";
import Link from "next/link";

function KmjDuzinaText() {
  return (
    <div className="px-5 py-14 flex-col w-full md:w-9/12">
      <section className="space-y-4">
        <p className="py-2">
          <b>Kalkulator (konverter) mernih jedinica za dužinu</b> služi za
          pretvaranje nekih od mernih jedinica za dužinu u međunarodnom sistemu
          jedinica.
        </p>
        <h2 className="text-2xl font-bold">Kalkulator obuhvata:</h2>

        <div className="flex flex-row ">
          <div className="w-6/12">
            <h3 className="text-xl font-bold py-4">Metričke veličine:</h3>
            <ol className="list-disc list-inside">
              <li>Milimetri (mm)</li>
              <li>Centimetri (cm)</li>
              <li>Decimetri (dm)</li>
              <li>Metri (dm)</li>
              <li>Kilometri (dm)</li>
            </ol>
          </div>
          <div className="w-6/12">
            <h3 className="text-xl font-bold py-4">Imperijalne veličine:</h3>
            <ol className="list-disc list-inside">
              <li>Inče (inch)</li>
              <li>Cole (zoll)</li>
              <li>Stope (feet)</li>
              <li>Jarde (yard)</li>
              <li>Milje (mile)</li>
            </ol>
          </div>
        </div>
        <div className="w-full flex place-content-center">
          <Image
            src="/konverter-metrickih--imperijalnih-duzina.jpg"
            height="353"
            width="500"
            quality={80}
            className="object-cover"
            alt="kalkulator duzina - metričke i imperijalne"
          />
        </div>
        <div className="text-xs text-slate-300">
          <Link href="https://www.vecteezy.com/free-vector/length">
            Length Vectors by Vecteezy
          </Link>
        </div>
        <h2 className="text-2xl font-bold">
          Neki od primera konverzije dužina:
        </h2>
        <h3 className="text-xl font-bold">Vodovodne instalacije</h3>
        <p className="py-2">
          Dimenzije vodovodnih cevi se izražene u colima (zoll). Tako postoje
          col, 1/4 cola, 1/2 cola, 1 i 1/4 i tako dalja. Ako cev treba da prođe
          kroz određenu rupu koju treba da izbušite, naj verovatnije će te to
          uraditi alatom čije dimenzije su predstavljene u milimetrima (mm).
          Ovaj kalkulator će vam sigurno olakšati posao.
        </p>
        <h3 className="text-xl font-bold">Stolarski kalkulator</h3>
        <p className="py-2">
          Naj češće upotrebljavana dimenzija daske u Americi je 2 inča x 4 inča
          (2 inch by 4 inch), kad se prevede u centimetre to odprilike odgovara
          dimenzijama štafle (5.08cm x 10.16 cm). Mnogi tutorijali na engleskom
          jeziku koji objašnjavaju hobi stolarima kako da naprave nešto, koriste
          upravo imperijalne veličine. Ovaj kalkulator će vam olakšati
          pretvaranje dimenzija za vaš hobi.
        </p>
        <h3 className="text-xl font-bold">Nautički kalkulator</h3>
        <p className="py-2">
          U nautici se udaljenost meri u nautičkim miljama (NM). Brzo
          konvertujte nautičke milje u kilometre uz pomoć online kalkulatora.
          Iako svaki iskusan moreplovac zna da je jedna nautička milja 1852 m
          odnosno 1.852 km, početnicima u nautici ovaj kalkulator može da
          pomogne na svom putu do morskog vuka. 🙂
        </p>
      </section>
    </div>
  );
}

export default KmjDuzinaText;
