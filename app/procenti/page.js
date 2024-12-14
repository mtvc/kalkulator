import Procenti from "../_components/kalkulatori/Procenti";
import Sidebar from "../_components/Sidebar";
import ProcentiText from "../_components/textovi/ProcentiText";
export const runtime = "edge";

export const metadata = {
  title: {
    default: "Kalkulator procenta online",
  },
  description: "Kalkulator za jednostavno izračunavanje procenata (postotka)",
};

function page() {
  return (
    <div className="py-14">
      <h1 className="px-5 text-3xl font-bold text-gray-700 mb-4 text-center">
        Kalkulator procenta (postotka)
      </h1>
      <Procenti />
      <div className="md:flex-row md:flex">
        <ProcentiText />
        <Sidebar />
      </div>
    </div>
  );
}

export default page;
