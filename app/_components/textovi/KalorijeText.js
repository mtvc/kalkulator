function KalorijeText() {
  return (
    <div className="px-5 py-14 flex-col w-full md:w-9/12">
      <section className="space-y-4">
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
        <p className="py-2">
          Odredide u koju grupu spadate preko našeg{" "}
          <a href="/indeks-telesne-mase" className="underline">
            BMI kalkulatora
          </a>{" "}
          i napravite jelovnik koji će vam pomoći da unosite tačno kalorija
          koliko želite.
        </p>
      </section>
    </div>
  );
}

export default KalorijeText;
