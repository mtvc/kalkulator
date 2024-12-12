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
        {/* <div className="space-y-4 gap-4 my-5 sm:grid sm:grid-rows-4 sm:space-y-0 md:grid md:grid-rows-4 md:space-y-0 lg:grid lg:grid-rows-3 lg:space-y-0 grid-flow-col ">
          <div>
            <h3>
              <b>Miligram (mg)</b>
            </h3>
            <ul>
              <li>- miligrami (mg) u grame (gr)</li>
              <li>- miligrami (mg) u dekagrame (dg)</li>
              <li>- miligrami (mg) u kilograme (kg)</li>
              <li>- miligrami (mg) u tone (t)</li>
              <li>- miligrami (mg) u unce (oz)</li>
              <li>- miligrami (mg) u funte (lb)</li>
              <li>- miligrami (mg) u stene (st)</li>
              <li>- miligrami (mg) u kvotere (qt)</li>
            </ul>
          </div>
          <div>
            <h3>
              <b>Gram (gr)</b>
            </h3>
            <ul>
              <li>- grami (gr) u miligrame (mg)</li>
              <li>- grami (gr) u dekagrame (dg)</li>
              <li>- grami (gr) u kilograme (kg)</li>
              <li>- grami (gr) u tone (mt)</li>
              <li>- grami (gr) u unce (oz)</li>
              <li>- grami (gr) u funte (lb)</li>
              <li>- grami (gr) u stene (st)</li>
              <li>- grami (gr) u kvotere (qt)</li>
            </ul>
          </div>
          <div>
            <h3>
              <b>Dekagram (dg)</b>
            </h3>
            <ul>
              <li>- dekagrami (dg) u miligrame (mg)</li>
              <li>- dekagrami (dg) u grame (gr)</li>
              <li>- dekagrami (dg) u kilograme (kg)</li>
              <li>- dekagrami (dg) u tone (mt)</li>
              <li>- dekagrami (dg) u unce (oz)</li>
              <li>- dekagrami (dg) u funte (lb)</li>
              <li>- dekagrami (dg) u stene (st)</li>
              <li>- dekagrami (dg) u kvotere (qt)</li>
            </ul>
          </div>
          <div>
            <h3>
              <b>Kilogram (kg)</b>
            </h3>
            <ul>
              <li>- kilogrami (kg) u miligrame (mg)</li>
              <li>- kilogrami (kg) u grame (gr)</li>
              <li>- kilogrami (kg) u dekagrame (dg)</li>
              <li>- kilogrami (kg) u tone (mt)</li>
              <li>- kilogrami (kg) u unce (oz)</li>
              <li>- kilogrami (kg) u funte (lb)</li>
              <li>- kilogrami (kg) u stene (st)</li>
              <li>- kilogrami (kg) u kvotere (qt)</li>
            </ul>
          </div>
          <div>
            <h3>
              <b>Metrička tona (mt)</b>
            </h3>
            <ul>
              <li>- tone (mt) u miligrame (mg)</li>
              <li>- tone (mt) u grame (gr)</li>
              <li>- tone (mt) u dekagrame (dg)</li>
              <li>- tone (mt) u kilograme (kg)</li>
              <li>- tone (mt) u unce (oz)</li>
              <li>- tone (mt) u funte (lb)</li>
              <li>- tone (mt) u stene (st)</li>
              <li>- tone (mt) u kvotere (qt)</li>
            </ul>
          </div>
          <div>
            <h3>
              <b>Unca (oz)</b>
            </h3>
            <ul>
              <li>- unce (oz) u miligrame (mg)</li>
              <li>- unce (oz) u grame (gr)</li>
              <li>- unce (oz) u dekagrame (dg)</li>
              <li>- unce (oz) u kilograme (kg)</li>
              <li>- unce (oz) u tone (mt)</li>
              <li>- unce (oz) u funte (lb)</li>
              <li>- unce (oz) u stene (st)</li>
              <li>- unce (oz) u kvotere (qt)</li>
            </ul>
          </div>
          <div>
            <h3>
              <b>Funta (ft)</b>
            </h3>
            <ul>
              <li>- funte (lb) u miligrame (mg)</li>
              <li>- funte (lb) u grame (gr)</li>
              <li>- funte (lb) u dekagrame (dg)</li>
              <li>- funte (lb) u kilograme (kg)</li>
              <li>- funte (lb) u tone (mt)</li>
              <li>- funte (lb) u unce (oz)</li>
              <li>- funte (lb) u stene (st)</li>
              <li>- funte (lb) u kvotere (qt)</li>
            </ul>
          </div>
          <div>
            <h3>
              <b>Stena (st)</b>
            </h3>
            <ul>
              <li>- stene (st) u miligrame (mg)</li>
              <li>- stene (st) u grame (gr)</li>
              <li>- stene (st) u dekagrame (dg)</li>
              <li>- stene (st) u kilograme (kg)</li>
              <li>- stene (st) u tone (mt)</li>
              <li>- stene (st) u unce (oz)</li>
              <li>- stene (st) u funte (lb)</li>
              <li>- stene (st) u kvotere (qt)</li>
            </ul>
          </div>
          <div>
            <h3>
              <b>Kvoter (qt)</b>
            </h3>
            <ul>
              <li>- kvotere (qt) u miligrame (mg)</li>
              <li>- kvotere (qt) u grame (gr)</li>
              <li>- kvotere (qt) u dekagrame (dg)</li>
              <li>- kvotere (qt) u kilograme (kg)</li>
              <li>- kvotere (qt) u tone (mt)</li>
              <li>- kvotere (qt) u unce (oz)</li>
              <li>- kvotere (qt) u funte (lb)</li>
              <li>- kvotere (qt) u stene (st)</li>
            </ul>
          </div>
        </div> */}
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
      </section>
    </div>
  );
}

export default KmjMasaText;
