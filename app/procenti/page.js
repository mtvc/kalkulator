import Procenti from "../_components/kalkulatori/Procenti";
import Sidebar from "../_components/Sidebar";
import ProcentiText from "../_components/textovi/ProcentiText";

export const metadata = {
  title: "Procentni kalkulator",
  description:
    "Procentni kalkulator za brzo računanje postotaka. Unesite iznos i postotak, a kalkulator će izračunati postotak tog iznosa.",
};

function page() {
  return (
    <div className="py-14">
      <h1 className="px-5 text-3xl font-bold text-gray-700 mb-4 text-center">
        Procentni kalkulator
      </h1>
      <Procenti />
      <div className="flex-col-reverse md:flex-row flex">
        <ProcentiText />
        <Sidebar />
      </div>
    </div>
  );
}

export default page;
