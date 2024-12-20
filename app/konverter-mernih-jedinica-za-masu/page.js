import KmjMasa from "../_components/kalkulatori/KmjMasa";
import Sidebar from "../_components/Sidebar";
import KmjMasaText from "../_components/textovi/KmjMasaText";

export const metadata = {
  title: {
    default:
      "Konverter jedinica za masu - kilogram (kg), funta(oz), metrička tona (mt)...",
    description:
      "Kalkulator (konverter) za pretvaranje jedinica mase. Metrički i imperijalni sistem jedinica.",
  },
};

function page() {
  return (
    <div className="py-14">
      <h1 className="px-5 text-3xl font-bold text-gray-700 mb-4 text-center">
        Konverter mernih jedinica za masu (težinu)
      </h1>
      <KmjMasa />
      <div className="md:flex-row md:flex">
        <KmjMasaText />
        <Sidebar />
      </div>
    </div>
  );
}

export default page;
