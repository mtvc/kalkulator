import KmjDuzina from "../_components/kalkulatori/KmjDuzina";
import Sidebar from "../_components/Sidebar";
import KmjDuzinaText from "../_components/textovi/KmjDuzinaText";

function page() {
  return (
    <div className="py-14">
      <h1 className="px-5 text-3xl font-bold text-gray-700 mb-4 text-center">
        Kalkulator (konverter) mernih jedinica za dužinu
      </h1>
      <KmjDuzina />
      <div className="md:flex-row md:flex">
        <KmjDuzinaText />
        <Sidebar />
      </div>
    </div>
  );
}

export default page;
