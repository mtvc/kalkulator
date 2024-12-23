import Frilenseri from "../_components/kalkulatori/Frilenseri";
import Sidebar from "../_components/Sidebar";
import FrilenseriText from "../_components/textovi/FrilenseriText";

export const metadata = {
  title: "Kalkulator poreza za frilensere",
  description:
    "Ovaj kalkulator je namenjen onima koji ostvaruju prihode kao slobodni umetnici, frilenseri, instruktori stranih jezika...",
};

function page() {
  return (
    <div className="py-12">
      <h1 className="px-5 text-3xl font-bold text-gray-700 mb-4 text-center">
        Kalkulator poreza za frilensere (2024.)
      </h1>
      <Frilenseri />
      <div className="md:flex-row md:flex">
        <FrilenseriText />
        <Sidebar />
      </div>
    </div>
  );
}

export default page;
