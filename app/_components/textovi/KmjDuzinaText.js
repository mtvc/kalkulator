function KmjDuzinaText() {
  return (
    <div className="px-5 py-14 flex-col w-full md:w-9/12">
      <section className="space-y-4">
        <p>
          <b>Kalkulator (konverter) mernih jedinica za dužinu</b> služi za
          pretvaranje nekih od mernih jedinica za dužinu u međunarodnom sistemu
          jedinica.
        </p>
        <h2 className="text-2xl">
          <b>Kalkulatorom mogu biti konvertovani:</b>
        </h2>
        {/* <div className="space-y-4 gap-4 my-5 sm:grid sm:grid-rows-4 sm:space-y-0 md:grid md:grid-rows-4 md:space-y-0 lg:grid lg:grid-rows-3 lg:space-y-0 grid-flow-col ">
          <div>
            <ul>
              <li>- milimetri (mm) u centimetre (cm)</li>
              <li>- milimetri (mm) u metre (m)</li>
              <li>- milimetri (mm) u inče (inch)</li>
              <li>- milimetri (mm) u cole (zoll)</li>
              <li>- milimetri (mm) u stope (feet)</li>
              <li>- milimetri (mm) u jarde (yard)</li>
              <li>- milimetri (mm) u milje (mile)</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>- centimetri (cm) u milimetre (mm)</li>
              <li>- centimetri (cm) u metre (m)</li>
              <li>- centimetri (cm) u inče (inch)</li>
              <li>- centimetri (cm) u cole (zoll)</li>
              <li>- centimetri (cm) u stope (feet)</li>
              <li>- centimetri (cm) u jarde (yard)</li>
              <li>- centimetri (cm) u milje (mile)</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>- metri (m) u milimetre (mm)</li>
              <li>- metri (m) u centimetre (cm)</li>
              <li>- metri (m) u inče (inch)</li>
              <li>- metri (m) u cole (zoll)</li>
              <li>- metri (m) u stope (feet)</li>
              <li>- metri (m) u jarde (yard)</li>
              <li>- metri (m) u milje (mile)</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>- inči (inch) u milimetre (mm)</li>
              <li>- inči (inch) u centimetre (cm)</li>
              <li>- inči (inch) u metre (m)</li>
              <li>- inči (inch) u cole (zoll)</li>
              <li>- inči (inch) u stope (feet)</li>
              <li>- inči (inch) u jarde (yard)</li>
              <li>- inči (inch) u milje (mile)</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>- coli (zoll) u milimetre (mm)</li>
              <li>- coli (zoll) u centimetre (cm)</li>
              <li>- coli (zoll) u metre (m)</li>
              <li>- coli (zoll) u inče (inch)</li>
              <li>- coli (zoll) u stope (feet)</li>
              <li>- coli (zoll) u jarde (yard)</li>
              <li>- coli (zoll) u milje (mile)</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>- stope (feet) u milimetre (mm)</li>
              <li>- stope (feet) u centimetre (cm)</li>
              <li>- stope (feet) u metre (m)</li>
              <li>- stope (feet) u inče (inch)</li>
              <li>- stope (feet) u cole (zoll)</li>
              <li>- stope (feet) u jarde (yard)</li>
              <li>- stope (feet) u milje (mile)</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>- jardi (yard) u milimetre (mm)</li>
              <li>- jardi (yard) u centimetre (cm)</li>
              <li>- jardi (yard) u metre (m)</li>
              <li>- jardi (yard) u inče (inch)</li>
              <li>- jardi (yard) u stope (feet)</li>
              <li>- jardi (yard) u jarde (yard)</li>
              <li>- jardi (yard) u milje (mile)</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>- milje (mile) u milimetre (mm)</li>
              <li>- milje (mile) u centimetre (cm)</li>
              <li>- milje (mile) u metre (m)</li>
              <li>- milje (mile) u inče (inch)</li>
              <li>- milje (mile) u cole (zoll)</li>
              <li>- milje (mile) u stope (feet)</li>
              <li>- milje (mile) u jarde (yard)</li>
            </ul>
          </div>
        </div> */}
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
        <p>
          Druga metoda utvrđivanja <b>procenta</b> je da se broj od kog želimo
          da dobijemo određeni <b>procenat</b> množi sa brojem traženog procenta
          podeljenog sa 100. Na primer 10% je 0,1 (10 / 100 = 0,1).
        </p>
      </section>
    </div>
  );
}

export default KmjDuzinaText;
