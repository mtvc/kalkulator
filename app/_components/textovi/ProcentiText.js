function ProcentiText() {
  return (
    <div className="px-5 py-14 flex-col w-full md:w-9/12">
      <section>
        <p className="py-2">
          <b>Kalkulator procenta (postotka)</b> izračunava procenat, odnosno,
          broj stotih delova nekog broja.
        </p>
        <p className="py-2">
          <b>Kalkulator</b> izračunava <b>procenat</b> tako što zadati broj deli
          sa sto (100), odnosno određuje njegov stoti deo, a zatim, traženi broj
          procenata množi sa tim brojem.
        </p>
        <p className="py-2">
          Procenat (postotak) je jedna od osnovnih i naj češće korišćenih
          matematičkih operacija. Koristi se svakodnevno u različitim
          situacijam. Neke od primera iz svakodnevnog života ćemo predstaviti
          ovde.
        </p>
        <h2 className="text-2xl font-bold py-2">
          Nekoliko primera gde se primenjuje procentni račun:
        </h2>
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

        <h3 className="pt-6 text-xl font-bold">Akcija</h3>
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
      </section>
    </div>
  );
}

export default ProcentiText;
