import Kalorije from "../_components/kalkulatori/Kalorije";
import Sidebar from "../_components/Sidebar";
import KalorijeText from "../_components/textovi/KalorijeText";

export const metadata = {
  title: "Kalkulator kalorija",
  description:
    "Napravi jelovnik i izračunaj kalorije, masti, ugljenehidrate, proteine, vlakna, šećere",
};

function page() {
  return (
    <div className="py-14">
      <h1 className="px-5 text-3xl font-bold text-gray-700 mb-4 text-center">
        Kalkulator kalorija
      </h1>
      <Kalorije />
      <div className="md:flex-row md:flex">
        <KalorijeText />
        <Sidebar />
      </div>
    </div>
  );
}

export default page;
