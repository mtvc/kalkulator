function KalorijeText() {
  return (
    <div className="px-5 py-14 flex-col w-full md:w-9/12">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold py-2">
          Upravljanje kalorijama i telesnom težinom
        </h2>
        <h3 className="text-xl font-bold">
          Kalorije potrebne za gubitak 1 kg težine
        </h3>
        <p className="py-2">
          Da biste izgubili 1 kilogram (kg) telesne težine, potrebno je da
          potrošite približno 7.700 kalorija više nego što unesete. To se
          ostvaruje kombinacijom fizičke aktivnosti i smanjenim unosom kalorija.
          Ako stvorite dnevni kalorijski deficit od 500 kalorija, trebalo bi oko
          15-16 dana da izgubite 1 kg. Veći deficit (na primer, 1.000 kalorija
          dnevno) bi mogao da smanji ovo vreme na oko 8 dana, važno je da
          izbegnete ekstremne deficite kalorija koji mogu da naškode vašem
          zdravlju.
        </p>
        <h3 className="text-xl font-bold">Kako sačuvati željenu težinu</h3>
        <p className="py-2">
          Broj kalorija koji su vam potrebni da održite svoju trenutnu težinu
          zavisi od vaše ukupne dnevne potrošnje energije <b>(TDEE)</b>, koja
          utiče na: Bazalni metabolizam <b>(BMR)</b>: Kalorije sagorele u
          mirovanju za osnovne funkcije kao što su disanje i varenje. Nivo
          aktivnosti: Dodatne kalorije sagorele kroz fizičku aktivnost.
          Koristite sledeću jednačinu da procenite svoj TDEE:
        </p>
        <p className="text-xl font-bold">TDEE = BMR × faktor aktivnosti</p>
        <p className="pt-2 font-bold">Faktori aktivnosti:</p>
        <ul className="list-disc list-inside py-2">
          <li>Neaktivan (malo/bez vežbanja): BMR × 1,2</li>
          <li>
            Lagano aktivan (lagane vežbe/sport 1-3 dana nedeljno): BMR × 1,375
          </li>
          <li>
            Umereno aktivan (umereno vežbanje 3-5 dana nedeljno): BMR × 1,55
          </li>
          <li>
            Veoma aktivan (teške vežbe/sport 6-7 dana nedeljno): BMR × 1,725
          </li>
        </ul>
        <p className="py-2">
          Na primer, ako je vaš BMR 1.250 kalorija i neaktivni ste, vaš TDEE bi
          bio 1.250 × 1,2 = 1.500 kalorija dnevno.
        </p>
        <h3 className="text-xl font-bold">Kako povećati telesnu masu</h3>
        <p className="py-2">
          Da biste dobili na težini, potreban vam je kalorijski višak, koji
          troši više kalorija od vašeg TDEE. Bezbedan i efikasan višak je oko
          250–500 kalorija dnevno. Višak od 500 kalorija dnevno rezultira
          dobijanjem otprilike 0,5 kg nedeljno. Za brže dobijanje na težini,
          povećajte višak na 1.000 kalorija dnevno, iako to može dovesti do
          povećanog debljanja osim ako nije upareno sa treningom snage.
        </p>
        <h2 className="text-2xl font-bold py-2">
          Izracunavanje kalorija u obroku
        </h2>
        <p className="py-2">
          Izaberite namirnice i željene količine i napravite dnevni jelovnik.{" "}
          <b>Kalkulator</b> sabira ukupne vrednosti <b>kalorija</b>,{" "}
          <b>masti</b>, <b>ugljenih hidrata</b>, <b>vlakana</b>, <b>proteina</b>{" "}
          i <b>šećera</b>.
        </p>
        <h2 className="text-2xl font-bold py-2">Dnevni unos kalorija</h2>
        <ul className="list-disc list-inside py-2">
          <li>Da izgubite 1 kg: Napravite deficit od 7.700 kalorija.</li>
          <li>
            Da biste održali težinu: Uskladite svoj kalorijski unos sa TDEE.
          </li>
          <li>
            Da biste dobili na težini: Dodajte 250–500 kalorija svom TDEE.
          </li>
        </ul>
        <p className="py-2">
          Imajte na umu da individualne potrebe mogu da variraju u zavisnosti od
          faktora kao što su starost, pol, sastav tela i metabolizam.
        </p>
        <p className="py-2">
          Odredide u koju grupu spadate preko našeg{" "}
          <a href="/indeks-telesne-mase" className="underline">
            BMI kalkulatora
          </a>{" "}
          i napravite jelovnik koji će vam pomoći da unosite tačno kalorija
          koliko želite.
        </p>
        <div className="px-10 py-10 bg-red-100 rounded-xl">
          <p className="text-red-500">
            Uvek se konsultujte sa zdravstvenim radnikom ili nutricionistom za
            personalizovan savet.
          </p>
        </div>
      </section>
    </div>
  );
}

export default KalorijeText;
